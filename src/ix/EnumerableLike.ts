import { EnumeratorLike } from "./EnumeratorLike";
import {
  InteractiveContainerLike,
  InteractiveContainerLike_interact,
} from "./InteractiveContainerLike";

/**
 * Interface for iterating a Container of items.
 */
export interface EnumerableLike<T = unknown>
  extends InteractiveContainerLike<T> {
  readonly TStatefulContainerState?: EnumeratorLike<T>;
  readonly TCtx?: void;

  [InteractiveContainerLike_interact](_: void): EnumeratorLike<T>;
}
