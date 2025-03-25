/// <reference types="./Producer.takeWhile.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as TakeWhileOperator from "../../__internal__/operators/TakeWhileOperator.js";
import Producer_lift from "./Producer.lift.js";
const Producer_takeWhile = ((predicate, options = {}) => pipe((TakeWhileOperator.create), partial(predicate, options), Producer_lift()));
export default Producer_takeWhile;
