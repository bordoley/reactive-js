/// <reference types="./Producer.distinctUntilChanged.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as DistinctUntilChangedSink from "../../__internal__/sinks/DistinctUntilChangedSink.js";
import Producer_lift from "./Producer.lift.js";
const Producer_distinctUntilChanged = ((options) => pipe(DistinctUntilChangedSink.create, partial(options), Producer_lift()));
export default Producer_distinctUntilChanged;
