"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_tc5mtr2",
        "template_ja9ervo",
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        "eg_PZe-SVDLgli38x"
      )
      .then(
        () => {
          alert("✅ Pesan berhasil dikirim!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          alert("❌ Gagal mengirim pesan. Coba lagi.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {}
        <div>
          <h3 className="text-xl font-semibold mb-4">Let&apos;s Connect</h3>
          <p className="text-gray-600 mb-6">
            I&apos;m always interested in hearing about new opportunities and
            exciting projects. Whether you have a question or just want to say
            hi, feel free to reach out!
          </p>

          <div className="space-y-6">
            {}
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-md">
                <FaEnvelope className="text-xl text-gray-700" />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600">andhika0143@gmail.com</p>
              </div>
            </div>

            {}
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-md">
                <FaPhone className="text-xl text-gray-700" />
              </div>
              <div>
                <h4 className="font-semibold">WhatsApp</h4>
                <p className="text-gray-600">+62 821-1131-9441</p>
              </div>
            </div>

            {}
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-md">
                <FaMapMarkerAlt className="text-xl text-gray-700" />
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-600">
                  South Jakarta, DKI Jakarta, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="bg-black p-6 md:p-8 rounded-xl shadow-md">
          <h4 className="font-semibold mb-4 text-white">Send Message</h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-md px-4 py-2 w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-md px-4 py-2 w-full"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="border rounded-md px-4 py-2 w-full relative z-50"
              required
            />
            <textarea
              rows={4}
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="border rounded-md px-4 py-2 w-full resize-none relative z-50"
              required
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 bg-green-400 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition disabled:opacity-50 relative z-50"
            >
              <FaPaperPlane />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
