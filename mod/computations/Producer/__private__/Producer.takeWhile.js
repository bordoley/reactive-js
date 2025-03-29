/// <reference types="./Producer.takeWhile.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as TakeWhileSink from "../../__internal__/sinks/TakeWhileSink.js";
import Producer_lift from "./Producer.lift.js";
const Producer_takeWhile = ((predicate, options = {}) => pipe((TakeWhileSink.create), partial(predicate, options), Producer_lift()));
export default Producer_takeWhile;
