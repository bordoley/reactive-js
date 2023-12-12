/// <reference types="./Observable.flow.d.ts" />

import { returns } from "../../../functions.js";
import Flowable_create from "../../Flowable/__private__/Flowable.create.js";
const Observable_flow = () => (runnable) => Flowable_create(returns(runnable));
export default Observable_flow;
