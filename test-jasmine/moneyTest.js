import {formatCurrency} from '../scripts/utils/money.js';
describe('test suite : formatCurrency',()=>{
    it('should return formatted currency string for given price in paise',()=>{
        expect(formatCurrency(123456)).toEqual('₹1,234.56');
    });

    it('works with 0',()=>{
        expect(formatCurrency(0)).toEqual('₹0.00');
});
});