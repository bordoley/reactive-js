/// <reference types="./Broadcaster.takeUntil.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as TakeUntilSink from "../../__internal__/sinks/TakeUntilSink.js";
import Broadcaster_addEventHandler from "./Broadcaster.addEventHandler.js";
import Broadcaster_lift from "./Broadcaster.lift.js";
const Broadcaster_takeUntil = ((notifier) => pipe((TakeUntilSink.create), partial(notifier, Broadcaster_addEventHandler), Broadcaster_lift));
export default Broadcaster_takeUntil;
