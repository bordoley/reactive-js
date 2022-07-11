import { DispatcherLike } from "./dispatcher";
import { MulticastObservableLike } from "./observable";

/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 */
export interface StreamLike<TReq, T>
  extends DispatcherLike<TReq>,
    MulticastObservableLike<T> {}
