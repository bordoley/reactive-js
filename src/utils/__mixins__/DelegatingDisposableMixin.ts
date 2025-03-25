import {
  Mixin1,
  include,
  init,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { Optional, none } from "../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
} from "../../utils.js";
import DelegatingDisposableContainerMixin from "./DelegatingDisposableContainerMixin.js";

const DelegatingDisposableMixin: Mixin1<
  DisposableLike,
  DisposableLike,
  DisposableLike
> = /*@__PURE__*/ (() => {
  const DelegatingDisposableMixin_delegate = Symbol(
    "DelegatingDisposableMixin_delegate",
  );

  type TProperties = {
    [DelegatingDisposableMixin_delegate]: DisposableLike;
  };

  type TPrototype = Pick<
    DisposableLike,
    | typeof DisposableLike_error
    | typeof DisposableLike_dispose
    | typeof DisposableLike_isDisposed
  >;

  return mix(
    include(DelegatingDisposableContainerMixin()),
    function DelegatingDisposableMixin(
      this: TProperties & TPrototype,
      delegate: DisposableLike,
    ): DisposableLike {
      init(DelegatingDisposableContainerMixin(), this, delegate);

      this[DelegatingDisposableMixin_delegate] =
        (delegate as unknown as TProperties)[
          DelegatingDisposableMixin_delegate
        ] ?? delegate;

      return this;
    },
    props<TProperties>({
      [DelegatingDisposableMixin_delegate]: none,
    }),
    proto({
      get [DisposableLike_isDisposed](): boolean {
        unsafeCast<TProperties>(this);
        return this[DelegatingDisposableMixin_delegate][
          DisposableLike_isDisposed
        ];
      },
      get [DisposableLike_error](): Optional<Error> {
        unsafeCast<TProperties>(this);
        return this[DelegatingDisposableMixin_delegate][DisposableLike_error];
      },
      [DisposableLike_dispose](this: TProperties, error?: Error) {
        this[DelegatingDisposableMixin_delegate][DisposableLike_dispose](error);
      },
    }),
  );
})();

export default DelegatingDisposableMixin;
