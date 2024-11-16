import { Discount } from '../discount';

export class DiscountAppliedEvent {
  constructor(
    public readonly orderId: string,
    public readonly discount: Discount,
  ) {}
}
