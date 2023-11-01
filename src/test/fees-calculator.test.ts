/* eslint-disable indent */
import {describe, expect, it} from '@jest/globals';
import { orderItems, orders } from '../data';
import { getFixedOrederItems, removeChalkStyles } from '../utils/helpers';
import feesCalculator from "../functions/fees-calculator";

describe('Fees Calculator', () => {
    it('should calculate fees correctly', async () => {
       
        const fixedOrderItems = getFixedOrederItems(orderItems);
        const [res,] = feesCalculator(fixedOrderItems, orders);

        expect(removeChalkStyles(res)).toEqual(
`Order ID: 20150111000001
   Order item Real Property Recording: $28.00
   Order item Real Property Recording: $26.00

   Order total: $54.00

Order ID: 20150117000001
   Order item Real Property Recording: $27.00
   Order item Real Property Recording: $45.00

   Order total: $72.00

Order ID: 20150118000001
   Order item Real Property Recording: $30.00
   Order item Birth Certificate: $23.00

   Order total: $53.00

Order ID: 20150123000001
   Order item Birth Certificate: $23.00
   Order item Birth Certificate: $23.00

   Order total: $46.00`
        );
    });
});