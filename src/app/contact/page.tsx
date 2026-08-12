"use client"
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import { FaSignalMessenger } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black px-4">

      <h1 className="text-4xl font-bold text-white mt-22 md:mt-0 mb-12">Get In Touch</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl bg-black shadow-lg rounded-2xl p-4 sm:p-6 md:p-8">

        <div className="relative flex items-center justify-center py-10 sm:py-12 md:py-16">
          <div className="start-building-card relative z-10 text-center p-10 rounded-2xl bg-[#060010]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="white-glow">
              <div className="flex items-center justify-center gap-6 mb-4">
          <a
            href="https://wa.me/917970731851"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors"
          >
            <FaWhatsapp size={40} />
          </a>
          <a
            href="https://t.me/rakeshvishwas"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500 transition-colors"
          >
            <FaTelegram size={40} />
          </a>
          <a
            href="https://signal.me/#eu/UmzMeIuYm7tGJm5A1mByyQP34vAMLt5n7rKVyM0CI1nPfAjuzwpIs7i6il61zuqb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors"
            title="Signal"
          >
            <FaSignalMessenger size={40} />
          </a>
        </div>

        <p className="text-center text-gray-800 dark:text-gray-200">
          +91 7970731851
        </p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center py-10 sm:py-12 md:py-16">
          <div className="start-building-card relative z-10 text-center p-10 rounded-2xl bg-[#060010]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="white-glow">
              <div className="flex items-center justify-center gap-3 mb-2">
                <a
                  href="mailto:contact@wish-light.com"
                  target="_blank"
            rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors"
                >
                  <MdEmail size={40} />
                </a>
              </div>
              <p className="text-center text-gray-800 dark:text-gray-200">
                contact@wish-light.com
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center py-10 sm:py-12 md:py-16">
          <div className="start-building-card relative z-10 text-center p-10 rounded-2xl bg-[#060010]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="white-glow">
              <div className="flex items-center justify-center gap-3 mb-2">
          <a
            href="https://maps.google.com/?q=Jabalpur,Madhya+Pradesh,India"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors"
          >
            <MdLocationPin size={40} />
          </a>
        </div>
        <p className="text-center text-gray-800 dark:text-gray-200">
          Jabalpur, Madhya Pradesh, India
        </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;
