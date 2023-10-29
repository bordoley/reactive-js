/// <reference types="./Observable.flow.d.ts" />

import { returns } from "../../../functions.js";
import Observable_createPauseable from "./Observable.createPauseable.js";
const Observable_flow = (scheduler, options) => (runnable) => {
    return Observable_createPauseable(returns(runnable), scheduler, options);
};
export default Observable_flow;
