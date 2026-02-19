import { useRef } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaGithub, FaTwitter } from "react-icons/fa";

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
      className="py-32 px-6 relative"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-black">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-800 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-[2rem] glass border-slate-200 h-full">
              <h3 className="text-2xl font-bold mb-6 text-black">Let's Connect</h3>
              <p className="text-slate-700 text-lg leading-relaxed mb-10">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your visions.
              </p>

              <div className="space-y-4">
                <a
                  href="https://wa.me/2349154100656?text=Hi%20I%20saw%20your%20portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-500/30 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-600 text-3xl group-hover:scale-110 transition-transform">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-1">WhatsApp</div>
                    <div className="text-lg font-bold text-black group-hover:text-blue-600 transition-colors">+234 915 4100 656</div>
                  </div>
                </a>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://github.com/cKm-IceCold"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-500/30 transition-all group"
                  >
                    <FaGithub className="text-3xl text-black mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">GitHub</span>
                  </a>
                  <a
                    href="https://x.com/dsignVillian"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-500/30 transition-all group"
                  >
                    <FaTwitter className="text-3xl text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">X / Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              ref={formRef}
              onSubmit={handleEmailSubmit}
              className="grid gap-6 p-8 rounded-[2rem] glass border-slate-200"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black ml-4">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500/50 transition-colors text-black"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black ml-4">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500/50 transition-colors text-black"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-black ml-4">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500/50 transition-colors text-black"
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full px-8 py-4 rounded-xl bg-blue-600 text-white font-extrabold shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
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
