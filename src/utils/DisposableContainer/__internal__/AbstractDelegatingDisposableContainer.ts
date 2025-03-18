import { Optional, SideEffect1, bind, isFunction } from "../../../functions.js";
import {
  DisposableContainerLike,
  DisposableContainerLike_add,
} from "../../../utils.js";

export const AbstractDelegatingDisposableContainer_delegate = Symbol(
  "AbstractDelegatingDisposableContainer_delegate",
);

class AbstractDelegatingDisposableContainer<
  TDelegate extends DisposableContainerLike = DisposableContainerLike,
> implements DisposableContainerLike
{
  protected readonly [AbstractDelegatingDisposableContainer_delegate]: TDelegate;

  constructor(delegate: TDelegate) {
    this[AbstractDelegatingDisposableContainer_delegate] =
      (delegate as unknown as AbstractDelegatingDisposableContainer<TDelegate>)[
        AbstractDelegatingDisposableContainer_delegate
      ] ?? delegate;
  }

  [DisposableContainerLike_add](
    disposable: Disposable | SideEffect1<Optional<Error>>,
  ): void {
    this[AbstractDelegatingDisposableContainer_delegate][
      DisposableContainerLike_add
    ](
      // Cast to make the typechecker happy even though its a lie.
      (isFunction(disposable)
        ? bind(disposable, this)
        : disposable) as Disposable,
    );
  }
}

export default AbstractDelegatingDisposableContainer;
