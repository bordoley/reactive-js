/// <reference types="./ComputationExpect.d.ts" />

import { expectTrue } from "../../../__internal__/testing.js";
import { pipe } from "../../../functions.js";
import * as Computation from "../../Computation.js";
export const isPureSynchronous = (x) => pipe(x, (Computation.isPureSynchronous), expectTrue);
export const isSynchronousWithSideEffects = (x) => pipe(x, (Computation.isSynchronousWithSideEffects), expectTrue);
export const isPureDeferred = (x) => pipe(x, (Computation.isPureDeferred), expectTrue);
export const isDeferredWithSideEffects = (x) => pipe(x, (Computation.isDeferredWithSideEffects), expectTrue);
export const isMulticasted = (x) => pipe(x, (Computation.isMulticasted), expectTrue);
