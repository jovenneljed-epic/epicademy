import { useState } from 'react';
import { 
  X, 
  Printer, 
  ShieldCheck, 
  CheckCircle2, 
  Copy, 
  Check, 
  QrCode
} from 'lucide-react';

export interface OfficialReceiptData {
  receiptNumber: string;
  studentName: string;
  studentEmail: string;
  courseTitle: string;
  tierName: string;
  paymentMethod: string;
  totalAmountPhp: number;
  totalAmountUsd: number;
  paymentDate: string;
  transactionReference: string;
}

interface OfficialReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  receiptData: OfficialReceiptData;
}

export const OfficialReceiptModal = ({
  isOpen,
  onClose,
  receiptData,
}: OfficialReceiptModalProps) => {
  const [copiedRef, setCopiedRef] = useState(false);

  if (!isOpen) return null;

  const handleCopyRef = () => {
    navigator.clipboard.writeText(receiptData.transactionReference);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white text-slate-900 w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 flex flex-col font-sans">
        
        {/* Top Control Bar */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 text-white flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                Official Electronic Receipt (e-OR)
              </span>
              <h3 className="text-sm font-black text-white">
                KEZJED SOLUTIONS • Billing &amp; Enrollment Services
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" /> Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Official Receipt Body */}
        <div id="printable-receipt" className="p-6 sm:p-10 space-y-6 bg-white text-slate-900">
          
          {/* Institutional Header */}
          <div className="border-b-2 border-slate-900 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center font-black text-lg border border-amber-400/40">
                  K
                </div>
                <h1 className="text-xl font-black text-slate-900 tracking-tight">KEZJED SOLUTIONS</h1>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                Enterprise Cloud Architecture &amp; Accredited Engineering Academy
              </p>
              <p className="text-[11px] text-slate-500">
                Non-VAT Reg TIN: <strong className="text-slate-800">432-819-204-000</strong> • Cyber Park Tower, Cubao, Quezon City, NCR
              </p>
            </div>

            <div className="sm:text-right bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
              <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full">
                OFFICIAL RECEIPT
              </span>
              <div className="font-mono font-black text-base text-slate-900 mt-1">
                {receiptData.receiptNumber}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Date: <strong>{receiptData.paymentDate}</strong>
              </div>
            </div>
          </div>

          {/* Bill-To & Transaction Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                Billed To (Student / Scholar)
              </span>
              <div className="font-black text-slate-900 text-sm">
                {receiptData.studentName || 'Valued Scholar'}
              </div>
              <div className="text-slate-600 font-mono">
                {receiptData.studentEmail}
              </div>
              <div className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1 mt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Enrollment Status: Verified &amp; Active
              </div>
            </div>

            <div className="space-y-1 sm:text-right">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                Payment Channel &amp; Reference
              </span>
              <div className="font-bold text-slate-900 uppercase">
                {receiptData.paymentMethod}
              </div>
              <div className="font-mono text-[11px] text-slate-600 flex items-center sm:justify-end gap-1.5">
                <span>Ref: {receiptData.transactionReference}</span>
                <button
                  onClick={handleCopyRef}
                  className="text-blue-600 hover:text-blue-800 p-0.5 cursor-pointer"
                  title="Copy Reference"
                >
                  {copiedRef ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
              <div className="text-[10px] text-slate-500">
                Payment Gateway: BSP / QRPh Verified
              </div>
            </div>
          </div>

          {/* Itemized Table */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-3 w-12 text-center">#</th>
                  <th className="p-3">Course / Educational Service Description</th>
                  <th className="p-3 w-32">Academic Tier</th>
                  <th className="p-3 text-right w-28">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-3 text-center font-mono text-slate-400">01</td>
                  <td className="p-3">
                    <div className="font-bold text-slate-900">{receiptData.courseTitle}</div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      12 Comprehensive Lessons • Theory &amp; Hands-on Sandbox Labs • Automated Rubrics • Kezjed AI Coding Mentor
                    </p>
                  </td>
                  <td className="p-3">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase bg-blue-50 text-blue-800 border border-blue-200">
                      {receiptData.tierName}
                    </span>
                  </td>
                  <td className="p-3 text-right font-mono font-bold text-slate-900">
                    {receiptData.totalAmountPhp === 0 ? 'FREE (₱0)' : `₱${receiptData.totalAmountPhp.toLocaleString()} PHP`}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Financial Calculation Stack */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2">
            <div className="text-[11px] text-slate-500 max-w-sm space-y-1">
              <p>
                <strong>Official Tax Notice:</strong> Educational tuition &amp; technical training services are certified non-VAT registered under Philippine National Internal Revenue Code.
              </p>
              <p className="font-mono text-[10px] text-slate-400">
                Auth Code: KEZJED-SEC-{receiptData.receiptNumber}
              </p>
            </div>

            <div className="w-full sm:w-64 bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Tuition Subtotal:</span>
                <span className="font-mono font-medium">₱{receiptData.totalAmountPhp.toLocaleString()} PHP</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Value Added Tax (0%):</span>
                <span className="font-mono font-medium">₱0.00</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline">
                <span className="font-black text-slate-900 text-sm">Total Paid:</span>
                <span className="font-mono font-black text-base text-emerald-600">
                  {receiptData.totalAmountPhp === 0 ? '₱0.00' : `₱${receiptData.totalAmountPhp.toLocaleString()} PHP`}
                </span>
              </div>
              <div className="text-right text-[10px] text-slate-400 font-mono">
                {receiptData.totalAmountUsd > 0 && `(Approx. $${receiptData.totalAmountUsd} USD)`}
              </div>
            </div>
          </div>

          {/* Signatures & Seal */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-800">
                <QrCode className="w-8 h-8" />
              </div>
              <div className="text-[10px] text-slate-500">
                <span className="font-bold text-slate-800 block">Scan to Verify Transaction</span>
                Official verification hash: kezjed.com/verify/{receiptData.receiptNumber}
              </div>
            </div>

            <div className="text-center sm:text-right">
              <div className="font-serif italic text-base font-black text-blue-900 tracking-wide underline decoration-amber-500">
                Ronnel M. Aviguetero
              </div>
              <p className="font-black text-xs text-slate-900 mt-0.5">Ronnel M. Aviguetero</p>
              <p className="text-[10px] text-slate-500 font-medium">
                CEO and FOUNDER of KEZJED SOLUTIONS
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
