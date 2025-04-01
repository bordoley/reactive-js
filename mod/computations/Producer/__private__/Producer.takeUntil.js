/// <reference types="./Producer.takeUntil.d.ts" />

import { compose, partial, pipe } from "../../../functions.js";
import * as EventSource from "../../EventSource.js";
import * as TakeUntilSink from "../../__internal__/sinks/TakeUntilSink.js";
import Producer_forEach from "./Producer.forEach.js";
import Producer_lift from "./Producer.lift.js";
const addEventListener = (_, effect) => compose(Producer_forEach(effect), EventSource.subscribe());
const Producer_takeUntil = ((notifier) => pipe((TakeUntilSink.create), partial(notifier, addEventListener), Producer_lift()));
export default Producer_takeUntil;
