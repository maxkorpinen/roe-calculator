import React, { Component } from 'react';

export default class Calculator extends Component {

    state = {
        totalPrice: "",
        roe: ""
    }

    render() {
        return (
            <div className="container">
                <div>
                    <h1>LASKURI</h1>
                </div>

                <div className="calculatorForm">
                    <h3 className="alignLeft"><b>Asunnon tiedot</b></h3>
                    <p>Asunnon kokonaisarvo: <input placeholder="€"></input></p>
                    <p>Vastikkeet yhteensä: <input placeholder="€/kk"></input></p>

                    <h3 className="alignLeft"><b>Rahoitus</b></h3>
                    <p>Vuokra: <input placeholder="€/kk"></input></p>
                    <p>Oman pääoman osuus: <input placeholder="€"></input></p>
                    <p>Lainan vuosikorko: <input placeholder="%"></input></p>
                </div>

                <div>
                    <h2>Oman pääoman tuotto: <b>7.6%</b></h2>
                </div>
            </div>
        )
    }
}
