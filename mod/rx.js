/// <reference types="./rx.d.ts" />

import { ContainerLike_type, StatefulContainerLike_state, StatefulContainerLike_variance, } from "./containers.js";
/** @ignore */
export const SinkLike_notify = Symbol("SinkLike_notify");
/** @ignore */
export const ObserverLike_dispatcher = Symbol("ObserverLike_dispatcher");
/** @ignore */
export const ObserverLike_scheduler = Symbol("ObserverLike_scheduler");
/** @ignore */
export const ObservableLike_observe = Symbol(" ObservableLike_observe");
/**  @ignore */
export const ObservableLike_isEnumerable = Symbol("ObservableLike_isEnumerable");
/**  @ignore */
export const ObservableLike_isRunnable = Symbol("ObservableLike_isRunnable");
/** @ignore */
export const MulticastObservableLike_observerCount = Symbol("MulticastObservableLike_observerCount");
/** @ignore */
export const MulticastObservableLike_replay = Symbol("MulticastObservableLike_replay");
/** @ignore */
export const SubjectLike_publish = Symbol("SubjectLike_publish");
export const ThrottleMode_first = Symbol("ThrottleMode_first");
export const ThrottleMode_last = Symbol("ThrottleMode_last");
export const ThrottleMode_interval = Symbol("ThrottleMode_interval");
