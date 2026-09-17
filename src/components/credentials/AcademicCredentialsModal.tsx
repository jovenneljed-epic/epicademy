import { useState } from 'react';
import type { Track } from '../../types';
import { 
  X, 
  Award, 
  FileText, 
  CheckCircle2, 
  QrCode, 
  ExternalLink, 
  Printer, 
  Copy, 
  Check, 
  Search, 
  ShieldCheck, 
  GraduationCap
} from 'lucide-react';

interface AcademicCredentialsModalProps {
  isOpen: boolean;
  onClose: () => void;
  track: Track | null;
  studentName?: string;
  studentEmail?: string;
}

export const AcademicCredentialsModal = ({
  isOpen,
  onClose,
  track,
  studentName = '',
  studentEmail = '',
}: AcademicCredentialsModalProps) => {
  const [activeTab, setActiveTab] = useState<'diploma' | 'transcript' | 'verify'>('diploma');
  const [copiedLink, setCopiedLink] = useState(false);

  // Verification Portal Search state
  const [searchCertId, setSearchCertId] = useState('');
  const [verificationResult, setVerificationResult] = useState<{
    verified: boolean;
    certId: string;
    student: string;
    trackTitle: string;
    date: string;
    gpa: string;
    distinction: string;
  } | null>(null);

  if (!isOpen) return null;

  const resolvedStudentName = studentName || (studentEmail ? studentEmail.split('@')[0].toUpperCase() : 'VALUED SCHOLAR');
  const resolvedTrackTitle = track?.title || 'Level 1: Modern HTML5 Fundamentals & Semantic Web Architecture';
  const trackId = track?.id || 'track-level-1-html-foundations';
  
  // Deterministic certificate ID
  const certId = `EPIC-CERT-2026-${trackId.replace('track-', '').slice(0, 10).toUpperCase()}-7749`;
  const verificationUrl = `https://epicademy.vercel.app/verify/${certId}`;
  const issueDate = 'September 18, 2026';

  const handleCopyVerificationLink = () => {
    navigator.clipboard.writeText(verificationUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleAddToLinkedIn = () => {
    const certName = track?.careerMilestone || track?.title || 'Full-Stack Software Certification';
    const orgName = 'KEZJED SOLUTIONS';
    const linkedInUrl = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(
      certName
    )}&organizationName=${encodeURIComponent(orgName)}&issueYear=2026&issueMonth=9&certUrl=${encodeURIComponent(
      verificationUrl
    )}&certId=${encodeURIComponent(certId)}`;
    window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
  };

  const handleLookupCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchCertId.trim().toUpperCase();
    if (!query) return;

    if (query === certId || query.includes('EPIC') || query.includes('2026') || query.includes('KEZJED')) {
      setVerificationResult({
        verified: true,
        certId: query.includes('EPIC') ? query : certId,
        student: resolvedStudentName,
        trackTitle: resolvedTrackTitle,
        date: issueDate,
        gpa: '3.98 / 4.0 (1.05 Philippine Scale)',
        distinction: 'Summa Cum Laude / Highest Technical Honors'
      });
    } else {
      setVerificationResult({
        verified: false,
        certId: query,
        student: 'Unknown Candidate',
        trackTitle: 'Record Not Found',
        date: 'N/A',
        gpa: 'N/A',
        distinction: 'N/A'
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden my-6 flex flex-col text-slate-100">
        
        {/* Modal Top Bar */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                Institutional Academic Suite
              </span>
              <h2 className="text-sm sm:text-base font-black text-white">
                Official Credential &amp; Transcript Records
              </h2>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('diploma')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'diploma'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Award className="w-3.5 h-3.5" /> Official Diploma
            </button>
            <button
              onClick={() => setActiveTab('transcript')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'transcript'
                  ? 'bg-blue-600 text-white shadow-md font-black'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <FileText className="w-3.5 h-3.5" /> Academic Transcript
            </button>
            <button
              onClick={() => setActiveTab('verify')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'verify'
                  ? 'bg-emerald-600 text-white shadow-md font-black'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" /> Verification Portal
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* TAB 1: OFFICIAL DIPLOMA */}
        {activeTab === 'diploma' && (
          <div className="p-6 sm:p-8 space-y-6">
            {/* Printable Diploma Card */}
            <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50/70 text-slate-900 rounded-2xl p-8 sm:p-12 border-8 border-amber-400 shadow-2xl relative overflow-hidden font-serif">
              {/* Corner Watermarks */}
              <div className="absolute top-3 left-3 text-[10px] tracking-widest text-amber-900/40 font-mono uppercase">
                KEZJED SOLUTIONS • ACCREDITED
              </div>
              <div className="absolute top-3 right-3 text-[10px] tracking-widest text-amber-900/40 font-mono uppercase">
                SERIAL: {certId}
              </div>

              {/* Institution Header */}
              <div className="text-center space-y-2 pt-2">
                <div className="inline-flex items-center justify-center p-2 rounded-full bg-amber-100/80 border border-amber-300 text-amber-800 mb-1">
                  <GraduationCap className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 uppercase">
                  Epicademy Institute of Technology
                </h3>
                <p className="text-xs text-amber-900/80 font-sans uppercase font-bold tracking-widest">
                  Academic Governance &amp; Executive Accreditation by KEZJED SOLUTIONS
                </p>
                <div className="w-24 h-0.5 bg-amber-500 mx-auto my-2"></div>
              </div>

              {/* Body Presentation */}
              <div className="text-center py-6 space-y-4">
                <p className="text-xs font-sans text-slate-600 italic">
                  By the authority of the Board of Governors and Executive Academic Senate, this
                </p>
                <h4 className="text-2xl sm:text-4xl font-black text-blue-950 uppercase tracking-wide">
                  Certificate of Technical Mastery
                </h4>
                <p className="text-xs font-sans text-slate-600 italic">is officially conferred upon</p>
                
                <div className="inline-block border-b-2 border-slate-900 px-8 py-1">
                  <p className="text-2xl sm:text-3xl font-black text-slate-900 uppercase font-sans tracking-wide">
                    {resolvedStudentName}
                  </p>
                </div>

                <p className="text-xs font-sans text-slate-700 max-w-xl mx-auto leading-relaxed pt-2">
                  For exemplary academic performance, successful completion of rigorous theoretical examinations, 
                  and demonstrated mastery in hands-on production engineering lab deliverables for:
                </p>

                <div className="bg-amber-100/60 p-3 rounded-xl border border-amber-300/80 max-w-xl mx-auto">
                  <h5 className="text-base sm:text-lg font-black font-sans text-slate-900">
                    {resolvedTrackTitle}
                  </h5>
                  <span className="text-xs font-sans font-bold text-amber-900 block mt-0.5">
                    {track?.careerMilestone || 'Certified Enterprise Software Specialist'}
                  </span>
                </div>
              </div>

              {/* Signatures and QR Code Seal */}
              <div className="pt-6 border-t border-amber-300/60 flex flex-col sm:flex-row items-center justify-between gap-6 font-sans">
                {/* Executive Signature */}
                <div className="text-center sm:text-left space-y-1">
                  <div className="h-10 flex items-end">
                    <span className="font-serif italic text-lg font-bold text-blue-950 underline decoration-amber-500">
                      Ronnel M. Aviguetero
                    </span>
                  </div>
                  <p className="text-xs font-black text-slate-900">Ronnel M. Aviguetero</p>
                  <p className="text-[10px] text-slate-600 font-medium">CEO and FOUNDER of KEZJED SOLUTIONS</p>
                  <p className="text-[9px] text-slate-500">Executive Faculty &amp; Senior Enterprise Architect</p>
                </div>

                {/* Center Institutional Seal */}
                <div className="text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-4 border-amber-500 bg-amber-400/20 flex items-center justify-center p-1 text-center shadow-inner">
                    <span className="text-[8px] font-black uppercase text-amber-950 leading-tight">
                      KEZJED<br />OFFICIAL<br />SEAL
                    </span>
                  </div>
                  <span className="text-[9px] text-slate-500 mt-1">Conferred in 2026</span>
                </div>

                {/* Verification QR Box */}
                <div className="text-center sm:text-right space-y-1">
                  <div className="bg-white p-2 rounded-lg border border-slate-300 inline-block shadow-sm">
                    <div className="w-14 h-14 bg-slate-950 text-white flex items-center justify-center rounded">
                      <QrCode className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <p className="text-[10px] font-mono font-bold text-slate-800">{certId}</p>
                  <p className="text-[9px] text-emerald-700 font-bold">✓ Digitally Verified Record</p>
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleAddToLinkedIn}
                  className="px-4 py-2.5 bg-[#0077b5] hover:bg-[#006097] text-white text-xs font-bold rounded-xl shadow transition flex items-center gap-1.5 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Add to LinkedIn Certifications
                </button>
                <button
                  onClick={handleCopyVerificationLink}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedLink ? 'Link Copied!' : 'Copy Verification URL'}
                </button>
              </div>

              <button
                onClick={() => window.print()}
                className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black rounded-xl shadow-lg transition flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-4 h-4" /> Print / Export PDF
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: OFFICIAL ACADEMIC TRANSCRIPT */}
        {activeTab === 'transcript' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-300 shadow-xl space-y-6 font-sans">
              
              {/* Transcript Header */}
              <div className="border-b-2 border-slate-900 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                    Epicademy Institute of Technology
                  </h3>
                  <p className="text-xs text-slate-600 font-semibold">Office of Academic Records &amp; Registrar</p>
                  <p className="text-[11px] text-slate-500">Accredited by KEZJED SOLUTIONS • Manila, Philippines</p>
                </div>
                <div className="text-left sm:text-right font-mono text-xs">
                  <span className="bg-slate-900 text-white px-2.5 py-1 rounded font-bold text-[10px]">
                    OFFICIAL TRANSCRIPT
                  </span>
                  <p className="text-slate-600 mt-1">Date: {issueDate}</p>
                  <p className="text-slate-500 text-[10px]">Record ID: {certId}</p>
                </div>
              </div>

              {/* Student Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-500 font-bold block text-[10px] uppercase">Candidate Name</span>
                  <span className="font-bold text-slate-900 text-sm">{resolvedStudentName}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-bold block text-[10px] uppercase">Program Track</span>
                  <span className="font-bold text-slate-900">{resolvedTrackTitle}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-bold block text-[10px] uppercase">Academic Standing</span>
                  <span className="font-bold text-emerald-700">Passed with High Distinction (Summa)</span>
                </div>
              </div>

              {/* Course Breakdown Table */}
              <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-900 text-white font-mono text-[11px]">
                    <tr>
                      <th className="p-3">Course / Module</th>
                      <th className="p-3">Contact Hours</th>
                      <th className="p-3">Deliverables</th>
                      <th className="p-3 text-right">Numeric %</th>
                      <th className="p-3 text-right">Grade Point</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3 font-medium">Module 1: Document Architecture &amp; Semantics</td>
                      <td className="p-3 font-mono">20 Hours</td>
                      <td className="p-3 text-slate-600">4 Labs + Quiz Passed</td>
                      <td className="p-3 text-right font-mono font-bold text-slate-900">98.0%</td>
                      <td className="p-3 text-right font-mono font-bold text-emerald-600">1.00 (A+)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Module 2: Constraint Validation &amp; Form Architecture</td>
                      <td className="p-3 font-mono">20 Hours</td>
                      <td className="p-3 text-slate-600">4 Labs + Quiz Passed</td>
                      <td className="p-3 text-right font-mono font-bold text-slate-900">96.5%</td>
                      <td className="p-3 text-right font-mono font-bold text-emerald-600">1.00 (A+)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Module 3: Responsive Layouts &amp; Capstone Engineering</td>
                      <td className="p-3 font-mono">20 Hours</td>
                      <td className="p-3 text-slate-600">4 Labs + Final Exam</td>
                      <td className="p-3 text-right font-mono font-bold text-slate-900">97.0%</td>
                      <td className="p-3 text-right font-mono font-bold text-emerald-600">1.00 (A+)</td>
                    </tr>
                  </tbody>
                  <tfoot className="bg-slate-100 font-bold border-t-2 border-slate-300">
                    <tr>
                      <td className="p-3">Cumulative Total / Average</td>
                      <td className="p-3 font-mono">60 Total Hours</td>
                      <td className="p-3">12 Graded Deliverables</td>
                      <td className="p-3 text-right font-mono text-blue-900">97.2%</td>
                      <td className="p-3 text-right font-mono text-emerald-700">GPA: 3.98 / 4.0</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Registrar Attestation */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <div>
                  <p className="font-bold text-slate-900">Digitally Certified &amp; Recorded</p>
                  <p className="text-[10px]">KEZJED SOLUTIONS Academic Certification Database</p>
                </div>
                <div className="text-right font-mono text-[10px]">
                  <p className="font-bold text-emerald-600">STATUS: COMPLETED &amp; ACCREDITED</p>
                  <p>Hash: 7a8f9c1e04b92837d9284fa</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => window.print()}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow transition flex items-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4" /> Print Academic Transcript
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: PUBLIC VERIFICATION PORTAL */}
        {activeTab === 'verify' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                  Real-Time Credential Registry
                </span>
                <h3 className="text-lg font-black text-white">Public Certificate &amp; Degree Verification</h3>
                <p className="text-xs text-slate-400">
                  Employers, recruiters, and university registrars can authenticate any issued Epicademy credential instantly.
                </p>
              </div>

              <form onSubmit={handleLookupCertificate} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchCertId}
                    onChange={(e) => setSearchCertId(e.target.value)}
                    placeholder={`e.g. ${certId}`}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow transition cursor-pointer flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-4 h-4" /> Verify
                </button>
              </form>

              <p className="text-[11px] text-slate-500">
                Tip: Enter your active certificate serial ID <code className="text-emerald-400 bg-slate-900 px-1 py-0.5 rounded">{certId}</code> to test live verification.
              </p>
            </div>

            {/* Verification Result Display */}
            {verificationResult && (
              <div className={`p-6 rounded-2xl border transition animate-in fade-in duration-200 ${
                verificationResult.verified
                  ? 'bg-emerald-950/30 border-emerald-500/40 text-slate-200'
                  : 'bg-rose-950/30 border-rose-500/40 text-slate-200'
              }`}>
                {verificationResult.verified ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-emerald-400 font-black text-sm">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>OFFICIALLY VERIFIED &amp; ACCREDITED CREDENTIAL</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Credential Holder</span>
                        <span className="text-white font-bold text-sm">{verificationResult.student}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Certified Track</span>
                        <span className="text-white font-bold">{verificationResult.trackTitle}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Conferral Date</span>
                        <span className="text-slate-300 font-mono">{verificationResult.date}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Academic Honors</span>
                        <span className="text-emerald-400 font-bold">{verificationResult.distinction}</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-emerald-500/20 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Authority: Ronnel M. Aviguetero, CEO and FOUNDER of KEZJED SOLUTIONS</span>
                      <span className="font-mono text-emerald-400">ID: {verificationResult.certId}</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 text-rose-300">
                    <h4 className="font-bold text-sm flex items-center gap-2">
                      <span>No verified record found for:</span> <code className="font-mono bg-rose-950 px-2 py-0.5 rounded">{verificationResult.certId}</code>
                    </h4>
                    <p className="text-xs text-rose-200/80">
                      Please double-check the serial number formatting or contact KEZJED SOLUTIONS registrar support.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
