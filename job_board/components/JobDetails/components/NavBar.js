
import { useEffect } from "react"
import employeeProfilePage  from "../images/EmployeeProfileImage.svg"
import Shade from "../styles/NavBarStyle"

const NavBar = ({ isOpen, toggleDetails }) => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const NavBarFilter = document.querySelector('.NavBarFilter');
    const sticky = NavBarFilter.offsetTop;

    if (window.pageYOffset >= sticky) {
      NavBarFilter.classList.add('sticky');
    } else {
      NavBarFilter.classList.remove('sticky');
    }
  };
  return <Shade className="resizable">
<nav className="NavBarFilter">
  
  <div className="Logo"><span className="LogoText">logo</span> </div>
  <div>
      <summary onClick={toggleDetails}>
      <img src={employeeProfilePage} alt="Job post Page" style={{cursor:'pointer'}} className="Image1"  />
      </summary>
      {isOpen && (
        
        <div>
          <aside className="Profile">
  
  <button className="Group4" style={{cursor:'pointer'}} ><span className="Text">???</span></button>
     
  <button className="Group5" style={{cursor:'pointer'}}><span  className="Text">Dash Board</span></button>
      
  <button className="Group3" style={{cursor:'pointer'}}><span className="Text">Job Post</span></button>
      
  <button className="Group2" style={{cursor:'pointer'}}><span className="Setting">Setting</span></button>
      
  <button className="Logout" style={{cursor:'pointer'}}><span className="LogOut">Log Out</span></button>
     
</aside>
        </div>
      )}
    </div>
  
</nav>   

  </Shade>
  }

export default NavBar
