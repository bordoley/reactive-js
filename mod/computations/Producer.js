/// <reference types="./Producer.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, ProducerLike_consume, } from "../computations.js";
import { bindMethod, error, newInstance, returns, } from "../functions.js";
import { DisposableLike_dispose, } from "../utils.js";
import * as Observable from "./Observable.js";
class CreateProducer {
    f;
    [ComputationLike_isPure] = false;
    [ComputationLike_isSynchronous] = false;
    constructor(f) {
        this.f = f;
    }
    [ProducerLike_consume](consumer) {
        try {
            this.f(consumer);
        }
        catch (e) {
            consumer[DisposableLike_dispose](error(e));
        }
    }
}
export const create = f => newInstance(CreateProducer, f);
export const toObservable = /*@__PURE__*/ returns((producer) => Observable.create(bindMethod(producer, ProducerLike_consume)));
