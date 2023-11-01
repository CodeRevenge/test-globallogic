// Modules
import chalk from "chalk";

// Utils
import currencyFormater from "../utils/currency-formater";

// Types
import { Distribution } from "../types/distribution.type";
import { OrderDistribution } from "../types/order-item.type";
import { Order } from "../types/order.type";

export default function (
    orderDistributions: OrderDistribution,
    orders: Order[],
    totals: { [key: string]: number }) {

    let finalOutput = '';
    let totalOthers = 0;

    const globalFunds: Distribution[] = [];

    orders.forEach(order => {
        finalOutput += chalk.bgGreenBright.bold('Order ID:') 
            + chalk.bold(` ${order.order_number}\n`);

        const orderFunds: Distribution[] = [];

        order.order_items.forEach(orderItem => {
            orderFunds.push(...orderDistributions[orderItem.type]);
        });

        const groupedFounds = orderFunds.reduce((acc, fund) => {
            acc[fund.name] = acc[fund.name] ?
                acc[fund.name] + fund.amount : fund.amount;
            return acc;
        }, {} as { [key: string]: number });


        let totalAmountFunds = 0;

        Object.entries(groupedFounds).forEach(([fundName, amount]) => {
            finalOutput += `   Fund - ${chalk.italic(fundName)
            }: ${currencyFormater(amount)}\n`;
            totalAmountFunds += amount;
        });

        finalOutput += `   Fund - ${chalk.italic('Other')}: ${currencyFormater(
            totals[order.order_number] - totalAmountFunds)}\n`;
        totalOthers += totals[order.order_number] - totalAmountFunds;

        finalOutput += '\n';

        globalFunds.push(...orderFunds);
    });

    const groupedFounds = globalFunds.reduce((acc, fund) => {
        acc[fund.name] = acc[fund.name] ? 
            acc[fund.name] + fund.amount : fund.amount;
        return acc;
    }, {} as { [key: string]: number });

    finalOutput += chalk.greenBright.bold.underline('Total distributions:\n');
    Object.entries(groupedFounds).forEach(([fundName, amount]) => {
        finalOutput += `   Fund - ${fundName}: ${currencyFormater(amount)}\n`;
    });
    finalOutput += `   Fund - Other: ${currencyFormater(totalOthers)}\n`;
    

    return finalOutput.trimEnd();
}