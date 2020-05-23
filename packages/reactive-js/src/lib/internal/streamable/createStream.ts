import { AbstractDisposable, addDisposable } from "../../disposable";
import { pipe } from "../../functions";
import {
  StreamLike,
  DispatcherLike,
  MulticastObservableLike,
  ObservableOperator,
  createSubject,
  publish,
  ObserverLike,
  dispatch,
  observe,
} from "../../observable";
import { SchedulerLike } from "../../scheduler";
import { StreamableLike } from "../../streamable";

export type StreamableOperator<TSrcReq, TSrc, TReq, T> = {
  (streamable: StreamableLike<TSrcReq, TSrc>): StreamableLike<TReq, T>;
};

class StreamImpl<TReq, T> extends AbstractDisposable
  implements StreamLike<TReq, T> {
  readonly isSynchronous = false;

  private readonly dispatcher: DispatcherLike<TReq>;
  private readonly observable: MulticastObservableLike<T>;

  constructor(
    op: ObservableOperator<TReq, T>,
    scheduler: SchedulerLike,
    options?: { replay: number },
  ) {
    super();

    const subject = createSubject<TReq>();
    const observable = pipe(subject, op, publish(scheduler, options));

    addDisposable(observable, this);
    addDisposable(this, subject);

    this.dispatcher = subject;
    this.observable = observable;
  }

  get observerCount(): number {
    return this.observable.observerCount;
  }

  dispatch(req: TReq) {
    dispatch(this.dispatcher, req);
  }

  observe(observer: ObserverLike<T>) {
    observe(this.observable, observer);
  }
}

export const createStream = <TReq, T>(
  op: ObservableOperator<TReq, T>,
  scheduler: SchedulerLike,
  options?: { replay: number },
): StreamLike<TReq, T> => new StreamImpl(op, scheduler, options);
