import { useState, useMemo } from 'react';
import type { 
  Track, 
  CommunityDeveloper, 
  CommunitySpace,
  DigitalProductItem,
  CoachingItem,
  ShopItem
} from '../../types';
import { 
  COMMUNITY_DEVELOPERS, 
  COMMUNITY_EVENTS,
  PASTORAL_DEVOTIONAL,
  COMMUNITY_SPACES,
  DIGITAL_PRODUCTS,
  COACHING_PACKAGES,
  SHOP_ITEMS,
  getAllTenantCourses
} from '../../data/communityDevelopersData';
import { getPhpPrice, formatPhp } from '../../lib/philippinePayment';
import { 
  Search, 
  CheckCircle2, 
  Users, 
  GraduationCap, 
  Calendar, 
  FileText, 
  MessageSquare, 
  ShoppingBag, 
  Plus, 
  ChevronDown, 
  ArrowRight,
  X,
  Check,
  Smartphone,
  Sparkles,
  Heart
} from 'lucide-react';

interface CommunityDevelopersSectionProps {
  onSelectDeveloper: (developer: CommunityDeveloper) => void;
  onEnrollTrack: (track: Track) => void;
  onViewSyllabus: (track: Track) => void;
  onOpenApplyTenant: () => void;
}

type TabType = 'communities' | 'courses' | 'events' | 'digital-products' | 'coaching' | 'shop';

