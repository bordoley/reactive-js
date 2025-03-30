/// <reference types="./Broadcaster.forkMerge.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { isFunction, isSome, none, pipe, } from "../../../functions.js";
import Broadcaster_merge from "./Broadcaster.merge.js";
const Broadcaster_forkMerge = ((...args) => {
    const argsLength = args[Array_length];
    const lastArg = args[argsLength - 1];
    const maybeConfig = isSome(lastArg) && !isFunction(lastArg) ? lastArg : none;
    const ops = isSome(maybeConfig) ? args.slice(0, argsLength - 1) : args;
    return (broadcaster) => pipe(ops, ReadonlyArray.map(op => op(broadcaster)), broadcasters => Broadcaster_merge(...broadcasters));
});
export default Broadcaster_forkMerge;
