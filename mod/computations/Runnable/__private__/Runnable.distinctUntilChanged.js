/// <reference types="./Runnable.distinctUntilChanged.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as DistinctUntilChangedSink from "../../__internal__/sinks/DistinctUntilChangedSink.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_distinctUntilChanged = (options) => pipe(DistinctUntilChangedSink.create, partial(options), Runnable_lift());
export default Runnable_distinctUntilChanged;
