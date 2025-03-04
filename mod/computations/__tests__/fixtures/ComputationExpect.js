/// <reference types="./ComputationExpect.d.ts" />

import { expectTrue } from "../../../__internal__/testing.js";
import { compose } from "../../../functions.js";
import * as Computation from "../../Computation.js";
export const isPureSynchronous = compose((Computation.isPureSynchronous), expectTrue);
export const isSynchronousWithSideEffects = compose((Computation.isSynchronousWithSideEffects), expectTrue);
export const isPureDeferred = compose((Computation.isPureDeferred), expectTrue);
export const isDeferredWithSideEffects = compose((Computation.isDeferredWithSideEffects), expectTrue);
export const isMulticasted = compose((Computation.isMulticasted), expectTrue);
