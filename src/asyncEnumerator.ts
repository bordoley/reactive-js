import { DispatcherLike, dispatch } from "./dispatcher";
import { pipe } from "./functions";
import {
  AbtractDisposableLiftable,
  LiftableStateLike,
  getDelegate,
} from "./liftable";
import { ObservableLike, getObserverCount, getReplay } from "./observable";
import { Observer } from "./observer";
import { SchedulerLike } from "./scheduler";
import { StreamLike } from "./stream";

export abstract class AsyncEnumerator<T>
  extends AbtractDisposableLiftable<Observer<T>>
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
    return pipe(this, getDelegate, getObserverCount);
  }

  get replay(): number {
    return pipe(this, getDelegate, getReplay);
  }

  get scheduler(): SchedulerLike {
    return getDelegate(this).scheduler;
  }

  dispatch(req: void): void {
    pipe(this, getDelegate, dispatch(req));
  }

  abstract sink(observer: Observer<TB>): void;
}
