/// <reference types="./Streamable.createSwitchingEventHandler.d.ts" />

import { compose } from "../../../functions.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_switchMap from "../../../rx/Observable/__internal__/Observable.switchMap.js";
import Streamable_create from "./Streamable.create.js";
const Streamable_createSwitchingEventHandler = (op) => Streamable_create(Observable_switchMap(compose(op, Observable_ignoreElements())));
export default Streamable_createSwitchingEventHandler;
