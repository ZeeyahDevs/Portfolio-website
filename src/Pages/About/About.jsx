import Navbar from "../../Components/Navbar/Navbar"

import './About.css';
const About = () => {
  return (
 
    <div>
      <Navbar /> 
      <div className="about-title">
        <h1 style={{textAlign:'center',padding: '10px',textTransform:'uppercase', color:'blue', fontWeight:800,fontSize:'40px',}}>About Me</h1>
  </div>
  <section className="about-section">
    <div className="about-text">
     <p>Hi, I'm <span>FAUZIYYAH OLATUNDE</span>,a passionate Frontend Developer skilled in HTML, 
     CSS, Bootstrap, JavaScript, and React,with a flair for building simple, responsive, and visually
      appealing websites, enhanced by my knowledge of UI/UX design,which helps me create better user-friendly designs.
      As I continue to grow,I'm working towards becoming  full-stack developer so I can handle both the frontend and backend
       of web application. </p>
    </div>

    <div className="about-skills">
     <div className="skill-1">
      <h1 style={{color: 'blue',padding: '20px',}}>Creative Thinking</h1> 
      <p style={{padding: '10px'}}>Like finding simple and smart way to solve problem.</p>
</div>

   <div className="skill-2">  
   <h1 style={{color: 'blue',padding: '20px',}}>UI/UX Design</h1> 
   <p style={{padding: '10px'}}>Focused on smooth and intuitive user experiences.</p>
</div>

  <div className="skill-3">
    <h1 style={{color: 'blue',padding: '20px',}}>Team-work</h1> 
    <p style={{padding: '10px'}}>Enjoy working with others and sharing ideas.</p>
  </div>

  <div className="skill-4">
    <h1 style={{color: 'blue',padding: '20px',}}>Willingness to Learn</h1> 
    <p style={{padding: '10px'}}>Always open to learning and improving.</p>
  </div>


    </div>
  </section>

       </div>
  )
}

export default About
