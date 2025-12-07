import React, { useState } from "react";
import { FaGithub, FaChevronDown, FaChevronUp } from "react-icons/fa";
import FreshCart from "../../assets/Projects/E-commerce.png";
import GameOver from "../../assets/Projects/GameOver.png";
import Linko from "../../assets/Projects/Linko.png";
import Fokir from "../../assets/Projects/Fokir.png";
import FamilyBakery from "../../assets/Projects/FamilyBakery.png";
import Gerold from "../../assets/Projects/Gerold.png";
import Mealify from "../../assets/Projects/Mealify.png";
import LoginSystem from "../../assets/Projects/LoginSystem.png";
import SocialApp from "../../assets/Projects/SocialApp.png";
import StartFrameWork from "../../assets/Projects/StartFrameWork.png";

const projectsData = [
{ id: 1, title: "E-Commerce", img: FreshCart, description: "A simple e-commerce web app where users can browse products, add to cart, save favorites, and complete a fast, secure checkout.", Github:"[https://github.com/ahmedhossam196/E-commerce.git](https://github.com/ahmedhossam196/E-commerce.git)" },
{ id: 2, title: "Game Reviews", img: GameOver, description: "A simple game reviews website where users can explore games, read reviews, view ratings, and search for titles easily.", Github:"[https://github.com/ahmedhossam196/Game-Over.git](https://github.com/ahmedhossam196/Game-Over.git)" },
{ id: 3, title: "Linko SmartCare Bracelet", img: Linko, description: "A simple product website showcasing the Linko SmartCare Bracelet, highlighting its features, specs, and benefits clearly.", Github:"[https://github.com/ahmedhossam196/Graduation-Project.git](https://github.com/ahmedhossam196/Graduation-Project.git)" },
{ id: 4, title: "Fokir Portfolio", img: Fokir, description: "A personal portfolio website showcasing Fokir’s projects, skills, and achievements in a clean, easy-to-navigate layout.", Github:"[https://github.com/ahmedhossam196/Fokir-Project.git](https://github.com/ahmedhossam196/Fokir-Project.git)" },
{ id: 5, title: "Family Bakery", img: FamilyBakery, description: "A simple bakery website where users can view products, check details, and explore offerings in a clear, responsive layout.", Github:"[https://github.com/ahmedhossam196/Family-Bakery.git](https://github.com/ahmedhossam196/Family-Bakery.git)" },
{ id: 6, title: "Gerold Portfolio", img: Gerold, description: "A simple business website highlighting Gerold’s services, features, and portfolio in a clean, user-friendly layout.", Github:"[https://github.com/ahmedhossam196/Gerold-Project.git](https://github.com/ahmedhossam196/Gerold-Project.git)" },
{ id: 7, title: "Mealify", img: Mealify, description: "A simple meal planning website where users can explore recipes, track meals, and manage plans in an easy-to-use interface.", Github:"[https://github.com/ahmedhossam196/Mealify.git](https://github.com/ahmedhossam196/Mealify.git)" },
{ id: 8, title: "Login System", img: LoginSystem, description: "A simple authentication system website with user registration, login, password recovery, and secure access management.", Github:"[https://github.com/ahmedhossam196/Login-System.git](https://github.com/ahmedhossam196/Login-System.git)" },
{ id: 9, title: "Social App", img: SocialApp, description: "A simple social networking website where users can connect, post updates, like content, and follow others easily.", Github:"[https://github.com/ahmedhossam196/Social-App.git](https://github.com/ahmedhossam196/Social-App.git)" },
{ id: 10, title: "Start FrameWork", img: StartFrameWork, description: "A simple website showcasing the Start Framework project, its features, and documentation in a concise, easy-to-read format.", Github:"[https://github.com/ahmedhossam196/Start-Framework.git](https://github.com/ahmedhossam196/Start-Framework.git)" },
];

const Projects = () => {
const [showAll, setShowAll] = useState(false);
const projectsToShow = showAll ? projectsData : projectsData.slice(0, 6);

return ( <div className="flex flex-col items-start w-full"> <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
{projectsToShow.map((project) => ( <div
         key={project.id}
         className="border rounded-lg p-4 hover:scale-105 transition-transform bg-[#0d1025] flex flex-col items-center"
         data-aos="fade-up"
         data-aos-duration="600"
       > <img
           src={project.img}
           alt={project.title}
           className="rounded w-full h-48 object-cover"
         /> <h3 className="text-xl font-bold mt-2 text-white text-center">{project.title}</h3> <p className="text-gray-300 mt-1 text-center">{project.description}</p> <div className="mt-4"> <a
             href={project.Github}
             target="_blank"
             rel="noreferrer"
             className="flex items-center justify-center gap-2 px-4 py-2 bg-linear-to-r from-[#5f27cd] to-[#341f97] text-white rounded shadow-lg hover:opacity-90 transition"
           > <FaGithub size={18} /> GitHub </a> </div> </div>
))} </div>

```
  {/* See More / See Less button */}
  <button
    onClick={() => setShowAll(!showAll)}
    className="cursor-pointer mt-6 px-6 py-2 bg-linear-to-r from-[#5f27cd] to-[#341f97] text-white rounded shadow-lg flex items-center gap-2 hover:opacity-90 transition"
    data-aos="fade-up"
    data-aos-duration="600"
  >
    {showAll ? (
      <>
        See Less <FaChevronUp />
      </>
    ) : (
      <>
        See More <FaChevronDown />
      </>
    )}
  </button>
</div>


);
};

export default Projects;
export { projectsData };
