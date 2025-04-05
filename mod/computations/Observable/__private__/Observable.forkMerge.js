/// <reference types="./Observable.forkMerge.d.ts" />

import { ComputationLike_isPure, } from "../../../computations.js";
import Broadcaster_toObservable from "../../Broadcaster/__private__/Broadcaster.toObservable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import Observable_broadcast from "./Observable.broadcast.js";
import Observable_merge from "./Observable.merge.js";
const Observable_forkMerge = ((...ops) => DeferredEventSource.forkMerge(Observable_broadcast, Broadcaster_toObservable, Observable_merge, ops));
export default Observable_forkMerge;
