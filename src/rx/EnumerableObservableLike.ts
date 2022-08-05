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
  toReadonlyArray,
  zip,
} from "./ObservableLike";

import { toFlowable } from "./RunnableObservableLike";

export const bufferT: Buffer<EnumerableObservableLike> = {
  buffer: buffer as Buffer<EnumerableObservableLike>["buffer"],
};

export const concatT: Concat<EnumerableObservableLike> = {
  concat: concat as Concat<EnumerableObservableLike>["concat"],
};

export const decodeWithCharsetT: DecodeWithCharset<EnumerableObservableLike> = {
  decodeWithCharset:
    decodeWithCharset as DecodeWithCharset<EnumerableObservableLike>["decodeWithCharset"],
};

export const distinctUntilChangedT: DistinctUntilChanged<EnumerableObservableLike> =
  {
    distinctUntilChanged:
      distinctUntilChanged as DistinctUntilChanged<EnumerableObservableLike>["distinctUntilChanged"],
  };
export const forEachT: ForEach<EnumerableObservableLike> = {
  forEach: forEach as ForEach<EnumerableObservableLike>["forEach"],
};

export const keepT: Keep<EnumerableObservableLike> = {
  keep: keep as Keep<EnumerableObservableLike>["keep"],
};

export const mapT: Map<EnumerableObservableLike> = {
  map: map as Map<EnumerableObservableLike>["map"],
};

export const mergeT: Concat<EnumerableObservableLike> = {
  concat: merge as Concat<EnumerableObservableLike>["concat"],
};

export const pairwiseT: Pairwise<EnumerableObservableLike> = {
  pairwise: pairwise as Pairwise<EnumerableObservableLike>["pairwise"],
};

export const reduceT: Reduce<EnumerableObservableLike> = {
  reduce: reduce as Reduce<EnumerableObservableLike>["reduce"],
};

export const scanT: Scan<EnumerableObservableLike> = {
  scan: scan as Scan<EnumerableObservableLike>["scan"],
};

export const skipFirstT: SkipFirst<EnumerableObservableLike> = {
  skipFirst: skipFirst as SkipFirst<EnumerableObservableLike>["skipFirst"],
};

export const takeFirstT: TakeFirst<EnumerableObservableLike> = {
  takeFirst: takeFirst as TakeFirst<EnumerableObservableLike>["takeFirst"],
};

export const takeLastT: TakeLast<EnumerableObservableLike> = {
  takeLast: takeLast as TakeLast<EnumerableObservableLike>["takeLast"],
};

export const takeWhileT: TakeWhile<EnumerableObservableLike> = {
  takeWhile: takeWhile as TakeWhile<EnumerableObservableLike>["takeWhile"],
};

export const throwIfEmptyT: ThrowIfEmpty<EnumerableObservableLike> = {
  throwIfEmpty:
    throwIfEmpty as ThrowIfEmpty<EnumerableObservableLike>["throwIfEmpty"],
};

export const toEnumerableT: ToEnumerable<EnumerableObservableLike> = {
  toEnumerable:
    toEnumerableObs as ToEnumerable<EnumerableObservableLike>["toEnumerable"],
};

export const toFlowableT: ToFlowable<EnumerableObservableLike> = { toFlowable };

export const toReadonlyArrayT: ToReadonlyArray<
  EnumerableObservableLike,
  {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
  }
> = {
  toReadonlyArray: toReadonlyArray as unknown as ToReadonlyArray<
    EnumerableObservableLike,
    {
      readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
    }
  >["toReadonlyArray"],
};

export const zipT: Zip<EnumerableObservableLike> = {
  zip: zip as unknown as Zip<EnumerableObservableLike>["zip"],
};
