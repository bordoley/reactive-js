/// <reference types="./Runnable.keep.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as KeepSink from "../../__internal__/sinks/KeepSink.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_keep = (predicate) => pipe((KeepSink.create), partial(predicate), Runnable_lift());
export default Runnable_keep;
