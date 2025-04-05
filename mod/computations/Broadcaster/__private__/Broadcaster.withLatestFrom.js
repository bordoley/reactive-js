/// <reference types="./Broadcaster.withLatestFrom.d.ts" />

import { partial, pipe, tuple } from "../../../functions.js";
import * as WithLatestFromSink from "../../__internal__/sinks/WithLatestFromSink.js";
import Broadcaster_addEventHandler from "./Broadcaster.addEventHandler.js";
import Broadcaster_lift from "./Broadcaster.lift.js";
const Broadcaster_withLatestFrom = ((other, selector = tuple) => pipe((WithLatestFromSink.create), partial(other, selector, Broadcaster_addEventHandler), (Broadcaster_lift)));
export default Broadcaster_withLatestFrom;
