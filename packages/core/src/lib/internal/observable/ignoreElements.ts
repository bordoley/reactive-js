import { add } from "../../disposable";
import { ObserverLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingObserver, assertObserverState } from "./observer";

class IgnoreObserver<TA, TB> extends AbstractDelegatingObserver<TA, TB> {
  constructor(delegate: ObserverLike<TB>) {
    super(delegate);
    add(this, delegate);
  }

  notify(_: TA) {
    assertObserverState(this);
  }
}

const operator = <TA, TB>(observer: ObserverLike<TB>) =>
  new IgnoreObserver<TA, TB>(observer);
operator.isSynchronous = true;

/**
 * Returns an `ObservableLike` that ignores all items emitted by the source.
 */
export const ignoreElements = <TA, TB>() => lift<TA, TB>(operator);
