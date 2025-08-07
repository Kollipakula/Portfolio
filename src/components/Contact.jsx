import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#0d0d0d] text-white">
      <motion.div
        className="max-w-2xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-300 mb-6">
  I'm currently seeking full-time opportunities or Internships  in software development. If you think I’d be a good fit for your team or project, feel free to reach out!
</p>


        <a href="mailto:your.email@example.com" className="text-purple-300 underline text-lg font-medium hover:text-purple-500">
          ksaianudeep1@gmail.com
        </a>

        <div className="flex justify-center gap-6 mt-6 text-2xl text-gray-400">
          <a href="https://github.com/kollipakula" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/kanudeep" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
            <FaTwitter />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;


