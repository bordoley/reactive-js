/// <reference types="./Producer.takeFirst.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as TakeFirstSink from "../../__internal__/sinks/TakeFirstSink.js";
import Producer_lift from "./Producer.lift.js";
const Producer_takeFirst = ((options) => pipe((TakeFirstSink.create), partial(options?.count), Producer_lift()));
export default Producer_takeFirst;
