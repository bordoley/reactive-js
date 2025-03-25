/// <reference types="./Broadcaster.takeWhile.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as TakeWhileOperator from "../../__internal__/operators/TakeWhileOperator.js";
import Broadcaster_lift from "./Broadcaster.lift.js";
const Broadcaster_takeWhile = ((predicate, options = {}) => pipe((TakeWhileOperator.create), partial(predicate, options), Broadcaster_lift));
export default Broadcaster_takeWhile;
