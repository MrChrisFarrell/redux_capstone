import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import React, { useState } from 'react';
import { Component } from 'react';
import { useSelector } from 'react-redux';
import googleAPIKey from '../../APIKeys/googleAPIKey';
import { selectCompanies } from '../HomePage/homeSlice';
import { selectUserProfile } from '../Login/loginSlice';

const mapStyles = {
    width: '100%',
    height: '100%',
  };


export function EmployeeMapContainer(){

    const companies = useSelector(selectCompanies);
    const user = useSelector(selectUserProfile);
  
  function handleClick(companyId){
    debugger;
    alert(companyId);
    //props.visitCompanyPage(companyId);
  }
  
    /* const displayMarkers = () => {
        console.log(stores);
      return stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.lat,
         lng: store.long
       }}
       onClick={() => handleClick(store.company.id)} />
      })
    } */
    if(companies){
        const testMarkers = companies.map((store, index) => {
            return <Marker key={index} id={index} position={{
              lat: store.lat,
              lng: store.long
            }}
            onClick={() => handleClick(store.company.id)} />
          });
          return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{lat: user[0].lat, long: user[0].long}}
            >
              {testMarkers}
            </Map>
        );
    }else{
        return (
            <h1>Map Loading</h1>
        )
    }
} 


  export default GoogleApiWrapper({
    apiKey: googleAPIKey
  })(EmployeeMapContainer);