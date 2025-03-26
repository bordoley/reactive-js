/// <reference types="./Producer.skipFirst.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as SkipFirstSink from "../../__internal__/sinks/SkipFirstSink.js";
import Producer_lift from "./Producer.lift.js";
const Producer_skipFirst = ((options) => pipe(SkipFirstSink.create, partial(options?.count), Producer_lift()));
export default Producer_skipFirst;
