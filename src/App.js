import './App.css';
import CustomLogin from './Comp/CustomLogin';
import CustomSignup from './Comp/CustomSignup';
import Footer from './Comp/Footer';
import Navbar from './Comp/Navbar';




function App() {
  return (<>
  <Navbar/>
    <div className="App "> 
      <CustomLogin/>
      <CustomSignup/>     
    </div>
    <Footer/>
    </>
  );
}

export default App;
