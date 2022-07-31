import {
  DecodeWithCharset,
  ForEach,
  Map,
  ReadonlyArrayLike,
  ToReadonlyArray,
} from "../containers";
import { Factory, Function1, isSome, pipe } from "../functions";
import { RunnableObservableLike } from "../rx";
import {
  VirtualTimeSchedulerLike,
  createVirtualTimeScheduler,
} from "../scheduling";
import { run } from "../util/ContinuationLike";
import { addTo, getException } from "../util/DisposableLike";
import {
  decodeWithCharset as decodeWithCharsetObs,
  forEach as forEachObs,
  map as mapObs,
  subscribe,
} from "./ObservableLike";

export const decodeWithCharset: DecodeWithCharset<RunnableObservableLike>["decodeWithCharset"] =
  decodeWithCharsetObs;
export const decodeWithCharsetT: DecodeWithCharset<RunnableObservableLike> = {
  decodeWithCharset,
};

export const forEach: ForEach<RunnableObservableLike>["forEach"] = forEachObs;
export const forEachT: ForEach<RunnableObservableLike> = { forEach };

export const map: Map<RunnableObservableLike>["map"] = mapObs;
export const mapT: Map<RunnableObservableLike> = { map };

export const toReadonlyArray: ToReadonlyArray<
  RunnableObservableLike,
  {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
  }
>["toReadonlyArray"] =
  <T>(
    options: {
      readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
    } = {},
  ): Function1<RunnableObservableLike<T>, ReadonlyArrayLike<T>> =>
  observable => {
    const { schedulerFactory = createVirtualTimeScheduler } = options;
    const scheduler = schedulerFactory();
    const result: T[] = [];

    pipe(
      observable,
      forEach(next => {
        result.push(next);
      }),
      subscribe(scheduler),
      addTo(scheduler),
    );

    pipe(scheduler, run);
    const exception = getException(scheduler);

    if (isSome(exception)) {
      throw exception.cause;
    }

    return result;
  };
export const toReadonlyArrayT: ToReadonlyArray<
  RunnableObservableLike,
  {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
  }
> = { toReadonlyArray };
