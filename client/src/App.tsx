import { useState } from "react";
import "./App.css";
import StartRating from "./components/StartRating/StartRating.component";

function App() {
  const [productRating, setProductRating] = useState();
  return (
    <main>
      Current Product Rating: {productRating}
      <StartRating maxRating={5} onChange={setProductRating} />
    </main>
  );
}

export default App;
