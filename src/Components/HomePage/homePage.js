import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken } from '../../Components/Login/loginSlice';

export function HomePage(){
    const token = useSelector(selectToken);


    if(token){
        return(
            <div>{token.refresh}</div>
        );
    }else{
        return(
            <div>No token</div>
        );
    }
    
}