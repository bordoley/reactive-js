/// <reference types="./Flowable.create.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import * as WritableStore from "../../../computations/WritableStore.js";
import { FlowableLike_flow, StoreLike_value, } from "../../../computations.js";
import { none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, } from "../../../utils.js";
import * as Observable from "../../Observable.js";
import DelegatingMulticastObservableMixin from "../../__mixins__/DelegatingMulticastObservableMixin.js";
const PauseableObservable_create = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingMulticastObservableMixin()), function PauseableObservable(instance, op, scheduler, multicastOptions) {
        const writableStore = (instance[PauseableLike_isPaused] =
            WritableStore.create(true));
        const observableDelegate = pipe(writableStore, op, Observable.multicast(scheduler, multicastOptions), Disposable.bindTo(writableStore));
        init(DelegatingDisposableMixin, instance, writableStore);
        init(DelegatingMulticastObservableMixin(), instance, observableDelegate);
        return instance;
    }, props({
        [PauseableLike_isPaused]: none,
    }), {
        [PauseableLike_pause]() {
            this[PauseableLike_isPaused][StoreLike_value] = true;
        },
        [PauseableLike_resume]() {
            this[PauseableLike_isPaused][StoreLike_value] = false;
        },
    });
})();
const Flowable_create = (op) => ({
    [FlowableLike_flow]: (scheduler, options) => PauseableObservable_create(op, scheduler, options),
});
export default Flowable_create;
