import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { useHistory } from 'react-router';
import { getUserAsync, getUserProfileAsync, selectToken, selectUser, selectUserProfile, selectUserProfileStatus, selectUserStatus } from '../../Components/Login/loginSlice';


export function HomePage(){
    const token = useSelector(selectToken);
    const user = useSelector(selectUser);
    const userProfile = useSelector(selectUserProfile);
    const userStatus = useSelector(selectUserStatus);
    const userProfileStatus = useSelector(selectUserProfileStatus);
    const dispatch = useDispatch();
    const history = useHistory();

    debugger;

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
        dispatch(getUserProfileAsync(user.id, token));
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
            return(
                <div><h1>{userProfile.first_name}</h1></div>
            );
        }
    }

    /* if(userProfile){
        return(
            <div><h1>{userProfile.first_name}</h1></div>
        );
    }else{
        return(
            <div><h1>Loading...</h1></div>
        )
    } */
}
    
/*     const [promotionCompanies, setPromotionCompanies] = useState(null);
    const [stores, setStores] = useState(null);


 
    if(props.promotions !== null){
        if(promotionCompanies == null){
            let filteredComps = props.promotions.map(promotion => {
                return promotion.company.id
            })
            setPromotionCompanies(filteredComps);
        }
        
    }else{
        return(<div>Loading</div>)
    }
    if(promotionCompanies !== null && props.compLatLongs !== null && stores == null){
        let uniqueCompanies = [... new Set(promotionCompanies)];
        let compCoordinates = props.compLatLongs.filter(function(item){
            return uniqueCompanies.includes(item.company.id)
        });
        console.log(compCoordinates);
        setStores(compCoordinates);
    }




    if(props.employee == null){
        return(
            <div>Loading</div>
        )
    }else{
        if(props.promotions.length < 1){
            return (
                <div className="employee-home-container">
                    <div className="employee-name">
                        <h1>Hello, {props.employee.first_name}</h1>
                    </div>
                    <div>Promotions near you:</div>
                    <props.GoogleMap employeeLatLong={props.employeeLatLong}/>
                </div>  
            )
        }else{
            const promotions = props.promotions.map((promotion)=>(
                <div className="promotion-container">
                    <h2>{promotion.company.name}</h2>
                    <h3>{promotion.company.street_address}</h3>
                    <h3>{promotion.company.city}, {promotion.company.state}  {promotion.company.zip_code}</h3>
                    <h4 className="promotion-details">{promotion.details}</h4>
                    <p className="promotion-date">From: {promotion.start_date}</p>
                    <p className="promotion-date">To: {promotion.end_date}</p>
                </div>
            ))
            return (
                <div className="employee-home-container">
                    <div className="employee-name">
                        <h1>Hello, {props.employee.first_name}</h1>
                    </div>
                    <div><h3 className="employee-name">Promotions near you</h3>
                        <div>{promotions}</div>
                    </div>
                    <div className="employee-map"><props.GoogleMap setSelectedCompany={props.setSelectedCompany} employeeLatLong={props.employeeLatLong} visitCompanyPage={props.visitCompanyPage} stores={stores}/></div>
                </div>  
            )
        }
    }
} */

