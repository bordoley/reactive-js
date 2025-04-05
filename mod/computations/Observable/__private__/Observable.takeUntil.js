/// <reference types="./Observable.takeUntil.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as EventSource from "../../EventSource.js";
import * as TakeUntilSink from "../../__internal__/sinks/TakeUntilSink.js";
import Observable_lift from "./Observable.lift.js";
const Observable_takeUntil = ((notifier) => pipe((TakeUntilSink.create), partial(notifier, EventSource.subscribe), Observable_lift()));
export default Observable_takeUntil;
