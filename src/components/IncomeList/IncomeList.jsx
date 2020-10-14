import React from 'react';
import { formatNumber } from '../../utility/utils';
import './incomeList.css';
class IncomeList extends React.Component{

    constructor(props){
        super();
    }

    onClickSubmit = (event) => {
        //console.log(event.target);
        let id = event.target.getAttribute('data-key');
        //console.log(a)
        this.props.deleteItemFromBudget('inc', id);
    }
    
    render(){
        const {incItems} = this.props; 
        return (
            <div className="income">
                <h2 className="icome__title">Income</h2>
                { incItems.length ? 
                    <div className="income__list">
                    {incItems.map( item => 
                        <div className="item clearfix" key={item.id} id="income-{item.id}">
                            <div className="item__description">{item.description}</div>
                            <div className="right clearfix">
                                <div className="item__value">{formatNumber(item.value, 'inc')}</div>
                                <div className="item__delete" >
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

export default IncomeList;