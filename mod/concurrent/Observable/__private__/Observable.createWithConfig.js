/// <reference types="./Observable.createWithConfig.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isInteractive, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { ObservableLike_observe, } from "../../../concurrent.js";
import { error, none } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import ObservableMixin from "../../__mixins__/ObservableMixin.js";
const Observable_createWithConfig = 
/*@__PURE__*/ (() => {
    const CreateObservable_effect = Symbol("CreateObservable_effect");
    return mixInstanceFactory(include(ObservableMixin), function CreateObservable(instance, effect, config) {
        init(ObservableMixin, instance, config);
        instance[CreateObservable_effect] = effect;
        return instance;
    }, props({
        [CreateObservable_effect]: none,
    }), {
        [ComputationLike_isInteractive]: false,
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
