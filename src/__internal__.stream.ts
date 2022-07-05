import { getDelegate } from "./__internal__.liftable";
import { getScheduler } from "./dispatcher";
import { Disposable, add, addTo } from "./disposable";
import { newInstance, pipe, raise } from "./functions";
import {
  MulticastObservableLike,
  ObservableOperator,
  Subject,
  getObserverCount,
  getReplay,
  multicast,
  publish,
} from "./observable";
import { Observer } from "./observer";
import { sinkInto } from "./reactive";
import { SchedulerLike } from "./scheduler";
import { StreamLike } from "./stream";

class StreamImpl<TReq, T> extends Disposable implements StreamLike<TReq, T> {
  private readonly subject: Subject<TReq>;
  private readonly observable: MulticastObservableLike<T>;

  constructor(
    op: ObservableOperator<TReq, T>,
    readonly scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ) {
    super();

    const subject = newInstance<Subject<TReq>>(Subject);
    const observable = pipe(subject, op, multicast<T>(scheduler, options));

    this.subject = subject;
    this.observable = observable;

    return pipe(this, add(subject), addTo(this.observable));
  }

  get T(): T {
    return raise();
  }

  get TContainerOf(): this {
    return this;
  }

  get TLiftableState(): Observer<this["T"]> {
    return raise();
  }

  isEnumerable?: boolean;

  get observerCount(): number {
    return getObserverCount(this.observable);
  }

  get replay(): number {
    return getReplay(this.observable);
  }

  dispatch(req: TReq) {
    pipe(this.subject, publish(req));
  }

  sink(observer: Observer<T>) {
    pipe(this.observable, sinkInto(observer));
  }
}

export abstract class AbstractDelegatingStream<TReqA, TA, TReqB, TB>
  extends Disposable
  implements StreamLike<TReqB, TB>
{
  constructor(readonly delegate: StreamLike<TReqA, TA>) {
    super();
  }

  get T(): TB {
    return raise();
  }

  get TContainerOf(): this {
    return raise();
  }

  get TLiftableState(): Observer<this["T"]> {
    return raise();
  }

  get observerCount() {
    return pipe(this, getDelegate, getObserverCount);
  }

  get replay(): number {
    return pipe(this, getDelegate, getReplay);
  }

  get scheduler(): SchedulerLike {
    return pipe(this, getDelegate, getScheduler);
  }

  abstract dispatch(req: TReqB): void;

  abstract sink(observer: Observer<TB>): void;
}

export const createStream = <TReq, T>(
  op: ObservableOperator<TReq, T>,
  scheduler: SchedulerLike,
  options?: { readonly replay?: number },
): StreamLike<TReq, T> => newInstance(StreamImpl, op, scheduler, options);
