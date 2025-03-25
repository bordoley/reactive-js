/// <reference types="./Producer.map.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as MapOperator from "../../__internal__/operators/MapOperator.js";
import Observable_lift from "./Observable.lift.js";
const Observable_map = ((selector) => pipe((MapOperator.create), partial(selector), Observable_lift()));
export default Observable_map;
