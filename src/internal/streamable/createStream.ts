import { DispatcherLike } from "../../dispatcher";
import { AbstractDisposable, addDisposable } from "../../disposable";
import { pipe } from "../../functions";
import {
  StreamLike,
  MulticastObservableLike,
  ObservableOperator,
  createSubject,
  publish,
  ObserverLike,
  observe,
} from "../../observable";
import { SchedulerLike } from "../../scheduler";
import { StreamableLike } from "./interfaces";

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
    options?: { readonly replay?: number },
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
    this.dispatcher.dispatch(req);
  }

  observe(observer: ObserverLike<T>) {
    pipe(this.observable, observe(observer));
  }
}

export const createStream = <TReq, T>(
  op: ObservableOperator<TReq, T>,
  scheduler: SchedulerLike,
  options?: { readonly replay?: number },
): StreamLike<TReq, T> => new StreamImpl(op, scheduler, options);
