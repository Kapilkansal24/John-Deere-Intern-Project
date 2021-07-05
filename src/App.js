import './App.css';
import Header from "./Header";
import Temp from "./SimpleMap";

function App() {
  return (
    <div>
      <Header />
      <Temp />
    </div>
  );
}

export default App;
// import React from "react";

// const options = [
//   {
//     label: "Jaipur",
//     value: 1,
//   },
//   {
//     label: "Ajmer",
//     value: 2,
//   },
//   {
//     label: "Bihar",
//     value: 3,
//   },
//   {
//     label: "Jaisalmer",
//     value: 4,
//   },
// ];

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       place: "Jaipur",
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     console.log("Place Selected!!");
//     let a = e.target.value;
//     console.log(a);
//     if(a==1)
//     this.setState({ place: e.target.value });
//   }

//   render() {
//     return (
//       <div id="App">
//         <div className="select-container">
//           <select value={this.state.fruit} onChange={this.handleChange}>
//             {options.map((option) => (
//               <option value={option.value}>{option.label}</option>
//             ))}
//           </select>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
