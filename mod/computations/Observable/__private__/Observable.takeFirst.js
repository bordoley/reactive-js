/// <reference types="./Observable.takeFirst.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as TakeFirstSink from "../../__internal__/sinks/TakeFirstSink.js";
import Observable_lift from "./Observable.lift.js";
const Observable_takeFirst = ((options) => pipe((TakeFirstSink.create), partial(options?.count), Observable_lift()));
export default Observable_takeFirst;
