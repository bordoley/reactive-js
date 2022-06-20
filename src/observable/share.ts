import { AbstractContainer } from "../container";
import { addTeardown, dispose } from "../disposable";
import { Function1, pipe } from "../functions";
import {
  MulticastObservableLike,
  ObservableLike,
  ObservableOperator,
  ObserverLike,
  SubjectLike,
} from "../observable";
import { Option, none } from "../option";
import { SchedulerLike } from "../scheduler";
import { sink } from "./observer";
import { publish } from "./publish";

class SharedObservable<T>
  extends AbstractContainer
  implements ObservableLike<T>
{
  private observerCount = 0;
  private multicast: Option<MulticastObservableLike<T>>;
  private readonly teardown = () => {
    this.observerCount--;

    if (this.observerCount === 0) {
      pipe(this.multicast as MulticastObservableLike<T>, dispose());
      this.multicast = none;
    }
  };

  readonly isSynchronous = false;

  constructor(
    private readonly source: ObservableLike<T>,
    private readonly publish: Function1<
      ObservableLike<T>,
      MulticastObservableLike<T>
    >,
  ) {
    super();
  }

  observe(observer: ObserverLike<T>) {
    if (this.observerCount === 0) {
      this.multicast = pipe(this.source, this.publish);
    }
    this.observerCount++;

    const multicast = this.multicast as SubjectLike<T>;

    pipe(multicast, sink(observer));
    addTeardown(observer, this.teardown);
  }
}

/**
 * Returns an `ObservableLike` backed by a shared refcounted subscription to the
 * source. When the refcount goes to 0, the underlying subscription
 * to the source is disposed.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source.
 * @param replay The number of events that should be replayed when the `ObservableLike`
 * is subscribed to.
 */
export const share =
  <T>(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): ObservableOperator<T, T> =>
  observable =>
    new SharedObservable(observable, publish(scheduler, options));
