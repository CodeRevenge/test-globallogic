import { FixedOrderItems, OrderDistribution, OrderItem } from "../types/order-item.type";

export function getFixedOrederItems(orderItems: OrderItem[]): FixedOrderItems {
    return orderItems.reduce((acc: any, orderItem) => {
        acc[orderItem.order_item_type] = orderItem;
        return acc;
    }, {});
}

export function getOrderDistribution(orderItems: OrderItem[]): OrderDistribution {
    return orderItems.reduce((acc: any, orderItem) => {
        acc[orderItem.order_item_type] = orderItem.distributions.map((distribution) => ({
            ...distribution,
            amount: +distribution.amount
        }));
        return acc;
    }, {});
}

export function removeChalkStyles(str: string): string {
    return str.replace(/\u001b\[.*?m/g, '');
}
