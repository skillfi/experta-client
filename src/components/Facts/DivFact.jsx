import React from "react";
import './Fact.css'
import MyButton from "../MyButton/MyButton";
import Server from "../../API/Server";

export default class DivFact extends React.Component{

    constructor(props){
        super(props);
        this.getRecommend = this.getRecommend.bind();
    };

    getRecommend = async() => {
        const response = await (await Server.getRecommendation(this.props._id)).data
        var recommendation = new String();
        response.data.map((message, index) => 
            recommendation = recommendation + '\n' +new String(message.recommendation)
        )
        return alert(recommendation);
    }

    render(){
        return(
            <div className="fact">
                <div className="image">

                </div>
                <div className="conditionArea">
                    {/* Meat and Marinade */}
                    <div className="condition">
                        М'ясо: {this.props.Meat}
                    </div>
                    <div className="condition">
                        Маринад: {this.props.Marinade}
                    </div>
                </div>
                <div className="conditionArea">
                    {/* Coal and Woods */}
                    <div className="condition">
                        Вугілля: {this.props.Coal}
                    </div>
                    <div className="condition">
                        Суха древесина: {this.props.Woods}
                    </div>
                </div>
                <div className="conditionArea">
                    {/* Fire and Weather */}
                    <div className="condition">
                        Наявність вогню: {this.props.Fire}
                    </div>
                    <div className="condition">
                        Погодні умови: {this.props.Weather}
                    </div>
                </div>
                <div className="conditionArea">
                    {/* Time and Added date */}
                    <div className="condition">
                        Час готування: {this.props.Time}
                    </div>
                    <div className="condition">
                        Створено: {this.props.update_time}
                    </div>
                </div>
                <MyButton onClick={async() => {
                    const resp = await Server.deleteFact(this.props._id)
                    const resp2 = await Server.delByFact(this.props._id)
                    return document.location = '/facts'
                }}>Delete</MyButton>
                <MyButton onClick={this.getRecommend}>Get Recommendation</MyButton>
            </div>
        )
    }
}