import React, { useState, useEffect, useRef } from 'react';

export default function Policies() {
  const [activeSection, setActiveSection] = useState('tuition');
  const sectionRefs = useRef({});

  const policies = [
    { id: 'tuition', title: 'Tuition & Refund', icon: '💸' },
    { id: 'grievance', title: 'Grievance', icon: '🤝' },
    { id: 'conduct', title: 'Code of Conduct', icon: '📜' },
    { id: 'attendance', title: 'Attendance', icon: '📅' },
    { id: 'retaliation', title: 'Anti-Retaliation', icon: '🛡️' },
    { id: 'harassment', title: 'Anti-Harassment', icon: '🚫' },
    { id: 'assessment', title: 'Assessment', icon: '📝' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      // Find which section is currently in view
      for (const [id, ref] of Object.entries(sectionRefs.current)) {
        if (ref) {
          const sectionTop = ref.offsetTop;
          const sectionHeight = ref.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = sectionRefs.current[id];
    if (element) {
      const offset = 80; // Adjust for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pt-16"> {/* Added padding-top to prevent hiding behind navbar */}
      <section className="min-h-screen py-12 px-4 sm:px-6 bg-gradient-to-b from-[#f9f5f0] via-[#f2ece3] to-[#e8dfd5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Left Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm p-6 border border-[#e8d5c4]/40 sticky top-24">
                <div className="mb-8">
                 
                  <h2 className="text-2xl font-serif font-light text-[#5a4a42]">
                    AatmyaYoga Policies
                  </h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4b8a1] to-transparent mt-2"></div>
                </div>
                
                <nav className="space-y-2">
                  {policies.map((policy) => (
                    <button
                      key={policy.id}
                      onClick={() => scrollToSection(policy.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                        activeSection === policy.id
                          ? 'bg-gradient-to-r from-[#e8d5c4]/30 to-[#d4b8a1]/30 border border-[#e8d5c4]/50 shadow-sm'
                          : 'hover:bg-[#f9f5f0] hover:shadow-sm'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activeSection === policy.id 
                          ? 'bg-gradient-to-br from-[#e8d5c4] to-[#d4b8a1]'
                          : 'bg-[#f2ece3]'
                      }`}>
                        <span className="text-lg">{policy.icon}</span>
                      </div>
                      <span className={`font-medium text-left ${
                        activeSection === policy.id ? 'text-[#5a4a42]' : 'text-[#7a6b63]'
                      }`}>
                        {policy.title}
                      </span>
                    </button>
                  ))}
                </nav>
                
                {/* Quick Links */}
             
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm p-8 border border-[#e8d5c4]/40">
                
                {/* Header */}
                <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-5xl font-serif font-light text-[#5a4a42] mb-4">
                    AatmyaYoga School Policies
                  </h1>
                  <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#d4b8a1] to-transparent mx-auto mb-6"></div>
                  <p className="text-[#7a6b63] text-lg max-w-3xl mx-auto">
                    These policies ensure transparency, professionalism, and a safe learning environment for all trainees at AatmyaYoga School.
                  </p>
                </div>

                {/* Policies Content */}
                <div className="space-y-12">
                  
                  {/* Tuition & Refund */}
                  <div 
                    ref={el => sectionRefs.current.tuition = el}
                    id="tuition"
                    className={`scroll-mt-24 p-6 rounded-2xl transition-all duration-200 ${
                      activeSection === 'tuition' 
                        ? 'bg-gradient-to-r from-[#f9f5f0] to-[#f2ece3] border border-[#e8d5c4]/50'
                        : 'hover:bg-[#f9f5f0]/50'
                    }`}
                  >
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                        activeSection === 'tuition'
                          ? 'bg-gradient-to-br from-[#e8d5c4] to-[#d4b8a1]'
                          : 'bg-[#f2ece3]'
                      }`}>
                        <span className="text-xl">💸</span>
                      </div>
                      <h2 className="text-2xl font-serif text-[#5a4a42]">Tuition and Refund Policy</h2>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-[#6d5b53] leading-relaxed">
                        Trainees are required to submit a deposit to reserve their spot in the program. The remaining tuition balance must be paid in full before the program start date, unless an approved payment plan has been arranged in advance.
                      </p>

                      <div className="mt-6">
                        <h3 className="font-semibold text-[#5a4a42] text-lg mb-4">Refunds:</h3>
                        <div className="space-y-4">
                          <div className="flex items-start bg-[#f9f5f0] p-4 rounded-xl border border-[#e8d5c4]/30">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#e8d5c4] to-[#d4b8a1] flex items-center justify-center text-[#5a4a42] font-medium mr-4 mt-0.5">
                              1
                            </div>
                            <p className="text-[#6d5b53]">
                              A full refund, minus the non-refundable deposit, is available if cancellation is made at least 14 days before the program start date.
                            </p>
                          </div>
                          
                          <div className="flex items-start bg-[#f9f5f0] p-4 rounded-xl border border-[#e8d5c4]/30">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#e8d5c4] to-[#d4b8a1] flex items-center justify-center text-[#5a4a42] font-medium mr-4 mt-0.5">
                              2
                            </div>
                            <p className="text-[#6d5b53]">
                              After the program begins, no refunds will be issued except in cases of documented medical emergencies, subject to the program director's approval.
                            </p>
                          </div>
                          
                          <div className="flex items-start bg-[#f9f5f0] p-4 rounded-xl border border-[#e8d5c4]/30">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#e8d5c4] to-[#d4b8a1] flex items-center justify-center text-[#5a4a42] font-medium mr-4 mt-0.5">
                              3
                            </div>
                            <p className="text-[#6d5b53]">
                              In the event of an approved withdrawal, a credit may be applied toward a future program within one year.
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="text-[#6d5b53] mt-6 pt-6 border-t border-[#e8d5c4]/30">
                        All tuition, payment, and refund practices will comply with applicable consumer protection laws.
                      </p>
                    </div>
                  </div>

                  {/* Grievance */}
                  <div 
                    ref={el => sectionRefs.current.grievance = el}
                    id="grievance"
                    className={`scroll-mt-24 p-6 rounded-2xl transition-all duration-200 ${
                      activeSection === 'grievance' 
                        ? 'bg-gradient-to-r from-[#f9f5f0] to-[#f2ece3] border border-[#e8d5c4]/50'
                        : 'hover:bg-[#f9f5f0]/50'
                    }`}
                  >
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                        activeSection === 'grievance'
                          ? 'bg-gradient-to-br from-[#e8d5c4] to-[#d4b8a1]'
                          : 'bg-[#f2ece3]'
                      }`}>
                        <span className="text-xl">🤝</span>
                      </div>
                      <h2 className="text-2xl font-serif text-[#5a4a42]">Grievance Policy</h2>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-[#6d5b53] leading-relaxed">
                        Our program encourages open communication to resolve any concerns.
                      </p>
                      
                      <p className="text-[#6d5b53] leading-relaxed">
                        If a trainee, staff member, or faculty has a grievance, they should first attempt to address the issue directly with the involved party. If unresolved, they should submit a written complaint to the program director within 14 days of the event.
                      </p>
                      
                      <p className="text-[#6d5b53] leading-relaxed">
                        The program director will review the complaint within 7 business days and schedule a meeting to discuss and attempt to resolve the grievance.
                      </p>
                      
                      <div className="bg-gradient-to-r from-[#c4d8e8]/20 to-[#a1b8d4]/20 rounded-xl p-5 border border-[#c4d8e8]/40 mt-4">
                        <p className="text-[#5a4a42] font-medium">
                          All grievances will be handled respectfully, confidentially, and without retaliation.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Code of Conduct */}
                  <div 
                    ref={el => sectionRefs.current.conduct = el}
                    id="conduct"
                    className={`scroll-mt-24 p-6 rounded-2xl transition-all duration-200 ${
                      activeSection === 'conduct' 
                        ? 'bg-gradient-to-r from-[#f9f5f0] to-[#f2ece3] border border-[#e8d5c4]/50'
                        : 'hover:bg-[#f9f5f0]/50'
                    }`}
                  >
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                        activeSection === 'conduct'
                          ? 'bg-gradient-to-br from-[#e8d5c4] to-[#d4b8a1]'
                          : 'bg-[#f2ece3]'
                      }`}>
                        <span className="text-xl">📜</span>
                      </div>
                      <h2 className="text-2xl font-serif text-[#5a4a42]">Code of Conduct</h2>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-[#6d5b53] leading-relaxed">
                        All participants in our training program — including trainees, trainers, and staff — are expected to uphold the highest standards of professionalism and respect.
                      </p>
                      
                      <div className="mt-6 space-y-3">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#e8d5c4] to-[#d4b8a1] flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-[#5a4a42] text-xs">✓</span>
                          </div>
                          <span className="text-[#6d5b53]">Treat others with respect and courtesy at all times.</span>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#e8d5c4] to-[#d4b8a1] flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-[#5a4a42] text-xs">✓</span>
                          </div>
                          <span className="text-[#6d5b53]">Maintain confidentiality of personal or sensitive information shared in class.</span>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#e8d5c4] to-[#d4b8a1] flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-[#5a4a42] text-xs">✓</span>
                          </div>
                          <span className="text-[#6d5b53]">Uphold non-discrimination regardless of race, religion, nationality, gender, or sexual orientation.</span>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#e8d5c4] to-[#d4b8a1] flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-[#5a4a42] text-xs">✓</span>
                          </div>
                          <span className="text-[#6d5b53]">Avoid substance abuse or attending class while under the influence of drugs or alcohol.</span>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#e8d5c4] to-[#d4b8a1] flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-[#5a4a42] text-xs">✓</span>
                          </div>
                          <span className="text-[#6d5b53]">Maintain appropriate physical boundaries, respecting consent in any adjustments or touch-based instruction.</span>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#e8d5c4] to-[#d4b8a1] flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-[#5a4a42] text-xs">✓</span>
                          </div>
                          <span className="text-[#6d5b53]">Practice honesty and integrity in all assignments and assessments.</span>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-[#e8c4c4]/10 to-[#d4a1a1]/10 rounded-xl p-5 border border-[#e8c4c4]/30 mt-6">
                        <p className="text-[#5a4a42] font-medium text-center">
                          Violations of this code may result in disciplinary action, up to dismissal from the program.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Attendance */}
                  <div 
                    ref={el => sectionRefs.current.attendance = el}
                    id="attendance"
                    className={`scroll-mt-24 p-6 rounded-2xl transition-all duration-200 ${
                      activeSection === 'attendance' 
                        ? 'bg-gradient-to-r from-[#f9f5f0] to-[#f2ece3] border border-[#e8d5c4]/50'
                        : 'hover:bg-[#f9f5f0]/50'
                    }`}
                  >
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                        activeSection === 'attendance'
                          ? 'bg-gradient-to-br from-[#e8d5c4] to-[#d4b8a1]'
                          : 'bg-[#f2ece3]'
                      }`}>
                        <span className="text-xl">📅</span>
                      </div>
                      <h2 className="text-2xl font-serif text-[#5a4a42]">Attendance Policy</h2>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-[#c4e8d8]/30 to-[#a1d4b8]/30 rounded-xl p-6 border border-[#c4e8d8]/40 text-center mb-6">
                        <div className="text-4xl font-bold text-[#5a4a42] mb-2">100%</div>
                        <div className="text-xl font-semibold text-[#5a4a42]">Mandatory Attendance</div>
                      </div>
                      
                      <p className="text-[#6d5b53] leading-relaxed">
                        Attendance in all scheduled program contact hours is compulsory. Trainees must maintain 100% attendance to qualify for certification.
                      </p>
                      
                      <p className="text-[#6d5b53] leading-relaxed">
                        Any absence will only be considered in exceptional circumstances and must be communicated in writing to the program director before the scheduled session.
                      </p>
                      
                      <p className="text-[#6d5b53] leading-relaxed">
                        Missed hours must be made up directly with our faculty through scheduled in-person make-up sessions, practical workshops, or supervised study, as approved by the program team. Non-contact assignments will not be accepted as a substitute for attendance.
                      </p>
                      
                      <p className="text-[#6d5b53] leading-relaxed font-medium mt-4">
                        Certification will only be awarded once all contact hours have been completed in full.
                      </p>
                    </div>
                  </div>

                  {/* Anti-Retaliation */}
                  <div 
                    ref={el => sectionRefs.current.retaliation = el}
                    id="retaliation"
                    className={`scroll-mt-24 p-6 rounded-2xl transition-all duration-200 ${
                      activeSection === 'retaliation' 
                        ? 'bg-gradient-to-r from-[#f9f5f0] to-[#f2ece3] border border-[#e8d5c4]/50'
                        : 'hover:bg-[#f9f5f0]/50'
                    }`}
                  >
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                        activeSection === 'retaliation'
                          ? 'bg-gradient-to-br from-[#e8d5c4] to-[#d4b8a1]'
                          : 'bg-[#f2ece3]'
                      }`}>
                        <span className="text-xl">🛡️</span>
                      </div>
                      <h2 className="text-2xl font-serif text-[#5a4a42]">Anti-Retaliation Policy</h2>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-[#6d5b53] leading-relaxed">
                        Our program prohibits any form of retaliation against trainees, staff, or faculty who report a violation of our Code of Conduct or any other program policy, or who participate in any related investigation.
                      </p>
                      
                      <p className="text-[#6d5b53] leading-relaxed">
                        This includes retaliation in the form of threats, intimidation, bullying, loss of opportunity, or negative evaluation because of the report.
                      </p>
                      
                      <p className="text-[#6d5b53] leading-relaxed">
                        If any trainee or staff experiences retaliation, they should immediately inform the program director or designated contact person.
                      </p>
                      
                      <div className="bg-gradient-to-r from-[#e8e4c4]/20 to-[#d4d0a1]/20 rounded-xl p-5 border border-[#e8e4c4]/40 mt-4">
                        <p className="text-[#5a4a42] font-medium text-center">
                          Retaliation will result in disciplinary action, up to and including dismissal from the program.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Anti-Harassment */}
                  <div 
                    ref={el => sectionRefs.current.harassment = el}
                    id="harassment"
                    className={`scroll-mt-24 p-6 rounded-2xl transition-all duration-200 ${
                      activeSection === 'harassment' 
                        ? 'bg-gradient-to-r from-[#f9f5f0] to-[#f2ece3] border border-[#e8d5c4]/50'
                        : 'hover:bg-[#f9f5f0]/50'
                    }`}
                  >
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                        activeSection === 'harassment'
                          ? 'bg-gradient-to-br from-[#e8d5c4] to-[#d4b8a1]'
                          : 'bg-[#f2ece3]'
                      }`}>
                        <span className="text-xl">🚫</span>
                      </div>
                      <h2 className="text-2xl font-serif text-[#5a4a42]">Anti-Harassment Policy</h2>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-[#6d5b53] leading-relaxed">
                        Our program is committed to maintaining a learning and working environment free from harassment of any kind, including but not limited to sexual harassment, discriminatory harassment, personal harassment, physical harassment, and online harassment.
                      </p>
                      
                      <p className="text-[#6d5b53] leading-relaxed">
                        We strictly prohibit conduct that creates an intimidating, hostile, or offensive environment for trainees, trainers, or staff.
                      </p>
                      
                      <p className="text-[#6d5b53] leading-relaxed">
                        Any reported incidents of harassment will be promptly and thoroughly investigated, and appropriate corrective action will be taken.
                      </p>
                      
                      <p className="text-[#6d5b53] leading-relaxed">
                        Trainees or staff who believe they have experienced or witnessed harassment should report concerns to the program director or designated school contact.
                      </p>
                      
                      <p className="text-[#6d5b53] leading-relaxed">
                        Reports will be handled sensitively and in confidence.
                      </p>
                      
                      <div className="bg-gradient-to-r from-[#d4c4e8]/20 to-[#b8a1d4]/20 rounded-xl p-5 border border-[#d4c4e8]/40 mt-4">
                        <p className="text-[#5a4a42] font-medium text-center">
                          Retaliation against any person reporting harassment is strictly prohibited.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Assessment */}
                  <div 
                    ref={el => sectionRefs.current.assessment = el}
                    id="assessment"
                    className={`scroll-mt-24 p-6 rounded-2xl transition-all duration-200 ${
                      activeSection === 'assessment' 
                        ? 'bg-gradient-to-r from-[#f9f5f0] to-[#f2ece3] border border-[#e8d5c4]/50'
                        : 'hover:bg-[#f9f5f0]/50'
                    }`}
                  >
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                        activeSection === 'assessment'
                          ? 'bg-gradient-to-br from-[#e8d5c4] to-[#d4b8a1]'
                          : 'bg-[#f2ece3]'
                      }`}>
                        <span className="text-xl">📝</span>
                      </div>
                      <h2 className="text-2xl font-serif text-[#5a4a42]">Assessment, Assignment & Examination Policy</h2>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-[#6d5b53] leading-relaxed">
                        All assessments, assignments, and examinations must be completed within the specified course duration as outlined in the program schedule.
                      </p>
                      
                      <div className="mt-6 space-y-4">
                        <div className="flex items-start">
                          <span className="text-[#5a4a42] mr-3">●</span>
                          <span className="text-[#6d5b53]">Students are responsible for submitting assignments and appearing for examinations on time.</span>
                        </div>
                        
                        <div className="flex items-start">
                          <span className="text-[#5a4a42] mr-3">●</span>
                          <span className="text-[#6d5b53]">Late submission or delay beyond the course completion date may result in additional charges/fine as per institutional rules.</span>
                        </div>
                        
                        <div className="flex items-start">
                          <span className="text-[#5a4a42] mr-3">●</span>
                          <span className="text-[#6d5b53]">Any delay in completing required academic components will lead to postponement of certification until all requirements are fulfilled.</span>
                        </div>
                        
                        <div className="flex items-start">
                          <span className="text-[#5a4a42] mr-3">●</span>
                          <div className="text-[#6d5b53]">
                            The institute reserves the right to withhold the certificate until:
                            <ul className="mt-2 ml-6 space-y-2">
                              <li className="flex items-start">
                                <span className="text-[#5a4a42] mr-2">○</span>
                                <span>All assignments are submitted</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-[#5a4a42] mr-2">○</span>
                                <span>Assessments are successfully completed</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-[#5a4a42] mr-2">○</span>
                                <span>Examination requirements are cleared</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-[#5a4a42] mr-2">○</span>
                                <span>Pending fees or fines (if applicable) are paid</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-[#e8d5c4]/20 to-[#d4b8a1]/20 rounded-xl p-5 border border-[#e8d5c4]/30 mt-6">
                        <p className="text-[#5a4a42] font-medium text-center">
                          Timely completion ensures smooth certification and academic progression.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-[#e8d5c4]/30">
                  <div className="text-center">
                 
                    <p className="text-[#7a6b63] italic max-w-2xl mx-auto">
                      These policies reflect the yogic principles of Satya (truthfulness), Ahimsa (non-harm), and Santosha (contentment), ensuring a sacred space for growth and transformation.
                    </p>
                    <p className="text-[#5a4a42] font-medium mt-4">
                      The light in me honors the light in you. Namaste.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}