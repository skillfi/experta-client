import React from "react";
import "../styles/PostForm.css"
import Server from '../API/Server';
// import axios from "axios";

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
        
    }

    handleChange = (event) => {
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
        return document.location = `/fact/${response.data[0]._id}/recommendations`;
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                {/* <PatternArea/> */}
                <div id="meat">
                    <p>Виберіть яку частину м'яса будете готовити</p>
                    <input type={'radio'} name={'Meat'} onChange={this.handleChange}
                        value={[ "Шия", "Корейка" ]} id={'radio'}/> "Шия", "Корейка" 
                    <input type={'radio'} name={'Meat'} onChange={this.handleChange}
                        value={[ "Шия", "Вирізка" ]} id={'radio'}/> "Шия", "Вирізка"
                    <input type={'radio'} name={'Meat'} onChange={this.handleChange}
                        value={[ "Корейка", "Вирізка" ]} id={'radio'}/> "Корейка", "Вирізка"
                </div>
                <div id="action">
                    <p>Виберіть маринад</p>
                    <input type={'radio'} name={'Marinade'} onChange={this.handleChange}
                        value={'Кефір'} id={'radio'}/> Кефір 
                    <input type={'radio'} name={'Marinade'} onChange={this.handleChange}
                        value={'Вино'} id={'radio'}/> Вино
                    <input type={'radio'} name={'Marinade'} onChange={this.handleChange}
                        value={'Оцет'} id={'radio'}/> Оцет
                </div>
                <div id="degree">
                    <p>Виберіть ступінь вугілля</p>
                    <input type={'radio'} name={'Coal'} onChange={this.handleChange}
                        value={'Яблуня'} id={'radio'}/> Яблуня 
                    <input type={'radio'} name={'Coal'} onChange={this.handleChange}
                        value={'Слива'} id={'radio'}/> Слива
                    <input type={'radio'} name={'Coal'} onChange={this.handleChange}
                        value={'Абрикоса'} id={'radio'}/> Абрикоса
                </div>
                <div id="pardone">
                    <p>Якщо нема вугілля, то виберіть сухі дрова</p>
                    <input type={'radio'} name={'Woods'} onChange={this.handleChange}
                        value={'Клен'} id={'radio'}/> Клен
                    <input type={'radio'} name={'Woods'} onChange={this.handleChange}
                        value={'Дуб'} id={'radio'}/> Дуб
                    <input type={'radio'} name={'Woods'} onChange={this.handleChange}
                        value={'Тополя'} id={'radio'}/> Тополя
                    <input type={'radio'} name={'Woods'} onChange={this.handleChange}
                        value={'Осика'} id={'radio'}/> Осика
                    <input type={'radio'} name={'Woods'} onChange={this.handleChange}
                        value={'Верба'} id={'radio'}/> Верба
                    <input type={'radio'} name={'Woods'} onChange={this.handleChange}
                        value={'Ліщини'} id={'radio'}/> Ліщини
                    <input type={'radio'} name={'Woods'} onChange={this.handleChange}
                        value={'Каштана'} id={'radio'}/> Каштана
                    <input type={'radio'} name={'Woods'} onChange={this.handleChange}
                        value={'Липи'} id={'radio'}/> Липи
                </div>
                <div id="turned">
                    <p>ГОрів вогонь під час жарки шашлику?</p>
                    <input type={'radio'} name={'Fire'} onChange={this.handleChange}
                        value={'true'} id={'radio'}/> Так 
                    <input type={'radio'} name={'Fire'} onChange={this.handleChange}
                        value={'false'} id={'radio'}/> Ні
                </div>
                <div id="cooked">
                    <p>Погода в день приготування</p>
                    <input type={'radio'} name={'Weather'} onChange={this.handleChange}
                        value={'Дощ'} id={'radio'}/> Дощ 
                    <input type={'radio'} name={'Weather'} onChange={this.handleChange}
                        value={'Сильний вітер'} id={'radio'}/> Сильний вітер
                    <input type={'radio'} name={'Weather'} onChange={this.handleChange}
                        value={'Сонячно'} id={'radio'}/> Сонячно
                    <input type={'radio'} name={'Weather'} onChange={this.handleChange}
                        value={'Без вітру'} id={'radio'}/> Без вітру
                </div>
                <div id="time">
                    <p>Скільки годин жариться?</p>
                    <p>Time 1 to 25</p>
                    <input type={'radio'} name={'Time'} min={1} max={25} onChange={this.handleChange}
                        value={5}id={'radio'}/> 5
                    <input type={'radio'} name={'Time'} min={1} max={25} onChange={this.handleChange}
                        value={10}id={'radio'}/> 10
                    <input type={'radio'} name={'Time'} min={1} max={25} onChange={this.handleChange}
                        value={15}id={'radio'}/> 15
                    <input type={'radio'} name={'Time'} min={1} max={25} onChange={this.handleChange}
                        value={20}id={'radio'}/> 20
                    <input type={'radio'} name={'Time'} min={1} max={25} onChange={this.handleChange}
                        value={25}id={'radio'}/> 25
                </div>
                <p><input type={'submit'} name='Send'></input></p> 
            </form>
        )
    }
}

export default PostForm;