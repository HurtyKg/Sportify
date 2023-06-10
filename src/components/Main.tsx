import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import adele from "../assets/adele.png";
import eminen from "../assets/rap.png";
import ariana from "../assets/ariana.png";
import james from "../assets/james.png";
import park from "../assets/link.png";
import justin from "../assets/justin.png";
import xxx from "../assets/xxxtentacion.png";
import xxxtentacion  from "../assets/album.png";
import forever from "../assets/forever.png";
import skins from "../assets/skins.png";
import revenge from "../assets/tentacion.png";

export function Main () {
  return (
    <main className="main">
    <div className="arrows">
    <div className="arrow-left"> <ChevronLeft /> </div>
    <div className="arrow-right"> <ChevronRight /></div>
    </div>
    
    <h1 className="title">BOA TARDE</h1>
    
    <div className="cards-col-1">

      <a href="" 
      className="a-music"> 
      <img className="img-music" src={adele} 
      alt="adele foto" />
      <div className="content-card">
       <strong className="title-card">Adele</strong>
       <button className="play">
        <Play/>
        </button>
      </div>
       </a>

      <a href="" 
      className="a-music"> 
      <img className="img-music" 
      src={eminen}
      alt="eminem foto" />
      <div className="content-card">
        <strong className="title-card">Eminem</strong>
        <button className="play">
        <Play/>
        </button>
      </div>
      </a>

      <a href="" 
      className="a-music"> 
      <img 
      className="img-music"
      src={ariana}
      alt="ariana foto" />
        <div className="content-card">
        <strong className="title-card">Arina Grande</strong>
        <button className="play">
        <Play/>
        </button>
      </div>
       </a>
    </div>

    <div className="cards-col-2">
      <a href=""
       className="a-music"> 
       <img className="img-music" 
       src={james} alt="james foto"/> 
        <div className="content-card">
          <strong className="title-card">James Arthur</strong>
          <button className="play">
          <Play/>
          </button>
        </div>
      </a>

      <a href=""
       className="a-music"> 
       <img className="img-music" 
       src={park}
       alt="link foto" />  
       <div className="content-card">
        <strong className="title-card">Linkin Park</strong>
        <button className="play">
        <Play/>
        </button>
       </div> 
      </a>

      <a href=""
        className="a-music">
        <img className="img-music"
        src={justin}
        alt="justin foto" />  
        <div className="content-card">
        <strong className="title-card">Justin Bieber</strong>
        <button className="play">
        <Play/>
        </button>
        </div>
      </a>

    </div>

    <h1 className="title">Albuns Feito para Lil Enzo </h1>
    
    <div
     className="content-albuns">
      <a href="" className="a-music-card"> 
      <img 
      className="img-album"
      src={xxx} 
      alt="album xxxtentacion"/>
        <strong className="strong">?</strong>
        <span className="span">XXXTENTACION</span>
      </a>

      <a href="" className="a-music-card"> <img className="img-album"
       src={xxxtentacion}
       alt="album xxxtentacion" />
        <strong className="strong">?</strong>
        <span className="span">XXXTENTACION</span>
        </a>

      <a href="" className="a-music-card"> <img className="img-album" 
      src={forever} 
      alt="album xxxtentacion" />
       <strong className="strong">17</strong>
        <span className="span">XXXTENTACION</span>
        </a>

      <a href="" className="a-music-card"> <img className="img-album"
       src={skins} 
       alt="album xxxtentacion" /> 
       <strong className="strong">Bad Vibes Forever</strong>
        <span className="span">XXXTENTACION</span>
        </a>

      <a href="" className="a-music-card"> <img className="img-album" 
      src={revenge} 
      alt="album xxxtentacion" /> 
      <strong className="strong">Revenge</strong>
        <span className="span">XXXTENTACION</span>
      </a>

  </div>
</main>
  )
}