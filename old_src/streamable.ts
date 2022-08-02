import { createStream } from "./__internal__.stream";
import { concatWith, fromValue, ignoreElements } from "./container";
import { dispatchTo } from "./dispatcher";
import { add, addTo } from "./disposable";
import {
  Equality,
  Factory,
  Function1,
  Reducer,
  Updater,
  compose,
  getLength,
  newInstance,
  pipe,
  returns,
  updateReducer,
} from "./functions";
import {
  ObservableOperator,
  __currentScheduler,
  __memo,
  __observe,
  __using,
  createObservable,
  distinctUntilChanged,
  fromArrayT as fromArrayTObs,
  keepT,
  merge,
  mergeT,
  onNotify,
  onSubscribe,
  scan,
  subscribe,
} from "./observable";
import { Option, isSome, none } from "./option";
import { sinkInto as sinkIntoSink } from "./reactiveContainer";
import { SchedulerLike } from "./scheduler";
import { StreamLike } from "./stream";

const streamOnSchedulerFactory = <TReq, T, TStream extends StreamLike<TReq, T>>(
  streamable: StreamableLike<TReq, T, TStream>,
  scheduler: SchedulerLike,
  replay: number,
) => pipe(streamable, stream(scheduler, { replay }));

export const __stream = <TReq, T, TStream extends StreamLike<TReq, T>>(
  streamable: StreamableLike<TReq, T, TStream>,
  {
    replay = 0,
    scheduler,
  }: { readonly replay?: number; readonly scheduler?: SchedulerLike } = {},
): TStream => {
  const currentScheduler = __currentScheduler();
  return __using(
    streamOnSchedulerFactory,
    streamable,
    scheduler ?? currentScheduler,
    replay,
  );
};

const createStateOptions = <T>(equality: Option<Equality<T>>) =>
  isSome(equality) ? { equality } : none;

export const __state = <T>(
  initialState: () => T,
  options: {
    readonly equality?: Option<Equality<T>>;
  } = {},
): StreamLike<Updater<T>, T> => {
  const { equality } = options;
  const optionsMemo = __memo(createStateOptions, equality);
  const streamable = __memo(createStateStore, initialState, optionsMemo);
  return __stream(streamable);
};
