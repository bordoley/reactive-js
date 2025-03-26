/// <reference types="./Runnable.takeFirst.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as TakeFirstSink from "../../__internal__/sinks/TakeFirstSink.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_takeFirst = (options) => pipe((TakeFirstSink.create), partial(options?.count), Runnable_lift());
export default Runnable_takeFirst;
