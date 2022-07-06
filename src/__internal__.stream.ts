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
import { sinkInto } from "./reactiveContainer";
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

  get TLiftableContainerState(): Observer<this["T"]> {
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

export const createStream = <TReq, T>(
  op: ObservableOperator<TReq, T>,
  scheduler: SchedulerLike,
  options?: { readonly replay?: number },
): StreamLike<TReq, T> => newInstance(StreamImpl, op, scheduler, options);
