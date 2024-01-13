import react from 'react';
import './App.css';
import exome from "./exomeit.png";
import ColorForm from './components/ColorForm';
import Github from './components/Github';
import GraphQl from './components/GraphApi';

function Header(props) {
  return(
    <header>
      <h1>{props.name} Tech</h1>
    </header>
  );
}

function Main(props){
  return(
    <section>
      <p>
        One place solution for the all tech related {props.adjective} probelems
      </p>

      <img src={exome}/>

      {/* previously I havae added a paragraph tag but that gives error in the console
      showing that ul cannot be descendant to pragraph tag  need to learn about this more*/}
        <br/>
        <strong>Our services</strong>
        {/* we can add style here but the syntax is different */}
        <ul style={{textAlign: "left"}}>

          {/* this one was working previosly but with the key issue
          {props.services.map((service) => <li>{service}</li> )} */}

          {/* Lets now render the serviceObjects to solve the key issue */}
          {props.services.map((service) => <li key={service.id}>{service.title}</li> )}
        </ul>
    </section>
  );
}

function Footer(props){
  return(
    <footer>
      Another company of exomeit @copyright {props.year}
    </footer>
  );
}


// lets create a list of our services
const services =[
  "Web development",
  "Digital Marketing",
  "Graphics Design",
  "Search Engine Optimization"

];

// this chunks of code breaks every item in list
// and put it to the console 
// services.map((service) => console.log(service))

// above methods creates some problem with the key thing of react
// to solve this isssue you need to add a key through the follwing method
// though there is a shortcut which is not recommended by adding just i - check the 4_4 video

const serviceObjects = services.map((service, i) => ({id: i, title: service}))
// lets chcekc it in the console
// how the i indicates the zero index automatically?? need to learn
// console.log(serviceObjects)


function App() {
  return (

    // you also need this wrapper div to avoid error like happend in case of second app
    <div className="App">

     {/* this is like python but in reverse type of mode */}
     <Header name="Sarwar"/>


     {/* the previous one was that was causing the key issue  
      <Main adjective="horrible" services={services}/> */}

      {/* to solve this issue we are passing the object now */}
      <Main adjective="horrible" services={serviceObjects}/>
      <ColorForm/>
      <Github/>
      <GraphQl/>

      <Footer year={new Date().getFullYear()}/>

      
    </div>
  );
}

export default App;
