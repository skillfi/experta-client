import React from 'react'
import '../styles/MainPage.css'

class MainPage extends React.Component{

    constructor(props){
        super(props);
        this.create = this.create.bind(this);
        this.facts = this.facts.bind(this);
    }

    create(){
        return document.location = '/fact/create'
    };
    facts(){
        return document.location = '/fact/table'
    };

    render(){
        return(
            <div className='main'>
                <button className='main-button' onClick={this.create}>Create Fact</button>
                <button className='main-button' onClick={this.facts}>View Facts</button>
            </div>
        )
    }
}

export default MainPage;