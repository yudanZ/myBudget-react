import React from 'react';

import BudgetContainer from './components/BudgetContainer/BudgetContainer';
import AddBudget from './components/AddBudget/AddBudget';
import BudgetList from './components/BudgetList/BudgetList';

import './App.css';

const initialState = {
  type: 'inc',
  expItems: [],
  incItems: [],
  totalsInc: 0,
  totalsExp: 0,
  budget: 0,
  percentage: -1
}

class App extends React.Component {
  constructor(){
    super();

    this.state = initialState;

  }

  componentDidUpdate (){
    //console.log(this.state);
  }

  

  //generate unique ID
  getUniqueId () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  deleteItemFromBudget = ( type, id ) => {
    const subItem = type==='inc' ? this.state.incItems : this.state.expItems;
    //console.log(subItem);
    //console.log(id)
    const newItem = subItem.filter ( item => {
      return item.id !== id
    })

    if( type === 'inc'){
      this.setState({incItems : newItem})
    }else if( type === 'exp'){
      this.setState({expItems: newItem})
    }
  }

  //Add Item To State, depends on type 'inc' or 'exp
  addItemToState = ({type, description, value}) => {
    const newItems = {
      id: this.getUniqueId(),
      type,
      description,
      value
     }
    if(type === 'inc'){
      //console.log('inc')
      let newIncItems = this.state.incItems;
      newIncItems.push( newItems);
      this.setState({incItems : newIncItems});
    }else if(type === 'exp'){
      let newExpItems = this.state.expItems;
      newExpItems.push( newItems);
      this.setState({expItems : newExpItems});
    }
  }

  //calculate percentage for each expenses item
  calculatePercentage( totalIncome , value){
    //console.log(totalIncome);
    if( totalIncome > 0){
        return Math.round((value / totalIncome) * 100);
    }else {
        return -1;
    }
    
  }

  updatePercentages = () => {
    //console.log(this.state.expItems);
    const { expItems } = this.state;
    //console.log(expItems);
    //let updatedExpItems;
    if( expItems ){
      expItems.forEach( obj => {
       //console.log(this.state.totalsInc);
        obj.percentage = this.calculatePercentage( this.state.totalsInc, obj.value)
      })
    }

    this.setState({expItems: expItems});
    
  }

  calculateBudget = () => {
    const totalIncome = this.getSumValue(this.state.incItems);
    //console.log(totalIncome)

    this.setState({totalsInc : totalIncome});
    
    
    //console.log(this.state.totalsInc);
    const totalExpenses = this.getSumValue(this.state.expItems);
    this.setState({totalsExp : totalExpenses});

    this.setState({budget: totalIncome - totalExpenses});
    let percentage;
    if(totalIncome > 0){
      percentage = Math.round( (totalExpenses / totalIncome ) * 100);
    }else{
      percentage = -1
    }

    this.setState({percentage: percentage});

    //console.log(this.state)

  }

  getSumValue = (arr) => {
    //console.log(arr)
    return  arr.reduce((accumulator, item) => {
      return accumulator + item.value
    }, 0);
  }

  

  //get input and set it into state
  loadInput = ({type, description, value}) =>{
    //console.log(type)
    value = parseFloat(value);
    if(description !== "" && !isNaN(value) && value > 0){

      this.addItemToState({type, description, value});

      this.calculateBudget();

      this.updatePercentages();

      //console.log( this.state);
    }
     
     //console.log( this.state);
  }
  render(){
    const {incItems, expItems, ...budgets } = this.state;
    return (
      <div className="App">
        <BudgetContainer budgets={budgets}/>
        <AddBudget loadInput= {this.loadInput}/>
        <BudgetList incItems = {incItems} expItems = {expItems} deleteItemFromBudget = {this.deleteItemFromBudget}/>
      </div>
    );
  }
  
}

export default App;
