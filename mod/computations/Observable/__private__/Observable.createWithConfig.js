/// <reference types="./Observable.createWithConfig.d.ts" />

import { mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, ObservableLike_observe, } from "../../../computations.js";
import { error, none } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Computation from "../../Computation.js";
const Observable_createWithConfig = 
/*@__PURE__*/ (() => {
    const CreateObservable_effect = Symbol("CreateObservable_effect");
    return mixInstanceFactory(function CreateObservable(effect, config) {
        this[CreateObservable_effect] = effect;
        this[ComputationLike_isSynchronous] = Computation.isSynchronous(config);
        this[ComputationLike_isPure] = Computation.isPure(config);
        return this;
    }, props({
        [CreateObservable_effect]: none,
        [ComputationLike_isPure]: false,
        [ComputationLike_isSynchronous]: false,
    }), {
        [ObservableLike_observe](observer) {
            try {
                this[CreateObservable_effect](observer);
            }
            catch (e) {
                observer[DisposableLike_dispose](error(e));
            }
        },
    });
})();
export default Observable_createWithConfig;
