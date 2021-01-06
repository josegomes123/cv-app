import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NameInput from './components/NameInput';
import PersonalInfo from './components/PersonalInfo';

function App() {
  return (
    <div>
      <Header></Header>
      <NameInput></NameInput>
      <PersonalInfo></PersonalInfo>
     <Footer></Footer>
    </div>
  );
}

export default App;
