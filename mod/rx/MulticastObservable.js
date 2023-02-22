/// <reference types="./MulticastObservable.d.ts" />

import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, } from "../rx.js";
import MulticastObservable_getObserverCount from "./MulticastObservable/__internal__/MulticastObservable.getObserverCount.js";
import MulticastObservable_getReplay from "./MulticastObservable/__internal__/MulticastObservable.getReplay.js";
export const getObserverCount = MulticastObservable_getObserverCount;
export const getReplay = MulticastObservable_getReplay;
