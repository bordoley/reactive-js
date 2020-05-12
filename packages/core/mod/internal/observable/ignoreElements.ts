import { SubscriberLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";
import { add } from "../../disposable.ts";

class IgnoreSubscriber<TA, TB> extends AbstractDelegatingSubscriber<TA, TB> {
  constructor(delegate: SubscriberLike<TB>) {
    super(delegate);
    add(this, delegate);
  }

  notify(_: TA) {
    assertSubscriberNotifyInContinuation(this);
  }
}

const operator = <TA, TB>(subscriber: SubscriberLike<TB>) =>
  new IgnoreSubscriber<TA, TB>(subscriber);
operator.isSynchronous = true;

/**
 * Returns an `ObservableLike` that ignores all items emitted by the source.
 */
export const ignoreElements = <TA, TB>() => lift<TA, TB>(operator);
