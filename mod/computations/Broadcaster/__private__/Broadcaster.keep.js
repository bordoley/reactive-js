/// <reference types="./Broadcaster.keep.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as KeepOperator from "../../__internal__/operators/KeepOperator.js";
import Broadcaster_lift from "./Broadcaster.lift.js";
const Broadcaster_keep = ((predicate) => pipe((KeepOperator.create), partial(predicate), (Broadcaster_lift)));
export default Broadcaster_keep;
