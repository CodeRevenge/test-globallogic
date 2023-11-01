// Modules
import chalk               from 'chalk';

// Utils
import currencyFormater    from '../utils/currency-formater';

// Types
import { Fee }             from '../types/fee.type';
import { FixedOrderItems } from '../types/order-item.type';
import { Order }           from '../types/order.type';

export default function (
    orderItems: FixedOrderItems,
    orders: Order[]): [string, { [key: string]: number }] {

    let finalOutput = '';
    const totals: {[key: string]: number} = {};

    orders.forEach(order => {
        finalOutput += chalk.bgGreenBright.bold('Order ID:')
            + chalk.bold(` ${order.order_number}\n`);
        let orderFee = 0;
        order.order_items.forEach((orderItem) => {
            
            const fee = orderItems[orderItem.type]
                .fees.reduce((acc: number, fee: Fee) => {
                    if(fee.type === 'per-page') {
                        return acc + ( +fee.amount * (orderItem.pages - 1));
                    }
                    return +fee.amount + acc;
                }, 0);

            orderFee += fee;
            finalOutput += `   Order item ${chalk.italic(orderItem.type)
            }: ${currencyFormater(fee)}\n`;
        });

        totals[order.order_number] = orderFee;

        finalOutput += '\n   ' + chalk.underline('Order total: '
            + (currencyFormater(orderFee))) + '\n\n';
    });

    return [finalOutput.trim(), totals];
}