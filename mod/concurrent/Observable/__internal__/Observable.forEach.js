/// <reference types="./Observable.forEach.d.ts" />

import { partial, pipe } from "../../../functions.js";
import Observer_createForEachObserver from "../../Observer/__internal__/Observer.createForEachObserver.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";
const Observable_forEach = (effect) => pipe((Observer_createForEachObserver), partial(effect), Observable_liftWithSideEffects);
export default Observable_forEach;
