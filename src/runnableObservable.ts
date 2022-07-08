import {
  Concat,
  ConcatAll,
  DistinctUntilChanged,
  FromArray,
  Generate,
  Keep,
  Map,
  Repeat,
  Scan,
  SkipFirst,
  TakeFirst,
  TakeLast,
  TakeWhile,
  Zip,
} from "./container";
import {
  EnumerableObservable,
  ObservableLike,
  RunnableObservable,
  concatAll as concatAllObs,
  concat as concatObs,
  distinctUntilChanged as distinctUntilChangedObs,
  fromArray as fromArrayObs,
  generate as generateObs,
  keep as keepObs,
  map as mapObs,
  repeat as repeatObs,
  scan as scanObs,
  skipFirst as skipFirstObs,
  takeFirst as takeFirstObs,
  takeLast as takeLastObs,
  takeWhile as takeWhileObs,
  toRunnable as toRunnableObs,
  zip as zipObs,
} from "./observable";
import { ToRunnable } from "./runnable";

export interface RunnableObservableLike<T> extends ObservableLike<T> {
  readonly TContainerOf: RunnableObservableLike<this["T"]>;
  readonly observableType: RunnableObservable | EnumerableObservable;
}

export const concat: Concat<RunnableObservableLike<unknown>>["concat"] =
  concatObs as Concat<RunnableObservableLike<unknown>>["concat"];
export const concatT: Concat<RunnableObservableLike<unknown>> = {
  concat,
};

export const concatAll: ConcatAll<
  RunnableObservableLike<unknown>
>["concatAll"] = concatAllObs as ConcatAll<
  RunnableObservableLike<unknown>
>["concatAll"];
export const concatAllT: ConcatAll<RunnableObservableLike<unknown>> = {
  concatAll,
};

export const distinctUntilChanged: DistinctUntilChanged<
  RunnableObservableLike<unknown>
>["distinctUntilChanged"] = distinctUntilChangedObs as DistinctUntilChanged<
  RunnableObservableLike<unknown>
>["distinctUntilChanged"];
export const distinctUntilChangedT: DistinctUntilChanged<
  RunnableObservableLike<unknown>
> = {
  distinctUntilChanged,
};

export const fromArray: FromArray<
  RunnableObservableLike<unknown>,
  {
    readonly delay: number;
    readonly startIndex: number;
    readonly endIndex: number;
    readonly delayStart: boolean;
  }
>["fromArray"] = fromArrayObs as FromArray<
  RunnableObservableLike<unknown>,
  {
    readonly delay: number;
    readonly startIndex: number;
    readonly endIndex: number;
    readonly delayStart: boolean;
  }
>["fromArray"];
export const fromArrayT: FromArray<
  RunnableObservableLike<unknown>,
  {
    readonly delay: number;
    readonly startIndex: number;
    readonly endIndex: number;
    readonly delayStart: boolean;
  }
> = {
  fromArray,
};

export const generate: Generate<RunnableObservableLike<unknown>>["generate"] =
  generateObs as Generate<RunnableObservableLike<unknown>>["generate"];
export const generateT: Generate<RunnableObservableLike<unknown>> = {
  generate,
};

export const keep: Keep<RunnableObservableLike<unknown>>["keep"] =
  keepObs as Keep<RunnableObservableLike<unknown>>["keep"];
export const keepT: Keep<RunnableObservableLike<unknown>> = {
  keep,
};

export const map: Map<RunnableObservableLike<unknown>>["map"] = mapObs as Map<
  RunnableObservableLike<unknown>
>["map"];
export const mapT: Map<RunnableObservableLike<unknown>> = { map };

export const repeat: Repeat<RunnableObservableLike<unknown>>["repeat"] =
  repeatObs as Repeat<RunnableObservableLike<unknown>>["repeat"];
export const repeatT: Repeat<RunnableObservableLike<unknown>> = { repeat };

export const scan: Scan<RunnableObservableLike<unknown>>["scan"] =
  scanObs as Scan<RunnableObservableLike<unknown>>["scan"];
export const scanT: Scan<RunnableObservableLike<unknown>> = { scan };

export const skipFirst: SkipFirst<
  RunnableObservableLike<unknown>
>["skipFirst"] = skipFirstObs as SkipFirst<
  RunnableObservableLike<unknown>
>["skipFirst"];
export const skipFirstT: SkipFirst<RunnableObservableLike<unknown>> = {
  skipFirst,
};

export const takeFirst: TakeFirst<
  RunnableObservableLike<unknown>
>["takeFirst"] = takeFirstObs as TakeFirst<
  RunnableObservableLike<unknown>
>["takeFirst"];
export const takeFirstT: TakeFirst<RunnableObservableLike<unknown>> = {
  takeFirst,
};

export const takeLast: TakeLast<RunnableObservableLike<unknown>>["takeLast"] =
  takeLastObs as TakeLast<RunnableObservableLike<unknown>>["takeLast"];
export const takeLastT: TakeLast<RunnableObservableLike<unknown>> = {
  takeLast,
};

export const takeWhile: TakeWhile<
  RunnableObservableLike<unknown>
>["takeWhile"] = takeWhileObs as TakeWhile<
  RunnableObservableLike<unknown>
>["takeWhile"];
export const takeWhileT: TakeWhile<RunnableObservableLike<unknown>> = {
  takeWhile,
};

export const toRunnable: ToRunnable<
  RunnableObservableLike<unknown>
>["toRunnable"] = toRunnableObs;

export const toRunnableT: ToRunnable<RunnableObservableLike<unknown>> = {
  toRunnable,
};

export const zip: Zip<RunnableObservableLike<unknown>>["zip"] = zipObs as Zip<
  RunnableObservableLike<unknown>
>["zip"];
export const zipT: Zip<RunnableObservableLike<unknown>> = { zip };
