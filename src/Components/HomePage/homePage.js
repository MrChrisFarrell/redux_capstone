import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { useHistory } from 'react-router';
import { getUserAsync, getUserProfileAsync, selectToken, selectUser, selectUserProfile, selectUserProfileStatus, selectUserStatus } from '../../Components/Login/loginSlice';
import { getCompaniesAsync, getPromotionsAsync, selectCompanies, selectPromotions } from './homeSlice';
import { EmployeeMapContainer } from '../Maps/EmployeeMap';
import  EmployeeMap  from '../Maps/TestEmployeeMap';


export function HomePage(){
    const token = useSelector(selectToken);
    const user = useSelector(selectUser);
    const userProfile = useSelector(selectUserProfile);
    const userStatus = useSelector(selectUserStatus);
    const userProfileStatus = useSelector(selectUserProfileStatus);
    const companies = useSelector(selectCompanies);
    const promotions = useSelector(selectPromotions);
    const dispatch = useDispatch();
    const history = useHistory();


/*     useEffect(async ()=>{
        if(user){
            dispatch(getUserProfileAsync(user.id, token));
        }
      }, [user]); */

    if(!token){
        return(
            <div><h1>No token</h1></div>
        );
    }else if(!user && userStatus == 'idle'){
        dispatch(getUserAsync(token));
    }else if(!userProfile && userProfileStatus == 'idle' && user){
        const fetchProfileData = {"user": user, "token": token};
        dispatch(getUserProfileAsync(fetchProfileData));
        dispatch(getCompaniesAsync(token));
        dispatch(getPromotionsAsync(token));
    }else{
        if(!user){
            return(
                <div><h1>No User</h1></div>
            );
        }else if(!userProfile){
            return(
                <div><h1>No Profile</h1></div>
            );
        }else{
            if(promotions.length < 1){
                return (
                    <div className="employee-home-container">
                        <div className="employee-name">
                            <h1>Hello, {userProfile[0].employee.first_name}</h1>
                        </div>
                        <div>Promotions near you:</div>
                        <EmployeeMap />
                    </div>  
                )
            }else{
                const promotionCards = promotions.map((promotion)=>(
                    <div className="promotion-container">
                        <h2>{promotion.company.name}</h2>
                        <h3>{promotion.company.street_address}</h3>
                        <h3>{promotion.company.city}, {promotion.company.state}  {promotion.company.zip_code}</h3>
                        <h4 className="promotion-details">{promotion.details}</h4>
                        <p className="promotion-date">From: {promotion.start_date}</p>
                        <p className="promotion-date">To: {promotion.end_date}</p>
                    </div>
                ));
                console.log(userProfile);
                return (
                    <div className="employee-home-container">
                        <div className="employee-name">
                            <h1>Hello, {userProfile[0].employee.first_name}</h1>
                        </div>
                        <div><h3 className="employee-name">Promotions near you</h3>
                            <div>{promotionCards}</div>
                        </div>
                        <div className="employee-map"><EmployeeMap employeeLatLong={{lat: userProfile[0].lat, long: userProfile[0].long}} stores={companies}/></div>
                    </div>  
                )
            }
        }
    }
}
