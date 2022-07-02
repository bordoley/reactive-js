import { DispatcherLike } from "./dispatcher";
import { add, addTo } from "./disposable";
import { newInstance, pipe } from "./functions";
import {
  DisposableObservable,
  MulticastObservableLike,
  ObservableOperator,
  Subject,
  getObserverCount,
  getReplay,
  publish,
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
    MulticastObservableLike<T> {}

class StreamImpl<TReq, T>
  extends DisposableObservable<T>
  implements StreamLike<TReq, T>
{
  private readonly subject: Subject<TReq>;
  private readonly observable: MulticastObservableLike<T>;

  constructor(
    op: ObservableOperator<TReq, T>,
    readonly scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ) {
    super();

    const subject = newInstance<Subject<TReq>>(Subject);
    const observable = pipe(subject, op, publish<T>(scheduler, options));

    this.subject = subject;
    this.observable = observable;

    return pipe(this, add(subject), addTo(this.observable));
  }

  get observerCount(): number {
    return getObserverCount(this.observable);
  }

  get replay(): number {
    return getReplay(this.observable);
  }

  dispatch(req: TReq) {
    this.subject.publish(req);
  }

  sink(observer: Observer<T>) {
    pipe(this.observable, sinkInto(observer));
  }
}

export abstract class AbstractDelegatingStream<TReqA, TA, TReqB, TB>
  extends DisposableObservable<TB>
  implements StreamLike<TReqB, TB>
{
  constructor(readonly delegate: StreamLike<TReqA, TA>) {
    super();
  }

  get observerCount() {
    return getObserverCount(this.delegate);
  }

  get replay(): number {
    return getReplay(this.delegate);
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
