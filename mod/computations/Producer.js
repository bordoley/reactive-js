/// <reference types="./Producer.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, ProducerLike_consume, } from "../computations.js";
import { error, newInstance } from "../functions.js";
import { DisposableLike_dispose, } from "../utils.js";
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
