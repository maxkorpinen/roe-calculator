import React, { Component } from 'react';

export default class Calculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            totalValue: "",
            monthlyCost: "",
            monthlyRent: "",
            ownEquity: "",
            morgageInterest: "",
            roe: " "
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.calculateRoe = this.calculateRoe.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        if (this.state.totalValue === this.state.ownEquity) {
            this.setState({
                morgageInterest: 0
            })
        }

        this.setState({
            [name]: value
        })

        return;
    }

    handleSubmit() {
        if (this.state.totalValue !== "" && this.state.monthlyCost !== "" && this.state.monthlyRent !== "" && this.state.ownEquity !== "" && this.state.morgageInterest !== "") {
            this.calculateRoe();
        } else {
            window.alert("Täytä kaikki arvot :)")
        }
    }

    calculateRoe() {

        // Calculating the yearly costs/profits
        const totalValue = this.state.totalValue; // property value in €
        const ownMoney = this.state.ownEquity; // how much own money is in the property
        const loanMoney = totalValue - ownMoney; // how much loan money is in the property

        const interest = loanMoney * this.state.morgageInterest / 100; // yearly interest to be paid

        const costs = this.state.monthlyCost; // the monthly costs of keeping the property in €
        const rent = this.state.monthlyRent; // the monthly rent income in €

        let roe = ((( rent - costs ) * 12 ) - interest) / ownMoney * 100;
        roe = Math.round( roe * 10 ) / 10; // rounding up to 1 decimal

        this.setState({
            roe: roe
        })
        
        return;
    }

    render() {
        return (
            <div className="container">
                <div>
                    <h1>Asuntosijoittajan ROE-Laskuri</h1>
                    <hr></hr>
                </div>

                <div className="calculatorForm">
                    <h3 className="alignLeft"><b>Asunnon tiedot</b></h3>
                    <p>Asunnon kokonaisarvo: <input name="totalValue" placeholder="€" onChange={this.handleInputChange}></input></p>
                    <p>Vastikkeet yhteensä: <input name="monthlyCost" placeholder="€/kk" onChange={this.handleInputChange}></input></p>

                    <h3 className="alignLeft"><b>Rahoitus</b></h3>
                    <p>Vuokra: <input name="monthlyRent" placeholder="€/kk" onChange={this.handleInputChange}></input></p>
                    <p>Oman pääoman osuus: <input name="ownEquity" placeholder="€" onChange={this.handleInputChange}></input></p>
                    <p>Lainan vuosikorko: <input name="morgageInterest" placeholder="%" onChange={this.handleInputChange}></input></p>
                    <button onClick={this.handleSubmit}>Laske</button>
                </div>

                <div>
                    <hr></hr>
                    <h2>Oman pääoman tuotto: <b>{this.state.roe} %</b></h2>
                </div>
            </div>
        )
    }
}
