/// <reference types="./Producer.map.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as MapSink from "../../__internal__/sinks/MapSink.js";
import Producer_lift from "./Producer.lift.js";
const Producer_map = ((selector) => pipe((MapSink.create), partial(selector), Producer_lift()));
export default Producer_map;
