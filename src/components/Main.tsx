import { ChevronLeft, ChevronRight, Play } from "lucide-react";


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
      <img className="img-music" src="src/assets/adele.png" 
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
      src="src/assets/rap.png" 
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
      src="src/assets/ariana.png"
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
       src="src/assets/james.png" alt="james foto"/> 
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
       src="src/assets/link.png" 
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
        src="src/assets/justin.png" 
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
      src="src/assets/xxxtentacion.png" 
      alt="album xxxtentacion"/>
        <strong className="strong">?</strong>
        <span className="span">XXXTENTACION</span>
      </a>

      <a href="" className="a-music-card"> <img className="img-album"
       src="src/assets/album.png"
       alt="album xxxtentacion" />
        <strong className="strong">?</strong>
        <span className="span">XXXTENTACION</span>
        </a>

      <a href="" className="a-music-card"> <img className="img-album" 
      src="src/assets/forever.png" 
      alt="album xxxtentacion" />
       <strong className="strong">17</strong>
        <span className="span">XXXTENTACION</span>
        </a>

      <a href="" className="a-music-card"> <img className="img-album"
       src="src/assets/skins.png" 
       alt="album xxxtentacion" /> 
       <strong className="strong">Bad Vibes Forever</strong>
        <span className="span">XXXTENTACION</span>
        </a>

      <a href="" className="a-music-card"> <img className="img-album" 
      src="src/assets/tentacion.png" 
      alt="album xxxtentacion" /> 
      <strong className="strong">Revenge</strong>
        <span className="span">XXXTENTACION</span>
      </a>

  </div>
</main>
  )
}