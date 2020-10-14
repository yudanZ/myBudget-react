export const formatNumber = ( num, type) => {
    /**
     * add + or - before number
     * exactly 2 decimal points
     * comma separating the thousands
     */

     num = Math.abs(num);
     num = num.toFixed(2);
     let numSplit = num.split('.');
     numSplit[0] = numSplit[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     const str = numSplit.join('.');
     if(type === 'inc'){
         return '+' + str;
     }else if(type === 'exp'){
         return '-' + str;
     } 
}

export const getCurrentMonthAndYear = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const d = new Date();
    const n = d.getMonth();
    const year = d.getFullYear();
    return months[n] + ' ' + year;
    

} 

export const formatPercentage = (percentage) => {
    
    if( percentage > 0){
        return percentage + '%';
    }else {
        return  '---';
    }
}