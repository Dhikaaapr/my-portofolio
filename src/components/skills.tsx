"use client";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const skills = [
  { name: "JavaScript", logo: "/js.webp" },
  { name: "React", logo: "/react.png" },
  { name: "Next.js", logo: "/next.png" },
  { name: "Tailwind CSS", logo: "/tailwind.png" },
  { name: "TypeScript", logo: "/typescript.png" },
  { name: "Node.js", logo: "/node.png" },
  { name: "MySQL", logo: "/mysql.png" },
  { name: "Express", logo: "/express.jpg" },
];

export default function Skills() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 4, spacing: 15 },
    renderMode: "performance",
    drag: true,
    created(s) {
      s.moveToIdx(3, true, { duration: 7000 });
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 3, true, { duration: 7000 });
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 3, true, { duration: 7000 });
    },
  });

  return (
    <section
      id="skills"
      className="container mx-auto px-6 py-20 text-center relative z-10"
    >
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div ref={sliderRef} className="keen-slider">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex flex-col items-center justify-center p-6 border border-gray-700 rounded-xl bg-black/30 shadow-md"
          >
            <div className="relative w-16 h-16 mb-4">
              <Image
                src={skill.logo}
                alt={skill.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
