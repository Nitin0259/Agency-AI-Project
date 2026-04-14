import React from "react";
import contact_img from "../assets/contact_image.jpg";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const Contact = () => {
  const submitForm = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "af8fecfa-3197-4034-bc6d-86fe65cc5114");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission!");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <section
        id="Contact"
        className="py-20 md:py-32 bg-slate-950 relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl "></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className="text-center mb-16"
            style={{ opacity: "1", transform: "none" }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Let's Build Something{" "}
              <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="text-lg sm:text-2xl md:text-xl lg:text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
              style={{ opacity: "1", transform: "none" }}
            >
              Ready to transform your business with AI? Get in touch with our
              team today.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <motion.h3
                initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
                className="text-white text-3xl mb-4">Get In Touch</motion.h3>

                <motion.p 
                initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
                className="text-gray-400 leading-relaxed">
                  Have a project in mind? We'd love to hear about it. Our team
                  is ready to help you leverage AI to achieve your business
                  goals.
                </motion.p>
              </div>

              <div className="space-y-6">
                {/* Contact Info */}
                <motion.div
                  initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration:0.7, delay: 0.3}}
        viewport={{once: true}}
                  className="flex items-start gap-4"
                  style={{ opacity: "1", transform: "none" }}
                >
                  <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-mail w-6 h-6 text-white"
                      data-fg-bj0725="1.20:1.7930:/src/app/components/Contact.tsx:79:21:3181:44:e:item.icon"
                      data-fgid-bj0725=":r64:"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-1">Email</p>
                    <h4 className="text-white">hello@aiinnovate.com</h4>
                  </div>
                </motion.div>

                <motion.div
                  initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration:0.7, delay: 0.4}}
        viewport={{once: true}}
                  className="flex items-start gap-4"
                  style={{ opacity: "1", transform: "none" }}
                >
                  <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-phone w-6 h-6 text-white"
                      data-fg-bj0725="1.20:1.7930:/src/app/components/Contact.tsx:79:21:3181:44:e:item.icon"
                      data-fgid-bj0725=":r6a:"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-1">Phone</p>
                    <h4 className="text-white">+1 (555) 123-4567</h4>
                  </div>
                </motion.div>

                <motion.div
                  initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration:0.7, delay: 0.5}}
        viewport={{once: true}}
                  className="flex items-start gap-4"
                  style={{ opacity: "1", transform: "none" }}
                >
                  <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-map-pin w-6 h-6 text-white"
                      data-fg-bj0725="1.20:1.7930:/src/app/components/Contact.tsx:79:21:3181:44:e:item.icon"
                      data-fgid-bj0725=":r6g:"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-1">Location</p>
                    <h4 className="text-white">
                      123 Innovation Street, Tech City
                    </h4>
                  </div>
                </motion.div>

                <motion.div
                initial={{opacity: 0, y: 25}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration:0.6, delay: 0.6}}
        viewport={{once: true}}
                className="hidden lg:block relative rounded-2xl overflow-hidden mt-8">
                  <img
                    src={contact_img}
                    className="w-full h-48 object-cover"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 to-transparent"></div>
                </motion.div>
              </div>
            </div>

            <motion.div
            initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            style={{ opacity: "1", transform: "none" }}>
              <form className="space-y-10" onSubmit={submitForm}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block text-sm mb-2 text-gray-400"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-gray-500 placeholder:text-gray-500"
                      placeholder="First name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="firstname"
                      className="block text-sm mb-2 text-gray-400"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-gray-500 placeholder:text-gray-500"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 text-gray-400"
                  >
                    Emial Id
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-gray-500 placeholder:text-gray-500"
                    placeholder="Enter your emial"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm mb-2 text-gray-400"
                  >
                    Message
                  </label>
                  
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3
                  bg-slate-800/50 border border-slate-700 rounded-lg focus:border-purple-500 focus:border-outline-none transition-colors resize-none text-gray-500 placeholder:text-gray-500"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-white text-lg font-medium flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25"
                >
                  Send Message
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-send w-5 h-5"
                    data-fg-bj0761="1.20:1.7930:/src/app/components/Contact.tsx:184:17:7783:28:e:Send::::::dtm"
                    data-fgid-bj0761=":r7a:"
                  >
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                    <path d="m21.854 2.147-10.94 10.939"></path>
                  </svg>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
