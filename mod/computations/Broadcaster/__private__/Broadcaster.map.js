/// <reference types="./Broadcaster.map.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as MapOperator from "../../__internal__/operators/MapOperator.js";
import Broadcaster_lift from "./Broadcaster.lift.js";
const Broadcaster_map = ((selector) => pipe((MapOperator.create), partial(selector), (Broadcaster_lift)));
export default Broadcaster_map;
