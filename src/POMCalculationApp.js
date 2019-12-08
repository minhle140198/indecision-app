import * as React from 'react';
import { isTypeofTypeAnnotation } from '@babel/types';


export class POMCalculationApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numberOfMonsters: 0,
            levelOfMonsters: 0,
            totalEggs: 0,
            totalMoney: 0,
            highestPrice : 0,
            startPrice : 0
        }
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.totalMoneyCalculator = this.totalMoneyCalculator.bind(this);
    }
    componentDidMount() {
       
    }
    componentDidUpdate(prevProps, prevState) {
       
    }
    componentWillUnmount() {

    }
   
    onHandleSubmit(e) {
        e.preventDefault();

        const numberOfMonsters = parseInt(e.target.elements.numberOfMonsters.value.trim());
        const levelOfMonsters = parseInt(e.target.elements.levelOfMonsters.value.trim());
        const startPrice =  parseInt(e.target.elements.startPrice.value.trim());
        this.setState({ numberOfMonsters });
        this.setState({ levelOfMonsters });
        this.setState({ startPrice })

        let totalEggs = numberOfMonsters;
        for (let i = 0; i < levelOfMonsters - 1; i ++){
            totalEggs = this.roundNumber(totalEggs);
            totalEggs = totalEggs / 2 * 5;
        }
        this.setState({ totalEggs });
        
        this.totalMoneyCalculator(totalEggs, startPrice);
    }
    roundNumber(num) {
        return (num % 2 == 0) ? num : num+1;
    }
    totalMoneyCalculator(totalEggs, startPrice) {
        const commonDifference = 5; 
        const firstTerm = startPrice;
        
        const lastTerm = firstTerm + (totalEggs - 1) * commonDifference;
       
        const totalMoney = totalEggs * (2 * firstTerm + (totalEggs - 1 ) * commonDifference) / 2;
       
        this.setState({ totalMoney });
        this.setState({ highestPrice : lastTerm });
    }
    render() {
        return(
            <div>
                <h1>Park of Monsters Calculator App</h1>
                <form onSubmit={this.onHandleSubmit}>
                    <p>Enter numbers of monster</p>
                    <input 
                        type="number" 
                        name="" 
                        id="numberOfMonsters"
                        required
                        />
                    <p>Enter level of monster</p>
                    <input 
                        type="number" 
                        name="" 
                        id="levelOfMonsters"
                        required
                    />
                    <input 
                        type="number" 
                        name="" 
                        id="startPrice"
                        required
                    />
                    <button>submit</button>
                </form>
                <div>
                    <p> Total eggs {this.state.totalEggs}</p>
                    <p> Total money {this.state.totalMoney}</p>
                    <p> Highest price {this.state.highestPrice}</p>
                </div>
            </div>
        )
    }
}

// enter amount of monster and level you want
//input 3 - level 7
//output : numbers of eggs