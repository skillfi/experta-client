import React, {useEffect, useState} from 'react';
import {TransitionGroup} from "react-transition-group";
import { useParams } from 'react-router-dom';
import { useFetching } from "../hooks/useFetching";
import Server from '../API/Server';


export default function RecommendationRoute(){
    let {id} = useParams();
    const [state, setState] = useState([])
    const [fetchRecommendation] = useFetching(async()=> {
        const response = await Server.getRecommendation(id);
        setState(response.data.data)
    })
    const ul = {
        style: {
            'list-style': 'square outside'
        }
    }

    useEffect(()=>{
        fetchRecommendation()
        
        return()=>{
            
        }
    }, [])

    return(
        <ul style={ul.style}>
            <TransitionGroup>
            {
                state.map((message, index)=>
                    <li>{message.recomendation}</li>
                )
            }
            </TransitionGroup>      
        </ul>
        
    )
}