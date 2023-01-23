import './App.css';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';


function App() {
  return (
    <div className="App col-6 offset-3">
      <Header/>
      <Welcome/>
      <Footer/>
    </div>
  );
}

export default App;
