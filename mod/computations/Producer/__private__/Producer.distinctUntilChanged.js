/// <reference types="./Producer.distinctUntilChanged.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as DistinctUntilChangedOperator from "../../__internal__/operators/DistinctUntilChangedOperator.js";
import Producer_lift from "./Producer.lift.js";
const Producer_distinctUntilChanged = ((options) => pipe(DistinctUntilChangedOperator.create, partial(options), Producer_lift()));
export default Producer_distinctUntilChanged;
