import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsIn,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import {
  CreateOrderData,
  Discounts,
  OrderItem,
  ShippingAddress,
} from './types/create-order.type';
import { Type } from 'class-transformer';

class CreateOrderShippingAddress implements ShippingAddress {
  @IsString()
  readonly street: string;

  @IsString()
  readonly city: string;

  @IsString()
  readonly postalCode: string;
}

class CreateOrderItem implements OrderItem {
  @IsString()
  readonly productId: string;

  @IsNumber()
  readonly unitPrice: number;

  @IsNumber()
  readonly quantity: number;
}

class CreateOrderDiscount implements Discounts {
  @IsIn(['percentage', 'fixed'])
  readonly type: 'percentage' | 'fixed';

  @IsNumber()
  readonly value: number;
}

export class CreateOrderDto implements CreateOrderData {
  @ApiProperty({ type: String, example: 'customer-id' })
  @IsString()
  readonly customerId: string;

  @ApiProperty({
    type: CreateOrderShippingAddress,
    example: {
      street: '123 Main St',
      city: 'Springfield',
      postalCode: '12345',
    },
  })
  @ValidateNested()
  @Type(() => CreateOrderShippingAddress)
  readonly shippingAddress: ShippingAddress;

  @ApiProperty({
    type: [CreateOrderItem],
    example: [{ productId: 'product-id', unitPrice: 10, quantity: 1 }],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItem)
  readonly orderItems: OrderItem[];

  @ApiProperty({
    type: [CreateOrderDiscount],
    example: [{ type: 'percentage', value: 10 }],
    default: [],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderDiscount)
  readonly discounts: Discounts[];
}
