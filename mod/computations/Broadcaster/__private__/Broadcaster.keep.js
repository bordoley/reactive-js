/// <reference types="./Broadcaster.keep.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as KeepSink from "../../__internal__/sinks/KeepSink.js";
import Broadcaster_lift from "./Broadcaster.lift.js";
const Broadcaster_keep = ((predicate) => pipe((KeepSink.create), partial(predicate), (Broadcaster_lift)));
export default Broadcaster_keep;
