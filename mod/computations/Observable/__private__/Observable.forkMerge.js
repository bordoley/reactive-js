/// <reference types="./Observable.forkMerge.d.ts" />

import { ComputationLike_isPure, } from "../../../computations.js";
import { compose } from "../../../functions.js";
import Producer_broadcast from "../../Producer/__private__/Producer.broadcast.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import Observable_fromBroadcaster from "./Observable.fromBroadcaster.js";
import Observable_merge from "./Observable.merge.js";
import Observable_toProducer from "./Observable.toProducer.js";
const toBroadcaster = (scheduler) => compose(Observable_toProducer({ scheduler }), Producer_broadcast());
const Observable_forkMerge = ((...ops) => DeferredEventSource.forkMerge(toBroadcaster, Observable_fromBroadcaster, Observable_merge, ops));
export default Observable_forkMerge;
