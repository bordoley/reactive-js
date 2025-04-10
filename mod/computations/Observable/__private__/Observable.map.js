/// <reference types="./Observable.map.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as MapSink from "../../__internal__/sinks/MapSink.js";
import Observable_lift from "./Observable.lift.js";
const Observable_map = ((selector) => pipe((MapSink.create), partial(selector), Observable_lift()));
export default Observable_map;
