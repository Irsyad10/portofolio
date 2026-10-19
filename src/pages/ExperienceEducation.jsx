import SectionTitle from '../components/SectionTitle';

const ExperienceEducation = () => {
  const experiences = [
    {
      role: "HR - GA - IT Staff",
      company: "PT. Aiko Negara Daha",
      period: "30-04-2025 - 31-08-2026",
      description: "At PT. Aiko Negara Daha, I am assigned to support three main areas: Human Resources, General Affairs, and Information Technology. My primary responsibility is in IT as a website developer, where I contributed to the development and management of the company website: https://www.akira.co.id/. In the General Affairs division, I check office facilities and ensure employee needs are met, including monitoring workplace conditions and assisting with operational requirements. In the Human Resources division, I make important announcements to employees, especially when there are sudden or urgent situations requiring immediate communication."
    },
    {
      role: "Mobile Developer",
      company: "Shejek",
      period: "Januari 2024 - Juni 2024",
      description: "I focus on mobile app development, with responsibilities including adding and implementing new features."
    },
    {
      role: "Teaching Assistant",
      company: "Universitas Jenderal Achmad Yani • Cimahi, Indonesia",
      period: "Oktober 2023 – Juni 2024",
      description: (
        <div className="space-y-4">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-1 text-sm font-semibold text-dark-text/90 mb-1.5">
              <span>Struktur Data</span>
              <span className="font-mono text-xs text-dark-text/60 font-normal">14 Maret 2024 – 20 Juni 2024</span>
            </div>
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm">
              <li>
                Mendampingi mahasiswa dalam sesi praktikum struktur data dan logika pemrograman menggunakan C/C++, mencakup konsep array dan penyimpanan data.
              </li>
              <li>
                Membimbing mahasiswa dalam menyelesaikan latihan pemrograman serta pemecahan masalah kode (debugging).
              </li>
            </ul>
          </div>
          <div>
            <div className="flex flex-wrap items-center justify-between gap-1 text-sm font-semibold text-dark-text/90 mb-1.5">
              <span>Sistem Multimedia</span>
              <span className="font-mono text-xs text-dark-text/60 font-normal">10 Oktober 2023 – 19 Desember 2023</span>
            </div>
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm">
              <li>
                Mendampingi mahasiswa dalam sesi praktikum pengembangan multimedia dan aplikasi interaktif.
              </li>
              <li>
                Membimbing mahasiswa dalam pembuatan game sederhana menggunakan Adobe Animate serta mengatasi kendala implementasi teknis.
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      role: "IT Support & IT Programmer (Internship)",
      company: "Kementerian Pertanian Republik Indonesia • Jakarta, Indonesia",
      period: "Juli 2023 – Agustus 2023",
      description: (
        <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm">
          <li>
            Mengembangkan replika situs web PPID Pertanian menggunakan framework Laravel, mencakup antarmuka web dan fungsionalitas utama.
          </li>
          <li>
            Menyediakan dukungan IT Support untuk perangkat keras (hardware), perangkat lunak (software), jaringan, serta pemecahan masalah teknis (troubleshooting).
          </li>
          <li>
            Membantu pengguna dalam menyelesaikan kendala teknis dan melakukan pemeliharaan perangkat IT guna menunjang kelancaran operasional harian.
          </li>
        </ul>
      )
    }
  ];

  const education = [
    {
      degree: "Bachelor of Informatics",
      institution: "Universitas Jenderal Achmad Yani • Cimahi, Indonesia",
      period: "2020 – 2025",
      description: "Memiliki minat yang kuat dalam bidang teknologi, khususnya Artificial Intelligence (AI) dan pengembangan web/aplikasi."
    },
    {
      degree: "Senior High School",
      institution: "SMA Negeri 1 Cikampek • Karawang, Indonesia",
      period: "2017 – 2020"
    },
    {
      degree: "Junior High School",
      institution: "SMP Negeri 1 Banyusari • Karawang, Indonesia",
      period: "2014 – 2017"
    },
    {
      degree: "Elementary School",
      institution: "SD Negeri Cicinde Selatan 1 • Karawang, Indonesia",
      period: "2009 – 2014"
    }
  ];

  const TimelineItem = ({ title, subtitle, period, description }) => (
    <div className="relative pl-8 md:pl-0">
      {/* Desktop layout: split, Mobile layout: stacked */}
      <div className="md:flex md:flex-row md:justify-between mb-2">
        <div className="md:w-[60%] pr-8">
          <h3 className="text-xl font-bold text-dark-text">{title}</h3>
          <h4 className="text-primary font-medium text-lg mt-1">{subtitle}</h4>
          {description && (
            <div className="text-dark-text/70 mt-4 leading-relaxed">{description}</div>
          )}
        </div>

        {/* Period badge and dot */}
        <div className="hidden md:flex flex-col items-end w-[30%]">
          <span className="px-4 py-2 bg-surface-secondary text-primary rounded-pill font-mono text-sm font-semibold whitespace-nowrap">
            {period}
          </span>
        </div>

        {/* Mobile period */}
        <div className="md:hidden mt-2">
          <span className="font-mono text-sm font-semibold text-dark-text/50">{period}</span>
        </div>
      </div>

      {/* Timeline dot and line */}
      <div className="absolute left-0 top-1.5 md:left-auto md:right-[35%] w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm z-10 hidden md:block transform translate-x-1/2"></div>
      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm z-10 md:hidden"></div>

      <div className="absolute left-1.5 top-5 bottom-0 w-px bg-border-subtle md:hidden -mb-8"></div>
    </div>
  );

  return (
    <div className="py-16 md:py-24">
      <div className="container-max max-w-4xl">
        <SectionTitle
          label="CAREER"
          title="Experience & Education"
          className="mb-16 md:text-center"
          align="center"
        />

        <div className="space-y-24">
          {/* Experience Section */}
          <section className="relative">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-surface-secondary flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
              </div>
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>

            {/* Desktop timeline line */}
            <div className="hidden md:block absolute top-24 bottom-0 right-[35%] w-px bg-border-subtle transform translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={index}
                  title={exp.role}
                  subtitle={exp.company}
                  period={exp.period}
                  description={exp.description}
                />
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="relative">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-surface-secondary flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>

            {/* Desktop timeline line */}
            <div className="hidden md:block absolute top-24 bottom-0 right-[35%] w-px bg-border-subtle transform translate-x-1/2"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <TimelineItem
                  key={index}
                  title={edu.degree}
                  subtitle={edu.institution}
                  period={edu.period}
                  description={edu.description}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ExperienceEducation;
