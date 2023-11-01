/* eslint-disable indent */
import {describe, expect, it} from '@jest/globals';
import { getOrderDistribution, removeChalkStyles } from '../utils/helpers';
import { orderItems, orders } from '../data';
import distributionCalculator from '../functions/distribution-calculator';


describe('Distribution Calculator', () => {
    it('should calculate distribution correctly', async () => {

        const orderDistribution = getOrderDistribution(orderItems);

        const res = distributionCalculator(orderDistribution, orders, {
            '20150111000001': 54,
            '20150117000001': 72,
            '20150118000001': 53,
            '20150123000001': 46
        });

        expect(removeChalkStyles(res)).toEqual(
`Order ID: 20150111000001
   Fund - Recording Fee: $10.00
   Fund - Records Management and Preservation Fee: $20.00
   Fund - Records Archive Fee: $20.00
   Fund - Courthouse Security: $2.00
   Fund - Other: $2.00

Order ID: 20150117000001
   Fund - Recording Fee: $10.00
   Fund - Records Management and Preservation Fee: $20.00
   Fund - Records Archive Fee: $20.00
   Fund - Courthouse Security: $2.00
   Fund - Other: $20.00

Order ID: 20150118000001
   Fund - Recording Fee: $5.00
   Fund - Records Management and Preservation Fee: $10.00
   Fund - Records Archive Fee: $10.00
   Fund - Courthouse Security: $1.00
   Fund - County Clerk Fee: $20.00
   Fund - Vital Statistics Fee: $1.00
   Fund - Vital Statistics Preservation Fee: $1.00
   Fund - Other: $5.00

Order ID: 20150123000001
   Fund - County Clerk Fee: $40.00
   Fund - Vital Statistics Fee: $2.00
   Fund - Vital Statistics Preservation Fee: $2.00
   Fund - Other: $2.00

Total distributions:
   Fund - Recording Fee: $25.00
   Fund - Records Management and Preservation Fee: $50.00
   Fund - Records Archive Fee: $50.00
   Fund - Courthouse Security: $5.00
   Fund - County Clerk Fee: $60.00
   Fund - Vital Statistics Fee: $3.00
   Fund - Vital Statistics Preservation Fee: $3.00
   Fund - Other: $29.00`
        );
    });
});