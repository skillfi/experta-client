import React from 'react'
import '../../styles/MainPage.css'

class MainPage extends React.Component{

    constructor(props){
        super(props);
        this.facts = this.facts.bind(this);
    }

    facts(){
        return document.location = '/facts'
    };

    render(){
        return(
            <div className='main'>
                <button onClick={this.facts} className='button'>Facts</button>
            </div>
        )
    }
}

export default MainPage;