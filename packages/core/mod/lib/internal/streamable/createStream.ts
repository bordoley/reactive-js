import {
  add,
  AbstractDisposable,
  addDisposableOrTeardown,
} from "../../disposable.ts";
import { pipe } from "../../functions.ts";
import {
  StreamLike,
  DispatcherLike,
  MulticastObservableLike,
  ObservableFunction,
  createSubject,
  publish,
  SubscriberLike,
  dispatch,
} from "../../observable.ts";
import { SchedulerLike } from "../../scheduler.ts";
import { StreamableLike } from "../../streamable.ts";

export type StreamableFunction<TSrcReq, TSrc, TReq, T> = {
  (streamable: StreamableLike<TSrcReq, TSrc>): StreamableLike<TReq, T>;
};

class StreamImpl<TReq, T> extends AbstractDisposable
  implements StreamLike<TReq, T> {
  readonly isSynchronous = false;

  private readonly dispatcher: DispatcherLike<TReq>;
  private readonly observable: MulticastObservableLike<T>;

  constructor(
    op: ObservableFunction<TReq, T>,
    scheduler: SchedulerLike,
    replayCount: number,
  ) {
    super();

    const subject = createSubject<TReq>();
    const observable = pipe(
      subject,
      op,
      publish(scheduler, replayCount),
      addDisposableOrTeardown(this),
    );

    add(this, subject);

    this.dispatcher = subject;
    this.observable = observable;
  }

  get subscriberCount(): number {
    return this.observable.subscriberCount;
  }

  dispatch(req: TReq) {
    dispatch(this.dispatcher, req);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }
}

export const createStream = <TReq, T>(
  op: ObservableFunction<TReq, T>,
  scheduler: SchedulerLike,
  replayCount: number,
): StreamLike<TReq, T> => new StreamImpl(op, scheduler, replayCount);
