
import Navbar from '../../Components/Navbar/Navbar'
import Image from '../../assets/Card.png'
import Image2 from '../../assets/Landing-p.png'
import Image3 from '../../assets/Sign-up.png'
import Image4 from '../../assets/Login.png'
import Image5 from '../../assets/Calc.png'
import Image6 from '../../assets/Zoom.png'








import './Project.css';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <div className="project-title">
        <h1 style={{textAlign:'center',padding: '10px',textTransform:'uppercase', color:'blue', fontWeight:800,fontSize:'40px',}}>My Projects</h1>
  </div>
    <div className='Project-done'>
      <div className='img-1'>
      <img src = {Image} style ={{height: '200px', width:'250px'}}/>
      </div>
      <div className='img-2'>
      <img src = {Image2} style ={{height: '300px', width:'450px'}}/>
      </div>
      <div className='img-3'>
      <img src = {Image3}/>
      </div>
      <div className='img-4'>
      <img src = {Image4}/>
      </div>
      <div className='img-5'>
      <img src = {Image5}/>
      </div>
      <div className='img-6'>
      <img src = {Image6}/>
      </div>



</div>
    </div>
  )
}

export default Project
