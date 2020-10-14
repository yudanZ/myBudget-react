import React from 'react';
import IncomeList from '../IncomeList/IncomeList';
import ExpensesList from '../ExpensesList/ExpensesList';
import './budgetList.css';
const BudgetList = ({incItems, expItems, deleteItemFromBudget}) => {
    //console.log(incItems)
    return(
        <div className= 'container clearfix'>
            <IncomeList incItems = {incItems} deleteItemFromBudget = {deleteItemFromBudget}></IncomeList>
            <ExpensesList expItems = {expItems} deleteItemFromBudget = {deleteItemFromBudget}></ExpensesList>
        </div>
    )
}
export default BudgetList;