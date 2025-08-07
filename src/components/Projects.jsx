// import { motion } from "framer-motion";
// import ecommerceImg from '../assets/E-Commerce.jpg';
// import cropPredictionImg from '../assets/Crop-Prediction.jpg';

// import crowdCountingImg from '../assets/Crowd-Count.jpg';
// import todoImg from '../assets/Todolist.jpeg';
// import movie from '../assets/movie.png';
// import medi from '../assets/bot.webp';
// import blog from '../assets/Blog.png';

// const projects = [
//   {
//     id: 1,
//     title: "E-Commerce Web Application",
//     description:
//       "A full-stack platform with customer and seller portals, secure authentication using JWT, product management features, and Stripe integration for seamless online payments. Built using the MERN stack and Tailwind CSS.",
//     image: ecommerceImg, // Replace with actual image
//   },
//   {
//     id: 2,
//     title: "Crop Prediction System",
//     description:
//       "Machine learning-based app to recommend crops based on soil nutrients and weather. Integrated with Google Gemini API to provide real-time crop insights after prediction. Model deployed using Flask and scikit-learn.",
//     image: cropPredictionImg // Replace with actual image
//   },
//   {
//     id: 3,
//     title: "Dual-Approach Crowd Counting System",
//     description:
//       "Deep learning-based real-time and image-based crowd counting tool. Utilizes MTCNN for live detection and VGG16-based CNN for static density heatmaps. Built using PyTorch, OpenCV, and Matplotlib.",
//     image: crowdCountingImg
//   },
//   {
//     id: 4,
//     title: "To-Do List App",
//     description:
//       "A sleek and minimal productivity app to manage daily tasks with features like marking completion, deleting tasks, and persistent local storage. Built using React and Tailwind CSS.",
//     image: todoImg // Replace with actual image
//   },
//   {
//     id: 5,
//     title: "Movie Recommendation System",
//     description:
//       "A recommendation app built using machine learning and collaborative filtering. Allows users to search and view movie suggestions based on user preferences. Built with Python, pandas, and Streamlit.",
//     image: movie // Replace with actual image
//   },
//   {
//     id: 6,
//     title: "Medical Chatbot",
//     description:
//       "An intelligent chatbot to assist users with basic medical queries using NLP. Integrated with a custom knowledge base and deployed using Flask and HTML/CSS for the frontend.",
//     image: medi, // Replace with actual image
//   },
//   {
//     id: 7,
//     title: "Personal Blog Website",
//     description:
//       "A fully responsive and modern blog platform built with React. Users can explore blog posts,wite posts edit and delete, and featured content with a clean UI and smooth navigation.",
//     image: blog // Replace with actual image
//   },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="py-16 bg-[#0f0f0f] text-white">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold text-purple-400">My Recent Works</h2>
//         <p className="text-gray-400 mt-2 text-lg">Here are a few projects I’ve built recently</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8 max-w-6xl mx-auto">
//         {projects.map((project) => (
//           <motion.div
//             key={project.id}
//             className="bg-[#1f1f1f] rounded-xl overflow-hidden shadow-md hover:shadow-purple-700 transition-shadow duration-300"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
//             <div className="p-5">
//               <h3 className="text-xl font-semibold text-purple-300 mb-2">{project.title}</h3>
//               <p className="text-gray-300 text-sm">{project.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
import { motion } from "framer-motion";
import ecommerceImg from '../assets/E-Commerce.jpg';
import cropPredictionImg from '../assets/Crop-Prediction.jpg';
import crowdCountingImg from '../assets/Crowd-Count.jpg';
import todoImg from '../assets/Todolist.jpeg';
import movie from '../assets/movie.png';
import medi from '../assets/bot.webp';
import blog from '../assets/Blog.png';

const projects = [
  {
    id: 1,
    title: "E-Commerce Web Application",
    description:
      "A full-stack platform with customer and seller portals, secure authentication using JWT, product management features, and Stripe integration for seamless online payments. Built using the MERN stack and Tailwind CSS.",
    image: ecommerceImg,
    github: "https://github.com/your-username/ecommerce-app",
    liveDemo: null,
  },
  {
    id: 2,
    title: "Crop Prediction System",
    description:
      "Machine learning-based app to recommend crops based on soil nutrients and weather. Integrated with Google Gemini API to provide real-time crop insights after prediction. Model deployed using Flask and scikit-learn.",
    image: cropPredictionImg,
    github: "https://github.com/your-username/crop-prediction",
    liveDemo: null,
  },
  {
    id: 3,
    title: "Dual-Approach Crowd Counting System",
    description:
      "Deep learning-based real-time and image-based crowd counting tool. Utilizes MTCNN for live detection and VGG16-based CNN for static density heatmaps. Built using PyTorch, OpenCV, and Matplotlib.",
    image: crowdCountingImg,
    github: "https://github.com/your-username/crowd-counting",
    liveDemo: null,
  },
  {
    id: 4,
    title: "To-Do List App",
    description:
      "A sleek and minimal productivity app to manage daily tasks with features like marking completion, deleting tasks, and persistent local storage. Built using React and Tailwind CSS.",
    image: todoImg,
    github: "https://github.com/your-username/todo-app",
    liveDemo: null,
  },
  {
    id: 5,
    title: "Movie Recommendation System",
    description:
      "A recommendation app built using machine learning and collaborative filtering. Allows users to search and view movie suggestions based on user preferences. Built with Python, pandas, and Streamlit.",
    image: movie,
    github: "https://github.com/your-username/movie-recommendation",
    liveDemo: null,
  },
  {
    id: 6,
    title: "Medical Chatbot",
    description:
      "An intelligent chatbot to assist users with basic medical queries using NLP. Integrated with a custom knowledge base and deployed using Flask and HTML/CSS for the frontend.",
    image: medi,
    github: "https://github.com/your-username/medical-chatbot",
    liveDemo: null,
  },
  {
    id: 7,
    title: "Personal Blog Website",
    description:
      "A fully responsive and modern blog platform built with React. Users can explore blog posts, write, edit and delete posts, and enjoy a clean UI with smooth navigation.",
    image: blog,
    github: "https://github.com/your-username/blog-app",
    liveDemo: "https://your-blog-live-url.com", // Replace with actual deployed link
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-[#0f0f0f] text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-purple-400">My Recent Works</h2>
        <p className="text-gray-400 mt-2 text-lg">Here are a few projects I’ve built recently</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-[#1f1f1f] rounded-xl overflow-hidden shadow-md hover:shadow-purple-700 transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-5 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold text-purple-300 mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              </div>
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 transition"
                >
                  GitHub
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
