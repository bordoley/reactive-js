import {
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
  SinkLike_next,
} from "../../../utils.js";

export const DelegatingNonCompletingSink_inner = Symbol(
  "DelegatingNonCompletingSink_inner",
);

class DelegatingNonCompletingSink<T> implements SinkLike<T> {
  public readonly [DelegatingNonCompletingSink_inner]: SinkLike<T>;

  constructor(inner: SinkLike<T>) {
    this[DelegatingNonCompletingSink_inner] = inner;
  }

  get [SinkLike_isCompleted](): boolean {
    return this[DelegatingNonCompletingSink_inner][SinkLike_isCompleted];
  }

  [SinkLike_next](next: T): void {
    this[DelegatingNonCompletingSink_inner][SinkLike_next](next);
  }

  [SinkLike_complete](): void {
    //ignore;
  }
}

export default DelegatingNonCompletingSink;
