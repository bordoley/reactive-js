/// <reference types="./Producer.map.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as MapOperator from "../../__internal__/operators/MapOperator.js";
import Producer_lift from "./Producer.lift.js";
const Producer_map = ((selector) => pipe((MapOperator.create), partial(selector), Producer_lift()));
export default Producer_map;
