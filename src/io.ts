import {
  AbstractDisposable,
  addDisposable,
  addDisposableDisposeParentOnChildError,
} from "./disposable";
import {
  FlowMode,
  FlowableLike,
  fromObservable as fromObservableFlowable,
} from "./flowable";
import {
  Factory,
  Function1,
  Reducer,
  compose,
  composeWith,
  pipe,
  returns,
} from "./functions";
import {
  MulticastObservableLike,
  ObservableLike,
  ObserverLike,
  StreamLike,
  compute,
  concatMap,
  createObservable,
  createSubject,
  endWith,
  fromArray as fromArrayObs,
  fromIterator,
  keepType,
  map as mapObs,
  reduce,
  subscribe,
  takeWhile,
  using,
  withLatestFrom as withLatestFromObs,
} from "./observable";

import { SchedulerLike } from "./scheduler";
import {
  StreamableLike,
  createStreamable,
  lift,
  map as mapStream,
  stream,
  withLatestFrom,
} from "./streamable";

export type IOEventType = "notify" | "done";

export type IOEvent<T> =
  | { readonly type: "notify"; readonly data: T }
  | { readonly type: "done" };

export const notify = <T>(data: T): IOEvent<T> => ({
  type: "notify",
  data,
});
const _done: IOEvent<any> = { type: "done" };
export const done = <T>(): IOEvent<T> => _done;

/** @noInheritDoc */
export interface IOSourceLike<T> extends FlowableLike<IOEvent<T>> {}

/** @noInheritDoc */
export interface IOSinkLike<T> extends StreamableLike<IOEvent<T>, FlowMode> {}

export type IOSourceOperator<TA, TB> = Function1<
  IOSourceLike<TA>,
  IOSourceLike<TB>
>;

export const decodeWithCharset = (
  charset = "utf-8",
  options?: TextDecoderOptions,
): IOSourceOperator<ArrayBuffer, string> =>
  pipe(
    withLatestFromObs(
      compute<TextDecoder>()(() => new TextDecoder(charset, options)),
      function* (ev: IOEvent<ArrayBuffer>, decoder) {
        switch (ev.type) {
          case "notify": {
            const data = decoder.decode(ev.data, { stream: true });
            if (data.length > 0) {
              yield notify(data);
            }
            break;
          }
          case "done": {
            const data = decoder.decode();
            if (data.length > 0) {
              yield notify(data);
            }
            yield done<string>();
            break;
          }
        }
      },
    ),
    composeWith(mapObs(returns)),
    composeWith(concatMap(fromIterator())),
    lift,
  );

const _encodeUtf8: IOSourceOperator<string, Uint8Array> = withLatestFrom(
  compute<TextEncoder>()(() => new TextEncoder()),
  (ev, textEncoder) => {
    switch (ev.type) {
      case "notify": {
        const data = textEncoder.encode(ev.data);
        return notify(data);
      }
      case "done": {
        return ev;
      }
    }
  },
);
export const encodeUtf8: IOSourceOperator<string, Uint8Array> = _encodeUtf8;

export const map = <TA, TB>(
  mapper: Function1<TA, TB>,
): Function1<IOSourceLike<TA>, IOSourceLike<TB>> =>
  mapStream((ev: IOEvent<TA>) =>
    ev.type === "notify" ? pipe(ev.data, mapper, notify) : ev,
  );

const _fromObservable = compose(
  mapObs(notify),
  endWith(done()),
  fromObservableFlowable(),
);
export const fromObservable = <T>(): Function1<
  ObservableLike<T>,
  IOSourceLike<T>
> => _fromObservable;

export const fromArray = <T>(options?: {
  readonly delay?: number;
  readonly startIndex?: number;
  readonly endIndex?: number;
}): Function1<readonly T[], IOSourceLike<T>> =>
  compose(fromArrayObs(options), fromObservable());

export const fromValue = <T>(options?: {
  readonly delay?: number;
}): Function1<T, IOSourceLike<T>> => v => fromArray<T>(options)([v]);

const _empty: IOSourceLike<any> = fromArray()([]);
export const empty = <T>(): IOSourceLike<T> => _empty;

const isNotify = <T>(
  ev: IOEvent<T>,
): ev is { readonly type: "notify"; readonly data: T } => ev.type === "notify";

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
            subscribe(scheduler, subject.dispatch, subject),
          ),

        eventsSubscription =>
          createObservable(dispatcher => {
            dispatcher.dispatch("pause");
            dispatcher.dispatch("resume");
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
