/// <reference types="./Flowable.fromRunnable.d.ts" />

import { returns } from "../../../functions.js";
import Flowable_create from "./Flowable.create.js";
const Flowable_fromRunnable = () => (runnable) => Flowable_create(returns(runnable));
export default Flowable_fromRunnable;
