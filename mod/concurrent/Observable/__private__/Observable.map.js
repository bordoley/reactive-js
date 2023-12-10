/// <reference types="./Observable.map.d.ts" />

import { partial, pipe } from "../../../functions.js";
import Observer_createMapObserver from "../../Observer/__private__/Observer.createMapObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observable_map = (selector) => pipe((Observer_createMapObserver), partial(selector), Observable_liftPure);
export default Observable_map;
