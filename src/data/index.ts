/* eslint-disable @typescript-eslint/no-explicit-any */
import { OrderItem } from '../types/order-item.type';
import { Order } from '../types/order.type';
import orderItemsJSON from './fees.json';
import ordersJSON from './orders.json';

export const orderItems = orderItemsJSON as any as OrderItem[],
    orders = ordersJSON as any as Order[];