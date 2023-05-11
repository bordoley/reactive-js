/// <reference types="./Observable.withCurrentTime.d.ts" />

import Observer_createWithCurrentTimeObserver from "../../Observer/__internal__/Observer.createWithCurrentTimeObserver.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftSource from "./Observable.liftSource.js";
const Observable_withCurrentTime = (selector) => pipe(Observer_createWithCurrentTimeObserver, partial(selector), Observable_liftSource);
export default Observable_withCurrentTime;
