/// <reference types="./Observable.lastAsync.d.ts" />

import { Promise } from "../../../__internal__/constants.js";
import { newInstance, none, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as HostScheduler from "../../../utils/HostScheduler.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_lastAsync = (options) => async (observable) => {
    const { scheduler } = options ?? {};
    return await newInstance(Promise, (resolve, reject) => {
        let result = none;
        pipe(observable, Observable_forEach((next) => {
            result = next;
        }), Observable_subscribe(scheduler ?? HostScheduler.get(), options), DisposableContainer.onError(reject), DisposableContainer.onComplete(() => {
            resolve(result);
        }));
    });
};
export default Observable_lastAsync;
