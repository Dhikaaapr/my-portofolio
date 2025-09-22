"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tech: string;
  images: {
    src: string;
    desc: string;
  }[];
}

export default function Project() {
  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description:
        "Website e-commerce yang menyediakan berbagai produk kesehatan mental, mulai dari buku, alat relaksasi, hingga layanan konsultasi online.",
      tech: "Next.js, Tailwind CSS",
      images: [
        {
          src: "/web_portofolio.png",
          desc: "Halaman utama portofolio yang menampilkan informasi pribadi, skill, dan sosial media.",
        },
      ],
    },
    {
      title: "E-Commerce App",
      description:
        "Website kesehatan mental yang menyediakan berbagai fitur untuk membantu pengguna dalam menjaga kesehatan mental mereka.",
      tech: "React.js, Express, MySQL",
      images: [
        {
          src: "/login_calmora.svg",
          desc: "pengguna dapat melakukan login dengan mudah menggunakan autentifikasi yang aman, seperti Google Sign-In.",
        },
        {
          src: "/artikel_calmora.svg",
          desc: "Artikel disusun untuk memberikan informasi dan panduan kepada pengguna mengenai berbagai topik terkait kesehatan mental.",
        },
        {
          src: "/chatbot_calmora.png",
          desc: "Pengguna dapat mengetik pertanyaan atau memilih dari daftar saran untuk mendapatkan jawaban yang relevan dari chatbot.",
        },
        {
          src: "/quiz_calmora.svg",
          desc: "Setelah menyelesaikan quiz, pengguna akan menerima rekomendasi artikel yang sesuai dengan hasil quiz.",
        },
        {
          src: "/council_calmora.png",
          desc: "Fitur ini memungkinkan pengguna memilih konselor dan melakukan pembayaran melalui metode yang tersedia, pengguna dapat memilih untuk melakukan pembayaran dengan kartu kredit, transfer bank, atau metode pembayaran digital lainnya.",
        },
      ],
    },
    {
      title: "Blog Platform",
      description:
        "Website e-commerce yang menyediakan berbagai produk kesehatan mental, mulai dari buku, alat relaksasi, hingga layanan konsultasi online.",
      tech: "Node.js, MongoDB, Tailwind CSS",
      images: [
        {
          src: "/web_portofolio.png",
          desc: "Tampilan halaman utama blog dengan daftar artikel.",
        },
      ],
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedProject]);

  return (
    <section id="project" className="container mx-auto px-6 py-20 relative">
      <h2 className="text-3xl font-bold mb-8 text-center">Projek Saya</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="p-6 bg-black/30 border border-gray-700 rounded-xl shadow-md hover:scale-[1.02] transition"
          >
            <div className="w-full h-48 relative mb-4">
              <Image
                src={project.images[0].src}
                alt={project.title}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <p className="text-sm text-green-400 mt-2">{project.tech}</p>
            <button
              onClick={() => setSelectedProject(project)}
              className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Lihat Project
            </button>
          </div>
        ))}
      </div>

      {}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-xl max-w-4xl w-full relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-semibold mb-6">
              {selectedProject.title}
            </h3>

            <div className="space-y-8">
              {selectedProject.images.map((img, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row gap-4 items-start"
                >
                  <div className="relative w-full sm:w-1/2 h-56">
                    <Image
                      src={img.src}
                      alt={`${selectedProject.title} ${idx + 1}`}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="sm:w-1/2">
                    <p className="text-gray-300">{img.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-green-400 mt-6">
              Teknologi: {selectedProject.tech}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
