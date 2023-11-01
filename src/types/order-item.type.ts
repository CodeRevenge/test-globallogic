import { Distribution } from "./distribution.type";
import { Fee } from "./fee.type";

export type OrderItem = {
    order_item_type: string;
    fees: Fee[];
    distributions: Distribution[];
}

export type FixedOrderItems = {
    [key: string]: OrderItem;
}

export type OrderDistribution = {
    [key: string]: Distribution[];
}