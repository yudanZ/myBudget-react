import React from 'react';
import { formatNumber, getCurrentMonthAndYear,formatPercentage } from '../../utility/utils';
import './budgetContainer.css';

const BudgetContainer = ({budgets}) => {
    const { budget , totalsInc, totalsExp, percentage} = budgets;
    var type;
    budget > 0 ? type = 'inc' : type = 'exp';
    
    return (
        <div className="budget-container">
            <div className="budget">
                <div className="budget__title">
                    Available Budget in <span className="budget__title--month">{getCurrentMonthAndYear()}</span>:
                </div>
                
                <div className="budget__value">{formatNumber(budget, type)}</div>
                
                <div className="budget__income clearfix">
                    <div className="budget__income--text">Income</div>
                    <div className="right">
                        <div className="budget__income--value">{formatNumber(totalsInc,'inc')}</div>
                        <div className="budget__income--percentage">&nbsp;</div>
                    </div>
                </div>
                
                <div className="budget__expenses clearfix">
                    <div className="budget__expenses--text">Expenses</div>
                    <div className="right clearfix">
                        <div className="budget__expenses--value">{formatNumber(totalsExp, 'exp')}</div>
                        <div className="budget__expenses--percentage">{formatPercentage(percentage)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BudgetContainer;