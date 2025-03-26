/// <reference types="./Observable.takeUntil.d.ts" />

import { compose, partial, pipe } from "../../../functions.js";
import * as TakeUntilSink from "../../__internal__/sinks/TakeUntilSink.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribe from "./Observable.subscribe.js";
const addEventListener = (scheduler, effect) => compose(Observable_forEach(effect), Observable_subscribe({ scheduler }));
const Observable_takeUntil = ((notifier) => pipe((TakeUntilSink.create), partial(notifier, addEventListener), Observable_lift()));
export default Observable_takeUntil;
