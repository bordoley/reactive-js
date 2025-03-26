/// <reference types="./Broadcaster.distinctUntilChanged.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as DistinctUntilChangedSink from "../../__internal__/sinks/DistinctUntilChangedSink.js";
import Broadcaster_lift from "./Broadcaster.lift.js";
const Broadcaster_distinctUntilChanged = ((options) => pipe(DistinctUntilChangedSink.create, partial(options), (Broadcaster_lift)));
export default Broadcaster_distinctUntilChanged;
