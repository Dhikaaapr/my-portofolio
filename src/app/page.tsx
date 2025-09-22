"use client";
import Image from "next/image";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Skills from "../components/skills";
import Project from "../components/project";
import Navbar from "../components/Navbar";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-[#0b0f0e] text-white relative bg-grid">
      {}
      <div className="absolute top-20 left-40 w-72 h-72 bg-green-500 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-40 w-96 h-96 bg-teal-400 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-emerald-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>

      {}
      <Navbar />

      {}
      <motion.section
        id="home"
        className="flex flex-col items-center justify-center text-center h-screen px-6 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {}
        <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-green-600">
          <Image
            src="/foto-andhika-porto.jpg"
            alt="Andhika Presha Saputra"
            fill
            sizes="160px"
            className="object-cover"
            priority
          />
        </div>

        <h1 className="text-5xl font-bold mt-6">Andhika Presha Saputra</h1>
        <p className="text-lg text-gray-300 mt-2">Frontend Developer</p>
        <p className="mt-4 text-gray-400 max-w-lg">
          Building modern, responsive web interfaces with care and creativity.
        </p>
        <div className="flex gap-4 mt-6">
          <a
            href="/CV_Andhika_Presha_Saputra.pdf"
            download
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-4 py-2 border border-gray-500 rounded-lg hover:bg-gray-800 transition"
          >
            Get In Touch
          </a>
        </div>
        <div className="flex gap-6 mt-8">
          <a
            href="https://github.com/dhikaaaaaaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={34} />
          </a>
          <a
            href="https://www.linkedin.com/in/andhika-presha-saputra-23b0232b0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={34} />
          </a>
          <a
            href="https://www.instagram.com/dhik.favor?igsh=bng5ZDk4djAxcGVr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={34} />
          </a>
        </div>
      </motion.section>

      {}
      <motion.section
        id="about"
        className="container mx-auto px-6 py-20 text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Mahasiswa aktif Program Studi Teknik Informatika dengan minat dan
          fokus utama pada pengembangan web (Web Development). Memiliki
          pengalaman dalam membangun aplikasi web berbasis JavaScript, khususnya
          menggunakan framework seperti Next.js dan styling modern seperti
          Tailwind CSS. Terbiasa bekerja dalam tim, cepat beradaptasi, serta
          memiliki semangat belajar yang tinggi terhadap teknologi baru. Siap
          mengembangkan potensi diri lebih jauh melalui proyek-proyek nyata
          maupun kolaborasi dengan tim profesional.
        </p>
      </motion.section>

      {}
      <motion.div
        id="skills"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <Skills />
      </motion.div>

      {}
      <motion.section
        id="project"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Project />
      </motion.section>

      {}
      <motion.section
        id="experience"
        className="container mx-auto px-6 py-20 relative z-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-6">
          <div className="p-6 border border-gray-700 rounded-lg shadow-md bg-black/30">
            <h3 className="text-xl font-semibold">
              Frontend Developer - Universitas Paramadina
            </h3>
            <p className="text-gray-400">Sep 2024 - Jan 2025</p>
            <p className="mt-2 text-gray-500">
              Berkontribusi dalam pengembangan Calmora, sebuah platform digital
              berbasis web yang menyediakan akses informasi kesehatan mental dan
              membantu pengguna menemukan konselor secara mudah. Bertanggung
              jawab melakukan slicing desain UI ke dalam bentuk halaman website
              responsif menggunakan teknologi frontend modern seperti HTML, CSS,
              dan Tailwind CSS. Mengintegrasikan API chatbot khusus kesehatan
              mental yang dirancang untuk menjawab pertanyaan seputar isu
              kesehatan emosional dan psikologis. Memastikan seluruh komponen
              frontend bekerja optimal di berbagai perangkat dan resolusi layar.
              Berkolaborasi dengan tim backend untuk memastikan integrasi fitur
              berjalan lancar, khususnya pada fitur pencarian konselor dan
              interaksi dengan chatbot
            </p>
          </div>
          <div className="p-6 border border-gray-700 rounded-lg shadow-md bg-black/30">
            <h3 className="text-xl font-semibold">
              Anggota Human Education - HIMTI
            </h3>
            <p className="text-gray-400">Jun 2022 - Des 2022</p>
            <p className="mt-2 text-gray-500">
              Aktif dalam perencanaan dan pelaksanaan berbagai kegiatan edukatif
              seperti pelatihan, workshop, dan webinar untuk meningkatkan
              kemampuan akademik dan teknis mahasiswa Teknik Informatika.
              Berperan dalam realisasi program unggulan seperti BRAHMA: IT FEAST
              READY, Kobit Academy, dan Webinar Series Alumni, termasuk membantu
              dalam penyusunan kurikulum, koordinasi pemateri, serta pengelolaan
              logistik kegiatan. Membantu pelaksanaan program bimbingan belajar
              dan diskusi kelompok untuk mendukung pemahaman mahasiswa terhadap
              materi kuliah. Turut mengembangkan sistem manajemen kegiatan dan
              dokumentasi materi pelatihan agar dapat diakses dan digunakan oleh
              mahasiswa HIMTI secara berkelanjutan. Terlibat dalam evaluasi
              kegiatan dan penyusunan rekomendasi strategis untuk pengembangan
              program pelatihan ke depan. Berkolaborasi lintas departemen dan
              dengan narasumber eksternal untuk memastikan program pendidikan
              berjalan relevan, efektif, dan adaptif terhadap perkembangan
              teknologi terbaru.
            </p>
          </div>
        </div>
      </motion.section>

      {}
      <motion.div
        id="education"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <Education />
      </motion.div>

      {}
      <motion.div
        id="contact"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <Contact />
      </motion.div>

      {}
      <footer className="w-full bg-black/50 text-center py-6 mt-10 relative z-10">
        <p className="text-gray-500">
          © 2025 Andhika Presha Saputra. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
