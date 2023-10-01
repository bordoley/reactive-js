/// <reference types="./Observable.keep.d.ts" />

import { partial, pipe } from "../../../functions.js";
import Observer_createKeepObserver from "../../Observer/__internal__/Observer.createKeepObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observable_keep = (predicate) => pipe((Observer_createKeepObserver), partial(predicate), Observable_liftPure);
export default Observable_keep;
