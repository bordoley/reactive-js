/// <reference types="./EventSource.forkMerge.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { isFunction, isSome, none, pipe, } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import EventSource_merge from "./EventSource.merge.js";
const EventSourceModule = {
    merge: EventSource_merge,
};
const EventSource_forkMerge = ((...args) => {
    const argsLength = args[Array_length];
    const lastArg = args[argsLength - 1];
    const maybeConfig = isSome(lastArg) && !isFunction(lastArg) ? lastArg : none;
    const ops = isSome(maybeConfig) ? args.slice(0, argsLength - 1) : args;
    return (eventSource) => pipe(ops, ReadonlyArray.map(op => op(eventSource)), Computation.mergeMany(EventSourceModule));
});
export default EventSource_forkMerge;
