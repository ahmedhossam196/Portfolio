import React from "react";
import { Sparkles, Mail, Phone } from "lucide-react";

const Contact = () => {
return ( <div
   name="contact"
   className="w-full min-h-screen text-white "
 > <div className="max-w-5xl mx-auto flex flex-col justify-center w-full h-full px-4">

    {/* Title */}
    <div className="text-center mb-12 animate-fadeInUp">
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#6366f1] to-[#a855f7]">
        Contact
      </h2>
      <p className="mt-2 text-gray-400 max-w-2xl text-base sm:text-lg flex items-center justify-center gap-2 mx-auto">
        <Sparkles className="w-6 h-6 text-purple-400" />
        Let's create something amazing together!
        <Sparkles className="w-6 h-6 text-purple-400" />
      </p>
    </div>

    {/* Contact Form */}
    <div className="flex justify-center items-center animate-fadeIn">
      <form
        action="https://getform.io/f/aqoqnrma"
        method="POST"
        className="flex flex-col w-full md:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="p-3 mb-4 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-purple-400 transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="p-3 mb-4 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-purple-400 transition"
        />
        <textarea
          name="message"
          placeholder="Enter your message"
          rows="8"
          className="p-3 mb-4 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-purple-400 transition"
        ></textarea>

        <button
          type="submit"
          className="text-white cursor-pointer bg-linear-to-r from-[#5f27cd] to-[#341f97] px-6 py-3 mt-4 mx-auto rounded-2xl flex items-center justify-center gap-2 hover:scale-105 transition duration-300 font-medium"
        >
         Send
          <Mail className="w-5 h-5" />
        </button>
      </form>
    </div>

    {/* Direct Contact Info */}
    <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-8 animate-fadeInUp" data-aos="fade-up" data-aos-duration="1000">
      <a href="mailto:ahmedhossam2874@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition">
        <Mail className="w-5 h-5" /> ahmedhossam2874@gmail.com
      </a>
      <a href="tel:+201154346699" className="flex items-center gap-2 text-gray-300 hover:text-white transition">
        <Phone className="w-5 h-5" /> +20 1154346699
      </a>
    </div>

  </div>
</div>


);
};

export default Contact;
