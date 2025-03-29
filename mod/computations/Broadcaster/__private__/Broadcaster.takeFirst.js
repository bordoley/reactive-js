/// <reference types="./Broadcaster.takeFirst.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as TakeFirstSink from "../../__internal__/sinks/TakeFirstSink.js";
import Broadcaster_lift from "./Broadcaster.lift.js";
const Broadcaster_takeFirst = ((options) => pipe((TakeFirstSink.create), partial(options?.count), Broadcaster_lift));
export default Broadcaster_takeFirst;
