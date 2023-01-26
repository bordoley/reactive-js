import {
  Empty,
  ForEach,
  FromArray,
  FromSequence,
  Keep,
  Map,
  ReadonlyArrayLike,
  ToReadonlyArray,
  ToSequence,
} from "../containers";
import { identity } from "../functions";
import { FromAsyncEnumerable, FromEnumerable, ToEnumerable } from "../ix";
import AsyncEnumerable$toReadonlyArray from "../ix/__internal__/AsyncEnumerable/AsyncEnumerable.toReadonlyArray";
import Enumerable$toReadonlyArray from "../ix/__internal__/Enumerable/Enumerable.toReadonlyArray";
import {
  FromEnumerableObservable,
  ToEnumerableObservable,
  ToObservable,
  ToRunnable,
  ToRunnableObservable,
} from "../rx";
import Observable$toReadonlyArray from "../rx/__internal__/Observable/Observable.toReadonlyArray";
import ReadonlyArray$empty from "./__internal__/ReadonlyArray/ReadonlyArray.empty";
import ReadonlyArray$every from "./__internal__/ReadonlyArray/ReadonlyArray.every";
import ReadonlyArray$forEach from "./__internal__/ReadonlyArray/ReadonlyArray.forEach";
import ReadonlyArray$keep from "./__internal__/ReadonlyArray/ReadonlyArray.keep";
import ReadonlyArray$map from "./__internal__/ReadonlyArray/ReadonlyArray.map";
import ReadonlyArray$some from "./__internal__/ReadonlyArray/ReadonlyArray.some";
import ReadonlyArray$toEnumerable from "./__internal__/ReadonlyArray/ReadonlyArray.toEnumerable";
import ReadonlyArray$toRunnable from "./__internal__/ReadonlyArray/ReadonlyArray.toRunnable";
import ReadonlyArray$toRunnableObservable from "./__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable";
import ReadonlyArray$toSequence from "./__internal__/ReadonlyArray/ReadonlyArray.toSequence";
import Sequence$toReadonlyArray from "./__internal__/Sequence/Sequence.toReadonlyArray";

export const empty: Empty<ReadonlyArrayLike>["empty"] = ReadonlyArray$empty;

export const every = ReadonlyArray$every;

export const forEach: ForEach<ReadonlyArrayLike>["forEach"] =
  ReadonlyArray$forEach;

export const fromArray: FromArray<ReadonlyArrayLike>["fromArray"] =
  // FIXME: Handle options
  _options => identity;

export const fromAsyncEnumerable: FromAsyncEnumerable<ReadonlyArrayLike>["fromAsyncEnumerable"] =
  AsyncEnumerable$toReadonlyArray;

export const fromEnumerable: FromEnumerable<ReadonlyArrayLike>["fromEnumerable"] =
  Enumerable$toReadonlyArray;

export const fromEnumerableObservable =
  Observable$toReadonlyArray as FromEnumerableObservable<ReadonlyArrayLike>["fromEnumerableObservable"];

export const fromSequence: FromSequence<ReadonlyArrayLike>["fromSequence"] =
  Sequence$toReadonlyArray;

export const keep: Keep<ReadonlyArrayLike>["keep"] = ReadonlyArray$keep;

export const map: Map<ReadonlyArrayLike>["map"] = ReadonlyArray$map;

export const some = ReadonlyArray$some;

export const toEnumerable: ToEnumerable<
  ReadonlyArrayLike,
  {
    readonly start: number;
    readonly count: number;
  }
>["toEnumerable"] = ReadonlyArray$toEnumerable;

export const toEnumerableObservable: ToEnumerableObservable<
  ReadonlyArrayLike,
  {
    readonly count?: number;
    readonly start?: number;
  }
>["toEnumerableObservable"] =
  ReadonlyArray$toRunnableObservable as ToEnumerableObservable<
    ReadonlyArrayLike,
    {
      readonly count?: number;
      readonly start?: number;
    }
  >["toEnumerableObservable"];

export const toObservable: ToObservable<
  ReadonlyArrayLike,
  {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
  }
>["toObservable"] = ReadonlyArray$toRunnableObservable;

export const toReadonlyArray: ToReadonlyArray<
  ReadonlyArrayLike,
  {
    readonly start: number;
    readonly count: number;
  }
>["toReadonlyArray"] = () => identity;

export const toRunnable: ToRunnable<ReadonlyArrayLike>["toRunnable"] =
  ReadonlyArray$toRunnable;

export const toRunnableObservable: ToRunnableObservable<
  ReadonlyArrayLike,
  {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
  }
>["toRunnableObservable"] = ReadonlyArray$toRunnableObservable;

export const toSequence: ToSequence<ReadonlyArrayLike>["toSequence"] =
  ReadonlyArray$toSequence;
