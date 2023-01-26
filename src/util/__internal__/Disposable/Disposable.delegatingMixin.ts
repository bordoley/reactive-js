import { Mixin1, Mutable, mix, props } from "../../../__internal__/mixins";
import { Optional, none, pipe, unsafeCast } from "../../../functions";
import {
  DisposableLike,
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  DisposableOrTeardown,
} from "../../../util";
import Disposable_dispose from "./Disposable.dispose";
import Disposable_onDisposed from "./Disposable.onDisposed";

const Disposable_delegatingMixin: Mixin1<DisposableLike, DisposableLike> =
  /*@__PURE__*/ (() => {
    const DelegatingDisposable_private_delegate = Symbol(
      "DelegatingDisposable_private_delegate",
    );

    type TProperties = {
      [DisposableLike_isDisposed]: boolean;
      readonly [DelegatingDisposable_private_delegate]: DisposableLike;
    };

    return mix(
      function DelegatingDisposableMixin(
        instance: Pick<
          DisposableLike,
          | typeof DisposableLike_error
          | typeof DisposableLike_add
          | typeof DisposableLike_dispose
        > &
          Mutable<TProperties>,
        delegate: DisposableLike,
      ): DisposableLike {
        instance[DelegatingDisposable_private_delegate] = delegate;

        pipe(
          delegate,
          Disposable_onDisposed(_ => {
            instance[DisposableLike_isDisposed] = true;
          }),
        );

        return instance;
      },
      props<TProperties>({
        [DelegatingDisposable_private_delegate]: none,
        [DisposableLike_isDisposed]: false,
      }),
      {
        get [DisposableLike_error](): Optional<Error> {
          unsafeCast<TProperties>(this);

          const delegate = this[DelegatingDisposable_private_delegate];
          return delegate[DisposableLike_error];
        },
        [DisposableLike_add](
          this: TProperties,
          disposable: DisposableOrTeardown,
          ignoreChildErrors: boolean,
        ) {
          const delegate = this[DelegatingDisposable_private_delegate];
          delegate[DisposableLike_add](disposable, ignoreChildErrors);
        },
        [DisposableLike_dispose](this: TProperties, error?: Error) {
          pipe(
            this[DelegatingDisposable_private_delegate],
            Disposable_dispose(error),
          );
        },
      },
    );
  })();

export default Disposable_delegatingMixin;
