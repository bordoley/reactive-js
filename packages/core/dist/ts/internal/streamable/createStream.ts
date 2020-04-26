import { StreamableLike } from "../../streamable.ts";
import { AbstractDisposable } from "../../disposable.ts";
import { StreamLike, DispatcherLike, MulticastObservableLike, ObservableOperator, createSubject, publish, SubscriberLike } from "../../observable.ts";
import { SchedulerLike } from "../../scheduler.ts";
import { pipe } from "../../pipe.ts";

export type StreamableOperator<TSrcReq, TSrc, TReq, T> = {
  (enumerable: StreamableLike<TSrcReq, TSrc>): StreamableLike<TReq, T>;
};

class StreamImpl<TReq, T> extends AbstractDisposable implements StreamLike<TReq, T> {
  readonly isSynchronous = false;
  
  private readonly dispatcher: DispatcherLike<TReq>;
  private readonly observable: MulticastObservableLike<T>;

  constructor(
    op: ObservableOperator<TReq, T>,
    scheduler: SchedulerLike,
    replayCount: number,
  ) {
    super();

    const subject = createSubject<TReq>();
    const observable = pipe(subject, op, publish(scheduler, replayCount)).add(subject);
    this.add(subject).add(observable);

    this.dispatcher = subject;
    this.observable = observable;
  }

  get subscriberCount(): number {
    return this.observable.subscriberCount;
  }

  dispatch(req: TReq) {
    this.dispatcher.dispatch(req);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }
}

export const createStream = <TReq, T>(
  op: ObservableOperator<TReq, T>,
  scheduler: SchedulerLike,
  replayCount: number,
): StreamLike<TReq, T> =>
  new StreamImpl(op, scheduler, replayCount);