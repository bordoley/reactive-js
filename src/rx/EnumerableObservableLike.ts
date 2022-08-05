import {
  Buffer,
  Concat,
  DecodeWithCharset,
  DistinctUntilChanged,
  ForEach,
  Keep,
  Map,
  Pairwise,
  Reduce,
  Scan,
  SkipFirst,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ThrowIfEmpty,
  ToReadonlyArray,
  Zip,
} from "../containers";
import { Factory } from "../functions";
import { ToEnumerable } from "../ix";
import { EnumerableObservableLike } from "../rx";
import { VirtualTimeSchedulerLike } from "../scheduling";
import { ToFlowable } from "../streaming";
import {
  buffer,
  concat,
  decodeWithCharset,
  distinctUntilChanged,
  forEach,
  keep,
  map,
  merge,
  pairwise,
  reduce,
  scan,
  skipFirst,
  takeFirst,
  takeLast,
  takeWhile,
  throwIfEmpty,
  toEnumerable as toEnumerableObs,
  zip,
} from "./ObservableLike";

import {
  toFlowable as toFlowableObs,
  toReadonlyArray as toReadonlyArrayObs,
} from "./RunnableObservableLike";

export const bufferT: Buffer<EnumerableObservableLike> = {
  buffer: buffer as Buffer<EnumerableObservableLike>["buffer"],
};

export const concatT: Concat<EnumerableObservableLike> = {
  concat,
};

export const decodeWithCharsetT: DecodeWithCharset<EnumerableObservableLike> = {
  decodeWithCharset,
};

export const distinctUntilChangedT: DistinctUntilChanged<EnumerableObservableLike> =
  { distinctUntilChanged };
export const forEachT: ForEach<EnumerableObservableLike> = { forEach };

export const keepT: Keep<EnumerableObservableLike> = { keep };

export const mapT: Map<EnumerableObservableLike> = { map };

export const mergeT: Concat<EnumerableObservableLike> = {
  concat: merge,
};

export const pairwiseT: Pairwise<EnumerableObservableLike> = { pairwise };

export const reduceT: Reduce<EnumerableObservableLike> = { reduce };

export const scanT: Scan<EnumerableObservableLike> = { scan };

export const skipFirstT: SkipFirst<EnumerableObservableLike> = { skipFirst };

export const takeFirstT: TakeFirst<EnumerableObservableLike> = { takeFirst };

export const takeLastT: TakeLast<EnumerableObservableLike> = { takeLast };

export const takeWhileT: TakeWhile<EnumerableObservableLike> = { takeWhile };

export const throwIfEmptyT: ThrowIfEmpty<EnumerableObservableLike> = {
  throwIfEmpty,
};

export const toEnumerable: ToEnumerable<EnumerableObservableLike>["toEnumerable"] =
  toEnumerableObs as ToEnumerable<EnumerableObservableLike>["toEnumerable"];
export const toEnumerableT: ToEnumerable<EnumerableObservableLike> = {
  toEnumerable,
};

export const toFlowable: ToFlowable<EnumerableObservableLike>["toFlowable"] =
  toFlowableObs;
export const toFlowableT: ToFlowable<EnumerableObservableLike> = { toFlowable };

export const toReadonlyArray: ToReadonlyArray<
  EnumerableObservableLike,
  {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
  }
>["toReadonlyArray"] = toReadonlyArrayObs;

export const toReadonlyArrayT: ToReadonlyArray<
  EnumerableObservableLike,
  {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
  }
> = { toReadonlyArray };

export const zipT: Zip<EnumerableObservableLike> = {
  zip: zip as unknown as Zip<EnumerableObservableLike>["zip"],
};
