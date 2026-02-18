import ReactParallaxTilt from "react-parallax-tilt"

import pierre_capa from "../assets/pierre_capa.png"
import rene_capa from "../assets/rene_capa.png"
import guga_capa from "../assets/guga_capa.png"
import walter_capa from "../assets/walter_capa.png"
import tyler_capa from "../assets/tyler_capa.png"
import theo_capa from "../assets/theo_capa.png"
//import brunna_capa from "../assets/brunna_capa.png"
import pivolo_capa from "../assets/pivolo_capa.png"
import domnic_capa from "../assets/domnic_capa.png"
import criaturas_capa from "../assets/criaturas_capa.png"
import seguranca_capa from "../assets/seguranca_capa.png"

const Home = () => {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden overflow-y-scroll">
      <div className="flex justify-center">
        <div className="relative scale-70 mt-70 ml-[-350px]">
          <ReactParallaxTilt className="w-fit h-fit [transform-style:preserve-3d]">
            <img className="relative w-[500px] translate-z-[20px]" src={rene_capa} />
            <img className="absolute w-[250px] top-[-300px] left-[-60px]  translate-z-[20px] " src={tyler_capa} />
            <img className="absolute w-[350px] top-[-500px] left-[400px]  translate-z-[40px] " src={theo_capa} />
            <img className="absolute w-[370px] top-[-250px] left-[520px]  translate-z-[60px] " src={domnic_capa} />
            <img className="absolute w-[650px] top-[-500px] left-[80px]   translate-z-[60px] " src={guga_capa} />
            <img className="absolute w-[400px] top-[-150px] left-[-125px] translate-z-[100px] " src={seguranca_capa} />
            <img className="absolute w-[470px] top-[90px]   left-[570px]  translate-z-[120px] " src={walter_capa} />
            <img className="absolute w-[300px] top-[-100px] left-[450px]  translate-z-[100px] " src={pivolo_capa} />
            <img className="absolute w-[370px] top-[300px]  left-[400px]  translate-z-[140px] " src={criaturas_capa} />
            <img className="absolute w-[370px] top-[300px]  left-[90px]   translate-z-[200px]" src={pierre_capa} />
          </ReactParallaxTilt>
        </div>
      </div>
    </div>
  )
}

export default Home