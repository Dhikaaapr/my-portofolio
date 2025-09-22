export default function Education() {
  return (
    <section id="education" className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>

      {}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center shadow-lg">
        <div>
          <div className="mb-2">
            <span className="bg-white text-black text-xs font-semibold px-2 py-1 rounded">
              still ongoing
            </span>
          </div>
          <h3 className="text-2xl font-bold">
            Bachelor of Information Technology
          </h3>
          <p className="text-sm mt-1">University Paramadina</p>
          <p className="text-sm text-gray-300">
            📅 Sep 2023 - Jan 2026 · 📍 Jakarta, Indonesia
          </p>
        </div>
        <div className="mt-4 md:mt-0 md:text-right">
          <div className="bg-white text-black font-bold rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg text-center">
            <div>
              <p className="text-xl">3.85</p>
              <p className="text-xs">GPA / 4.00</p>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {}
        <div className="bg-black p-6 rounded-lg shadow">
          <h4 className="text-lg font-semibold mb-2">📖 Overview</h4>
          <p className="text-gray-1000 text-sm leading-relaxed">
            {" "}
            Focused on Software Engineering, Human-Computer Interaction (HCI),
            and Full-Stack Web Development. Specialized in building robust
            software systems and user-centered applications. Completed a
            capstone project involving full-stack web development using modern
            technologies and industry best practices.
          </p>
        </div>

        {}
        <div className="bg- black-50 p-6 rounded-lg shadow">
          <h4 className="text-lg font-semibold mb-4">🏆 Key Achievements</h4>

          <div className="mb-4 p-4 border rounded-lg">
            <h5 className="font-semibold">
              {" "}
              Data Classification and Summarization Using IBM Granite (2025)
            </h5>
            <p className="text-sm text-gray-1000">
              Mengikuti proyek pembelajaran yang berfokus pada pemanfaatan
              teknologi AI IBM Granite untuk melakukan klasifikasi data dan
              pembuatan ringkasan otomatis (summarization). Dalam proyek ini,
              saya mempelajari cara kerja model language AI dalam memahami,
              mengelompokkan, dan menyederhanakan informasi berbasis teks
            </p>
          </div>

          <div className="p-4 border rounded-lg">
            <h5 className="font-semibold">
              {" "}
              Beasiswa PSR (Paramadina Social Responsibility) (2023)
            </h5>
            <p className="text-sm text-gray-1000">
              program beasiswa yang diselenggarakan oleh Universitas Paramadina
              untuk memberikan akses pendidikan tinggi bagi mereka yang berhak
              tetapi memiliki keterbatasan ekonomi. Beasiswa ini ditujukan untuk
              jenjang S1 di Universitas Paramadina, dengan fokus pada warga
              sekitar kampus atau mereka yang direkomendasikan oleh mitra
              universitas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
