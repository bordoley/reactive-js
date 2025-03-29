/// <reference types="./Observable.forEach.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as ForEachSink from "../../__internal__/sinks/ForEachSink.js";
import Observable_lift from "./Observable.lift.js";
const Observable_forEach = ((predicate) => pipe((ForEachSink.create), partial(predicate), Observable_lift()));
export default Observable_forEach;
