import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import googleAPIKey from '../../APIKeys/googleAPIKey';

const mapStyles = {
    width: '100%',
    height: '100%',
  };

class CompanyMapContainer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        stores: props.stores
      }
    }

  
    displayMarkers = () => {
        console.log(this.state.stores);
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.lat,
         lng: store.long
       }}
       onClick={() => console.log(store.company.id)} />
      })
    }

     mapStateToProps = (state) => ({
        employeeLatLong: this.props.employeeLatLong,
        google: this.props.google,
        stores: this.props.stores
      });
  
    render() {
        if(this.state.stores == null){
            return(<h1>NOthing</h1>)
        }else{
            return (
                <div className="map"><Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={this.props.employeeLatLong}
              >
                {this.displayMarkers()}
              </Map></div>
                
            );
        }
    }
  }

  

  export default GoogleApiWrapper({
    apiKey: googleAPIKey
  })(connect(mapStateToProps)(CompanyMapContainer));