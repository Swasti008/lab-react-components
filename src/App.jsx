import "./App.css";
import GallaryFooter from "./components/GallaryFooter";
import Body from "./components/body";
import Header from "./components/header";
import Data from "./components/Data";

function App() {
  return (
    <div>
      <Header />
      <Body data={Data} />
      {/* adding footer component */}
      <GallaryFooter />
    </div>
  );
}

export default App;
