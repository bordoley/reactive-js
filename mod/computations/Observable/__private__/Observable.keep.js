/// <reference types="./Observable.keep.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as KeepSink from "../../__internal__/sinks/KeepSink.js";
import Observable_lift from "./Observable.lift.js";
const Observable_keep = ((predicate) => pipe((KeepSink.create), partial(predicate), Observable_lift()));
export default Observable_keep;
