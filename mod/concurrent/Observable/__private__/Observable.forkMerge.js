/// <reference types="./Observable.forkMerge.d.ts" />

import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import * as Computation from "../../../computations/Computation.js";
import { ObservableLike_observe, } from "../../../concurrent.js";
import { invoke, isFunction, isSome, none, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_create from "./Observable.create.js";
import Observable_createPureDeferredObservable from "./Observable.createPureDeferredObservable.js";
import Observable_merge from "./Observable.merge.js";
import Observable_multicast from "./Observable.multicast.js";
const ObservableModule = { merge: Observable_merge };
const Observable_forkMerge = ((...args) => (obs) => {
    const argsLength = args.length;
    const lastArg = args[argsLength - 1];
    const maybeConfig = isSome(lastArg) && !isFunction(lastArg) ? lastArg : none;
    const ops = (isSome(maybeConfig) ? args.slice(0, argsLength - 1) : args);
    const innerType = maybeConfig?.innerType ?? {};
    const isPure = Computation.isPure(innerType);
    const create = isPure
        ? Observable_createPureDeferredObservable
        : Observable_create;
    return Computation.isMulticasted(obs)
        ? pipe(ops, ReadonlyArray.map(op => op(obs)), Computation.mergeMany(ObservableModule))
        : create(observer => {
            const src = pipe(obs, Observable_multicast(observer, { autoDispose: true }), Disposable.addTo(observer));
            pipe(ops, ReadonlyArray.map(op => op(src)), Computation.mergeMany(ObservableModule), invoke(ObservableLike_observe, observer));
        });
});
export default Observable_forkMerge;
