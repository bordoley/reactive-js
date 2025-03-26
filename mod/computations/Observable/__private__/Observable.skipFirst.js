/// <reference types="./Observable.skipFirst.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as SkipFirstSink from "../../__internal__/sinks/SkipFirstSink.js";
import Observable_lift from "./Observable.lift.js";
const Observable_skipFirst = ((options) => pipe(SkipFirstSink.create, partial(options?.count), Observable_lift()));
export default Observable_skipFirst;
