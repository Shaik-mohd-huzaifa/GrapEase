import Selection from "./components/Selection"
import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import StepGuide from "./components/guide"
import NoteComponent from "./components/Note"
function App() {
  return (
    <>
    <Navbar/>
    <Landing/>
    <NoteComponent/>
    <Selection/>
    <StepGuide/>
    </>
  )
}

export default App
