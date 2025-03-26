/// <reference types="./Broadcaster.takeUntil.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as TakeUntilOperator from "../../__internal__/operators/TakeUntilOperator.js";
import Broadcaster_addEventHandler from "./Broadcaster.addEventHandler.js";
import Broadcaster_lift from "./Broadcaster.lift.js";
const addEventListener = (_, effect) => Broadcaster_addEventHandler(effect);
const Broadcaster_takeUntil = ((notifier) => pipe((TakeUntilOperator.create), partial(notifier, addEventListener), Broadcaster_lift));
export default Broadcaster_takeUntil;
