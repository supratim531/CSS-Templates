import "./Navbar1.css";
import navBrand from "../../assets/pic1.png";

function Navbar1() {
  const hamburgerAnimation = () => {
    let navMenu = document.getElementsByClassName("nav-menu")[0];
    let hamburger = document.getElementsByClassName("hamburger")[0].childNodes[0];
    let bar1 = hamburger.childNodes[0];
    let bar2 = hamburger.childNodes[1];
    let bar3 = hamburger.childNodes[2];

    if (bar2.style.opacity === "0") {
      bar1.style.transform = "rotate(0deg)";
      bar2.style.opacity = 1;
      bar3.style.transform = "rotate(0deg)";
      navMenu.classList.add("hidden");
    } else {
      bar1.style.transform = "rotate(45deg)";
      bar2.style.opacity = 0;
      bar3.style.transform = "rotate(-45deg)";
      navMenu.classList.remove("hidden");
    }
  }

  return (
    <>
      <nav className="sticky top-0 p-5 bg-[#1e2c39]">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="md:px-6">
            <img className="cursor-pointer" src={navBrand} alt={"nav-logo"} />
          </div>
          <div className="hamburger md:hidden inline-flex ml-auto" onClick={hamburgerAnimation}>
            <div className="space-y-2">
              <div className="bar-1"></div>
              <div className="bar-2"></div>
              <div className="bar-3"></div>

              {/* <div className="w-[34px] h-[4px] rounded-full bg-white"></div>
              <div className="w-[34px] h-[4px] rounded-full bg-white"></div>
              <div className="w-[34px] h-[4px] rounded-full bg-white"></div> */}
            </div>
          </div>
          <div className="nav-menu hidden mt-4 md:mt-0 md:ml-4 w-full md:w-auto md:inline-flex md:flex-grow">
            <ul className="ml-auto md:inline-flex md:flex-row text-xl md:text-lg font-medium text-white">
              <li className="px-2.5 py-4 md:px-6 md:py-2 cursor-pointer rounded hover:bg-[#03a3bd]">Home</li>
              <li className="px-2.5 py-4 md:px-6 md:py-2 cursor-pointer rounded hover:bg-[#03a3bd]">About</li>
              <li className="px-2.5 py-4 md:px-6 md:py-2 cursor-pointer rounded hover:bg-[#03a3bd]">Contact</li>
              <li className="px-2.5 py-4 md:px-6 md:py-2 cursor-pointer rounded hover:bg-[#03a3bd]">Service</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar1;
