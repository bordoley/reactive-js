import { DispatcherLike, dispatch } from "./dispatcher";
import { pipe } from "./functions";
import { DisposableLiftable, LiftableStateLike, delegate } from "./liftable";
import { ObservableLike, observerCount, replay } from "./observable";
import { Observer } from "./observer";
import { SchedulerLike } from "./scheduler";
import { StreamLike } from "./stream";

export abstract class AsyncEnumerator<T>
  extends DisposableLiftable<Observer<T>>
  implements LiftableStateLike, StreamLike<void, T>
{
  abstract scheduler: SchedulerLike;
  abstract observerCount: number;
  abstract replay: number;

  isEnumerable?: false = false;

  abstract dispatch(this: DispatcherLike<void>, req: void): void;
  abstract sink(this: ObservableLike<T>, sink: Observer<T>): void;
}

export abstract class AbstractDelegatingAsyncEnumerator<TA, TB>
  extends AsyncEnumerator<TB>
  implements StreamLike<void, TB>
{
  constructor(readonly delegate: StreamLike<void, TA>) {
    super();
  }

  get observerCount() {
    return pipe(this, delegate, observerCount);
  }

  get replay(): number {
    return pipe(this, delegate, replay);
  }

  get scheduler(): SchedulerLike {
    return delegate(this).scheduler;
  }

  dispatch(req: void): void {
    pipe(this, delegate, dispatch(req));
  }

  abstract sink(observer: Observer<TB>): void;
}
