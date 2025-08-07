

// import React from "react";
// import { Typewriter } from "react-simple-typewriter";
// import './Hero.css';


// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">

//       {/* Stars Background */}
//       <div className="stars" />
//       <div className="shooting-star" />

//       {/* Hero Content */}
//       <div className="text-center px-6 z-10">
//         <h2 className="text-4xl md:text-6xl font-bold mb-4 text-purple-400 drop-shadow">
//           <span>Hi, I'm </span>
//           <span className="text-purple-500">
//             <Typewriter
//               words={['Anudeep 👋', 'a Java Developer', 'a MERN Stack Dev', 'an ML Enthusiast']}
//               loop={true}
//               cursor
//               cursorStyle="|"
//               typeSpeed={70}
//               deleteSpeed={50}
//               delaySpeed={1000}
//             />
//           </span>
//         </h2>

//         <p className="text-lg md:text-xl text-gray-300 mb-6">
//           Full-Stack Developer | ML Enthusiast  
//         </p>

//         <div className="flex justify-center gap-4">
//           <a
//   href="https://drive.google.com/file/d/1o2sVFL0j6GAIffneesw8NMXl5RjL__Le/view?usp=sharing"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
// >
//   View Resume
// </a>

//           <button className="border-2 border-purple-600 text-purple-400 px-6 py-2 rounded-full hover:bg-purple-800 transition">
//             Contact Me
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;import React from "react";
import { Typewriter } from "react-simple-typewriter";
import './Hero.css';
import profilePic from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">

      {/* Twinkling Stars + Shooting Star */}
      <div className="stars">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      <div className="shooting-star" />

      {/* Hero Content */}
      <div className="text-center px-4 sm:px-6 md:px-8 lg:px-12 z-10 w-full max-w-4xl">
        {/* Profile Image */}
        <img
          src={profilePic}
          alt="Anudeep"
          className="mx-auto mb-6 w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full border-4 border-purple-500 shadow-lg object-cover"
        />

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-purple-400 drop-shadow">
          <span>Hi, I'm </span>
          <span className="text-purple-500">
            <Typewriter
              words={['Anudeep 👋', 'a Java Developer', 'a MERN Stack Dev', 'an ML Enthusiast']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 px-2 sm:px-6">
          Full-Stack Developer | ML Enthusiast
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://drive.google.com/file/d/1o2sVFL0j6GAIffneesw8NMXl5RjL__Le/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition text-sm sm:text-base"
          >
            View Resume
          </a>

          <button className="border-2 border-purple-600 text-purple-400 px-6 py-2 rounded-full hover:bg-purple-800 transition text-sm sm:text-base">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
