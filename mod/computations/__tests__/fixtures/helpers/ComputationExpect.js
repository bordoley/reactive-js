/// <reference types="./ComputationExpect.d.ts" />

import { expectFalse, expectTrue } from "../../../../__internal__/testing.js";
import { pipe } from "../../../../functions.js";
import * as Computation from "../../../Computation.js";
export const isPureSynchronous = (x) => {
    pipe(x, (Computation.isPureSynchronous), expectTrue);
    return x;
};
export const isNotPureSynchronous = (x) => {
    pipe(x, (Computation.isPureSynchronous), expectFalse);
    return x;
};
export const isSynchronousWithSideEffects = (x) => {
    pipe(x, (Computation.isSynchronousWithSideEffects), expectTrue);
    return x;
};
export const isNotSynchronousWithSideEffects = (x) => {
    pipe(x, (Computation.isSynchronousWithSideEffects), expectFalse);
    return x;
};
export const isNotSynchronous = (x) => {
    pipe(x, (Computation.isSynchronous), expectFalse);
    return x;
};
export const isPureDeferred = (x) => {
    pipe(x, (Computation.isPureDeferred), expectTrue);
    return x;
};
export const isDeferredWithSideEffects = (x) => {
    pipe(x, (Computation.isDeferredWithSideEffects), expectTrue);
    return x;
};
export const isMulticasted = (x) => {
    pipe(x, (Computation.isMulticasted), expectTrue);
    return x;
};
