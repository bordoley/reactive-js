import { AbstractDisposable, addDisposable } from "../disposable";
import { pipe } from "../functions";
import {
  DispatcherLike,
  MulticastObservableLike,
  ObservableOperator,
  ObserverLike,
  StreamLike,
  createSubject,
  publish,
  sink,
} from "../observable";

import { SchedulerLike } from "../scheduler";
import { StreamableLike } from "../streamable";

export type StreamableOperator<TSrcReq, TSrc, TReq, T> = (
  streamable: StreamableLike<TSrcReq, TSrc>,
) => StreamableLike<TReq, T>;

class StreamImpl<TReq, T>
  extends AbstractDisposable
  implements StreamLike<TReq, T>
{
  get type(): this {
    return this;
  }
  get T(): unknown {
    return undefined;
  }
  readonly isSynchronous = false;

  constructor(
    private readonly dispatcher: DispatcherLike<TReq>,
    private readonly observable: MulticastObservableLike<T>,
  ) {
    super();
  }

  get observerCount(): number {
    return this.observable.observerCount;
  }

  dispatch(req: TReq) {
    this.dispatcher.dispatch(req);
  }

  observe(observer: ObserverLike<T>) {
    pipe(this.observable, sink(observer));
  }
}

export const createStream = <TReq, T>(
  op: ObservableOperator<TReq, T>,
  scheduler: SchedulerLike,
  options?: { readonly replay?: number },
): StreamLike<TReq, T> => {
  const subject = createSubject<TReq>();
  const observable = pipe(subject, op, publish(scheduler, options));

  const stream = new StreamImpl(subject, observable);

  addDisposable(observable, stream);
  addDisposable(stream, subject);

  return stream;
};
