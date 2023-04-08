import { Mixin1, mix, props } from "../../../__internal__/mixins.js";
import { __DelegatingDisposableMixin_delegate } from "../../../__internal__/symbols.js";
import { Optional, none, pipe, unsafeCast } from "../../../functions.js";
import {
  DisposableLike,
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  DisposableOrTeardown,
} from "../../../util.js";
import Disposable_onDisposed from "./Disposable.onDisposed.js";

const Disposable_delegatingMixin: Mixin1<DisposableLike, DisposableLike> =
  /*@__PURE__*/ (() => {
    type TProperties = {
      [__DelegatingDisposableMixin_delegate]: DisposableLike;
      [DisposableLike_isDisposed]: boolean;
    };

    return mix(
      function DelegatingDisposableMixin(
        instance: Pick<
          DisposableLike,
          | typeof DisposableLike_error
          | typeof DisposableLike_add
          | typeof DisposableLike_dispose
        > &
          TProperties,
        delegate: DisposableLike,
      ): DisposableLike {
        instance[__DelegatingDisposableMixin_delegate] = delegate;

        pipe(
          delegate,
          Disposable_onDisposed(_ => {
            instance[DisposableLike_isDisposed] = true;
          }),
        );

        return instance;
      },
      props<TProperties>({
        [__DelegatingDisposableMixin_delegate]: none,
        [DisposableLike_isDisposed]: false,
      }),
      {
        get [DisposableLike_error](): Optional<Error> {
          unsafeCast<TProperties>(this);
          return this[__DelegatingDisposableMixin_delegate][
            DisposableLike_error
          ];
        },
        [DisposableLike_add](
          this: TProperties,
          disposable: DisposableOrTeardown,
        ) {
          this[__DelegatingDisposableMixin_delegate][DisposableLike_add](
            disposable,
          );
        },
        [DisposableLike_dispose](this: TProperties, error?: Error) {
          this[__DelegatingDisposableMixin_delegate][DisposableLike_dispose](
            error,
          );
        },
      },
    );
  })();

export default Disposable_delegatingMixin;
