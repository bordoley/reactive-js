/// <reference types="./Producer.forkMerge.d.ts" />

import { ComputationLike_isPure, } from "../../../computations.js";
import Broadcaster_toProducer from "../../Broadcaster/__private__/Broadcaster.toProducer.js";
import Producer_broadcast from "../../Producer/__private__/Producer.broadcast.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import Producer_merge from "./Producer.merge.js";
const toBroadcaster = (_consumer) => Producer_broadcast();
const Producer_forkMerge = ((...ops) => DeferredEventSource.forkMerge((toBroadcaster), Broadcaster_toProducer, Producer_merge, ops));
export default Producer_forkMerge;
