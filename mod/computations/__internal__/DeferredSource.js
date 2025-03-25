/// <reference types="./DeferredSource.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, SourceLike_subscribe, } from "../../computations.js";
import { error, newInstance } from "../../functions.js";
import { DisposableLike_dispose } from "../../utils.js";
const CreateSource_effect = Symbol("CreateSource_effect");
class CreateSource {
    static [ComputationLike_isDeferred] = true;
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous];
    [CreateSource_effect];
    constructor(effect, config) {
        this[CreateSource_effect] = effect;
        this[ComputationLike_isPure] = config?.[ComputationLike_isPure];
        this[ComputationLike_isSynchronous] =
            config?.[ComputationLike_isSynchronous];
    }
    [SourceLike_subscribe](listener) {
        try {
            this[CreateSource_effect](listener);
        }
        catch (e) {
            listener[DisposableLike_dispose](error(e));
        }
    }
}
export const create = ((effect, options) => newInstance((CreateSource), effect, options));
