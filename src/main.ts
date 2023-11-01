// Core
import chalk from 'chalk';

// Helpers
import { orderItems, orders } from './data';
import { getFixedOrederItems, getOrderDistribution, removeChalkStyles } from './utils/helpers';

// Functions
import feesCalculator from "./functions/fees-calculator";
import distributionCalculation from './functions/distribution-calculator';

function main() {

    const preventColor = process.env.NO_COLOR || false;

    // Part 1: Fees

    console.log(chalk.bold.white.bgBlue('\n\nPart 1: Fees\n\n'));

    // Generating hashmap for order items (fees)
    const fixedOrderItems = getFixedOrederItems(orderItems);

    const [part1resp, totals] = feesCalculator(fixedOrderItems, orders);
    console.log(preventColor ? removeChalkStyles(part1resp) : part1resp);

    // End of Part 1
    
    // Part 2: Distributions

    console.log(chalk.bold.white.bgBlue('\n\n\nPart 2: Distributions\n\n'));

    // Generating hashmap for order items (distributions)
    const orderDistribution = getOrderDistribution(orderItems);

    const part2resp = distributionCalculation(orderDistribution, orders, totals);
    console.log(preventColor ? removeChalkStyles(part2resp) : part2resp);

    // End of Part 2

}

main();