import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const api_key = '526f3bdf694a57da1de2bbefe4692432';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 'Amerika', // Kotanya bisa di ganti-ganti
            description: ''
        }
    }
    // componentDidMount() fungsi yang berguna untuk memanggil fungsi lain ketika fungsi render() telah dieksekusi.

    componentDidMount() {
        this.grabWeather(this.state.city);
    }

    grabWeather(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`)
        // .then(response => console.log(response)) // untuk melihat jeroannya
        .then(response => response.json())
        // .then(json => console.log(json));
        .then(json => {
            this.setState({description: json.weather[0].description})
        });
    }
    render(){
        return(
            <div>
                ReactJS and JSX in action!
                {/* ini adalah cara menaroh variabel dalam html. dengan api_key */}
                <h1>Weather report for {this.state.city}!</h1>
                <h2>{this.state.description}</h2>
            </div>

        )
    }
}

ReactDOM.render(<App></App>, document.getElementById('root'));