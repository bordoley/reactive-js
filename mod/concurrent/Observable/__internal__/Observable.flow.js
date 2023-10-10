/// <reference types="./Observable.flow.d.ts" />

import { returns } from "../../../functions.js";
import PauseableObservable_create from "../../PauseableObservable/__internal__/PauseableObservable.create.js";
const Observable_flow = (scheduler, options) => (runnable) => {
    return PauseableObservable_create(returns(runnable), scheduler, options);
};
export default Observable_flow;
