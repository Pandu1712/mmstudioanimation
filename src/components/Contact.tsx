import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  /* ================= VALIDATION ================= */
  const validate = () => {
    const err: Record<string, string> = {};

    if (!form.name.trim()) err.name = "Name is required";

    if (!form.phone.trim()) {
      err.phone = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      err.phone = "Enter a valid 10-digit number";
    }

    if (!form.email.trim()) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = "Enter a valid email address";
    }

    if (!form.message.trim()) err.message = "Message is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = () => {
    if (!validate()) return;

    const whatsappNumber = "919121045950"; // 🔴 replace with your number

    const message = `
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Message:
${form.message}
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="bg-black text-gray-300 py-24">
      <div className="max-w-7xl mx-auto px-4 grid gap-16 lg:grid-cols-2">

        {/* ================= LEFT : FORM ================= */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Get in <span className="text-sky-400">Touch</span>
          </h2>

          <p className="text-lg mb-10">
            Let’s discuss your animation, VFX, or real-time production needs.
            Fill the form and connect instantly via WhatsApp.
          </p>

          <div className="space-y-6">

            {/* NAME */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full rounded-lg bg-white/5 border border-white/15
                           px-4 py-3 text-white placeholder-gray-400
                           focus:outline-none focus:border-sky-400
                           focus:ring-2 focus:ring-sky-400/40"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            {/* PHONE */}
            <div>
              <input
                type="text"
                inputMode="numeric"
                maxLength={10}
                placeholder="Mobile Number"
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value.replace(/\D/g, ""),
                  })
                }
                className="w-full rounded-lg bg-white/5 border border-white/15
                           px-4 py-3 text-white placeholder-gray-400
                           focus:outline-none focus:border-sky-400
                           focus:ring-2 focus:ring-sky-400/40"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full rounded-lg bg-white/5 border border-white/15
                           px-4 py-3 text-white placeholder-gray-400
                           focus:outline-none focus:border-sky-400
                           focus:ring-2 focus:ring-sky-400/40"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <textarea
                rows={5}
                placeholder="Your Message"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full rounded-lg bg-white/5 border border-white/15
                           px-4 py-3 text-white placeholder-gray-400 resize-none
                           focus:outline-none focus:border-sky-400
                           focus:ring-2 focus:ring-sky-400/40"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            {/* BUTTON */}
            <button
              onClick={handleSubmit}
              className="w-full py-4 rounded-lg bg-sky-400 text-black
                         font-bold tracking-wide
                         hover:scale-105 hover:bg-sky-300
                         transition-transform duration-300"
            >
              SEND VIA WHATSAPP
            </button>
          </div>
        </div>

        {/* ================= RIGHT : MAP ================= */}
        <div className="w-full h-[420px] sm:h-[480px] rounded-xl overflow-hidden
                        border border-white/10">
          <iframe
            title="Google Map"
            className="w-full h-full grayscale hover:grayscale-0 transition duration-500"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.20564483699!2d80.564089!3d16.414379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f700314d2391%3A0x4c94e829afb8cfc9!2sAPVAGA%20(Andhra%20Pradesh%20Vfx%20Animation%20Gaming%20Association)!5e0!3m2!1sen!2sin!4v1767062761964!5m2!1sen!2sin"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
