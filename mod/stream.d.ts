import { DispatcherLike } from "./dispatcher.mjs";
import { MulticastObservableLike } from "./observable.mjs";
/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 */
interface StreamLike<TReq, T> extends DispatcherLike<TReq>, MulticastObservableLike<T> {
}
export { StreamLike };
