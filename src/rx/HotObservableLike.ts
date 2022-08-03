import {
  Concat,
  ConcatAll,
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
} from "../containers";
import { HotObservableLike, ObservableLike } from "../rx";
import {
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
  switchAll,
  takeFirst,
  takeLast,
  takeWhile,
  throwIfEmpty,
} from "./ObservableLike";

export const concatT: Concat<HotObservableLike> = {
  concat,
};

export const decodeWithCharsetT: DecodeWithCharset<HotObservableLike> = {
  decodeWithCharset,
};

export const distinctUntilChangedT: DistinctUntilChanged<HotObservableLike> = {
  distinctUntilChanged,
};

export const forEachT: ForEach<HotObservableLike> = { forEach };

export const keepT: Keep<HotObservableLike> = { keep };

export const mapT: Map<HotObservableLike> = { map };

export const mergeT: Concat<HotObservableLike<unknown>> = {
  concat: merge,
};

export const pairwiseT: Pairwise<HotObservableLike> = { pairwise };

export const reduceT: Reduce<HotObservableLike> = { reduce };

export const scanT: Scan<HotObservableLike> = { scan };

export const skipFirstT: SkipFirst<HotObservableLike> = { skipFirst };

export const switchAllT: ConcatAll<ObservableLike> = {
  concatAll: switchAll,
};

export const takeFirstT: TakeFirst<HotObservableLike> = { takeFirst };

export const takeLastT: TakeLast<HotObservableLike> = { takeLast };

export const takeWhileT: TakeWhile<HotObservableLike> = { takeWhile };

export const throwIfEmptyT: ThrowIfEmpty<HotObservableLike> = {
  throwIfEmpty,
};
