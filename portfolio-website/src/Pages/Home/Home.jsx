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
          <p>" with a passion for creating beautiful,<br />
            responsive, and user-friendly websites.<br /> </p>
        </div>

        <img src={Image} className="Bg" />
      </div>
    </div>

  )
}
export default Home
