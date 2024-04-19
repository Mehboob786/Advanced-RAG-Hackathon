
import './App.css';
import { ReactSearch } from "@vectara/react-search";

function App() {
  return (
    <div className="App">
      <ReactSearch
  customerId="3171554993"
  corpusId="2"
  apiKey="zut_vQoWsUSQw6UJpzVJ_r1RHJXxB7dPGL7TAVEFkA"
  placeholder="Placeholder" // Optional search input placeholder
  isDeeplinkable={true} // Optional boolean determining if search results will be deeplinked
  openResultsInNewTab={true} // Optional boolean determining if links will open in a new tab
  //zIndex={/* Optional number assigned to the z-index of the search modal */}
/>
    </div>
  );
}

export default App;
