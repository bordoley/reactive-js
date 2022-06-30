import { DispatcherLike, dispatch } from "./dispatcher";
import { add, addTo } from "./disposable";
import { newInstance, pipe } from "./functions";
import {
  AbstractDisposableObservable,
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

/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 */
export interface StreamLike<TReq, T>
  extends DispatcherLike<TReq>,
    MulticastObservableLike<T> {
  readonly scheduler: SchedulerLike;
}

class StreamImpl<TReq, T>
  extends AbstractDisposableObservable<T>
  implements StreamLike<TReq, T>
{
  private readonly dispatcher: DispatcherLike<TReq>;
  private readonly observable: MulticastObservableLike<T>;

  constructor(
    op: ObservableOperator<TReq, T>,
    readonly scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ) {
    super();

    const subject = newInstance(Subject);
    const observable = pipe(subject, op, publish<T>(scheduler, options));

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

  dispatch(req: TReq) {
    pipe(this.dispatcher, dispatch(req));
  }

  sink(observer: Observer<T>) {
    pipe(this.observable, sinkInto(observer));
  }
}

export abstract class AbstractDelegatingStream<TReqA, TA, TReqB, TB>
  extends AbstractDisposableObservable<TB>
  implements StreamLike<TReqB, TB>
{
  constructor(readonly delegate: StreamLike<TReqA, TA>) {
    super();
  }

  get observerCount() {
    return observerCount(this.delegate);
  }

  get replay(): number {
    return replay(this.delegate);
  }

  get scheduler(): SchedulerLike {
    return this.delegate.scheduler;
  }

  abstract dispatch(req: TReqB): void;

  abstract sink(observer: Observer<TB>): void;
}

export const createStream = <TReq, T>(
  op: ObservableOperator<TReq, T>,
  scheduler: SchedulerLike,
  options?: { readonly replay?: number },
): StreamLike<TReq, T> => newInstance(StreamImpl, op, scheduler, options);
