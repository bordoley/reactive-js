import { DispatcherLike, dispatch } from "./dispatcher";
import { add, addTo } from "./disposable";
import { newInstance, pipe } from "./functions";
import { AbstractDisposableLiftable, LiftableStateLike } from "./liftable";
import {
  MulticastObservableLike,
  ObservableOperator,
  Subject,
  observerCount,
  publish,
  replay,
} from "./observable";
import { Observer } from "./observer";
import { SchedulerLike } from "./scheduler";
import { sinkInto } from "./source";
import { StreamLike } from "./stream";

export class AsyncEnumerator<T>
  extends AbstractDisposableLiftable<Observer<T>>
  implements LiftableStateLike, StreamLike<void, T>
{
  private readonly dispatcher: DispatcherLike<void>;
  private readonly observable: MulticastObservableLike<T>;

  constructor(
    //FIXME: Needs to tag ObservableOperator so only operators that are unary
    // maybe provided as an argument.
    readonly op: ObservableOperator<void, T>,
    readonly scheduler: SchedulerLike,
    replay: number,
  ) {
    super();

    const subject = newInstance(Subject);
    const observable = pipe(subject, op, publish<T>(scheduler, { replay }));

    this.dispatcher = subject;
    this.observable = observable;

    return pipe(this, add(subject), addTo(this.observable));
  }

  get observerCount(): number {
    return observerCount(this.observable);
  }

  get replay(): number {
    return replay(this.observable);
  }

  dispatch(req: void) {
    pipe(this.dispatcher, dispatch(req));
  }

  sink(observer: Observer<T>) {
    pipe(this.observable, sinkInto(observer));
  }
}
