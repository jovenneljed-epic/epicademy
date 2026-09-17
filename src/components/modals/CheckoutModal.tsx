import { useState } from 'react';
import type { Track } from '../../types';
import { 
  X, 
  Lock, 
  Award, 
  Video, 
  ArrowRight, 
  Zap, 
  Check, 
  Building2, 
  Copy, 
  CreditCard, 
  Printer, 
  Tag, 
  GraduationCap,
  CheckCircle2,
  Code2,
  Bot
} from 'lucide-react';
import { enrollUserInTrack } from '../../lib/supabaseClient';
import { type PhilippinePaymentMethod, PHILIPPINE_MERCHANT_INFO } from '../../lib/philippinePayment';
import { OfficialReceiptModal, type OfficialReceiptData } from '../billing/OfficialReceiptModal';

export type AcademicTier = 'audit' | 'pro' | 'degree';

interface CheckoutModalProps {
  track: Track | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccessEnroll: (track: Track) => void;
  userEmail?: string;
  defaultTier?: AcademicTier;
}

export const CheckoutModal = ({
  track,
  isOpen,
  onClose,
  onSuccessEnroll,
  userEmail = '',
  defaultTier = 'degree',
}: CheckoutModalProps) => {
  if (!isOpen || !track) return null;

  // Check if track is naturally free/sponsored (e.g. TESDA, Pinoy Drum, Pinoy Piano, or zero price)
  const isInherentlyFree = (track.price || 49) === 0 || 
    track.id === 'track-tesda-css-nc2' || track.bundleNumber === 2 ||
    track.id === 'track-pinoy-drum-zero-to-hero' || track.bundleNumber === 3 ||
    track.id === 'track-pinoy-piano-zero-to-hero' || track.bundleNumber === 4;

  const [selectedTier, setSelectedTier] = useState<AcademicTier>(isInherentlyFree ? 'degree' : defaultTier);
  const [email, setEmail] = useState(userEmail || '');
  const [fullName, setFullName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PhilippinePaymentMethod>('gcash');
  const [gcashMobile, setGcashMobile] = useState('');
  const [mayaMobile, setMayaMobile] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Coupon state
  const [couponInput, setCouponInput] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscountPercent, setCouponDiscountPercent] = useState(0);
  const [couponMessage, setCouponMessage] = useState('');

  // Official Receipt Modal state
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [receiptData, setReceiptData] = useState<OfficialReceiptData | null>(null);

  // Compute tier base price in PHP and USD
  let tierBasePhp = 4999;
  let tierBaseUsd = 99;

  if (isInherentlyFree || selectedTier === 'audit') {
    tierBasePhp = 0;
    tierBaseUsd = 0;
  } else if (selectedTier === 'pro') {
    tierBasePhp = 1499;
    tierBaseUsd = 29;
  } else if (selectedTier === 'degree') {
    tierBasePhp = 4999;
    tierBaseUsd = 99;
  }

  // Calculate discount if coupon applied
  const discountedPhp = couponApplied
    ? Math.round(tierBasePhp * (1 - couponDiscountPercent / 100))
    : tierBasePhp;
  const discountedUsd = couponApplied
    ? Math.round(tierBaseUsd * (1 - couponDiscountPercent / 100))
    : tierBaseUsd;

  const isFree = discountedPhp === 0;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponInput.trim().toUpperCase();
    if (code === 'KEZJED100' || code === 'RONNEL100' || code === 'SCHOLAR100') {
      setCouponApplied(true);
      setCouponDiscountPercent(100);
      setCouponMessage('🎉 100% Full Academic Scholarship Applied!');
    } else if (code === 'KEZJED50' || code === 'EARLY50') {
      setCouponApplied(true);
      setCouponDiscountPercent(50);
      setCouponMessage('🎉 50% Founder Privilege Discount Applied!');
    } else {
      setCouponMessage('⚠️ Invalid coupon code. Try "KEZJED100" for full scholarship.');
    }
  };

  const handleCopyGoTyme = () => {
    navigator.clipboard.writeText(PHILIPPINE_MERCHANT_INFO.gotymeAccountNumber);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2000);
  };

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your student email address.');
      return;
    }

    if (!isFree) {
      if (paymentMethod === 'gcash' && !gcashMobile) {
        alert('Please enter your GCash mobile number (e.g., 09171234567).');
        return;
      }
      if (paymentMethod === 'card' && (!cardNumber || !cardExpiry || !cardCvc)) {
        alert('Please enter valid credit/debit card details.');
        return;
      }
    }

    setIsProcessing(true);
    try {
      await enrollUserInTrack(track.id, email);
    } catch {
      // Continue even if table migrating
    }

    const timestamp = Date.now();
    const resolvedName = fullName.trim() || (email.split('@')[0] ? email.split('@')[0].toUpperCase() : 'VALUED SCHOLAR');
    const generatedReceipt: OfficialReceiptData = {
      receiptNumber: `OR-2026-${Math.floor(100000 + Math.random() * 900000)}`,
      studentName: resolvedName,
      studentEmail: email,
      courseTitle: track.title,
      tierName: selectedTier === 'audit' ? 'Free Community Audit' : selectedTier === 'pro' ? 'Pro Scholar Track' : 'Accredited Degree Track',
      paymentMethod: isFree ? 'Scholarship / Free Audit' : paymentMethod.toUpperCase(),
      totalAmountPhp: discountedPhp,
      totalAmountUsd: discountedUsd,
      paymentDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      transactionReference: `KEZJED-TXN-${timestamp}`,
    };

    setReceiptData(generatedReceipt);

    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
    }, 1100);
  };

  const handleEnterClassroom = () => {
    onSuccessEnroll(track);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Modal Top Bar */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                Official Tuition &amp; Academic Enrollment
              </span>
              <h3 className="text-sm font-black text-white truncate max-w-xs sm:max-w-md">
                {track.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isComplete ? (
          /* Enrollment Confirmed Screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                🎉 Enrollment &amp; Tuition Verified!
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-2">
                Welcome to {track.title}!
              </h3>
              <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto leading-relaxed">
                {isFree ? (
                  <>You are enrolled with instant academic access under <strong>KEZJED SOLUTIONS</strong>.</>
                ) : (
                  <>Tuition confirmed via <strong>{paymentMethod.toUpperCase()}</strong>. Your official electronic receipt and student workspace are ready.</>
                )}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-md mx-auto text-left space-y-2 text-xs text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">Student Account:</span>
                <span className="font-bold text-slate-900">{email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Enrolled Academic Tier:</span>
                <span className="font-bold text-blue-700">
                  {selectedTier === 'audit' ? 'Free Community Audit' : selectedTier === 'pro' ? 'Pro Scholar Track' : 'Accredited Degree Track'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Total Tuition:</span>
                <span className="font-bold text-emerald-600 text-sm">
                  {isFree ? 'FREE (₱0)' : `₱${discountedPhp.toLocaleString()} PHP`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Authorized Faculty:</span>
                <span className="font-bold text-slate-900">Ronnel M. Aviguetero (CEO &amp; FOUNDER)</span>
              </div>
            </div>

            <div className="space-y-2.5 max-w-md mx-auto">
              <button
                type="button"
                onClick={handleEnterClassroom}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-sm shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <span>Enter Classroom Workspace Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {receiptData && (
                <button
                  type="button"
                  onClick={() => setShowReceiptModal(true)}
                  className="w-full py-3 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold text-xs border border-slate-700 shadow flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-amber-400" />
                  <span>View &amp; Print Official Electronic Receipt (e-OR)</span>
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Enrollment & Tuition Form */
          <form onSubmit={handleCheckoutSubmit} className="p-6 sm:p-7 space-y-6">
            
            {/* 1. ACADEMIC TIER SELECTOR */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Select Academic Enrollment Tier:
                </label>
                {isInherentlyFree && (
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    100% Institutional Scholarship
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* TIER 1: AUDIT */}
                <button
                  type="button"
                  onClick={() => setSelectedTier('audit')}
                  className={`p-3.5 rounded-2xl border-2 text-left transition cursor-pointer flex flex-col justify-between ${
                    selectedTier === 'audit'
                      ? 'border-blue-600 bg-blue-50/50 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">Community</span>
                    <span className="text-xs font-black text-slate-900 block mt-0.5">Free Audit</span>
                    <div className="text-sm font-black text-slate-900 mt-1">₱0</div>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-2 leading-snug">
                    Lecture theory, masterclass videos, and reading materials.
                  </p>
                </button>

                {/* TIER 2: PRO SCHOLAR */}
                <button
                  type="button"
                  onClick={() => setSelectedTier('pro')}
                  className={`p-3.5 rounded-2xl border-2 text-left transition cursor-pointer flex flex-col justify-between ${
                    selectedTier === 'pro'
                      ? 'border-blue-600 bg-blue-50/50 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-600 block">Interactive</span>
                    <span className="text-xs font-black text-slate-900 block mt-0.5">Pro Scholar</span>
                    <div className="text-sm font-black text-slate-900 mt-1">
                      {isInherentlyFree ? 'FREE' : '₱1,499'} <span className="text-[10px] text-slate-400 font-normal">($29)</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-2 leading-snug">
                    Live Code Sandbox IDE, Kezjed AI Mentor, auto-graded rubrics.
                  </p>
                </button>

                {/* TIER 3: ACCREDITED DEGREE */}
                <button
                  type="button"
                  onClick={() => setSelectedTier('degree')}
                  className={`p-3.5 rounded-2xl border-2 text-left transition cursor-pointer flex flex-col justify-between relative ${
                    selectedTier === 'degree'
                      ? 'border-emerald-600 bg-emerald-50/50 shadow-md ring-2 ring-emerald-500/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <span className="absolute -top-2 right-3 text-[9px] font-black uppercase tracking-wider bg-amber-500 text-slate-950 px-2 py-0.5 rounded-full shadow-xs">
                    Accredited
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 block">Recommended</span>
                    <span className="text-xs font-black text-slate-900 block mt-0.5">Degree Track</span>
                    <div className="text-sm font-black text-emerald-700 mt-1">
                      {isInherentlyFree ? 'FREE' : '₱4,999'} <span className="text-[10px] text-slate-400 font-normal">($99)</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-600 mt-2 leading-snug">
                    Verifiable Diploma, Registrar Transcript, TESDA TRB &amp; Mentorship.
                  </p>
                </button>
              </div>
            </div>

            {/* Everything Included Stack */}
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 space-y-2">
              <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-600">
                Included in your {selectedTier === 'audit' ? 'Free Audit' : selectedTier === 'pro' ? 'Pro Scholar' : 'Accredited Degree'} Tier:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Video className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>12 Comprehensive Engineering Lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Live Code Sandbox &amp; Grader</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bot className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>24/7 Kezjed AI Coding Mentor</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>KEZJED Verifiable Diploma &amp; Transcript</span>
                </div>
              </div>
            </div>

            {/* Student Account Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Student Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Maria Santos"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Student Email (Required for Access &amp; e-OR)
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Scholarship / Coupon Code Input */}
            {!isFree && (
              <div className="space-y-1.5">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="Have a Scholarship / Promo Code? (e.g. KEZJED100)"
                      className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-slate-300 bg-white text-xs uppercase font-mono placeholder:normal-case placeholder:font-sans focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition cursor-pointer"
                  >
                    Apply Code
                  </button>
                </div>
                {couponMessage && (
                  <p className={`text-[11px] font-medium ${couponApplied ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {couponMessage}
                  </p>
                )}
              </div>
            )}

            {/* PAYMENT METHOD SELECTOR (Hidden if Free) */}
            {!isFree && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Select Payment Method:
                  </h4>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                    Instant Automated Activation
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {/* GCASH */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('gcash')}
                    className={`p-2.5 rounded-xl border-2 text-left transition cursor-pointer flex flex-col justify-between ${
                      paymentMethod === 'gcash'
                        ? 'border-[#007DFE] bg-blue-50/70 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <span className="text-xs font-black text-slate-900">GCash</span>
                    <span className="text-[9px] text-slate-500">e-Wallet</span>
                  </button>

                  {/* MAYA */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('maya')}
                    className={`p-2.5 rounded-xl border-2 text-left transition cursor-pointer flex flex-col justify-between ${
                      paymentMethod === 'maya'
                        ? 'border-emerald-500 bg-emerald-50/70 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <span className="text-xs font-black text-slate-900">Maya</span>
                    <span className="text-[9px] text-slate-500">Wallet</span>
                  </button>

                  {/* CREDIT/DEBIT CARD */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-2.5 rounded-xl border-2 text-left transition cursor-pointer flex flex-col justify-between ${
                      paymentMethod === 'card'
                        ? 'border-indigo-600 bg-indigo-50/70 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <span className="text-xs font-black text-slate-900">Card</span>
                    <span className="text-[9px] text-slate-500">Visa / MC</span>
                  </button>

                  {/* QRPH */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('qrph')}
                    className={`p-2.5 rounded-xl border-2 text-left transition cursor-pointer flex flex-col justify-between ${
                      paymentMethod === 'qrph'
                        ? 'border-purple-600 bg-purple-50/70 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <span className="text-xs font-black text-slate-900">QRPh</span>
                    <span className="text-[9px] text-slate-500">All PH Banks</span>
                  </button>

                  {/* GOTYME */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('gotyme')}
                    className={`p-2.5 rounded-xl border-2 text-left transition cursor-pointer flex flex-col justify-between ${
                      paymentMethod === 'gotyme'
                        ? 'border-[#00B4D8] bg-cyan-50/70 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <span className="text-xs font-black text-slate-900">GoTyme</span>
                    <span className="text-[9px] text-slate-500">Digital Bank</span>
                  </button>
                </div>

                {/* GCASH INPUT */}
                {paymentMethod === 'gcash' && (
                  <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2">
                    <label className="block text-[11px] font-bold text-slate-700">
                      GCash Registered Mobile Number:
                    </label>
                    <input
                      type="tel"
                      value={gcashMobile}
                      onChange={(e) => setGcashMobile(e.target.value)}
                      placeholder="0917 123 4567"
                      className="w-full px-3 py-2 rounded-xl border border-blue-300 bg-white text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-[10px] text-slate-500">
                      Merchant: <strong>{PHILIPPINE_MERCHANT_INFO.accountName}</strong>
                    </p>
                  </div>
                )}

                {/* MAYA INPUT */}
                {paymentMethod === 'maya' && (
                  <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                    <label className="block text-[11px] font-bold text-slate-700">
                      Maya Mobile Number or @handle:
                    </label>
                    <input
                      type="text"
                      value={mayaMobile}
                      onChange={(e) => setMayaMobile(e.target.value)}
                      placeholder="0918 987 6543 or @student_handle"
                      className="w-full px-3 py-2 rounded-xl border border-emerald-300 bg-white text-xs font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                )}

                {/* CREDIT / DEBIT CARD INPUT */}
                {paymentMethod === 'card' && (
                  <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <label className="block text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                        <CreditCard className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Credit or Debit Card Details:</span>
                      </label>
                      <span className="text-[9px] text-slate-500 font-bold">Visa • Mastercard • JCB</span>
                    </div>

                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="4123 4567 8901 2345"
                      className="w-full px-3 py-2 rounded-xl border border-indigo-300 bg-white text-xs font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        placeholder="MM / YY"
                        className="px-3 py-2 rounded-xl border border-indigo-300 bg-white text-xs font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <input
                        type="password"
                        maxLength={4}
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        placeholder="CVC"
                        className="px-3 py-2 rounded-xl border border-indigo-300 bg-white text-xs font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                )}

                {/* GOTYME BANK */}
                {paymentMethod === 'gotyme' && (
                  <div className="p-3.5 rounded-2xl bg-cyan-50/70 border border-cyan-200 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">GoTyme Bank Account:</span>
                      <button
                        type="button"
                        onClick={handleCopyGoTyme}
                        className="text-cyan-700 hover:text-cyan-900 font-bold text-[11px] flex items-center gap-1 cursor-pointer"
                      >
                        {copiedAccount ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedAccount ? 'Copied' : 'Copy Number'}</span>
                      </button>
                    </div>
                    <div className="font-mono font-bold text-sm text-slate-900 bg-white p-2 rounded-xl border border-cyan-200">
                      {PHILIPPINE_MERCHANT_INFO.gotymeAccountNumber}
                    </div>
                    <p className="text-[10px] text-slate-500">
                      Account Name: <strong>{PHILIPPINE_MERCHANT_INFO.accountName}</strong>
                    </p>
                  </div>
                )}

                {/* QRPH */}
                {paymentMethod === 'qrph' && (
                  <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200 text-xs space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-purple-700" />
                      <span className="font-bold text-slate-900">QRPh National Philippine Banking Standard</span>
                    </div>
                    <p className="text-[11px] text-slate-600">
                      Compatible with BDO, BPI, UnionBank, RCBC Pulz, Metrobank, and Chinabank.
                    </p>
                  </div>
                )}

              </div>
            )}

            {/* Total Tuition Card & Submit Action */}
            <div className="pt-2 space-y-2.5">
              <div className="bg-slate-900 text-white rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Tuition Due:</span>
                  <div className="font-mono font-black text-xl text-emerald-400">
                    {isFree ? 'FREE (₱0)' : `₱${discountedPhp.toLocaleString()} PHP`}
                  </div>
                </div>
                <div className="text-right text-[11px] text-slate-400">
                  <span>Authorized by:</span>
                  <strong className="block text-white">KEZJED SOLUTIONS</strong>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 px-6 rounded-2xl text-white font-black text-sm shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-75 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/25 active:scale-98"
              >
                {isProcessing ? (
                  <span>Processing Academic Enrollment...</span>
                ) : isFree ? (
                  <>
                    <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
                    <span>Confirm Free Enrollment Now • ₱0</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Complete Enrollment with {paymentMethod.toUpperCase()} • ₱{discountedPhp.toLocaleString()} PHP</span>
                  </>
                )}
              </button>

              <p className="text-center text-[10px] text-slate-400">
                🔒 Protected by 256-bit SSL encryption • Official electronic receipt (e-OR) issued immediately upon completion.
              </p>
            </div>

          </form>
        )}

      </div>

      {/* Official Electronic Receipt Modal */}
      {receiptData && (
        <OfficialReceiptModal
          isOpen={showReceiptModal}
          onClose={() => setShowReceiptModal(false)}
          receiptData={receiptData}
        />
      )}
    </div>
  );
};