import { dispose, add } from "../../disposable";
import { pipe } from "../../functions";
import { none, Option } from "../../option";
import { SchedulerLike } from "../../scheduler";
import {
  ObservableLike,
  ObservableFunction,
  SubjectLike,
  SubscriberLike,
  MulticastObservableLike,
} from "./interfaces";
import { publish } from "./publish";

class SharedObservable<T> implements ObservableLike<T> {
  private subscriberCount = 0;
  private multicast: Option<MulticastObservableLike<T>>;
  private readonly teardown = () => {
    this.subscriberCount--;

    if (this.subscriberCount === 0) {
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

  subscribe(subscriber: SubscriberLike<T>): void {
    if (this.subscriberCount === 0) {
      this.multicast = pipe(this.source, publish(this.scheduler, this.replay));
    }
    this.subscriberCount++;

    const multicast = this.multicast as SubjectLike<T>;

    multicast.subscribe(subscriber);
    add(subscriber, this.teardown);
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
): ObservableFunction<T, T> => observable =>
  new SharedObservable(observable, scheduler, replayCount);
