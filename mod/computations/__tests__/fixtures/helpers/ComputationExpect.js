/// <reference types="./ComputationExpect.d.ts" />

import { expectFalse, expectTrue } from "../../../../__internal__/testing.js";
import { pipe } from "../../../../functions.js";
import * as Computation from "../../../Computation.js";
const computationToTypeString = (x) => Computation.isPureSynchronous(x)
    ? "PureSynchronous"
    : Computation.isSynchronousWithSideEffects(x)
        ? "SynchronousWithSideEffects"
        : Computation.isPureDeferred(x)
            ? "PureDeferred"
            : Computation.isDeferredWithSideEffects(x)
                ? "DeferredWithSideEffects"
                : Computation.isMulticasted(x)
                    ? "Multicasted"
                    : "illegal state";
export const isPureSynchronous = (x) => {
    pipe(x, (Computation.isPureSynchronous), expectTrue(`expected PureSynchronous computation received ${computationToTypeString(x)}`));
    return x;
};
export const isNotPureSynchronous = (x) => {
    pipe(x, (Computation.isPureSynchronous), expectFalse(`expected computation to not be PureSynchronousComputation received ${computationToTypeString(x)}`));
    return x;
};
export const isSynchronousWithSideEffects = (x) => {
    pipe(x, (Computation.isSynchronousWithSideEffects), expectTrue(`expected SynchronousWithSideEffects computation received ${computationToTypeString(x)}`));
    return x;
};
export const isNotSynchronousWithSideEffects = (x) => {
    pipe(x, (Computation.isSynchronousWithSideEffects), expectFalse(`expected computation not to be SynchronousWithSideEffects received ${computationToTypeString(x)}`));
    return x;
};
export const isNotSynchronous = (x) => {
    pipe(x, (Computation.isSynchronous), expectFalse(`expected computation not to be Synchronous received ${computationToTypeString(x)}`));
    return x;
};
export const isPureDeferred = (x) => {
    pipe(x, (Computation.isPureDeferred), expectTrue(`expected PureDeferred computation received ${computationToTypeString(x)}`));
    return x;
};
export const isDeferredWithSideEffects = (x) => {
    pipe(x, (Computation.isDeferredWithSideEffects), expectTrue(`expected DeferredWithSideEffects computation received ${computationToTypeString(x)}`));
    return x;
};
export const isMulticasted = (x) => {
    pipe(x, (Computation.isMulticasted), expectTrue(`expected Multicast computation received ${computationToTypeString(x)}`));
    return x;
};
