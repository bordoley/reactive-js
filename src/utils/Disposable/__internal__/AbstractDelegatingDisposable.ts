import { Optional } from "../../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
} from "../../../utils.js";
import AbstractDelegatingDisposableContainer, {
  AbstractDelegatingDisposableContainer_delegate,
} from "../../DisposableContainer/__internal__/AbstractDelegatingDisposableContainer.js";

class AbstractDelegatingDisposable<
    TDisposable extends DisposableLike = DisposableLike,
  >
  extends AbstractDelegatingDisposableContainer<TDisposable>
  implements DisposableLike
{
  get [DisposableLike_error](): Optional<Error> {
    return this[AbstractDelegatingDisposableContainer_delegate][
      DisposableLike_error
    ];
  }

  get [DisposableLike_isDisposed](): boolean {
    return this[AbstractDelegatingDisposableContainer_delegate][
      DisposableLike_isDisposed
    ];
  }

  [DisposableLike_dispose](error?: Error): void {
    this[AbstractDelegatingDisposableContainer_delegate][
      DisposableLike_dispose
    ](error);
  }
}

export default AbstractDelegatingDisposable;
