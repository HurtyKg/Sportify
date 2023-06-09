import { HomeIcon, Search, Library } from "lucide-react";

export function Sidebar () {
  return (
    <aside className="side">
    <div className="linux">
    <div className="bolinha-vermelha"></div>
    <div className="bolinha-amarela"></div>
    <div className="bolinha-verde"></div>
    </div>
      <nav className="nav">
        <p className="p-icone"><HomeIcon/> Home</p>
        <p className="p-icone"><Search /> Search</p>
        <p className="p-icone"><Library /> Your</p>
    <div className="side-text">
      <p className="p-music">XXXTENTACION ALL Songs</p>
      <p className="p-music">As melhores da Adele</p>
      <p className="p-music">TRAP BR 2023</p>
      <p className="p-music">EMINEM - Só as Mehores</p>
    </div>
     </nav>
</aside>

  )
}