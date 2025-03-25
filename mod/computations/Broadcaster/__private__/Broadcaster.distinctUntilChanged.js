/// <reference types="./Broadcaster.distinctUntilChanged.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as DistinctUntilChangedOperator from "../../__internal__/operators/DistinctUntilChangedOperator.js";
import Broadcaster_lift from "./Broadcaster.lift.js";
const Broadcaster_distinctUntilChanged = ((options) => pipe(DistinctUntilChangedOperator.create, partial(options), (Broadcaster_lift)));
export default Broadcaster_distinctUntilChanged;
