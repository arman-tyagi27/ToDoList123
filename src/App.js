import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";

function App() {
  let todos = [
    {
      Sno: 1,
      title: "Arman Tyagi",
      desc:"This is my name"
    },
    {
      Sno: 2,
      title: "Training",
      desc:"I'm doing the software Engineer training "
    },
    {
      Sno: 3,
      title: "Web Developer",
      desc:"I'm full stack developer"
    }
  ]
  return (
    <>
    <Header title='My ToDo List '/>
    <Todos todos={todos}/>
    <Footer/>
    </>   
  );
}

export default App;
