import { Optional, SideEffect1, bind, isFunction } from "../../../functions.js";
import {
  DisposableContainerLike_add,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
} from "../../../utils.js";

const AbstractDelegatingDisposable_delegate = Symbol(
  "AbstractDelegatingDisposable_delegate",
);

class AbstractDelegatingDisposable implements DisposableLike {
  private readonly [AbstractDelegatingDisposable_delegate]: DisposableLike;

  constructor(delegate: DisposableLike) {
    this[AbstractDelegatingDisposable_delegate] =
      (delegate as unknown as AbstractDelegatingDisposable)[
        AbstractDelegatingDisposable_delegate
      ] ?? delegate;
  }

  get [DisposableLike_error](): Optional<Error> {
    return this[AbstractDelegatingDisposable_delegate][DisposableLike_error];
  }

  get [DisposableLike_isDisposed](): boolean {
    return this[AbstractDelegatingDisposable_delegate][
      DisposableLike_isDisposed
    ];
  }

  [DisposableLike_dispose](error?: Error): void {
    this[AbstractDelegatingDisposable_delegate][DisposableLike_dispose](error);
  }

  [DisposableContainerLike_add](
    disposable: Disposable | SideEffect1<Optional<Error>>,
  ): void {
    this[AbstractDelegatingDisposable_delegate][DisposableContainerLike_add](
      // Cast to make the typechecker happy even though its a lie.
      (isFunction(disposable)
        ? bind(disposable, this)
        : disposable) as Disposable,
    );
  }
}

export default AbstractDelegatingDisposable;
