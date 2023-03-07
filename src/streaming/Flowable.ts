import {
  FromAsyncIterable,
  FromIterable,
  FromOptional,
  FromReadonlyArray,
  FromSequence,
} from "../containers.js";
import AsyncIterable_toFlowable from "../containers/AsyncIterable/__internal__/AsyncIterable.toFlowable.js";
import Iterable_toFlowable from "../containers/Iterable/__internal__/Iterable.toFlowable.js";
import Optional_toFlowable from "../containers/Optional/__internal__/Optional.toFlowable.js";
import ReadonlyArray_toFlowable from "../containers/ReadonlyArray/__internal__/ReadonlyArray.toFlowable.js";
import Sequence_toFlowable from "../containers/Sequence/__internal__/Sequence.toFlowable.js";
import {
  FromEnumerable,
  FromRunnable,
  ToObservable,
  ToRunnable,
} from "../rx.js";
import Runnable_toFlowable from "../rx/Runnable/__internal__/Runnable.toFlowable.js";
import { FlowableLike } from "../streaming.js";
import Flowable_toObservable from "./Flowable/__internal__/Flowable.toObservable.js";
import Flowable_toRunnable from "./Flowable/__internal__/Flowable.toRunnable.js";

export const fromAsyncIterable: FromAsyncIterable<
  FlowableLike,
  { maxBuffer?: number }
>["fromAsyncIterable"] = AsyncIterable_toFlowable;

export const fromEnumerable: FromEnumerable<FlowableLike>["fromEnumerable"] =
  Runnable_toFlowable;

export const fromIterable: FromIterable<FlowableLike>["fromIterable"] =
  Iterable_toFlowable;

export const fromOptional: FromOptional<
  FlowableLike,
  { delay?: number }
>["fromOptional"] = Optional_toFlowable;

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

export const toRunnable: ToRunnable<FlowableLike>["toRunnable"] =
  Flowable_toRunnable;
