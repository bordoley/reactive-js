import { FromAsyncIterable } from "../containers.js";
import AsyncIterable_toFlowable from "../containers/AsyncIterable/__internal__/AsyncIterable.toFlowable.js";
import Iterable_toFlowable from "../containers/Iterable/__internal__/Iterable.toFlowable.js";
import Optional_toFlowable from "../containers/Optional/__internal__/Optional.toFlowable.js";
import ReadonlyArray_toFlowable from "../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.toFlowable.js";
import {
  FromEnumerable,
  FromIterable,
  FromOptional,
  FromReadonlyArray,
  FromRunnable,
} from "../rx.js";
import Runnable_toFlowable from "../rx/Runnable/__internal__/Runnable.toFlowable.js";
import { FlowableLike } from "../streaming.js";
import Flowable_create from "./Flowable/__internal__/Flowable.create.js";

/**
 * @category Constructor
 */
export const create = Flowable_create;

export const fromAsyncIterable: FromAsyncIterable<FlowableLike>["fromAsyncIterable"] =
  AsyncIterable_toFlowable;

export const fromEnumerable: FromEnumerable<FlowableLike>["fromEnumerable"] =
  Runnable_toFlowable;

export const fromIterable: FromIterable<FlowableLike>["fromIterable"] =
  Iterable_toFlowable;

export const fromOptional: FromOptional<FlowableLike>["fromOptional"] =
  Optional_toFlowable;

export const fromReadonlyArray: FromReadonlyArray<FlowableLike>["fromReadonlyArray"] =
  ReadonlyArray_toFlowable;

export const fromRunnable: FromRunnable<FlowableLike>["fromRunnable"] =
  Runnable_toFlowable;
