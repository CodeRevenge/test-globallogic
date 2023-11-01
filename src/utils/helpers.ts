import { Distribution } from "../types/distribution.type";
import {
    FixedOrderItems,
    OrderDistribution,
    OrderItem } from "../types/order-item.type";

export function getFixedOrederItems(orderItems: OrderItem[]): FixedOrderItems {
    return orderItems.reduce((acc, orderItem) => {
        acc[orderItem.order_item_type] = orderItem;
        return acc;
    }, {} as { [key: string]: OrderItem });
}

export function getOrderDistribution(
    orderItems: OrderItem[]): OrderDistribution {
    return orderItems.reduce((acc, orderItem) => {
        acc[orderItem.order_item_type] = 
        orderItem.distributions.map((distribution) => ({
            ...distribution,
            amount: +distribution.amount
        }));
        return acc;
    }, {} as { [key: string]: Distribution[] } );
}

export function removeChalkStyles(str: string): string {
    // eslint-disable-next-line no-control-regex
    return str.replace(/\u001b\[.*?m/g, '');
}
