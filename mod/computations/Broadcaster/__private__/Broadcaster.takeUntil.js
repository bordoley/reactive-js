/// <reference types="./Broadcaster.takeUntil.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as TakeUntilSink from "../../__internal__/sinks/TakeUntilSink.js";
import Broadcaster_addEventHandler from "./Broadcaster.addEventHandler.js";
import Broadcaster_lift from "./Broadcaster.lift.js";
const addEventListener = (_, effect) => Broadcaster_addEventHandler(effect);
const Broadcaster_takeUntil = ((notifier) => pipe((TakeUntilSink.create), partial(notifier, addEventListener), Broadcaster_lift));
export default Broadcaster_takeUntil;
