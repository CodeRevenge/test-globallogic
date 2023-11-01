import { Item } from "./item.type";

export type Order = {
    order_date: string;
    order_number: string;
    order_items: Item[]
};