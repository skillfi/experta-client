import React, {useState, useEffect} from "react";
import FactsTable from "../components/FactsTable";
import Server from '../API/Server';
import { useFetching } from "../hooks/useFetching";

function ViewFacts(){
    const [facts, setFacts] = useState([])
    const [fetchFacts] = useFetching(async()=> {
        const response = await Server.getAll();
        setFacts(response.data.data)
        // console.log(response)
    })
    const divStyle = {
        position: 'relative',
        width: '1366px',
        height: '768px',
        background: '#FFFFFF'
    }

    useEffect(()=>{
        fetchFacts()
        
        return()=>{
            
        }
    }, [])

    return (
        <div style={divStyle}>
            <FactsTable data={facts}/>
        </div>
    )
}

export default ViewFacts;