import * as React from 'react';

export class ConvertCurrencyApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            VNDamount :0,
            VND : 0,
            base: 0,
            selectedOption : 'USD',
            conversionFactor : {
                USD : 23303,
                EUR : 27000
            }
        }
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.handleCheck = this.handleCheck.bind(this)
    }
    componentDidMount() {
       
    }
    componentDidUpdate(prevProps, prevState) {
       
    }
    componentWillUnmount() {

    }
    handleCheck(e) {
        const currencyType = e.target.value;
        this.setState({ selectedOption : currencyType  });

        const conversionFactor = this.state.conversionFactor[currencyType];
        const VNDamount = this.state.base * conversionFactor;
        this.setState({ VNDamount });
    }
   
    onHandleSubmit(e) {
        e.preventDefault();

        const base = e.target.elements.inputNum.value;
        this.setState({ base });

        const conversionFactor = this.state.conversionFactor[this.state.selectedOption];
        const VNDamount = base * conversionFactor;
        this.setState({ VNDamount });
    }
    render() {
        return(
            <div>
                <h1>Convert Currency App</h1>
                <p>Choose currency type to convert to VND</p>
                <form onSubmit={this.onHandleSubmit}>
                    <input 
                        type="radio" 
                        name="currencyType" 
                        value="USD" id="USD" 
                        onChange={this.handleCheck}
                        checked={this.state.selectedOption === "USD"}
                    />USD
                    <input 
                        type="radio" 
                        name="currencyType" 
                        value="EUR" 
                        id="EUR"         
                        onChange={this.handleCheck} 
                        checked={this.state.selectedOption === "EUR"}      
                    />EUR
                    <input type="text" name="inputNum" id="" placeholder="Enter a number"/>
                    <button>Convert</button>
                </form>
              
                <div>
                    <p>{this.state.selectedOption} to VND value</p>
                    <p>{this.state.VNDamount}</p>
                </div>
            </div>
        )
    }
}