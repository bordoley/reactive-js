import { SubscriberLike, SubscriberOperatorLike } from "./interfaces";

/** @ignore */
export class SubscriberOperator<TA, TB>
  implements SubscriberOperatorLike<TA, TB> {
  constructor(
    readonly isSynchronous: boolean,
    readonly call: (subscriber: SubscriberLike<TB>) => SubscriberLike<TA>,
  ) {}
}
