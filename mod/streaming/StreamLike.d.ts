import { MulticastObservableLike } from '../rx/MulticastObservableLike.js';
import { DispatcherLike } from '../scheduling/DispatcherLike.js';
/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 */
interface StreamLike<TReq, T> extends DispatcherLike<TReq>, MulticastObservableLike<T> {
}
export { StreamLike };
