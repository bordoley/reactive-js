/// <reference types="./Observable.distinctUntilChanged.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as DistinctUntilChangedSink from "../../__internal__/sinks/DistinctUntilChangedSink.js";
import Observable_lift from "./Observable.lift.js";
const Observable_distinctUntilChanged = ((options) => pipe(DistinctUntilChangedSink.create, partial(options), Observable_lift()));
export default Observable_distinctUntilChanged;
