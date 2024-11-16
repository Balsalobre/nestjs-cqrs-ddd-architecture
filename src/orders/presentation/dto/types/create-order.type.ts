export type ShippingAddress = {
  street: string;
  city: string;
  postalCode: string;
};

export type OrderItem = {
  productId: string;
  unitPrice: number;
  quantity: number;
};

export type Discounts = {
  type: 'percentage' | 'fixed';
  value: number;
};

export type CreateOrderData = {
  customerId: string;
  shippingAddress: ShippingAddress;
  orderItems: OrderItem[];
  discounts: Discounts[];
};
