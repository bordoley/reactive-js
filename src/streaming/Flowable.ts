import {
  FromAsyncIterable,
  FromIterable,
  FromReadonlyArray,
  FromSequence,
} from "../containers.js";
import AsyncIterable_toFlowable from "../containers/AsyncIterable/__internal__/AsyncIterable.toFlowable.js";
import Iterable_toFlowable from "../containers/Iterable/__internal__/Iterable.toFlowable.js";
import ReadonlyArray_toFlowable from "../containers/ReadonlyArray/__internal__/ReadonlyArray.toFlowable.js";
import Sequence_toFlowable from "../containers/Sequence/__internal__/Sequence.toFlowable.js";
import { FromEnumerable } from "../ix.js";
import Enumerable_toFlowable from "../ix/Enumerable/__internal__/Enumerable.toFlowable.js";
import { FromEnumerableObservable, FromRunnable, ToObservable } from "../rx.js";
import Runnable_toFlowable from "../rx/Runnable/__internal__/Runnable.toFlowable.js";
import { FlowableLike } from "../streaming.js";
import Flowable_toObservable from "./Flowable/__internal__/Flowable.toObservable.js";

export const fromAsyncIterable: FromAsyncIterable<
  FlowableLike,
  { maxBuffer?: number }
>["fromAsyncIterable"] = AsyncIterable_toFlowable;

export const fromEnumerable: FromEnumerable<FlowableLike>["fromEnumerable"] =
  Enumerable_toFlowable;

export const fromEnumerableObservable: FromEnumerableObservable<FlowableLike>["fromEnumerableObservable"] =
  Runnable_toFlowable;

export const fromIterable: FromIterable<FlowableLike>["fromIterable"] =
  Iterable_toFlowable;

export const fromReadonlyArray: FromReadonlyArray<
  FlowableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["fromReadonlyArray"] = ReadonlyArray_toFlowable;

export const fromRunnable: FromRunnable<FlowableLike>["fromRunnable"] =
  Runnable_toFlowable;

export const fromSequence: FromSequence<FlowableLike>["fromSequence"] =
  Sequence_toFlowable;

export const toObservable: ToObservable<FlowableLike>["toObservable"] =
  Flowable_toObservable;
