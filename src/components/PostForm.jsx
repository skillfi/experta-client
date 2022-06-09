import React from "react";
import Server from '../API/Server';
import MyInput from "./MyInput/MyInput";

class PostForm extends React.Component{

    constructor(props){
        super(props);
        this.action = 'http://localhost:38080/api/facts';
        this.state = {
            Meat: [],
            Marinade: '',
            Coal: '',
            Woods: '',
            Fire: '',
            Weather: '',
            Time: 0
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.getRecommend = this.getRecommend.bind()
        
    }

    getRecommend = async() => {
        const response = await (await Server.getRecommendation(this.props._id)).data
        var recommendation = new String();
        response.data.map((message, index) => 
            recommendation = recommendation + '\n' +new String(message.recommendation)
        )
        return alert(recommendation);
    }

    handleChange = (event) => {
        event.preventDefault()
        return this.setState({
            [event.target.name]: event.target.value
        });
        // return console.log(this.state)
    }

    handleSubmit = async() => {
        // store the states in the form data
        let formData = new FormData();
        formData.append("Meat", this.state.Meat)
        formData.append("Marinade", this.state.Marinade)
        formData.append("Coal", this.state.Coal)
        formData.append("Woods", this.state.Woods)
        formData.append("Fire", this.state.Fire)
        formData.append("Weather", this.state.Weather)
        formData.append("Time", this.state.Time)
        const response = await Server.addNew(formData)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <MyInput
                    value={this.state.Meat}
                    onChange={this.handleChange}
                    type={"text"}
                    placeholder={"Виберіть тип м'яса: Шия, Корейка, Стегно, Курка"}
                    name={'Meat'}
                /><MyInput
                    value={this.state.Marinade}
                    onChange={this.handleChange}
                    type={"text"}
                    placeholder={"Виберіть маринад: Кефір, Вино, Оцет"}
                    name={'Marinade'}
                /><MyInput
                    value={this.state.Coal}
                    onChange={this.handleChange}
                    type={"text"}
                    placeholder={"Виберіть вугілля: Яблуння, Слива, Абрикоса"}
                    name={'Coal'}
                /><MyInput
                    value={this.state.Woods}
                    onChange={this.handleChange}
                    type={"text"}
                    placeholder={"Виберіть суху дрова: Клен, Дуб, Тополя, Осика, Верба, Ліщина, Каштан, Липа"}
                    name={'Woods'}
                /><MyInput
                    value={this.state.Fire}
                    onChange={this.handleChange}
                    type={"text"}
                    placeholder={"Наявність вогню: true, false"}
                    name={'Fire'}
                /><MyInput
                    value={this.state.Weather}
                    onChange={this.handleChange}
                    type={"text"}
                    placeholder={"Погодні умови: Дощ, Сильний вітер, Сонячно, Без вітру"}
                    name={'Weather'}
                /><MyInput
                    value={this.state.Time}
                    onChange={this.handleChange}
                    type={"text"}
                    placeholder={"Час приготування: від 0 до 25"}
                    name={'Time'}
                />
                <p><input type={'submit'} name='Send'></input></p> 
            </form>
        )
    }
}

export default PostForm;