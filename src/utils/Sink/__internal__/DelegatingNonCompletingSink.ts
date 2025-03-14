import {
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import AbstractDelegatingDisposableSink from "./AbstractDelegatingDisposableSink.js";

export const DelegatingNonCompletingSink_inner = Symbol(
  "DelegatingNonCompletingSink_inner",
);

class DelegatingNonCompletingSink<T>
  extends AbstractDelegatingDisposableSink<T>
  implements SinkLike<T>
{
  public readonly [DelegatingNonCompletingSink_inner]: SinkLike<T>;

  constructor(inner: SinkLike<T>) {
    super(inner);
    this[DelegatingNonCompletingSink_inner] = inner;
  }

  get [SinkLike_isCompleted](): boolean {
    return this[DelegatingNonCompletingSink_inner][SinkLike_isCompleted];
  }

  [EventListenerLike_notify](next: T): void {
    this[DelegatingNonCompletingSink_inner][EventListenerLike_notify](next);
  }

  [SinkLike_complete](): void {
    //ignore;
  }
}

export default DelegatingNonCompletingSink;
