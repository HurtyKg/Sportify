import { Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from "lucide-react";
import xxx from "../assets/xxxtentacion.png";


export function Footer() {
  return (
    <footer className="footer">
    <div className="content-footer">
       <div className="container-footer">
       <img 
       src={xxx}
       alt="music xxxtentacion" 
       className="music-footer"
       />
       <div className="footer-content">
       <strong>Moonlight</strong>
       <p className="footer-single">XXXTENTACION</p>
       </div>
       </div>


       <div className="footer-mix">
           <div className="mix">
           <Shuffle width={20} height={20}/> <SkipBack /> 
             <button className="button-footer">
             <Play className="play-footer" />
             </button> <SkipForward />  <Repeat width={20} height={20}/>
           </div>
           <div className="bar">
               <p>0:31</p>
               <div className="progresse-bar">
               <div className="progress"></div>
               </div>
             <p>2:31</p>
           </div>
       </div>

       <div className="mix">
         <Mic2 width={20} height={20} />
          <LayoutList width={20} height={20}/>
           <Laptop2 width={20} height={20}/> 
           <Volume width={25} height={25}/> 
         <div className="bar-vol">
               <p>0:31</p>
               <div className="progresse-bar-vol">
               <div className="progress-vol"></div>
               </div>
             <p>2:31</p>
           </div>
           <Maximize2 width={20} height={20} />
       </div>
     </div> 
   </footer>
  );
}
