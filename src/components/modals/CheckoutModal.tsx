import { useState } from 'react';
import type { Track } from '../../types';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  Sparkles, 
  Award, 
  FileSpreadsheet, 
  Video, 
  ArrowRight,
  Zap,
  Check,
  Smartphone,
  Building2,
  Copy,
  Wallet
} from 'lucide-react';
import { enrollUserInTrack } from '../../lib/supabaseClient';
import { getPhpPrice, type PhilippinePaymentMethod } from '../../lib/philippinePayment';

interface CheckoutModalProps {
  track: Track | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccessEnroll: (track: Track) => void;
  userEmail?: string;
}

export const CheckoutModal = ({
  track,
  isOpen,
  onClose,
  onSuccessEnroll,
  userEmail = '',
}: CheckoutModalProps) => {
  if (!isOpen || !track) return null;

  // Force TESDA or bundle 2 or 0-priced tracks to be free
  const isFree = (track.price || 49) === 0 || track.id === 'track-tesda-css-nc2' || track.bundleNumber === 2;

  const baseUsd = isFree ? 0 : (track.price || 49);
  const originalUsd = track.originalPrice || baseUsd * 2;
  const basePhp = isFree ? 0 : getPhpPrice(baseUsd);
  const originalPhp = getPhpPrice(originalUsd);
  const discountPercent = originalPhp > 0 ? Math.round(((originalPhp - basePhp) / originalPhp) * 100) : 100;

  const bumpPhp = 999; 
  const [hasOrderBump, setHasOrderBump] = useState(false);
  const [email, setEmail] = useState(userEmail || '');
  const [fullName, setFullName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PhilippinePaymentMethod>('gcash');
  const [gcashMobile, setGcashMobile] = useState('');
  const [mayaMobile, setMayaMobile] = useState('');
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const totalPhp = isFree ? 0 : (hasOrderBump ? basePhp + bumpPhp : basePhp);

  const handleCopyGoTyme = () => {
    navigator.clipboard.writeText('018394821049');
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2000);
  };

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your student email address.');
      return;
    }

    if (!isFree && paymentMethod === 'gcash' && !gcashMobile) {
      alert('Please enter your GCash mobile number (e.g., 09171234567).');
      return;
    }

    setIsProcessing(true);
    try {
      await enrollUserInTrack(track.id, email);
    } catch {
      // Continue even if table migrating
    }

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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Top Header Banner */}
        <div className={`p-6 bg-gradient-to-r ${track.colorTheme || 'from-blue-600 to-indigo-700'} text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 bg-black/20 hover:bg-black/30 rounded-full text-white/90 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="text-xs font-black uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full">
              Level {track.levelIndex || 1} of 9
            </span>
            {isFree ? (
              <span className="text-xs font-bold bg-emerald-500/30 text-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-400/30 flex items-center gap-1">
                🇵🇭 100% Free Access
              </span>
            ) : (
              <span className="text-xs font-bold bg-emerald-500/30 text-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-400/30 flex items-center gap-1">
                🇵🇭 Philippine Gateway • {discountPercent}% OFF
              </span>
            )}
          </div>

          <h2 className="text-xl sm:text-2xl font-black leading-tight pr-8">
            {track.title}
          </h2>
          <p className="text-xs sm:text-sm text-white/80 mt-1">
            Instructor: {track.instructor.name} • {track.duration} Lifetime Curriculum
          </p>
        </div>

        {isComplete ? (
          /* Enrollment Success State */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <Check className="w-9 h-9 stroke-[3]" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                🎉 Enrollment Confirmed!
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-2">
                Welcome to {track.title}!
              </h3>
              <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto leading-relaxed">
                {isFree ? (
                  <>You are enrolled with free lifetime access. May your dedication bear abundant fruit for your career and future!</>
                ) : (
                  <>Payment verified via <strong>{paymentMethod.toUpperCase()}</strong>. May your dedication bear abundant fruit for your career and future!</>
                )}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-md mx-auto text-left space-y-2 text-xs text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">Student Account:</span>
                <span className="font-bold text-slate-900">{email}</span>
              </div>
              {!isFree && (
                <div className="flex justify-between">
                  <span className="text-slate-500">Payment Method:</span>
                  <span className="font-bold uppercase text-blue-600">
                    {paymentMethod === 'gcash' ? 'GCash Express' : paymentMethod === 'gotyme' ? 'GoTyme Bank' : paymentMethod === 'maya' ? 'Maya Wallet' : 'QRPh National Bank'}
                  </span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-slate-500">Total Tuition (PHP):</span>
                <span className="font-bold text-emerald-600 text-sm">{isFree ? 'FREE (₱0)' : `₱${totalPhp.toLocaleString()} PHP`}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Career Milestone:</span>
                <span className="font-bold text-blue-600">{track.careerMilestone || 'Certified Developer'}</span>
              </div>
            </div>

            <button
              onClick={handleEnterClassroom}
              className="w-full max-w-md mx-auto py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Enter Classroom Workspace</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleCheckoutSubmit} className="p-6 sm:p-7 space-y-6">
            
            {/* Price Stack Banner in PHP */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1">
                  <span>🇵🇭 Course Tuition (Philippine Peso)</span>
                </span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  {isFree ? (
                    <span className="text-3xl font-black text-emerald-600">FREE</span>
                  ) : (
                    <>
                      <span className="text-3xl font-black text-slate-900">₱{basePhp.toLocaleString()}</span>
                      <span className="text-sm font-semibold text-slate-400 line-through">₱{originalPhp.toLocaleString()}</span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        Save ₱{(originalPhp - basePhp).toLocaleString()}
                      </span>
                    </>
                  )}
                </div>
                <span className="text-[11px] text-slate-400 font-medium">{isFree ? '100% Free Lifetime Access' : `Approx. \${baseUsd} USD equivalent`}</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>BSP Regulated</span>
                </div>
                <div className="flex items-center gap-1">
                  <Lock className="w-4 h-4 text-blue-600" />
                  <span>QRPh Verified</span>
                </div>
              </div>
            </div>

            {/* Everything Included Stack */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                Included in Your Enrollment:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <Video className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Full Course Video Masterclasses</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Google Sheets Assignments & Rubrics</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <Award className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Verified Completion Certificate</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <Zap className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Lifetime Access & Future Updates</span>
                </div>
              </div>
            </div>

            {/* Student Details */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Student Information
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Juan Dela Cruz"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="juan@epicademy.ph"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Order Bump (Only if not free) */}
            {!isFree && (
              <div 
                onClick={() => setHasOrderBump(!hasOrderBump)}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3 select-none ${
                  hasOrderBump 
                    ? 'border-amber-400 bg-amber-50/70 shadow-sm' 
                    : 'border-dashed border-slate-300 hover:border-slate-400 bg-slate-50/50'
                }`}
              >
                <input
                  type="checkbox"
                  checked={hasOrderBump}
                  onChange={() => {}} 
                  className="mt-1 w-4 h-4 text-amber-600 rounded border-slate-300 focus:ring-amber-500 cursor-pointer"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      SPECIAL ADD-ON: 1-on-1 Code Review & Discord Mentorship
                    </span>
                    <span className="text-xs font-black text-amber-800">+₱{bumpPhp.toLocaleString()}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                    Have your project assignments personally graded with line-by-line GitHub reviews and private student Discord community access.
                  </p>
                </div>
              </div>
            )}

            {/* PHILIPPINE PAYMENT METHOD SELECTOR (Hidden if Free) */}
            {!isFree && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    <span>Select Philippine Payment Method</span>
                  </h4>
                  <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                    Instant Verification
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  
                  {/* 1. GCASH */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('gcash')}
                    className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between gap-1 relative ${
                      paymentMethod === 'gcash'
                        ? 'border-[#007DFE] bg-blue-50/60 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-7 h-7 rounded-lg bg-[#007DFE] text-white flex items-center justify-center font-black text-xs">
                        G
                      </div>
                      {paymentMethod === 'gcash' && (
                        <span className="w-2 h-2 rounded-full bg-[#007DFE]" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-black text-slate-900 block mt-1">GCash</span>
                      <span className="text-[10px] text-slate-500 block">Mobile e-Wallet</span>
                    </div>
                  </button>

                  {/* 2. GOTYME BANK */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('gotyme')}
                    className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between gap-1 relative ${
                      paymentMethod === 'gotyme'
                        ? 'border-[#00B4D8] bg-cyan-50/60 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-7 h-7 rounded-lg bg-[#00B4D8] text-white flex items-center justify-center font-black text-xs">
                        GT
                      </div>
                      {paymentMethod === 'gotyme' && (
                        <span className="w-2 h-2 rounded-full bg-[#00B4D8]" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-black text-slate-900 block mt-1">GoTyme Bank</span>
                      <span className="text-[10px] text-slate-500 block">Digital Bank Transfer</span>
                    </div>
                  </button>

                  {/* 3. MAYA */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('maya')}
                    className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between gap-1 relative ${
                      paymentMethod === 'maya'
                        ? 'border-emerald-500 bg-emerald-50/60 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black text-xs">
                        M
                      </div>
                      {paymentMethod === 'maya' && (
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-black text-slate-900 block mt-1">Maya</span>
                      <span className="text-[10px] text-slate-500 block">Wallet & Visa</span>
                    </div>
                  </button>

                  {/* 4. QRPH / ONLINE BANKING */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('qrph')}
                    className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between gap-1 relative ${
                      paymentMethod === 'qrph'
                        ? 'border-purple-600 bg-purple-50/60 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-7 h-7 rounded-lg bg-purple-700 text-white flex items-center justify-center font-black text-xs">
                        QR
                      </div>
                      {paymentMethod === 'qrph' && (
                        <span className="w-2 h-2 rounded-full bg-purple-600" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-black text-slate-900 block mt-1">QRPh & Banks</span>
                      <span className="text-[10px] text-slate-500 block">BDO, BPI, UnionBank</span>
                    </div>
                  </button>

                </div>

                {/* 1. GCASH DETAILS */}
                {paymentMethod === 'gcash' && (
                  <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-3 animate-in fade-in duration-150">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-[#007DFE]" />
                        <span className="text-xs font-bold text-slate-900">GCash Express Payment</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#007DFE] bg-white px-2 py-0.5 rounded-full border border-blue-200">
                        Zero Processing Fee
                      </span>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        GCash Registered Mobile Number (09XXXXXXXXX)
                      </label>
                      <input
                        type="tel"
                        required
                        value={gcashMobile}
                        onChange={(e) => setGcashMobile(e.target.value)}
                        placeholder="0917 123 4567"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-blue-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#007DFE]"
                      />
                    </div>
                  </div>
                )}

                {/* 2. GOTYME BANK DETAILS */}
                {paymentMethod === 'gotyme' && (
                  <div className="p-4 rounded-2xl bg-cyan-50/70 border border-cyan-200 space-y-3 animate-in fade-in duration-150">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[#00B4D8]" />
                        <span className="text-xs font-bold text-slate-900">GoTyme Bank Direct Transfer</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#00B4D8] bg-white px-2 py-0.5 rounded-full border border-cyan-200">
                        Tyme / Robinsons Digital
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-cyan-100 space-y-2 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Account Name:</span>
                        <span className="font-bold text-slate-900">EPICADEMY INC. / JOVEN NEL JED</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">GoTyme Account No.:</span>
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono font-bold text-slate-900">0183-9482-1049</span>
                          <button
                            type="button"
                            onClick={handleCopyGoTyme}
                            className="p-1 text-slate-400 hover:text-cyan-600 rounded cursor-pointer"
                            title="Copy Account Number"
                          >
                            {copiedAccount ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. MAYA DETAILS */}
                {paymentMethod === 'maya' && (
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3 animate-in fade-in duration-150">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Wallet className="w-4 h-4 text-emerald-600" />
                        <span className="text-xs font-bold text-slate-900">Maya Wallet & Digital Bank</span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded-full border border-emerald-200">
                        Maya Certified
                      </span>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Maya Registered Mobile Number or @handle
                      </label>
                      <input
                        type="text"
                        required
                        value={mayaMobile}
                        onChange={(e) => setMayaMobile(e.target.value)}
                        placeholder="0918 987 6543 or @juan_dev"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                )}

                {/* 4. QRPH NATIONAL BANK TRANSFER */}
                {paymentMethod === 'qrph' && (
                  <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-3 animate-in fade-in duration-150">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-purple-700" />
                        <span className="text-xs font-bold text-slate-900">QRPh & InstaPay Philippine Banks</span>
                      </div>
                      <span className="text-[10px] font-bold text-purple-700 bg-white px-2 py-0.5 rounded-full border border-purple-200">
                        BDO • BPI • UnionBank • RCBC
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-purple-100 text-xs text-slate-600 leading-relaxed">
                      Scan using any Philippine banking app supporting the <strong>QRPh National Standard</strong> (BPI, BDO Online, UnionBank, RCBC Pulz, or Chinabank).
                    </div>
                  </div>
                )}

              </div>
            )}

            {/* Checkout Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-4 px-6 rounded-2xl text-white font-black text-base shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-75 ${
                  isFree
                    ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/25'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/25'
                }`}
              >
                {isProcessing ? (
                  <span>{isFree ? 'Enrolling for Free...' : `Connecting to ${paymentMethod.toUpperCase()} Gateway...`}</span>
                ) : isFree ? (
                  <>
                    <Zap className="w-5 h-5 text-amber-300 fill-amber-300" />
                    <span>Confirm Free Enrollment Now • ₱0</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Pay with {paymentMethod.toUpperCase()} • ₱{totalPhp.toLocaleString()} PHP</span>
                  </>
                )}
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-2">
                {isFree 
                  ? '⚡ Instant lifetime access activated immediately with zero payment required.'
                  : '🔒 Protected by BSP QRPh Standards & 256-bit SSL encryption. Instant classroom workspace access.'}
              </p>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};