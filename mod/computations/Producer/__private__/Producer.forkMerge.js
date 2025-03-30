/// <reference types="./Producer.forkMerge.d.ts" />

import { ComputationLike_isPure, } from "../../../computations.js";
import Broadcaster_toProducer from "../../Broadcaster/__private__/Broadcaster.toProducer.js";
import Producer_broadcast from "../../Producer/__private__/Producer.broadcast.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import Producer_merge from "./Producer.merge.js";
const toBroadcaster = (_consumer) => Producer_broadcast();
const Producer_forkMerge = ((...ops) => DeferredSource.forkMerge((toBroadcaster), Broadcaster_toProducer, Producer_merge, ops));
export default Producer_forkMerge;
