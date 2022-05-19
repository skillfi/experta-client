import React from "react";
import {TransitionGroup} from "react-transition-group";
import '../styles/FactsTable.css'
import TableData from "./TableData";
// import axios from "axios";
import Server from '../API/Server';


export default class FactsTable extends React.Component{

    constructor(props){
        super(props);
        this.id = 1;
    };

    render(){
        return(
            <TransitionGroup style={{textAlign: 'center'}}>
                Fact Info
                <table>
                    <thead>
                    <tr>
                        <th colSpan={1}>№</th>
                        <th>Meat</th>
                        <th>Marinade</th>
                        <th>Coal</th>
                        <th>Woods</th>
                        <th>Fire</th>
                        <th>Weather</th>
                        <th>Time</th>
                        <th>Added On</th>
                    </tr>
                    </thead>
                    <tbody>
            {
                this.props.data.map((fact, index)=>
                    <tr>
                        <TableData data={index}/>
                        <TableData data={()=>{
                            if (fact.Meat = ''){
                                return '-'
                            } else {
                                return fact.Meat
                            }
                        }}/>
                        <TableData data={fact.Marinade}/>
                        <TableData data={fact.Coal}/>
                        <TableData data={fact.Woods}/>
                        <TableData data={fact.Fire.toString()}/>
                        <TableData data={()=>{
                            if (fact.Weather == ''){
                                return '-'
                            } else{
                                return fact.Weather
                            }
                        }}/>
                        <TableData data={fact.Time}/>
                        <TableData data={fact.update_time}/>
                        <td><button onClick={async ()=>{
                            const resp = await Server.deleteFact(fact._id)
                            return document.location = '/fact/table'
                            }
                            }>Delete
                            </button></td>
                            <td><button onClick={()=>{
                                return document.location = `/fact/${fact._id}/recommendations`
                            }
                            }
                            >Get Recommendation
                            </button>
                        </td>
                    </tr>)}
                    </tbody>
            </table>
            </TransitionGroup>
        )
    }
}