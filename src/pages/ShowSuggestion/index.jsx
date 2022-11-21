

import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiConfig from '../../apiConfig.mjs';

export default function ShowSuggestion() {
    const userObj = JSON.parse(localStorage.getItem("userObj"));
    const navigate = useNavigate();
    if(userObj.name!=="hoooao"){
        navigate("/");
    }
    const baseURL = apiConfig.base;
    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
        axios({
            method: "GET",
            url: `${baseURL}/api/user/get_suggestion`
        }).then(res => {
            setSuggestions(res.data.suggestions);
        })
    }, [])

    return (
        <div>
            {suggestions.map(ele=>{
                return (
                    <div>{ele.id} {ele.type} {ele.content}</div>
                )
            })}
        
        </div>
    )
}
