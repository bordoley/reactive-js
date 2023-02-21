import { ObserverLike, ObserverLike_dispatcher } from "../../../rx.js";
import { DispatcherLike } from "../../../scheduling.js";

const Observer_getDispatcher = <T>(
  observer: ObserverLike<T>,
): DispatcherLike<T> => observer[ObserverLike_dispatcher];

export default Observer_getDispatcher;
