import { dispatchTo } from "./dispatcher";
import {
  addDisposable,
  AbstractDisposable,
  addDisposableDisposeParentOnChildError,
} from "./disposable";
import { FlowMode } from "./flowable";
import { Reducer, pipe, Factory } from "./functions";
import { IOEvent, IOEventType, IOSinkLike } from "./io";
import {
  StreamLike,
  MulticastObservableLike,
  using,
  takeWhile,
  keepType,
  map as mapObs,
  onNotify,
  subscribe,
  createObservable,
  reduce,
  ObserverLike,
  createSubject,
  ObservableLike,
} from "./observable";
import { SchedulerLike } from "./scheduler";
import { stream, createStreamable, StreamableLike } from "./streamable";

const isNotify = <T>(
  ev: IOEvent<T>,
): ev is { readonly type: IOEventType.Notify; readonly data: T } =>
  ev.type === IOEventType.Notify;

/**
 * @experimental
 * @noInheritDoc
 * */
export interface IOSinkAccumulatorLike<T, TAcc>
  extends IOSinkLike<T>,
    MulticastObservableLike<TAcc> {}

class IOSinkAccumulatorImpl<T, TAcc>
  extends AbstractDisposable
  implements IOSinkAccumulatorLike<T, TAcc> {
  readonly isSynchronous = false;

  private readonly subject: StreamLike<TAcc, TAcc>;
  private readonly streamable: StreamableLike<IOEvent<T>, FlowMode>;

  constructor(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
    options?: { readonly replay?: number },
  ) {
    super();

    const subject = createSubject(options);
    addDisposableDisposeParentOnChildError(this, subject);

    const op = (events: ObservableLike<IOEvent<T>>): ObservableLike<FlowMode> =>
      using(
        scheduler =>
          pipe(
            events,
            takeWhile(isNotify),
            keepType(isNotify),
            mapObs(ev => ev.data),
            reduce(reducer, initialValue),
            onNotify(dispatchTo(subject)),
            subscribe(scheduler),
          ),

        eventsSubscription =>
          createObservable(dispatcher => {
            dispatcher.dispatch(FlowMode.Pause);
            dispatcher.dispatch(FlowMode.Resume);
            addDisposable(eventsSubscription, dispatcher);
          }),
      );

    this.streamable = createStreamable(op);
    this.subject = subject;
  }

  get observerCount(): number {
    return this.subject.observerCount;
  }

  observe(observer: ObserverLike<TAcc>): void {
    this.subject.observe(observer);
  }

  stream(
    scheduler: SchedulerLike,
    options?: { readonly replay: number },
  ): StreamLike<IOEvent<T>, FlowMode> {
    const result = pipe(this.streamable, stream(scheduler, options));
    addDisposableDisposeParentOnChildError(this, result);
    return result;
  }
}

/** @experimental */
export const createIOSinkAccumulator = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
  options?: { readonly replay?: number },
): IOSinkAccumulatorLike<T, TAcc> =>
  new IOSinkAccumulatorImpl(reducer, initialValue, options);
