import { compute, concatMap, endWith, keepType } from "../container";
import {
  AbstractDisposable,
  addDisposable,
  addDisposableDisposeParentOnChildError,
} from "../disposable";
import {
  Factory,
  Function1,
  Reducer,
  compose,
  composeWith,
  pipe,
  returns,
} from "../functions";
import {
  ObservableLike,
  ObserverLike,
  StreamLike,
  concatAllT,
  concatT,
  createObservable,
  createSubject,
  fromArrayT,
  fromIterator,
  keepT,
  map,
  mapT,
  reduce,
  subscribe,
  takeWhile,
  using,
  withLatestFrom,
} from "../observable";

import { SchedulerLike } from "../scheduler";
import {
  FlowMode,
  IOEvent,
  IOSinkAccumulatorLike,
  StreamableLike,
  StreamableOperator,
} from "../streamable";
import { flow } from "./flow";
import { createStreamable, lift, stream } from "./streamable";

export const notifyIOEvent = <T>(data: T): IOEvent<T> => ({
  type: "notify",
  data,
});
const _done: IOEvent<any> = { type: "done" };
export const doneIOEvent = <T>(): IOEvent<T> => _done;

export const decodeWithCharset = (
  charset = "utf-8",
  options?: TextDecoderOptions,
): StreamableOperator<
  FlowMode,
  IOEvent<ArrayBuffer>,
  FlowMode,
  IOEvent<string>
> =>
  pipe(
    withLatestFrom(
      compute({
        ...fromArrayT,
        ...mapT,
      })(() => new TextDecoder(charset, options)),
      function* (ev: IOEvent<ArrayBuffer>, decoder: TextDecoder) {
        switch (ev.type) {
          case "notify": {
            const data = decoder.decode(ev.data, { stream: true });
            if (data.length > 0) {
              yield notifyIOEvent(data);
            }
            break;
          }
          case "done": {
            const data = decoder.decode();
            if (data.length > 0) {
              yield notifyIOEvent(data);
            }
            yield doneIOEvent<string>();
            break;
          }
        }
      },
    ),
    composeWith(map(returns)),
    composeWith(concatMap({ ...concatAllT, ...mapT }, fromIterator())),
    lift,
  );

const _encodeUtf8: StreamableOperator<
  FlowMode,
  IOEvent<string>,
  FlowMode,
  IOEvent<Uint8Array>
> = lift(
  withLatestFrom(
    compute({
      ...fromArrayT,
      ...mapT,
    })(() => new TextEncoder()),
    (ev, textEncoder: TextEncoder) => {
      switch (ev.type) {
        case "notify": {
          const data = textEncoder.encode(ev.data);
          return notifyIOEvent(data);
        }
        case "done": {
          return ev;
        }
      }
    },
  ),
);

export const encodeUtf8: StreamableOperator<
  FlowMode,
  IOEvent<string>,
  FlowMode,
  IOEvent<Uint8Array>
> = _encodeUtf8;

export const mapIOEventStream = <TA, TB>(
  mapper: Function1<TA, TB>,
): Function1<
  StreamableLike<FlowMode, IOEvent<TA>>,
  StreamableLike<FlowMode, IOEvent<TB>>
> =>
  lift(
    map((ev: IOEvent<TA>) =>
      ev.type === "notify" ? pipe(ev.data, mapper, notifyIOEvent) : ev,
    ),
  );

const _flowIOEvents = compose(
  map(notifyIOEvent),
  endWith({ ...fromArrayT, ...concatT }, doneIOEvent()),
  flow(),
);
export const flowIOEvents = <T>(): Function1<
  ObservableLike<T>,
  StreamableLike<FlowMode, IOEvent<T>>
> => _flowIOEvents;

const isNotify = <T>(
  ev: IOEvent<T>,
): ev is { readonly type: "notify"; readonly data: T } => ev.type === "notify";

class IOSinkAccumulatorImpl<T, TAcc>
  extends AbstractDisposable
  implements IOSinkAccumulatorLike<T, TAcc>
{
  get type(): this {
    return this;
  }
  get T(): unknown {
    return undefined;
  }

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
            keepType(keepT, isNotify),
            map(ev => ev.data),
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
