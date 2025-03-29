/// <reference types="./Broadcaster.map.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as MapSink from "../../__internal__/sinks/MapSink.js";
import Broadcaster_lift from "./Broadcaster.lift.js";
const Broadcaster_map = ((selector) => pipe((MapSink.create), partial(selector), (Broadcaster_lift)));
export default Broadcaster_map;
