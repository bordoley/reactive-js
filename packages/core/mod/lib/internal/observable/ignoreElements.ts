import { add } from "../../disposable.ts";
import { ObserverLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import {
  AbstractDelegatingObserver,
  assertObserverNotifyInContinuation,
} from "./observer.ts";

class IgnoreObserver<TA, TB> extends AbstractDelegatingObserver<TA, TB> {
  constructor(delegate: ObserverLike<TB>) {
    super(delegate);
    add(this, delegate);
  }

  notify(_: TA) {
    assertObserverNotifyInContinuation(this);
  }
}

const operator = <TA, TB>(observer: ObserverLike<TB>) =>
  new IgnoreObserver<TA, TB>(observer);
operator.isSynchronous = true;

/**
 * Returns an `ObservableLike` that ignores all items emitted by the source.
 */
export const ignoreElements = <TA, TB>() => lift<TA, TB>(operator);
