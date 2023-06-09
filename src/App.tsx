
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="container">
    <Sidebar/>
    <Main />

   <Footer/>
    </div>
  )
}
