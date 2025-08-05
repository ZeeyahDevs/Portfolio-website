import Navbar from "../../Components/Navbar/Navbar"
import Image from '../../assets/image-home.png'
import './Home.css';

 
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="Home">
        <div>
          <h1>Hello,I'm ZeeyahDevs. <br/>A Front-end Developer</h1>
          <p>"With a passion for creating beautiful,
            responsive, and user-friendly websites.<br/>
             I have practiced frontend basics like building forms and layouts using HTML,<br/>
              CSS, Bootstrap, JavaScript, and React. I’ve also worked on UI/UX design projects,<br/>
             including landing pages and daily UI challenges, to improve my design skills".<br/>
             </p>
        </div>

        <img src={Image} className="Bg" />
      </div>
    </div>

  )
}
export default Home
