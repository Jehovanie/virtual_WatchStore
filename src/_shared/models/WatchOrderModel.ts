export interface WatchOrderModel{
    id: Number;
    quantity: Number;
    totalPrice: Number;
    orderDate: Date;
    status: String;
    shippingAddress: String;
    paymentMethod: String;
    shippingCost: Number;
    trackingNumber: Number;
    // commandeDelivery
}