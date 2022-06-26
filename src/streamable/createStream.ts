import {
  addDisposeOnChildError,
  addToDisposeOnChildError,
} from "../disposable";
import { pipe } from "../functions";
import {
  AbstractDisposableObservable,
  DispatcherLike,
  MulticastObservableLike,
  ObservableOperator,
  Observer,
  StreamLike,
  createSubject,
  publish,
} from "../observable";
import { SchedulerLike } from "../scheduler";
import { sinkInto } from "../source";

class StreamImpl<TReq, T>
  extends AbstractDisposableObservable<T>
  implements StreamLike<TReq, T>
{
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

  sink(observer: Observer<T>) {
    pipe(this.observable, sinkInto(observer));
  }
}

export const createStream = <TReq, T>(
  op: ObservableOperator<TReq, T>,
  scheduler: SchedulerLike,
  options?: { readonly replay?: number },
): StreamLike<TReq, T> => {
  const subject = createSubject<TReq>();
  const observable = pipe(subject, op, publish(scheduler, options));

  const stream = pipe(
    new StreamImpl(subject, observable),
    addDisposeOnChildError(subject),

    // FIXME: This seems wrong.
    addToDisposeOnChildError(observable),
  );

  return stream;
};
