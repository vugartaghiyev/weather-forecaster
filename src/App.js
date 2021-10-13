import Days from "./components/Days";
import SearchBar from "./components/SearchBar";
import "./styles/style.css";
import ContextProvider from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <h1 className="App__Name">Weather Forecaster</h1>
        <SearchBar />
        <Days />
      </div>
    </ContextProvider>
  );
}

export default App;
