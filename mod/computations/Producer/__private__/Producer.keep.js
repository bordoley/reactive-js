/// <reference types="./Producer.keep.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as KeepSink from "../../__internal__/sinks/KeepSink.js";
import Producer_lift from "./Producer.lift.js";
const Producer_keep = ((predicate) => pipe((KeepSink.create), partial(predicate), Producer_lift()));
export default Producer_keep;
