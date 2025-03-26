/// <reference types="./Broadcaster.takeWhile.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as TakeWhileSink from "../../__internal__/sinks/TakeWhileSink.js";
import Broadcaster_lift from "./Broadcaster.lift.js";
const Broadcaster_takeWhile = ((predicate, options = {}) => pipe((TakeWhileSink.create), partial(predicate, options), Broadcaster_lift));
export default Broadcaster_takeWhile;
