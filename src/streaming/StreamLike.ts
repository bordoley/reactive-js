import { MulticastObservableLike } from "../rx/MulticastObservableLike";
import { DispatcherLike } from "../scheduling/DispatcherLike";

/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 */
export interface StreamLike<TReq, T>
  extends DispatcherLike<TReq>,
    MulticastObservableLike<T> {}
