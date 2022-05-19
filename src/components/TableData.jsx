import React from "react";

export default class TableData extends React.Component{

    constructor(props){
        super(props);
        this.style = {
            border: '1px solid #800',
            padding: '2px;'
        };
        this.state = [];
        // this.load - this.load.bind();
    }

    // load(){
        
        
    // }

    render(){
        return(
            <td style={this.style}>
                {this.props.data}
            </td>
        )
    }
}