import { ObserverLike, ObserverLike_dispatcher } from "../../../rx";
import { DispatcherLike } from "../../../scheduling";

const getDispatcher = <T>(observer: ObserverLike<T>): DispatcherLike<T> =>
  observer[ObserverLike_dispatcher];

export default getDispatcher;
