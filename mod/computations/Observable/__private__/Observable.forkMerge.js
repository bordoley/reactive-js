/// <reference types="./Observable.forkMerge.d.ts" />

import { ComputationLike_isPure, } from "../../../computations.js";
import { compose } from "../../../functions.js";
import Broadcaster_toProducer from "../../Broadcaster/__private__/Broadcaster.toProducer.js";
import Producer_broadcast from "../../Producer/__private__/Producer.broadcast.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import Observable_merge from "./Observable.merge.js";
import Observable_toProducer from "./Observable.toProducer.js";
const toBroadcaster = (scheduler) => compose(Observable_toProducer({ scheduler }), Producer_broadcast());
const Observable_forkMerge = ((...ops) => DeferredEventSource.forkMerge(toBroadcaster, Broadcaster_toProducer, Observable_merge, ops));
export default Observable_forkMerge;
