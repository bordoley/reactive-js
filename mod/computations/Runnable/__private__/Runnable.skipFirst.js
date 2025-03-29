/// <reference types="./Runnable.skipFirst.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as SkipFirstSink from "../../__internal__/sinks/SkipFirstSink.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_takeFirst = (options) => pipe(SkipFirstSink.create, partial(options?.count), Runnable_lift());
export default Runnable_takeFirst;
