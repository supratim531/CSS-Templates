import React from "react";

function Footer1() {
  return (
    <>
      <div className="mt-[7.45rem]"></div>
      <footer className="text-white bg-[#161616]">
        <div className="p-5 flex flex-col space-y-4 justify-center lg:space-y-0 lg:flex-row lg:gap-4">
          <div className="p-2 flex flex-col space-y-6 w-[240px] sm:w-[400px]">
            <div className="text-5xl sm:text-6xl font-semibold" style={{ fontFamily: '"Roboto Slab", serif' }}>ELHARD</div>
            <div className="font-[Roboto] font-medium">
              “Elhard Group” is one of the leading distributors of Cables, Wires, Lighting and allied products with a pan
              India presence. Operating from various locations in India with Corporate presence at Kolkata.
            </div>
            <div className="flex flex-col space-y-2">
              <div className="font-[Poppins] font-bold">FOLLOW US:</div>
              <ul className="flex items-center gap-8 text-yellow-400">
                <li className="cursor-pointer duration-300 text-white hover:text-yellow-400"><i className="fa-brands fa-facebook-f" /></li>
                <li className="cursor-pointer duration-300 text-white hover:text-yellow-400"><i className="fa-brands fa-twitter" /></li>
                <li className="cursor-pointer duration-300 text-white hover:text-yellow-400"><i className="fa-brands fa-instagram" /></li>
                <li className="cursor-pointer duration-300 text-white hover:text-yellow-400"><i className="fa-brands fa-google-plus-g" /></li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="p-2 flex flex-col w-[240px] sm:w-[400px] font-[Roboto]">
            <div className="text-xl font-bold">GET IN TOUCH</div>
            <div className="hidden lg:block mt-1 h-0.5 bg-yellow-400" />
            <ul className="mt-6 flex flex-col space-y-6">
              <li className="flex space-x-2">
                <div className="self-start px-3 py-2 rounded bg-yellow-400">
                  <i className="fa-solid fa-location-dot text-black" />
                </div>
                <div className>
                  <div className="font-bold">ADDRESS</div>
                  <div className="text-sm">
                    ELHARD MARKETING LIMITED, 1510 DIAMOND HERITAGE 15th FLOOR, 16 Strand Road KOLKATA 700001
                  </div>
                </div>
              </li>
              <li className="flex space-x-2">
                <div className="self-start px-3 py-2 rounded bg-yellow-400">
                  <i className="fa-solid fa-phone text-black" />
                </div>
                <div className>
                  <div className="font-bold">PHONE</div>
                  <div className="text-sm">
                    +91 3322428411
                  </div>
                </div>
              </li>
              <li className="flex space-x-2">
                <div className="self-start px-3 py-2 rounded bg-yellow-400">
                  <i className="fa-solid fa-fax text-black" />
                </div>
                <div className>
                  <div className="font-bold">FAX</div>
                  <div className="text-sm">
                    +91 332230 5687
                  </div>
                </div>
              </li>
              <li className="flex space-x-2">
                <div className="self-start px-3 py-2 rounded bg-yellow-400">
                  <i className="fa-solid fa-envelope text-black" />
                </div>
                <div className>
                  <div className="font-bold">EMAIL</div>
                  <div className="text-sm">
                    eml@elhard.co
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <hr />
          <div className="p-2 flex flex-col w-[240px] sm:w-[400px] font-[Roboto]">
            <div className="text-xl font-bold">PORTFOLIO</div>
            <div className="hidden lg:block mt-1 h-0.5 bg-yellow-400" />
            <ul className="mt-6 flex flex-col space-y-2">
              <li>Power &amp; Control Cables</li>
              <li>High Voltage Cables</li>
              <li>Aerial Bunched Cables</li>
              <li>Special Application Cables</li>
              <li>Insulated Electric Wire</li>
              <li>Cable Jointing Kits</li>
              <li>Industrial Lighting</li>
              <li>Decorative Lights</li>
              <li>PVC Conduit</li>
              <li>Iron Conduit</li>
              <li>Ecoman Compost Machine</li>
            </ul>
          </div>
        </div>
        <div className="font-[Roboto] px-7 py-3 flex flex-col space-y-4 lg:flex-row lg:space-y-0 justify-center lg:justify-between items-center bg-[#2d2d2d]">
          <div className>Copyright © elhard.co 2019. All rights reserved.</div>
          <div className>West Bengal <span className="text-yellow-400">|</span> Odisha <span className="text-yellow-400">|</span>
            Gujarat <span className="text-yellow-400">|</span> Rajasthan <span className="text-yellow-400">|</span> Mumbai</div>
        </div>
      </footer>
    </>
  );
}

export default Footer1;
