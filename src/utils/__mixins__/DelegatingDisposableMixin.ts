import {
  Mixin1,
  include,
  init,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { Optional, returns } from "../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
} from "../../utils.js";
import DelegatingDisposableContainerMixin, {
  DelegatingDisposableContainerLike,
  DelegatingDisposableContainerLike_delegate,
} from "./DelegatingDisposableContainerMixin.js";

export interface DelegatingDisposableLike<TDisposable extends DisposableLike>
  extends DelegatingDisposableContainerLike<TDisposable>,
    DisposableLike {}

const DelegatingDisposableMixin: <
  TDisposable extends DisposableLike,
>() => Mixin1<
  DelegatingDisposableLike<TDisposable>,
  TDisposable,
  DisposableLike
> = /*@__PURE__*/ (<TDisposable extends DisposableLike>() => {
  return returns(
    mix(
      include(DelegatingDisposableContainerMixin()),
      function DelegatingDisposableMixin(
        this: Pick<
          DisposableLike,
          | typeof DisposableLike_error
          | typeof DisposableLike_dispose
          | typeof DisposableLike_isDisposed
        >,
        delegate: TDisposable,
      ): DelegatingDisposableLike<TDisposable> {
        init(DelegatingDisposableContainerMixin<TDisposable>(), this, delegate);

        return this;
      },
      props(),
      proto({
        get [DisposableLike_isDisposed](): boolean {
          unsafeCast<DelegatingDisposableLike<TDisposable>>(this);
          return this[DelegatingDisposableContainerLike_delegate][
            DisposableLike_isDisposed
          ];
        },
        get [DisposableLike_error](): Optional<Error> {
          unsafeCast<DelegatingDisposableLike<TDisposable>>(this);
          return this[DelegatingDisposableContainerLike_delegate][
            DisposableLike_error
          ];
        },
        [DisposableLike_dispose](
          this: DelegatingDisposableLike<TDisposable>,
          error?: Error,
        ) {
          this[DelegatingDisposableContainerLike_delegate][
            DisposableLike_dispose
          ](error);
        },
      }),
    ),
  );
})();

export default DelegatingDisposableMixin;
