import { useRef } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const mailtoUrl = `mailto:chukspaul777@gmail.com?subject=Portfolio Message from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;

    window.location.href = mailtoUrl;
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="py-32 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">Contact Information</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your visions.
              </p>

              <div className="space-y-4">
                <a
                  href="https://wa.me/2349154100656?text=Hi%20I%20saw%20your%20portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl glass hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 text-2xl group-hover:scale-110 transition-transform">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp</div>
                    <div className="font-semibold text-slate-800 dark:text-white">+234 915 4100 656</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleEmailSubmit}
              className="grid gap-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="p-4 rounded-2xl glass focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="p-4 rounded-2xl glass focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                required
                className="p-4 rounded-2xl glass focus:outline-none focus:border-primary/50 transition-colors"
              />

              <button
                type="submit"
                className="mt-2 w-full px-8 py-4 rounded-2xl bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