export const CommunityDevelopersSection = ({
  onSelectDeveloper,
  onEnrollTrack,
  onViewSyllabus,
  onOpenApplyTenant,
}: CommunityDevelopersSectionProps) => {
  const [activeTab, setActiveTab] = useState<TabType>('communities');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPrice, setFilterPrice] = useState<'all' | 'free' | 'paid'>('all');
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  
  // Modals & User state
  const [selectedSpace, setSelectedSpace] = useState<CommunitySpace | null>(null);
  const [joinedSpaces, setJoinedSpaces] = useState<Record<string, boolean>>({
    'comm-epicademy': true,
  });
  const [rsvpEvents, setRsvpEvents] = useState<Record<string, boolean>>({});
  const [selectedDigitalProduct, setSelectedDigitalProduct] = useState<DigitalProductItem | null>(null);
  const [selectedCoaching, setSelectedCoaching] = useState<CoachingItem | null>(null);
  const [selectedShopItem, setSelectedShopItem] = useState<ShopItem | null>(null);
  const [purchasedItems, setPurchasedItems] = useState<Record<string, boolean>>({});

  const allCourses = useMemo(() => getAllTenantCourses(), []);

  // Filtered lists based on search & price filter
  const filteredCommunities = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return COMMUNITY_SPACES.filter(s => {
      const matchesSearch = !q || 
        s.name.toLowerCase().includes(q) || 
        s.creatorName.toLowerCase().includes(q) || 
        s.description.toLowerCase().includes(q);
      const matchesPrice = 
        filterPrice === 'all' ? true :
        filterPrice === 'free' ? s.priceLabel.toUpperCase() === 'FREE' :
        s.priceLabel.toUpperCase() !== 'FREE';
      return matchesSearch && matchesPrice;
    });
  }, [searchQuery, filterPrice]);

  const filteredCourses = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return allCourses.filter(c => {
      const matchesSearch = !q ||
        c.title.toLowerCase().includes(q) ||
        c.instructor.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.skills.some(s => s.toLowerCase().includes(q));
      const isFree = !c.isPaid;
      const matchesPrice =
        filterPrice === 'all' ? true :
        filterPrice === 'free' ? isFree :
        !isFree;
      return matchesSearch && matchesPrice;
    });
  }, [allCourses, searchQuery, filterPrice]);

  const filteredEvents = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return COMMUNITY_EVENTS.filter(e => {
      const matchesSearch = !q ||
        e.title.toLowerCase().includes(q) ||
        e.speaker.name.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q);
      const matchesPrice =
        filterPrice === 'all' ? true :
        filterPrice === 'free' ? e.isFree :
        !e.isFree;
      return matchesSearch && matchesPrice;
    });
  }, [searchQuery, filterPrice]);

  const filteredDigitalProducts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return DIGITAL_PRODUCTS.filter(p => {
      const matchesSearch = !q ||
        p.title.toLowerCase().includes(q) ||
        p.creatorName.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      const isFree = p.priceLabel.toUpperCase() === 'FREE';
      const matchesPrice =
        filterPrice === 'all' ? true :
        filterPrice === 'free' ? isFree :
        !isFree;
      return matchesSearch && matchesPrice;
    });
  }, [searchQuery, filterPrice]);

  const filteredCoaching = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return COACHING_PACKAGES.filter(c => {
      const matchesSearch = !q ||
        c.title.toLowerCase().includes(q) ||
        c.mentorName.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q);
      return matchesSearch;
    });
  }, [searchQuery]);

  const filteredShop = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return SHOP_ITEMS.filter(item => {
      const matchesSearch = !q ||
        item.title.toLowerCase().includes(q) ||
        item.creatorName.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      return matchesSearch;
    });
  }, [searchQuery]);

  // Dynamic Header Metadata based on active tab
  const tabHeader = useMemo(() => {
    switch (activeTab) {
      case 'communities':
        return {
          title: 'Communities',
          subtitle: 'Find a creator-led learning space with membership access.',
          count: filteredCommunities.length,
          createButtonLabel: '+ Create community',
        };
      case 'courses':
        return {
          title: 'Courses',
          subtitle: 'Master real-world tech and engineering skills with top Filipino mentors.',
          count: filteredCourses.length,
          createButtonLabel: '+ Add course',
        };
      case 'events':
        return {
          title: 'Events',
          subtitle: 'Live workshops, Q&A sessions, and fellowships with community leaders.',
          count: filteredEvents.length,
          createButtonLabel: '+ Host event',
        };
      case 'digital-products':
        return {
          title: 'Digital Products',
          subtitle: 'Ready-to-use developer templates, codebases, and classroom sheets.',
          count: filteredDigitalProducts.length,
          createButtonLabel: '+ Submit product',
        };
      case 'coaching':
        return {
          title: 'Coaching',
          subtitle: '1-on-1 mentorship, code reviews, and career guidance sessions.',
          count: filteredCoaching.length,
          createButtonLabel: '+ Offer coaching',
        };
      case 'shop':
        return {
          title: 'Shop',
          subtitle: 'Official developer merchandise, learning kits, and community swag.',
          count: filteredShop.length,
          createButtonLabel: '+ List merchandise',
        };
    }
  }, [
    activeTab, 
    filteredCommunities.length, 
    filteredCourses.length, 
    filteredEvents.length, 
    filteredDigitalProducts.length, 
    filteredCoaching.length, 
    filteredShop.length
  ]);

  const handleToggleJoinSpace = (spaceId: string) => {
    setJoinedSpaces(prev => ({
      ...prev,
      [spaceId]: !prev[spaceId],
    }));
  };

  const handleToggleRsvp = (eventId: string) => {
    setRsvpEvents(prev => ({
      ...prev,
      [eventId]: !prev[eventId],
    }));
  };

  const handlePurchaseItem = (itemId: string) => {
    setPurchasedItems(prev => ({
      ...prev,
      [itemId]: true,
    }));
  };

  return (
    <section id="community-developers" className="py-10 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. TOP DISCOVER PILL TABS (Horizontal Subnav matching Upskwela) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button
            onClick={() => setActiveTab('communities')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'communities'
                ? 'bg-[#0284c7] text-white shadow-xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Communities</span>
          </button>

          <button
            onClick={() => setActiveTab('courses')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'courses'
                ? 'bg-[#0284c7] text-white shadow-xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Courses</span>
          </button>

          <button
            onClick={() => setActiveTab('events')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'events'
                ? 'bg-[#0284c7] text-white shadow-xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Events</span>
          </button>

          <button
            onClick={() => setActiveTab('digital-products')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'digital-products'
                ? 'bg-[#0284c7] text-white shadow-xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Digital Products</span>
          </button>

          <button
            onClick={() => setActiveTab('coaching')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'coaching'
                ? 'bg-[#0284c7] text-white shadow-xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Coaching</span>
          </button>

          <button
            onClick={() => setActiveTab('shop')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'shop'
                ? 'bg-[#0284c7] text-white shadow-xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Shop</span>
          </button>
        </div>

        {/* 2. SEARCH BAR & CTRL+K BADGE */}
        <div className="relative max-w-xl mb-8">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Epicademy"
            className="w-full pl-10 pr-20 py-2.5 rounded-full bg-slate-50/90 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all placeholder:text-slate-400"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <kbd className="text-[11px] font-medium text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-2xs">
              Ctrl K
            </kbd>
          </div>
        </div>

        {/* 3. SECTION HEADER ROW (Title in English + Controls on right) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              {tabHeader.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {tabHeader.subtitle}
            </p>
          </div>

          {/* Right Controls: Count, Filter Dropdown, Create Button */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <span className="text-xs text-slate-500 font-medium">
              {tabHeader.count} found
            </span>

            {/* Filter Dropdown */}
            <div className="relative">
              <button
                onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
              >
                <span>
                  {filterPrice === 'all' ? 'All' : filterPrice === 'free' ? 'Free Only' : 'Paid Only'}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {filterDropdownOpen && (
                <div className="absolute right-0 top-full mt-1 w-32 bg-white rounded-xl shadow-lg border border-slate-100 py-1 z-20 animate-in fade-in zoom-in-95 duration-100">
                  <button
                    onClick={() => { setFilterPrice('all'); setFilterDropdownOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-medium cursor-pointer ${filterPrice === 'all' ? 'text-sky-600 bg-sky-50 font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => { setFilterPrice('free'); setFilterDropdownOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-medium cursor-pointer ${filterPrice === 'free' ? 'text-sky-600 bg-sky-50 font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
                  >
                    Free Only
                  </button>
                  <button
                    onClick={() => { setFilterPrice('paid'); setFilterDropdownOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-medium cursor-pointer ${filterPrice === 'paid' ? 'text-sky-600 bg-sky-50 font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
                  >
                    Paid Only
                  </button>
                </div>
              )}
            </div>

            {/* + Create Button */}
            <button
              onClick={onOpenApplyTenant}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0284c7] hover:bg-sky-600 text-white text-xs font-bold shadow-xs hover:shadow transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{tabHeader.createButtonLabel}</span>
            </button>
          </div>
        </div>

        {/* 4. MAIN MINIMALIST 3-COLUMN CARD GRID */}

        {/* ========================================================================= */}
        {/* VIEW 1: COMMUNITIES (Matching Exact Screenshot media_1789080298369) */}
        {/* ========================================================================= */}
        {activeTab === 'communities' && (
          <div>
            {filteredCommunities.length === 0 ? (
              <div className="py-16 text-center border border-dashed border-slate-200 rounded-2xl">
                <Users className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <p className="text-sm font-bold text-slate-700">No communities found</p>
                <p className="text-xs text-slate-400 mt-1">Try clearing your search query or filter.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCommunities.map((space) => {
                  const isJoined = !!joinedSpaces[space.id];
                  return (
                    <div
                      key={space.id}
                      className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                    >
                      <div>
                        {/* 16:9 Banner with Badge */}
                        <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                          {space.badge && (
                            <div className="absolute top-3 left-3 z-10 bg-amber-400 text-slate-950 font-black text-[10px] px-2.5 py-0.5 rounded-full shadow-sm">
                              {space.badge}
                            </div>
                          )}
                          <img
                            src={space.bannerImage}
                            alt={space.name}
                            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                          />
                        </div>

                        {/* Card Content */}
                        <div className="p-5">
                          {/* Uppercase Category Label */}
                          <p className="text-[10px] font-extrabold tracking-wider text-sky-600 uppercase mb-1">
                            COMMUNITY
                          </p>

                          {/* Title with Verified Checkmark */}
                          <div className="flex items-center gap-1.5 mb-2">
                            <h3 
                              onClick={() => setSelectedSpace(space)}
                              className="font-bold text-slate-900 text-base leading-snug group-hover:text-sky-600 transition-colors cursor-pointer"
                            >
                              {space.name}
                            </h3>
                            {space.isVerified && (
                              <CheckCircle2 className="w-4 h-4 text-sky-500 fill-sky-50 shrink-0" />
                            )}
                          </div>

                          {/* 2-line Description */}
                          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
                            {space.description}
                          </p>

                          {/* Member count pill */}
                          <div className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium">
                            {space.membersCount.toLocaleString()} members
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Price & Action */}
                      <div className="p-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-sm font-black text-slate-900 tracking-tight">
                          {space.priceLabel}
                        </span>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedSpace(space)}
                            className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                          >
                            Details
                          </button>
                          <button
                            onClick={() => handleToggleJoinSpace(space.id)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              isJoined
                                ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                : 'bg-[#0284c7] hover:bg-sky-600 text-white shadow-2xs'
                            }`}
                          >
                            {isJoined ? 'Joined' : 'Join'}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: COURSES */}
        {/* ========================================================================= */}
        {activeTab === 'courses' && (
          <div>
            {filteredCourses.length === 0 ? (
              <div className="py-16 text-center border border-dashed border-slate-200 rounded-2xl">
                <GraduationCap className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <p className="text-sm font-bold text-slate-700">No courses found</p>
                <p className="text-xs text-slate-400 mt-1">Try searching another topic or filter.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => {
                  const phpPrice = course.isPaid ? formatPhp(getPhpPrice(course.price || 49)) : 'FREE';
                  return (
                    <div
                      key={course.id}
                      className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Course Image */}
                        <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                          {course.badge && (
                            <div className="absolute top-3 left-3 z-10 bg-amber-400 text-slate-950 font-black text-[10px] px-2.5 py-0.5 rounded-full shadow-sm">
                              {course.badge}
                            </div>
                          )}
                          <img
                            src={course.instructor.avatar || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80'}
                            alt={course.title}
                            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                          />
                        </div>

                        {/* Card Content */}
                        <div className="p-5">
                          <p className="text-[10px] font-extrabold tracking-wider text-sky-600 uppercase mb-1">
                            COURSE • {course.categoryLabel || course.category}
                          </p>

                          <div className="flex items-center gap-1.5 mb-2">
                            <h3 
                              onClick={() => onViewSyllabus(course)}
                              className="font-bold text-slate-900 text-base leading-snug group-hover:text-sky-600 transition-colors cursor-pointer line-clamp-1"
                            >
                              {course.title}
                            </h3>
                            <CheckCircle2 className="w-4 h-4 text-sky-500 fill-sky-50 shrink-0" />
                          </div>

                          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
                            {course.description}
                          </p>

                          <div className="flex items-center gap-2">
                            <div className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium">
                              {course.activeLearners.toLocaleString()} learners
                            </div>
                            <span className="text-[11px] text-slate-400">•</span>
                            <span className="text-xs text-slate-500 font-medium">
                              {course.duration}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Price & Action */}
                      <div className="p-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-sm font-black text-slate-900 tracking-tight">
                          {phpPrice}
                        </span>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onViewSyllabus(course)}
                            className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                          >
                            Syllabus
                          </button>
                          <button
                            onClick={() => onEnrollTrack(course)}
                            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#0284c7] hover:bg-sky-600 text-white transition-all cursor-pointer shadow-2xs"
                          >
                            Enroll
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: EVENTS */}
        {/* ========================================================================= */}
        {activeTab === 'events' && (
          <div>
            {filteredEvents.length === 0 ? (
              <div className="py-16 text-center border border-dashed border-slate-200 rounded-2xl">
                <Calendar className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <p className="text-sm font-bold text-slate-700">No events found</p>
                <p className="text-xs text-slate-400 mt-1">Check back soon for upcoming live fellowships.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((evt) => {
                  const isRsvped = !!rsvpEvents[evt.id];
                  return (
                    <div
                      key={evt.id}
                      className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Event Speaker Banner */}
                        <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                          {evt.badge && (
                            <div className="absolute top-3 left-3 z-10 bg-amber-400 text-slate-950 font-black text-[10px] px-2.5 py-0.5 rounded-full shadow-sm">
                              {evt.badge}
                            </div>
                          )}
                          <img
                            src={evt.speaker.avatar || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80'}
                            alt={evt.speaker.name}
                            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                          />
                        </div>

                        {/* Card Content */}
                        <div className="p-5">
                          <p className="text-[10px] font-extrabold tracking-wider text-sky-600 uppercase mb-1">
                            EVENT • {evt.date} • {evt.time}
                          </p>

                          <div className="flex items-center gap-1.5 mb-2">
                            <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-sky-600 transition-colors line-clamp-1">
                              {evt.title}
                            </h3>
                            <CheckCircle2 className="w-4 h-4 text-sky-500 fill-sky-50 shrink-0" />
                          </div>

                          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
                            {evt.description}
                          </p>

                          <div className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium">
                            {evt.attendeesCount + (isRsvped ? 1 : 0)} attending
                          </div>
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="p-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-sm font-black text-slate-900 tracking-tight">
                          {evt.isFree ? 'FREE' : 'PAID'}
                        </span>

                        <button
                          onClick={() => handleToggleRsvp(evt.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            isRsvped
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-[#0284c7] hover:bg-sky-600 text-white shadow-2xs'
                          }`}
                        >
                          {isRsvped ? 'Registered ✔' : 'Register Free'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: DIGITAL PRODUCTS */}
        {/* ========================================================================= */}
        {activeTab === 'digital-products' && (
          <div>
            {filteredDigitalProducts.length === 0 ? (
              <div className="py-16 text-center border border-dashed border-slate-200 rounded-2xl">
                <FileText className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <p className="text-sm font-bold text-slate-700">No products found</p>
                <p className="text-xs text-slate-400 mt-1">Check back soon for more developer boilerplates.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDigitalProducts.map((prod) => {
                  const isPurchased = !!purchasedItems[prod.id];
                  return (
                    <div
                      key={prod.id}
                      className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                          <img
                            src={prod.bannerImage}
                            alt={prod.title}
                            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                          />
                        </div>

                        <div className="p-5">
                          <p className="text-[10px] font-extrabold tracking-wider text-sky-600 uppercase mb-1">
                            DIGITAL PRODUCT • {prod.fileType}
                          </p>

                          <div className="flex items-center gap-1.5 mb-2">
                            <h3 
                              onClick={() => setSelectedDigitalProduct(prod)}
                              className="font-bold text-slate-900 text-base leading-snug group-hover:text-sky-600 transition-colors cursor-pointer line-clamp-1"
                            >
                              {prod.title}
                            </h3>
                            <CheckCircle2 className="w-4 h-4 text-sky-500 fill-sky-50 shrink-0" />
                          </div>

                          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
                            {prod.description}
                          </p>

                          <div className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium">
                            {prod.downloadsCount.toLocaleString()} downloads
                          </div>
                        </div>
                      </div>

                      <div className="p-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-sm font-black text-slate-900 tracking-tight">
                          {prod.priceLabel}
                        </span>

                        <button
                          onClick={() => {
                            setSelectedDigitalProduct(prod);
                            if (prod.priceLabel.toUpperCase() === 'FREE') {
                              handlePurchaseItem(prod.id);
                            }
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            isPurchased
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-[#0284c7] hover:bg-sky-600 text-white shadow-2xs'
                          }`}
                        >
                          {isPurchased ? 'Downloaded ✔' : prod.priceLabel.toUpperCase() === 'FREE' ? 'Get Free' : 'Buy Now'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 5: COACHING */}
        {/* ========================================================================= */}
        {activeTab === 'coaching' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCoaching.map((coach) => (
                <div
                  key={coach.id}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden flex items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950">
                      <img
                        src={coach.avatar}
                        alt={coach.mentorName}
                        className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md ring-4 ring-sky-500/20"
                      />
                    </div>

                    <div className="p-5">
                      <p className="text-[10px] font-extrabold tracking-wider text-sky-600 uppercase mb-1">
                        1-ON-1 COACHING • {coach.duration}
                      </p>

                      <div className="flex items-center gap-1.5 mb-1">
                        <h3 
                          onClick={() => setSelectedCoaching(coach)}
                          className="font-bold text-slate-900 text-base leading-snug group-hover:text-sky-600 transition-colors cursor-pointer"
                        >
                          {coach.mentorName}
                        </h3>
                        <CheckCircle2 className="w-4 h-4 text-sky-500 fill-sky-50 shrink-0" />
                      </div>

                      <p className="text-[11px] font-bold text-blue-700 mb-2">{coach.mentorRole}</p>

                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
                        {coach.description}
                      </p>

                      <div className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium">
                        Live Google Meet &amp; Code Review
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-black text-slate-900 tracking-tight">
                      {coach.priceLabel}
                    </span>

                    <button
                      onClick={() => setSelectedCoaching(coach)}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#0284c7] hover:bg-sky-600 text-white transition-all cursor-pointer shadow-2xs"
                    >
                      Book Session
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 6: SHOP */}
        {/* ========================================================================= */}
        {activeTab === 'shop' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredShop.map((item) => {
                const isPurchased = !!purchasedItems[item.id];
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                        <img
                          src={item.bannerImage}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                        />
                      </div>

                      <div className="p-5">
                        <p className="text-[10px] font-extrabold tracking-wider text-sky-600 uppercase mb-1">
                          OFFICIAL MERCH • {item.creatorName}
                        </p>

                        <div className="flex items-center gap-1.5 mb-2">
                          <h3 
                            onClick={() => setSelectedShopItem(item)}
                            className="font-bold text-slate-900 text-base leading-snug group-hover:text-sky-600 transition-colors cursor-pointer line-clamp-1"
                          >
                            {item.title}
                          </h3>
                          <CheckCircle2 className="w-4 h-4 text-sky-500 fill-sky-50 shrink-0" />
                        </div>

                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
                          {item.description}
                        </p>

                        <div className="inline-block px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-medium">
                          In Stock • Philippine Shipping
                        </div>
                      </div>
                    </div>

                    <div className="p-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-sm font-black text-slate-900 tracking-tight">
                        {item.priceLabel}
                      </span>

                      <button
                        onClick={() => setSelectedShopItem(item)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          isPurchased
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-[#0284c7] hover:bg-sky-600 text-white shadow-2xs'
                        }`}
                      >
                        {isPurchased ? 'Ordered ✔' : 'Buy Now'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 5. PASTORAL BENEDICTION & BAYANIHAN CALLOUT */}
        <div className="mt-14 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <img
              src={PASTORAL_DEVOTIONAL.avatar}
              alt={PASTORAL_DEVOTIONAL.pastorName}
              className="w-11 h-11 rounded-xl object-cover border border-slate-200 shrink-0"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold text-slate-900">{PASTORAL_DEVOTIONAL.pastorName}</span>
                <span className="text-[10px] bg-sky-100 text-sky-800 font-bold px-2 py-0.5 rounded-md">Pastor-Mentor</span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5 line-clamp-1 italic">
                "{PASTORAL_DEVOTIONAL.bayanihanMotto}"
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-auto">
            <button
              onClick={() => {
                const pastorDev = COMMUNITY_DEVELOPERS.find(d => d.id === 'dev-pastor-jed');
                if (pastorDev) onSelectDeveloper(pastorDev);
              }}
              className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Pastor's Profile
            </button>
            <button
              onClick={onOpenApplyTenant}
              className="px-3.5 py-1.5 rounded-lg bg-[#0284c7] hover:bg-sky-600 text-white text-xs font-bold transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apply as Creator</span>
            </button>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* COMMUNITY DETAIL MODAL */}
      {/* ========================================================================= */}
      {selectedSpace && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
            {/* Modal Banner */}
            <div className="relative aspect-[16/9] w-full bg-slate-900">
              <img
                src={selectedSpace.bannerImage}
                alt={selectedSpace.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedSpace(null)}
                className="absolute top-3 right-3 p-1.5 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              {selectedSpace.badge && (
                <div className="absolute top-3 left-3 bg-amber-400 text-slate-950 font-black text-[10px] px-2.5 py-0.5 rounded-full">
                  {selectedSpace.badge}
                </div>
              )}
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <p className="text-[10px] font-extrabold tracking-wider text-sky-600 uppercase mb-1">
                COMMUNITY SPACE
              </p>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-black text-slate-900">{selectedSpace.name}</h3>
                <CheckCircle2 className="w-5 h-5 text-sky-500 fill-sky-50 shrink-0" />
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {selectedSpace.description}
              </p>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">Space Founder / Creator</p>
                  <p className="text-xs font-bold text-slate-900">{selectedSpace.creatorName}</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-slate-500 font-medium">Membership</p>
                  <p className="text-xs font-black text-sky-600">{selectedSpace.priceLabel}</p>
                </div>
              </div>

              <div className="space-y-2 mb-6 text-xs text-slate-600">
                <p className="font-bold text-slate-800 text-xs">Community Perks &amp; Inclusions:</p>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Exclusive developer discussions and project feedback</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Access to weekly live meetups and workshops</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Philippine payment via GCash and GoTyme Bank</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    handleToggleJoinSpace(selectedSpace.id);
                    setSelectedSpace(null);
                  }}
                  className="flex-1 py-3 rounded-xl bg-[#0284c7] hover:bg-sky-600 text-white font-bold text-xs shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>
                    {joinedSpaces[selectedSpace.id] ? 'Leave Space' : `Join Space (${selectedSpace.priceLabel})`}
                  </span>
                </button>
                <button
                  onClick={() => setSelectedSpace(null)}
                  className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* DIGITAL PRODUCT DETAIL MODAL */}
      {/* ========================================================================= */}
      {selectedDigitalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
            <div className="relative aspect-[16/9] w-full bg-slate-900">
              <img
                src={selectedDigitalProduct.bannerImage}
                alt={selectedDigitalProduct.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedDigitalProduct(null)}
                className="absolute top-3 right-3 p-1.5 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-[10px] font-extrabold tracking-wider text-sky-600 uppercase mb-1">
                {selectedDigitalProduct.fileType}
              </p>
              <h3 className="text-lg font-black text-slate-900 leading-snug mb-2">
                {selectedDigitalProduct.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {selectedDigitalProduct.description}
              </p>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">Creator</p>
                  <p className="text-xs font-bold text-slate-900">{selectedDigitalProduct.creatorName}</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-slate-500 font-medium">Price</p>
                  <p className="text-xs font-black text-sky-600">{selectedDigitalProduct.priceLabel}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    handlePurchaseItem(selectedDigitalProduct.id);
                    setSelectedDigitalProduct(null);
                  }}
                  className="flex-1 py-3 rounded-xl bg-[#0284c7] hover:bg-sky-600 text-white font-bold text-xs shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Instant Checkout with GCash / GoTyme</span>
                </button>
                <button
                  onClick={() => setSelectedDigitalProduct(null)}
                  className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* COACHING DETAIL MODAL */}
      {/* ========================================================================= */}
      {selectedCoaching && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
            <div className="p-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white relative">
              <button
                onClick={() => setSelectedCoaching(null)}
                className="absolute top-4 right-4 p-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-4">
                <img
                  src={selectedCoaching.avatar}
                  alt={selectedCoaching.mentorName}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-white/80 shadow-md"
                />
                <div>
                  <h3 className="text-lg font-black">{selectedCoaching.mentorName}</h3>
                  <p className="text-xs text-sky-300 font-medium">{selectedCoaching.mentorRole}</p>
                  <p className="text-[11px] text-slate-400 mt-1">{selectedCoaching.duration} Session</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h4 className="text-sm font-bold text-slate-900 mb-2">{selectedCoaching.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                {selectedCoaching.description}
              </p>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">Session Fee</p>
                  <p className="text-base font-black text-slate-900">{selectedCoaching.priceLabel}</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-slate-500 font-medium">Platform</p>
                  <p className="text-xs font-bold text-sky-600">Google Meet + Live Notes</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    handlePurchaseItem(selectedCoaching.id);
                    setSelectedCoaching(null);
                  }}
                  className="flex-1 py-3 rounded-xl bg-[#0284c7] hover:bg-sky-600 text-white font-bold text-xs shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Book &amp; Pay with GoTyme / GCash</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setSelectedCoaching(null)}
                  className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SHOP ITEM DETAIL MODAL */}
      {/* ========================================================================= */}
      {selectedShopItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
            <div className="relative aspect-[16/9] w-full bg-slate-900">
              <img
                src={selectedShopItem.bannerImage}
                alt={selectedShopItem.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedShopItem(null)}
                className="absolute top-3 right-3 p-1.5 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-[10px] font-extrabold tracking-wider text-sky-600 uppercase mb-1">
                OFFICIAL MERCHANDISE
              </p>
              <h3 className="text-lg font-black text-slate-900 leading-snug mb-2">
                {selectedShopItem.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {selectedShopItem.description}
              </p>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">Price</p>
                  <p className="text-base font-black text-slate-900">{selectedShopItem.priceLabel}</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-slate-500 font-medium">Shipping</p>
                  <p className="text-xs font-bold text-emerald-600">Nationwide PH Courier</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    handlePurchaseItem(selectedShopItem.id);
                    setSelectedShopItem(null);
                  }}
                  className="flex-1 py-3 rounded-xl bg-[#0284c7] hover:bg-sky-600 text-white font-bold text-xs shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Order Now via GCash / GoTyme</span>
                </button>
                <button
                  onClick={() => setSelectedShopItem(null)}
                  className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
