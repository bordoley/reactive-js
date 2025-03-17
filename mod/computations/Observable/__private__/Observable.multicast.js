/// <reference types="./Observable.multicast.d.ts" />

import * as Computation from "../../../computations/Computation.js";
import { BroadcasterLike_connect, ComputationLike_isDeferred, ComputationLike_isSynchronous, ObservableLike_observe, } from "../../../computations.js";
import { newInstance, pipe } from "../../../functions.js";
import AbstractDelegatingDisposable from "../../../utils/Disposable/__internal__/AbstractDelegatingDisposable.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Subject from "../../Subject.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
const ObservableModule = {
    forEach: Observable_forEach,
};
// FIXME: Temporary while we work to get rid of multicast observable.
class MulticastObservable extends AbstractDelegatingDisposable {
    s;
    [ComputationLike_isDeferred] = false;
    [ComputationLike_isSynchronous] = false;
    constructor(s) {
        super(s);
        this.s = s;
    }
    [ObservableLike_observe](observer) {
        this.s[BroadcasterLike_connect](observer);
    }
}
const Observable_multicast = (scheduler, options = {}) => observable => {
    const subject = Subject.create(options);
    pipe(observable, Computation.notify(ObservableModule)(subject), Observable_subscribe(scheduler), Disposable.bindTo(subject));
    return newInstance(MulticastObservable, subject);
};
export default Observable_multicast;
