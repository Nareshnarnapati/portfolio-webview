import React from 'react'

import Header from '../Navbar'

import "./index.css"
const Projects = () => {
  return (
    <div>
        <Header/>
        <div className="project-item">
        <img src="https://i.ibb.co/Ch1cQx3/icons8-todo-list.gif" alt="todo-list" className="project-icon"/>
        <div className="detail-item">
            <h1 className="project-heading">
                Todos List
            </h1>
            <p className="project-para">
            A robust task tracking system with CRUD capabilities, crafted to simplify task management.<br/>

        ●	Designed with HTML, CSS and Bootstrap to ensure a user-friendly interface for managing tasks.<br/>
        ●	Dynamic UI updates through JavaScript event listeners and DOM operations for seamless CRUD operations.<br/>
        ●	Secure task persistence through local storage methods, ensuring that tasks are never lost.<br/>
        <span className="technologies">Technologies used:</span> HTML, CSS, JS, Bootstrap.

            </p>
        </div>
        </div>
        <div className="project-item">
        <div className="detail-item">
            <h1 className="project-heading">
                Jobby App
            </h1>
            <p className="project-para">
            Jobby App redefines job searching with seamless navigation, secure authentication, and persistent login state, all powered by React JS. This project showcases my ability to innovate and deliver user-centric solutions that set new standards in efficiency and accessibility.<br/>
●	Built pages for Login, Home, Jobs, and Job item details with React components, form inputs, and event handlers.<br/>
●	Implemented advanced security measures, including secure authentication mechanisms and persistent login state, to protect user data and privacy.<br/>
●	Ensured secure authentication with JWT tokens and REST API calls.<br/>
●	Seamless navigation between pages and facilitated real-time data exchange through efficient use of React Router and REST API calls.<br/>
●	Persisted login state with local storage and protected routes with React Router.<br/>

<span className="technologies">Technologies used:</span> React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token, Authorization, Authentication.

           
    </p>
        </div>
        <img src="https://i.ibb.co/HVqz30S/icons8-job-seeker-64.png" alt="icons8-job-seeker-64" className="project-icon2"/>
        </div>
        <div className="project-item">
        <img src="https://i.ibb.co/w484nVR/icons8-portfolio-80.png" alt="icons8-portfolio-80" className="project-icon3" />

        <div className="detail-item">
            <h1 className="project-heading">
                My-Portfolio
            </h1>
            <p className="project-para">
            Welcome to my portfolio project! Here, I showcase my passion for IT industry, through a collection of projects
            and work samples that highlight my skills, creativity, and dedication to excellence,
             showcasing not only my skills and creativity but also my relentless pursuit of innovation.<br/>


•   Led the development of a comprehensive portfolio showcasing skills, projects, and personal information.<br/>
•	Designed a welcoming homepage with a personal introduction and profile picture, enhancing user engagement.<br/>
•	Developed an About Me page providing concise insights into educational background, skills, and personal details.<br/>
•	Implemented a contact page with a user-friendly form for inquiries, utilizing React's useState hook for efficient form management.<br/>
•	Created a header component for seamless navigation across pages, ensuring a cohesive user experience.<br/>
•	Showcased projects with detailed descriptions and highlighted technologies used, demonstrating proficiency and expertise.<br/>
•	Presented skills in a visually appealing format, utilizing icons and concise descriptions to enhance readability and impact.<br/>

<span className="technologies">Technologies used:</span>React JS, JavaScript, CSS, Bootstrap, Routing, Event listeners.


            </p>
        </div>
    
       
        </div>
      
    </div>
  )
}

export default Projects
