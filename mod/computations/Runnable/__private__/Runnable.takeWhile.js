/// <reference types="./Runnable.takeWhile.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as TakeWhileSink from "../../__internal__/sinks/TakeWhileSink.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_takeWhile = (predicate, options = {}) => pipe((TakeWhileSink.create), partial(predicate, options), Runnable_lift());
export default Runnable_takeWhile;
