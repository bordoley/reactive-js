import { dispose, addTeardown } from "../../disposable.ts";
import { pipe } from "../../functions.ts";
import { none, Option } from "../../option.ts";
import { SchedulerLike } from "../../scheduler.ts";
import {
  ObservableLike,
  ObservableOperator,
  SubjectLike,
  ObserverLike,
  MulticastObservableLike,
} from "./interfaces.ts";
import { publish } from "./publish.ts";
import { observe } from "./observable.ts";

class SharedObservable<T> implements ObservableLike<T> {
  private observerCount = 0;
  private multicast: Option<MulticastObservableLike<T>>;
  private readonly teardown = () => {
    this.observerCount--;

    if (this.observerCount === 0) {
      dispose(this.multicast as MulticastObservableLike<T>);
      this.multicast = none;
    }
  };

  readonly isSynchronous = false;

  constructor(
    private readonly source: ObservableLike<T>,
    private readonly scheduler: SchedulerLike,
    private readonly replay: number,
  ) {}

  observe(observer: ObserverLike<T>) {
    if (this.observerCount === 0) {
      this.multicast = pipe(this.source, publish(this.scheduler, this.replay));
    }
    this.observerCount++;

    const multicast = this.multicast as SubjectLike<T>;

    observe(multicast, observer);
    addTeardown(observer, this.teardown);
  }
}

/**
 * Returns an `ObservableLike` backed by a shared refcounted subscription to the
 * source. When the refcount goes to 0, the underlying subscription
 * to the source is disposed.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source.
 * @param replayCount The number of events that should be replayed when the `ObservableLike`
 * is subscribed to.
 */
export const share = <T>(
  scheduler: SchedulerLike,
  replayCount = 0,
): ObservableOperator<T, T> => observable =>
  new SharedObservable(observable, scheduler, replayCount);
