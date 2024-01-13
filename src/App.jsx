import "./App.css";
import GallaryFooter from "./components/GallaryFooter";
import Body from "./components/body";
import Header from "./components/header";

function App(props) {
  return (
    <div>
      <Header />
      <Body imgData={props.data} />
      {/* adding footer component */}
      <GallaryFooter />
    </div>
  );
}

export default App;
