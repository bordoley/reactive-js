/// <reference types="./Runnable.flow.d.ts" />

import PauseableObservable_create from "../../PauseableObservable/__internal__/PauseableObservable.create.js";
import { returns } from "../../functions.js";
const Runnable_flow = (scheduler, options) => (runnable) => {
    return PauseableObservable_create(returns(runnable), scheduler, options);
};
export default Runnable_flow;
