// import { motion } from "framer-motion";
// import profilePic from '../assets/profile.jpg';
// const About = () => {
//   return (
//     <section id="about" className="min-h-screen flex items-center justify-center relative z-10 pt-6 pb-6">
//         <motion.img
//           src={profilePic}
//           alt="Profile"
//           className="w-48 h-48 rounded-full object-cover border-4 border-[#1f1f1f]"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         />
//          <motion.div
//         className="text-center px-4"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: true }}
//       >
//       <div className="max-w-3xl text-center">
//         <h2 className="text-4xl font-bold text-purple-400 mb-6">About Me</h2>
//         <p className="text-lg leading-relaxed text-gray-300 mb-4">
//           I'm <span className="text-purple-400 font-semibold">Anudeep</span>, a final-year Computer Science student at{" "}
//           <span className="text-purple-300 font-semibold">VIT-AP University</span>.
//           I'm deeply passionate about <span className="text-purple-300 font-semibold">full-stack web development</span> and{" "}
//           <span className="text-purple-300 font-semibold">machine learning</span>, always eager to explore and master new technologies.
//         </p>
//         <p className="text-lg leading-relaxed text-gray-300">
//           I’m proficient in <span className="text-purple-300 font-semibold">Java</span> and specialize in building modern web applications using the{" "}
//           <span className="text-purple-300 font-semibold">MERN stack</span>. Whether it's designing elegant frontends or developing efficient backends,
//           I love solving real-world problems through code.
//         </p>
//       </div>
//       <div className="mt-6 flex justify-center gap-6">
//   <a
//     href="https://github.com/Kollipakula"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="text-gray-300 hover:text-purple-400 text-2xl transition duration-300"
//   >
//     <i className="fab fa-github"></i>
//   </a>
//   <a
//     href="https://www.linkedin.com/in/kanudeep/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="text-gray-300 hover:text-purple-400 text-2xl transition duration-300"
//   >
//     <i className="fab fa-linkedin"></i>
//   </a>
//   <a
//     href="ksaianudeep1@gmail.com"
//     className="text-gray-300 hover:text-purple-400 text-2xl transition duration-300"
//   >
//     <i className="fas fa-envelope"></i>
//   </a>
// </div>

      
//       </motion.div>
//     </section>
//   );
// };

// export default About;

// import React from "react";
// import { FaGithub, FaLinkedin, FaInstagram, FaRobot, FaBrain } from "react-icons/fa";
// import { motion } from "framer-motion";
// import './Hero.css';

// const About = () => {
//   return (
//     <div id="about" className="min-h-screen py-20 px-4 bg-[#02050a] text-white">
//       <div className="max-w-screen-lg mx-auto">
//         {/* Header */}
//         <div className="text-center mb-10">
//           <h2 className="text-4xl sm:text-5xl font-bold text-purple-400">About Me</h2>
//           <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
//             I'm <span className="text-purple-400 font-semibold">Anudeep</span>, a final-year Computer Science student at{" "}
//             <span className="text-purple-300 font-semibold">VIT-AP University</span>. I'm deeply passionate about{" "}
//             <span className="text-purple-300 font-semibold">full-stack web development</span> and{" "}
//             <span className="text-purple-300 font-semibold">machine learning</span>, always eager to explore and master new technologies.
//           </p>
//         </div>

//         {/* Social Links */}
//         <div className="flex justify-center space-x-6 mt-6 text-2xl text-purple-300">
//           <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"><FaGithub /></a>
//           <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"><FaLinkedin /></a>
//           <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer"><FaInstagram /></a>
//         </div>

//         {/* Skills Section */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mt-16"
//         >
//           <h3 className="text-3xl font-semibold text-center text-purple-400 mb-6">Professional Skill Set</h3>

//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10 text-5xl text-gray-300 px-2">
//             {/* Java */}
//             <Skill icon="devicon-java-plain" name="Java" />
//             {/* Python */}
//             <Skill icon="devicon-python-plain" name="Python" />
//             {/* SQL */}
//             <Skill icon="devicon-mysql-plain" name="SQL" />
//             {/* ML */}
//             <Skill iconComponent={<FaRobot />} name="Machine Learning" />
//             {/* NLP */}
//             <Skill iconComponent={<FaBrain />} name="NLP" />
//             {/* Node.js */}
//             <Skill icon="devicon-nodejs-plain" name="Node.js" />
//             {/* MongoDB */}
//             <Skill icon="devicon-mongodb-plain" name="MongoDB" />
//             {/* React */}
//             <Skill icon="devicon-react-original" name="React" />
//             {/* HTML */}
//             <Skill icon="devicon-html5-plain" name="HTML" />
//             {/* CSS */}
//             <Skill icon="devicon-css3-plain" name="CSS" />
//             {/* JavaScript */}
//             <Skill icon="devicon-javascript-plain" name="JavaScript" />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// // Reusable Skill component
// const Skill = ({ icon, iconComponent, name }) => (
//   <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
//     {iconComponent ? (
//       <div className="text-4xl">{iconComponent}</div>
//     ) : (
//       <i className={`${icon} colored text-4xl`}></i>
//     )}
//     <span className="text-sm mt-2">{name}</span>
//   </div>
// );

// export default About;
import React from "react";
import { FaRobot, FaBrain } from "react-icons/fa";
import { motion } from "framer-motion";


// Animation container for staggering children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Delay between each skill
    },
  },
};

// Individual skill animation
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Skill Component
const Skill = ({ icon, iconComponent, name }) => (
  <motion.div
    variants={itemVariants}
    className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
  >
    {iconComponent ? (
      <div className="text-4xl">{iconComponent}</div>
    ) : (
      <i className={`${icon} colored text-4xl`}></i>
    )}
    <span className="text-sm mt-2">{name}</span>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Profile Image
          <img
            src={anudeep}
            alt="Anudeep"
            className="mx-auto w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-purple-500 shadow-lg object-cover"
          /> */}

          {/* Bio Text */}
          <div className="text-center md:text-left max-w-2xl">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm <span className="text-purple-400 font-semibold">Anudeep</span>, a final-year Computer Science student at{" "}
            <span className="text-purple-300 font-semibold">VIT-AP University</span>. I have a strong foundation in Java and I'm deeply passionate about{" "}
            <span className="text-purple-300 font-semibold">full-stack web development</span> and{" "}
            <span className="text-purple-300 font-semibold">machine learning</span>, always eager to explore and master new technologies.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-center text-purple-400 mb-8">Skills</h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10 text-5xl text-gray-300 px-2"
          >
            <Skill icon="devicon-java-plain" name="Java" />
            <Skill icon="devicon-python-plain" name="Python" />
            <Skill icon="devicon-mysql-plain" name="SQL" />
            <Skill iconComponent={<FaRobot />} name="Machine Learning" />
            <Skill iconComponent={<FaBrain />} name="NLP" />
            <Skill icon="devicon-nodejs-plain" name="Node.js" />
            <Skill icon="devicon-mongodb-plain" name="MongoDB" />
            <Skill icon="devicon-react-original" name="React" />
            <Skill icon="devicon-html5-plain" name="HTML" />
            <Skill icon="devicon-css3-plain" name="CSS" />
            <Skill icon="devicon-javascript-plain" name="JavaScript" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
