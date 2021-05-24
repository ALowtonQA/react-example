import './App.css';
import Comment from './Components/challenges/comments/Comment';
import Post from './Components/challenges/posts/Post';
import User from './Components/challenges/users/User';
import Container from "./Components/parent-child/Container";
import Footer from "./Components/parent-child/Footer";
import Header from "./Components/parent-child/Header";
import Contact from './Components/prop-examples/contact-card/Contact';
import Parent from './Components/prop-examples/parent-child/parent';

const App = () => {
  return (
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
    <User/>
  );
}

export default App;
