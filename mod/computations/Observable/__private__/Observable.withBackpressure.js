/// <reference types="./Observable.withBackpressure.d.ts" />

import { identity } from "../../../functions.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import { liftedSinkToObserverWithBackPressure } from "./Observable.lift.js";
const Observable_withBackpressure = ((config) => (source) => DeferredSource.createLifted(source, identity, liftedSinkToObserverWithBackPressure(config), source));
export default Observable_withBackpressure;
