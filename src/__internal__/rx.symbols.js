import symbol from "./symbol.js";

/** @type {unique symbol} */
export const DispatcherLike_complete = symbol("DispatcherLike_complete");

/** @type {unique symbol} */
export const DispatcherLike_scheduler = symbol("DispatcherLike_scheduler");

/** @type {unique symbol} */
export const MulticastObservableLike_observerCount = symbol(
  "MulticastObservableLike_observerCount",
);

/** @type {unique symbol} */
export const ObserverLike_notify = symbol("ObserverLike_notify");

/** @type {unique symbol} */
export const ObservableLike_observe = symbol(" ObservableLike_observe");

/** @type {unique symbol} */
export const ObservableLike_isEnumerable = symbol(
  "ObservableLike_isEnumerable",
);

/** @type {unique symbol} */
export const ObservableLike_isRunnable = symbol("ObservableLike_isRunnable");

/** @type {unique symbol} */
export const SubjectLike_publish = symbol("SubjectLike_publish");

/** @type {unique symbol} */
export const ThrottleMode_first = symbol("ThrottleMode_first");

/** @type {unique symbol} */
export const ThrottleMode_last = symbol("ThrottleMode_last");

/** @type {unique symbol} */
export const ThrottleMode_interval = symbol("ThrottleMode_interval");
