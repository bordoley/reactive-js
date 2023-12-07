/// <reference types="./Observable.switchAll.d.ts" />

import Observer_createSwitchAllObserver from "../../Observer/__internal__/Observer.createSwitchAllObserver.js";
import Observable_flatten from "./Observable.flatten.js";
const Observable_switchAll = 
/*@__PURE__*/ Observable_flatten(Observer_createSwitchAllObserver);
export default Observable_switchAll;
