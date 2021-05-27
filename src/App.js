import './App.css';
import Comment from './Components/challenges/comments/Comment';
import Post from './Components/challenges/posts/Post';
import User from './Components/challenges/users/User';
import Tesco from './Components/data-requests/Tesco';
import Disney from './Components/disney-challenge/Disney';
import ControlledInput from './Components/forms/ControlledInput';
import Hobby from './Components/hobby-project/Hobby';
import ReadMore from './Components/hooks/ReadMore';
import UseEffect from './Components/hooks/UseEffect';
import Container from "./Components/parent-child/Container";
import Footer from "./Components/parent-child/Footer";
import Header from "./Components/parent-child/Header";
import Contact from './Components/prop-examples/contact-card/Contact';
import Parent from './Components/prop-examples/parent-child/parent';
import Conditional from './Components/states/Conditional';
import Counter from './Components/states/Counter';
import Car from './Components/states/exercise/Car';
import Form from './Components/states/exercise/Form';
import Game from './Components/states/lifting-states/game-room/Game';
import ProductManager from './Components/states/lifting-states/product-manager/ProductManager';
import SearchableList from './Components/states/lifting-states/SearchableList';

const App = () => {
  return (
    // Disney Challenge
    <Disney/>

    // Basic Structure Exmaple
    // <>
    //   <Header/>
    //   <Container/>
    //   <Footer/>
    // </>

    // Prop inheritance example
    // <Parent/>

    // Contact card example
    // <Contact />

    // Posts Challenge
    // <Post/>

    // Comments Challenge
    // <Comment/>

    // Users Challenge
    // <User/>

    // State examples
    // <Counter/>
    // <Conditional/>

    // Form example
    // <ControlledInput/>

    // Form exercises
    // <Form/>
    // <Car/>

    // Lifting state Examples
    // <SearchableList/>
    // <Game/>

    // Lifting state exercise
    // <ProductManager/>

    // Hooks Exercises
    // <ReadMore/>
    // <UseEffect name="test2"/>

    // Data requests
    // <Tesco/>

    // Hobby Project
    // <Hobby/>
  );
}

export default App;
