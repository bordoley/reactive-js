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
import AsyncEnumerableLike__toReadonlyArray from "../ix/__internal__/AsyncEnumerableLike/AsyncEnumerableLike.toReadonlyArray";
import EnumerableLike__toReadonlyArray from "../ix/__internal__/EnumerableLike/EnumerableLike.toReadonlyArray";
import {
  FromEnumerableObservable,
  ToEnumerableObservable,
  ToObservable,
  ToRunnable,
  ToRunnableObservable,
} from "../rx";
import ObservableLike__toReadonlyArray from "../rx/__internal__/ObservableLike/ObservableLike.toReadonlyArray";
import ReadonlyArrayLike__empty from "./__internal__/ReadonlyArrayLike/ReadonlyArrayLike.empty";
import ReadonlyArrayLike__every from "./__internal__/ReadonlyArrayLike/ReadonlyArrayLike.every";
import ReadonlyArrayLike__forEach from "./__internal__/ReadonlyArrayLike/ReadonlyArrayLike.forEach";
import ReadonlyArrayLike__keep from "./__internal__/ReadonlyArrayLike/ReadonlyArrayLike.keep";
import ReadonlyArrayLike__map from "./__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map";
import ReadonlyArrayLike__some from "./__internal__/ReadonlyArrayLike/ReadonlyArrayLike.some";
import ReadonlyArrayLike__toEnumerable from "./__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toEnumerable";
import ReadonlyArrayLike__toRunnable from "./__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnable";
import ReadonlyArrayLike__toRunnableObservable from "./__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable";
import ReadonlyArrayLike__toSequence from "./__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toSequence";
import SequenceLike__toReadonlyArray from "./__internal__/SequenceLike/SequenceLike.toReadonlyArray";

export const empty: Empty<ReadonlyArrayLike>["empty"] =
  ReadonlyArrayLike__empty;

export const every = ReadonlyArrayLike__every;

export const forEach: ForEach<ReadonlyArrayLike>["forEach"] =
  ReadonlyArrayLike__forEach;

export const fromArray: FromArray<ReadonlyArrayLike>["fromArray"] =
  // FIXME: Handle options
  _options => identity;

export const fromAsyncEnumerable: FromAsyncEnumerable<ReadonlyArrayLike>["fromAsyncEnumerable"] =
  AsyncEnumerableLike__toReadonlyArray;

export const fromEnumerable: FromEnumerable<ReadonlyArrayLike>["fromEnumerable"] =
  EnumerableLike__toReadonlyArray;

export const fromEnumerableObservable =
  ObservableLike__toReadonlyArray as FromEnumerableObservable<ReadonlyArrayLike>["fromEnumerableObservable"];

export const fromSequence: FromSequence<ReadonlyArrayLike>["fromSequence"] =
  SequenceLike__toReadonlyArray;

export const keep: Keep<ReadonlyArrayLike>["keep"] = ReadonlyArrayLike__keep;

export const map: Map<ReadonlyArrayLike>["map"] = ReadonlyArrayLike__map;

export const some = ReadonlyArrayLike__some;

export const toEnumerable: ToEnumerable<
  ReadonlyArrayLike,
  {
    readonly start: number;
    readonly count: number;
  }
>["toEnumerable"] = ReadonlyArrayLike__toEnumerable;

export const toEnumerableObservable: ToEnumerableObservable<
  ReadonlyArrayLike,
  {
    readonly count?: number;
    readonly start?: number;
  }
>["toEnumerableObservable"] =
  ReadonlyArrayLike__toRunnableObservable as ToEnumerableObservable<
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
>["toObservable"] = ReadonlyArrayLike__toRunnableObservable;

export const toReadonlyArray: ToReadonlyArray<
  ReadonlyArrayLike,
  {
    readonly start: number;
    readonly count: number;
  }
>["toReadonlyArray"] = () => identity;

export const toRunnable: ToRunnable<ReadonlyArrayLike>["toRunnable"] =
  ReadonlyArrayLike__toRunnable;

export const toRunnableObservable: ToRunnableObservable<
  ReadonlyArrayLike,
  {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
  }
>["toRunnableObservable"] = ReadonlyArrayLike__toRunnableObservable;

export const toSequence: ToSequence<ReadonlyArrayLike>["toSequence"] =
  ReadonlyArrayLike__toSequence;
