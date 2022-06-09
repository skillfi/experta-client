import React from "react";
import {TransitionGroup} from "react-transition-group";
import './FactsTable.css'
import DivFact from "./DivFact";
import { CSSTransition } from "react-transition-group";


export default class FactsElement extends React.Component{

    constructor(props){
        super(props);
        this.id = 1;
    };

    render(){
        return(
            <TransitionGroup className={'group'}>
                {this.props.data.map((fact, index) => 
                    <CSSTransition key={fact._id} timeout={500} classNames="fact">
                    <DivFact Meat={fact.Meat} 
                        Marinade={fact.Marinade}
                        Coal={fact.Coal}
                        Woods={fact.Woods}
                        Fire={fact.Fire.toString()}
                        Weather={fact.Weather}
                        Time={fact.Time.toString()}
                        update_time={fact.update_time}
                        _id={fact._id}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        )
    }
}