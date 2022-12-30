import { Mixin1, Mutable, mix, props } from "../../../__internal__/mixins";
import { Optional, none, pipe, unsafeCast } from "../../../functions";
import {
  DisposableLike,
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_exception,
  DisposableLike_isDisposed,
  DisposableOrTeardown,
  Exception,
} from "../../../util";
import DisposableLike__dispose from "./DisposableLike.dispose";
import DisposableLike__onDisposed from "./DisposableLike.onDisposed";

const delegatingMixin: Mixin1<DisposableLike, DisposableLike> =
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
          | typeof DisposableLike_exception
          | typeof DisposableLike_add
          | typeof DisposableLike_dispose
        > &
          Mutable<TProperties>,
        delegate: DisposableLike,
      ): DisposableLike {
        instance[DelegatingDisposable_private_delegate] = delegate;

        pipe(
          delegate,
          DisposableLike__onDisposed(_ => {
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
        get [DisposableLike_exception](): Optional<Exception> {
          unsafeCast<TProperties>(this);

          const delegate = this[DelegatingDisposable_private_delegate];
          return delegate[DisposableLike_exception];
        },
        [DisposableLike_add](
          this: TProperties,
          disposable: DisposableOrTeardown,
          ignoreChildErrors: boolean,
        ) {
          const delegate = this[DelegatingDisposable_private_delegate];
          delegate[DisposableLike_add](disposable, ignoreChildErrors);
        },
        [DisposableLike_dispose](this: TProperties, error?: Exception) {
          pipe(
            this[DelegatingDisposable_private_delegate],
            DisposableLike__dispose(error),
          );
        },
      },
    );
  })();

export default delegatingMixin;
