import { FromIterable, FromReadonlyArray, FromSequence } from "../containers";
import Iterable_toFlowable from "../containers/Iterable/__internal__/Iterable.toFlowable";
import ReadonlyArray_toFlowable from "../containers/ReadonlyArray/__internal__/ReadonlyArray.toFlowable";
import Sequence_toFlowable from "../containers/Sequence/__internal__/Sequence.toFlowable";
import { FromEnumerable } from "../ix";
import Enumerable_toFlowable from "../ix/Enumerable/__internal__/Enumerable.toFlowable";
import {
  FromEnumerableObservable,
  FromRunnableObservable,
  ToObservable,
} from "../rx";
import RunnableObservable_toFlowable from "../rx/RunnableObservable/__internal__/RunnableObservable.toFlowable";
import { FlowableLike } from "../streaming";
import Flowable_toObservable from "./Flowable/__internal__/Flowable.toObservable";

export const fromEnumerable: FromEnumerable<FlowableLike>["fromEnumerable"] =
  Enumerable_toFlowable;

export const fromEnumerableObservable: FromEnumerableObservable<FlowableLike>["fromEnumerableObservable"] =
  RunnableObservable_toFlowable;

export const fromIterable: FromIterable<FlowableLike>["fromIterable"] =
  Iterable_toFlowable;

export const fromReadonlyArray: FromReadonlyArray<
  FlowableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["fromReadonlyArray"] = ReadonlyArray_toFlowable;

export const fromRunnableObservable: FromRunnableObservable<FlowableLike>["fromRunnableObservable"] =
  RunnableObservable_toFlowable;

export const fromSequence: FromSequence<FlowableLike>["fromSequence"] =
  Sequence_toFlowable;

export const toObservable: ToObservable<FlowableLike>["toObservable"] =
  Flowable_toObservable;

/** @ignore */
const Flowable = {
  fromEnumerable,
  fromEnumerableObservable,
  fromIterable,
  fromReadonlyArray,
  fromRunnableObservable,
  fromSequence,
  toObservable,
};

export default Flowable;
