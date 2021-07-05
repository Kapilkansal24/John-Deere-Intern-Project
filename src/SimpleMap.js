import React, { PropTypes, Component } from 'react';
import GoogleMapReact from 'google-map-react';
import img_mk from "./images/redmarker.png";
const SomeReactComponent = ({ text }) => {

  return (
      <div className="rs_marker">
          <img className="rs_marker" src={img_mk} alt="" width="25" height="25" />
          {text}
      </div>
  );
};

const options = [
  {
    label: "Jaipur",
    value: 1,
  },
  {
    label: "Ajmer",
    value: 2,
  },
  {
    label: "Kota",
    value: 3,
  },
  {
    label: "Udaipur",
    value: 4,
  },
  {
    label: "Alwar",
    value: 5,
  },
  {
    label: "Jodhpur",
    value: 6,
  },
  {
    label: "Delhi",
    value: 7,
  },
  {
    label: "Jaisalmer",
    value: 8,
  },
  {
    label: "Bikaner",
    value: 9,
  },
  {
    label: "Barmer",
    value: 10,
  },
];

class SimpleMap extends Component {
  // static defaultProps = {
  //   center: {
  //     lat: 59.95,
  //     lng: 30.33
  //   },
  //   zoom: 11
  // };
  constructor(props) {
    super(props);
    this.state = {
      place: "Jaipur",
        lat: 26.9124,
        lng: 75.7873,
      zoom: 11
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log("Place Selected!!");
    let a = e.target.value;
    console.log(a);
    console.log(this.state.place);
    console.log(this.state.lat);
    console.log(this.state.lng);
    if(a==1)
    {
      this.setState({ place: "Jaipur"});
      this.setState({ lat: 26.9124 });
      this.setState({ lng: 75.7873 });
    }
    else if(a==2)
    {
      this.setState({ place: "Ajmer"});
      this.setState({ lat: 26.4499 });
      this.setState({ lng: 74.6399 });
    }
    else if(a==3)
    {
      this.setState({ place: "Kota"});
      this.setState({ lat: 25.2138 });
      this.setState({ lng: 75.8648 });
    }
    else if(a==4)
    {
      this.setState({ place: "Udaipur"});
      this.setState({ lat: 24.5854 });
      this.setState({ lng: 73.7125 });
    }
    else if(a==5)
    {
      this.setState({ place: "Alwar"});
      this.setState({ lat: 27.5530 });
      this.setState({ lng: 76.6346 });
    }
    else if(a==6)
    {
      this.setState({ place: "Jodhpur"});
      this.setState({ lat: 26.2389 });
      this.setState({ lng: 73.0243 });
    }
    else if(a==7)
    {
      this.setState({ place: "Delhi"});
      this.setState({ lat: 28.7041 });
      this.setState({ lng: 77.1025 });
    }
    else if(a==8)
    {
      this.setState({ place: "Jaisalmer"});
      this.setState({ lat: 26.9157 });
      this.setState({ lng: 70.9083 });
    }
    else if(a==9)
    {
      this.setState({ place: "Bikaner"});
      this.setState({ lat: 28.0229 });
      this.setState({ lng: 73.3119 });
    }
    else if(a==10)
    {
      this.setState({ place: "Barmer"});
      this.setState({ lat: 25.7521 });
      this.setState({ lng: 71.3967 });
    }
  }


  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="row justify-content-end">
      <div style={{ height: '80vh', width: '60%',float: 'left'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCGNUU5e44y9qyyMRkCYUo2PZkMWGZJgsw" }}
          defaultCenter={{lat: 26.9124,lng: 75.7873,}}
          defaultZoom={this.state.zoom}
          >
          <SomeReactComponent
                        lat={this.state.lat}
                        lng={this.state.lng}
                        text=""
          />
        </GoogleMapReact>
        </div>
        <div style={{float:'left',width:'40%'}}>
          <h6 style={{marginLeft:"500px",color:"green"}}>Start over</h6>
          <h3 style={{fontFamily:'fantasy', fontSize:'30px',marginTop:'20px'}}> Search </h3>
          <select value={this.state.fruit} onChange={this.handleChange} className="btn btn-secondary btn-lg dropdown-toggle" style={{marginTop:'30px'}}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default SimpleMap;