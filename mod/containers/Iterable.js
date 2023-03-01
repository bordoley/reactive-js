/// <reference types="./Iterable.d.ts" />

import { identity, returns } from "../functions.js";
import Enumerable_toIterable from "../ix/Enumerable/__internal__/Enumerable.toIterable.js";
import Iterable_toFlowable from "./Iterable/__internal__/Iterable.toFlowable.js";
import Iterable_toReadonlyArray from "./Iterable/__internal__/Iterable.toReadonlyArray.js";
import Iterable_toRunnable from "./Iterable/__internal__/Iterable.toRunnable.js";
import ReadonlyArray_toReadonlyArray from "./ReadonlyArray/__internal__/ReadonlyArray.toReadonlyArray.js";
import Sequence_toIterable from "./Sequence/__internal__/Sequence.toIterable.js";
export const fromEnumerable = Enumerable_toIterable;
export const fromReadonlyArray = ReadonlyArray_toReadonlyArray;
export const fromSequence = Sequence_toIterable;
export const toEnumerable = Iterable_toRunnable;
export const toIterable = 
/*@__PURE__*/ returns(identity);
export const toFlowable = Iterable_toFlowable;
export const toObservable = Iterable_toRunnable;
export const toReadonlyArray = Iterable_toReadonlyArray;
export const toRunnable = Iterable_toRunnable;
