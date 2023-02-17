
import { lazy } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = lazy(() => import("../src/Modules/pages/Home"))
function App() {
  return (
      <section>
      <Home/>
      </section>
  );
}

export default App;
