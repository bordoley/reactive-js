/// <reference types="./Observable.switchAll.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../../concurrent.js";
import Observer_createSwitchAllObserver from "../../Observer/__internal__/Observer.createSwitchAllObserver.js";
import Observable_lift from "./Observable.lift.js";
const Observable_switchAll = ((options) => Observable_lift({
    [ObservableLike_isDeferred]: false,
    [ObservableLike_isPure]: false,
    [ObservableLike_isRunnable]: false,
    ...(options ?? {}),
})(Observer_createSwitchAllObserver));
export default Observable_switchAll;
