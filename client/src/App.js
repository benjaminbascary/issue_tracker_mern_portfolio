import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from 'react-router-dom';
import AddIssue from './Components/AddIssue/AddIssue';

function App() {

  const sendFormInfo = (formData) => {
    console.log(formData)
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/AddIssue" element={<AddIssue sendFormInfo={sendFormInfo} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
