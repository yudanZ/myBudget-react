import React from 'react';
import { formatNumber } from '../../utility/utils';
import './expensesList.css';
class ExpensesList extends React.Component{
    onClickSubmit = (event) => {
        //console.log(event.target);
        let id = event.target.getAttribute('data-key');
        //console.log(a)
        this.props.deleteItemFromBudget('exp', id);
    }
    render(){
        const {expItems} = this.props; 
        return (
            <div className="expenses">
                <h2 className="expenses__title">Expenses</h2>
                { expItems.length ? 
                    <div className="expenses__list">
                    {expItems.map( item => 
                        <div className="item clearfix" key={item.id} id="income-{item.id}">
                            <div className="item__description">{item.description}</div>
                            <div className="right clearfix">
                                <div className="item__value">{formatNumber(item.value, 'exp')}</div>
                                <div className="item__percentage">{item.percentage}%</div>
                                <div className="item__delete">
                                    <button className="item__delete--btn" data-key={item.id} onClick={this.onClickSubmit}>
                                    <ion-icon name="close" data-key={item.id}></ion-icon>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        )}                        
                        
                    </div>
    
                    :
                    <div className="income__list"> </div>
                
                }        
                                
                
            </div>
        )
    }
}

export default ExpensesList;