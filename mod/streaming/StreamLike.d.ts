import { MulticastObservableLike } from "../rx/MulticastObservableLike.mjs";
import { DispatcherLike } from "../scheduling/DispatcherLike.mjs";
/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 */
interface StreamLike<TReq, T> extends DispatcherLike<TReq>, MulticastObservableLike<T> {
}
export { StreamLike };
