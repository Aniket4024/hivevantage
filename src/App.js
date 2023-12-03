import AllRoutes from './All Routes/AllRoutes';
import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
