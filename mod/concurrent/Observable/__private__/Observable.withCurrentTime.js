/// <reference types="./Observable.withCurrentTime.d.ts" />

import { partial, pipe } from "../../../functions.js";
import Observer_createWithCurrentTimeObserver from "../../Observer/__private__/Observer.createWithCurrentTimeObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observable_withCurrentTime = (selector) => pipe(Observer_createWithCurrentTimeObserver, partial(selector), Observable_liftPure);
export default Observable_withCurrentTime;
