/// <reference types="./Observable.forkMerge.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import * as Computation from "../../../computations/Computation.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, ObservableLike_observe, } from "../../../computations.js";
import { invoke, isFunction, isSome, none, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_merge from "./Observable.merge.js";
import Observable_multicast from "./Observable.multicast.js";
const ObservableModule = { merge: Observable_merge };
const Observable_forkMerge = ((...args) => (obs) => {
    const argsLength = args[Array_length];
    const lastArg = args[argsLength - 1];
    const maybeConfig = isSome(lastArg) && !isFunction(lastArg) ? lastArg : none;
    const ops = (isSome(maybeConfig) ? args.slice(0, argsLength - 1) : args);
    const innerType = maybeConfig?.innerType ?? {};
    const isPure = Computation.isPure(innerType) && Computation.isPure(obs);
    const isSynchronous = Computation.isMulticasted(innerType) && Computation.isSynchronous(obs);
    return Computation.isMulticasted(obs)
        ? pipe(ops, ReadonlyArray.map(op => op(obs)), Computation.mergeMany(ObservableModule))
        : Observable_createWithConfig(observer => {
            const src = pipe(obs, Observable_multicast(observer, { autoDispose: true }), Disposable.addTo(observer));
            pipe(ops, ReadonlyArray.map(op => op(src)), Computation.mergeMany(ObservableModule), invoke(ObservableLike_observe, observer));
        }, {
            [ComputationLike_isPure]: isPure,
            [ComputationLike_isSynchronous]: isSynchronous,
        });
});
export default Observable_forkMerge;
