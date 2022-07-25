// import logo from './logo.svg';
import './App.css';
// import RootRouts from './Project/RootRoutes/RootRoute';
import RootRoute from './Project/RootRoutes/RootRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from 'react-rating-stars-component';
// import Mounting from './Component/Mounting';
// import Parrent from './Component/Parrent';
// import GetDerived from './Component/GetDerived';
// import Cdm from './Component/Cdm';
// import ParrentCounter from './Component/ShouldComponentUpdate/ParrentCounter';
// import ComponentDidUpdate from './Component/ShouldComponentUpdate/ComponentDidUpdate';
// import Fcounter from './Component/Fcounter';
// import RootRoute from './Project/RootRoutes/RootRoute';

   function App() {
  return (
    <div className="App">
     {/* <Mounting/> */}
      {/* <Parrent></Parrent> */}
      {/* <GetDerived favColorProps = "Blue"/> */}
      {/* <Cdm></Cdm> */}
      {/* <ParrentCounter></ParrentCounter> */}
      {/* <ComponentDidUpdate></ComponentDidUpdate> */}
{/* //      <Fcounter></Fcounter> */}
   <RootRoute></RootRoute>
 
    </div>
  );
}

export default App;
