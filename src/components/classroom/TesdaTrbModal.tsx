import { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Printer, 
  HardDrive, 
  Network, 
  Server, 
  Wrench 
} from 'lucide-react';

interface TesdaTrbModalProps {
  isOpen: boolean;
  onClose: () => void;
  traineeName?: string;
}

interface CompetencyUnit {
  id: string;
  code: string;
  title: string;
  dateCompleted: string;
  rating: 'C' | 'NYC';
  trainerRemarks: string;
}

interface CoreCompetencyGroup {
  coreNumber: number;
  coreCode: string;
  coreTitle: string;
  icon: any;
  units: CompetencyUnit[];
}

export const TesdaTrbModal = ({
  isOpen,
  onClose,
  traineeName = '',
}: TesdaTrbModalProps) => {
  const resolvedTrainee = traineeName || 'VALUED TESDA SCHOLAR';

  const [competencies, setCompetencies] = useState<CoreCompetencyGroup[]>([
    {
      coreNumber: 1,
      coreCode: 'ICCS',
      coreTitle: 'Install and Configure Computer Systems',
      icon: HardDrive,
      units: [
        { id: 'u-1-1', code: 'COC1-01', title: 'Assemble computer hardware & adhere to OHS guidelines', dateCompleted: 'Sep 10, 2026', rating: 'C', trainerRemarks: 'Satisfactory assembly with anti-static wrist strap' },
        { id: 'u-1-2', code: 'COC1-02', title: 'Prepare bootable installer & install Windows / Linux OS', dateCompleted: 'Sep 12, 2026', rating: 'C', trainerRemarks: 'Partitioning & GPT/UEFI BIOS properly configured' },
        { id: 'u-1-3', code: 'COC1-03', title: 'Install device drivers & essential application software', dateCompleted: 'Sep 13, 2026', rating: 'C', trainerRemarks: 'Verified Device Manager with zero driver errors' },
        { id: 'u-1-4', code: 'COC1-04', title: 'Conduct testing, burning-in & client documentation', dateCompleted: 'Sep 14, 2026', rating: 'C', trainerRemarks: 'Job order acceptance sheet signed' },
      ],
    },
    {
      coreNumber: 2,
      coreCode: 'SUCN',
      coreTitle: 'Set-up Computer Networks',
      icon: Network,
      units: [
        { id: 'u-2-1', code: 'COC2-01', title: 'Install UTP network cables (T568A & T568B crimping)', dateCompleted: 'Sep 15, 2026', rating: 'C', trainerRemarks: 'Passed cable tester pin 1-8 continuity test' },
        { id: 'u-2-2', code: 'COC2-02', title: 'Set static IPv4 network configuration & default gateway', dateCompleted: 'Sep 15, 2026', rating: 'C', trainerRemarks: 'Subnet mask 255.255.255.0 verified with ping' },
        { id: 'u-2-3', code: 'COC2-03', title: 'Configure wireless router, SSID security & DHCP pool', dateCompleted: 'Sep 16, 2026', rating: 'C', trainerRemarks: 'WPA3 encryption & MAC address filtering active' },
        { id: 'u-2-4', code: 'COC2-04', title: 'Inspect and test computer network file/printer sharing', dateCompleted: 'Sep 16, 2026', rating: 'C', trainerRemarks: 'Workgroup network resource sharing functional' },
      ],
    },
    {
      coreNumber: 3,
      coreCode: 'SUCS',
      coreTitle: 'Set-up Computer Servers',
      icon: Server,
      units: [
        { id: 'u-3-1', code: 'COC3-01', title: 'Set up user access & Active Directory domain controller', dateCompleted: 'Sep 17, 2026', rating: 'C', trainerRemarks: 'OU, user accounts & Group Policy configured' },
        { id: 'u-3-2', code: 'COC3-02', title: 'Configure DNS Server & forward lookup zones', dateCompleted: 'Sep 17, 2026', rating: 'C', trainerRemarks: 'nslookup resolves domain name accurately' },
        { id: 'u-3-3', code: 'COC3-03', title: 'Configure DHCP Server scope, exclusions & reservations', dateCompleted: 'Sep 18, 2026', rating: 'C', trainerRemarks: 'Client successfully leased dynamic IP address' },
        { id: 'u-3-4', code: 'COC3-04', title: 'Configure Folder Redirection & Remote Desktop services', dateCompleted: 'Sep 18, 2026', rating: 'C', trainerRemarks: 'Secure roaming profile tested successfully' },
      ],
    },
    {
      coreNumber: 4,
      coreCode: 'MRCSN',
      coreTitle: 'Maintaining and Repairing Computer Systems & Networks',
      icon: Wrench,
      units: [
        { id: 'u-4-1', code: 'COC4-01', title: 'Plan and prepare for maintenance and repair protocols', dateCompleted: 'Sep 18, 2026', rating: 'C', trainerRemarks: 'Safety goggles, PPE & diagnostic tools ready' },
        { id: 'u-4-2', code: 'COC4-02', title: 'Perform preventive maintenance on hardware & software', dateCompleted: 'Sep 18, 2026', rating: 'C', trainerRemarks: 'Disk cleanup, thermal repasting & dust blowout' },
        { id: 'u-4-3', code: 'COC4-03', title: 'Diagnose hardware POST beep codes & BSOD error codes', dateCompleted: 'Sep 18, 2026', rating: 'C', trainerRemarks: 'Accurate isolation of faulty RAM module' },
        { id: 'u-4-4', code: 'COC4-04', title: 'Rectify defects, replace components & backup user files', dateCompleted: 'Sep 18, 2026', rating: 'C', trainerRemarks: 'System image restored via external media' },
      ],
    },
  ]);

  if (!isOpen) return null;

  const toggleRating = (coreIdx: number, unitIdx: number) => {
    setCompetencies(prev => {
      const updated = [...prev];
      const current = updated[coreIdx].units[unitIdx].rating;
      updated[coreIdx].units[unitIdx].rating = current === 'C' ? 'NYC' : 'C';
      return updated;
    });
  };

  const totalUnits = competencies.reduce((acc, c) => acc + c.units.length, 0);
  const completedUnits = competencies.reduce((acc, c) => acc + c.units.filter(u => u.rating === 'C').length, 0);
  const isAllCompetent = completedUnits === totalUnits;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden my-6 flex flex-col text-slate-100">
        
        {/* Modal Top Bar */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                Official TESDA CBT System
              </span>
              <h2 className="text-sm sm:text-base font-black text-white">
                Trainee's Record Book (TRB) &amp; Competency Matrix
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" /> Print TRB
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* TRB Document Header */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="bg-white text-slate-900 rounded-2xl p-6 border border-slate-300 shadow-md space-y-4 font-sans">
            
            <div className="border-b-2 border-slate-900 pb-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest bg-blue-900 text-white px-2 py-0.5 rounded">
                  TECHNICAL EDUCATION AND SKILLS DEVELOPMENT AUTHORITY (TESDA)
                </span>
                <h3 className="text-lg font-black text-slate-900 mt-1">
                  Computer Systems Servicing (CSS) NC II
                </h3>
                <p className="text-xs text-slate-600">Institutional Competency Progress Chart &amp; Trainee Record Book</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono font-bold bg-amber-100 text-amber-900 px-2 py-1 rounded border border-amber-300">
                  QUALIFICATION CODE: ELC724318
                </span>
              </div>
            </div>

            {/* Trainee & Trainer Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div>
                <span className="text-[10px] text-slate-500 font-bold block uppercase">Trainee Name</span>
                <span className="font-black text-slate-900 text-sm">{resolvedTrainee}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-bold block uppercase">Accredited Lead Trainer</span>
                <span className="font-bold text-slate-900">Ronnel M. Aviguetero</span>
                <span className="text-[10px] text-slate-500 block">CEO &amp; FOUNDER of KEZJED SOLUTIONS</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-bold block uppercase">Institutional Status</span>
                <span className={`font-black text-xs px-2 py-0.5 rounded inline-block mt-0.5 ${
                  isAllCompetent ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {isAllCompetent ? '✓ COMPETENT IN ALL 4 COCs' : `${completedUnits}/${totalUnits} Units Satisfactory`}
                </span>
              </div>
            </div>

            {/* 4 Core Competencies Matrix */}
            <div className="space-y-4 pt-2">
              {competencies.map((group, coreIdx) => {
                const Icon = group.icon;
                return (
                  <div key={group.coreCode} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-amber-400" />
                        <span className="font-black text-xs">
                          CORE {group.coreNumber} ({group.coreCode}): {group.coreTitle}
                        </span>
                      </div>
                      <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded font-mono font-bold text-amber-300">
                        {group.units.filter(u => u.rating === 'C').length}/{group.units.length} Units Competent
                      </span>
                    </div>

                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-100 text-slate-600 border-b border-slate-200 font-bold text-[11px]">
                        <tr>
                          <th className="p-2.5 w-24">Unit Code</th>
                          <th className="p-2.5">Learning Competency / Activity</th>
                          <th className="p-2.5 w-28">Date Evaluated</th>
                          <th className="p-2.5 text-center w-20">Rating</th>
                          <th className="p-2.5">Trainer Remarks</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {group.units.map((unit, uIdx) => (
                          <tr key={unit.id} className="hover:bg-slate-50 transition">
                            <td className="p-2.5 font-mono font-bold text-slate-700">{unit.code}</td>
                            <td className="p-2.5 font-medium text-slate-900">{unit.title}</td>
                            <td className="p-2.5 font-mono text-slate-600 text-[11px]">{unit.dateCompleted}</td>
                            <td className="p-2.5 text-center">
                              <button
                                onClick={() => toggleRating(coreIdx, uIdx)}
                                className={`px-2 py-0.5 rounded font-bold font-mono text-xs cursor-pointer transition ${
                                  unit.rating === 'C'
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-rose-600 text-white'
                                }`}
                                title="Click to toggle Competent (C) / Not Yet Competent (NYC)"
                              >
                                {unit.rating}
                              </button>
                            </td>
                            <td className="p-2.5 text-slate-600 text-[11px] italic">{unit.trainerRemarks}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </div>

            {/* Assessment Endorsement & Signature */}
            <div className="pt-4 border-t-2 border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div>
                <p className="font-bold text-slate-900">Institutional Endorsement for National Assessment</p>
                <p className="text-[10px] text-slate-500">
                  This confirms trainee has completed 100% of institutional CBT requirements.
                </p>
              </div>
              <div className="text-center sm:text-right">
                <span className="font-serif italic font-bold text-blue-900 underline decoration-amber-500">
                  Ronnel M. Aviguetero
                </span>
                <p className="font-black text-slate-900 text-[11px]">Ronnel M. Aviguetero</p>
                <p className="text-[9px] text-slate-500">CEO and FOUNDER of KEZJED SOLUTIONS • TM1 / LPT</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
