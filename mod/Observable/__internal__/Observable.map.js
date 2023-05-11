/// <reference types="./Observable.map.d.ts" />

import Observer_createMapObserver from "../../Observer/__internal__/Observer.createMapObserver.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftSource from "./Observable.liftSource.js";
const Observable_map = (selector) => pipe(Observer_createMapObserver, partial(selector), Observable_liftSource);
export default Observable_map;
