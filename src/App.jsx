
import MainContent from "./Components/MainContent";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="text-white bg-background">
      <div className="container mx-auto px-4 h-screen flex flex-col">
        <Navbar></Navbar>
        <MainContent></MainContent>
      </div>
    </div>
  );
}

export default App;
