/// <reference types="./Producer.forEach.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as ForEachSink from "../../__internal__/sinks/ForEachSink.js";
import Producer_lift from "./Producer.lift.js";
const Producer_forEach = ((predicate) => pipe((ForEachSink.create), partial(predicate), Producer_lift()));
export default Producer_forEach;
