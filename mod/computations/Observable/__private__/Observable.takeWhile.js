/// <reference types="./Observable.takeWhile.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as TakeWhileSink from "../../__internal__/sinks/TakeWhileSink.js";
import Observable_lift from "./Observable.lift.js";
const Observable_takeWhile = ((predicate, options = {}) => pipe((TakeWhileSink.create), partial(predicate, options), Observable_lift()));
export default Observable_takeWhile;
