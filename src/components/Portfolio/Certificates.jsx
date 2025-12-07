import React from "react";
import Frontend from "../../assets/Certificates/Frontend.png";
import Python from "../../assets/Certificates/Python.png";
import Fund from "../../assets/Certificates/Fundemintals.png";
import ES from "../../assets/Certificates/ES.png";

const certificatesData = [
{
id: 1,
title: "Frontend Development Diploma",
img: Frontend,
description: "A certificate demonstrating completion of the Frontend Development Diploma, validating skills in HTML, CSS, JavaScript, and responsive web design.",
},
{
id: 2,
title: "Crash Course on Python",
img: Python,
description: "A certificate showcasing completion of a Python crash course, validating skills in programming basics, problem solving, and scripting.",
},
{
id: 3,
title: "Fundamentals of Programming",
img: Fund,
description: "A certificate demonstrating completion of programming fundamentals, validating knowledge in algorithms, logic, and coding practices.",
},
{
id: 4,
title: "Standard Embedded Systems Diploma",
img: ES,
description: "A certificate demonstrating completion of the Embedded Systems Diploma, validating skills in microcontrollers, hardware interfacing, and programming.",
},
];

const Certificates = () => {
return ( <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
{certificatesData.map((cert) => ( <div
       key={cert.id}
       className="border rounded-lg p-4 hover:scale-105 transition-transform bg-[#0d1025] flex flex-col items-center"
       data-aos="fade-up"
       data-aos-duration="600"
     > <img
         src={cert.img}
         alt={cert.title}
         className="rounded w-full h-auto max-h-64 object-contain"
       /> <h3 className="text-xl font-bold mt-2 text-white text-center">{cert.title}</h3> <p className="text-gray-300 mt-1 text-center">{cert.description}</p> </div>
))} </div>
);
};

export default Certificates;
export { certificatesData };
