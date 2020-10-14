import React from 'react';
import './addBudget.css';

class AddBudget extends React.Component {
    constructor(porps){
        super();
        this.state = {
            type: 'inc',
            description: '',
            value: '',
            active: false
        }
    }

    toggleInputStype = () => {
        //console.log('here')
        const currentState = this.state.active;
        this.setState({ active : !currentState});
        //console.log(this.state);
    }
    onTypeChange = (event) => {
        
        this.setState({ type: event.target.value})
        this.toggleInputStype();

        
    }

    onDescriptionChange = (event) => {
        this.setState({ description: event.target.value})
    }

    onValueChange = (event) => {
        this.setState({ value: event.target.value})
    } 
    
   
    clearInputFields = () => {
        this.setState({
            type: 'inc',
            description: '',
            value: ''
        })
    }

    onKeyPress = ( e ) => {
        if(e.keyCode === 13  ){
            const addedItem = this.state;
            //console.log(addedItem);
            this.props.loadInput( addedItem);
            this.clearInputFields();
        }
    }
    onSubmitButton =( e ) =>{   
        e.preventDefault();
        const addedItem = this.state;
        //console.log(addedItem);
        this.props.loadInput( addedItem);
        this.clearInputFields();
    }
    render(){
        return (
        
            <div className="add">
                <form>
                    <div className="add__container">
                        <select className={this.state.active ? 'add__type red-focus' : 'add__type'} value={this.state.type} onChange={this.onTypeChange} >
                            <option value="inc">+</option>
                            <option value="exp">-</option>
                        </select>
                        <input 
                            id='description' 
                            type="text" 
                            className={`add__description ${this.state.active ? 'red-focus' : null}` } name="description" 
                            value={this.state.description} placeholder="Add description" 
                            onChange={this.onDescriptionChange}/>
                        <input 
                            type="number" 
                            name='value' 
                            className={`add__value ${this.state.active ? 'red-focus' : null}`}
                            placeholder="Value" 
                            value={this.state.value}
                            onChange={this.onValueChange}
                            onKeyPress={this.onKeyPress}
                            />
                        <button className={`add__btn ${this.state.active ? 'red' : null}`} type="submit" onClick={this.onSubmitButton} >
                            <ion-icon name="checkmark-circle-outline"></ion-icon>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
    
}

export default AddBudget;