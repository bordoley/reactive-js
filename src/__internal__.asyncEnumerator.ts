import { getDelegate } from "./__internal__.liftable";
import { AsyncEnumerator } from "./asyncEnumerator";
import { dispatch } from "./dispatcher";
import { pipe } from "./functions";
import { getObserverCount, getReplay } from "./observable";
import { Observer } from "./observer";
import { SchedulerLike } from "./scheduler";
import { StreamLike } from "./stream";

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
