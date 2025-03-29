/// <reference types="./Runnable.map.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as MapSink from "../../__internal__/sinks/MapSink.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_map = (selector) => pipe((MapSink.create), partial(selector), Runnable_lift());
export default Runnable_map;
