import {
  Mixin1,
  mix,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import { Optional, SideEffect1, none, pipe } from "../../../functions.js";
import {
  DisposableLike,
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
} from "../../../utils.js";

import Disposable_onDisposed from "./Disposable.onDisposed.js";

const DelegatingDisposableMixin_delegate = Symbol(
  "DelegatingDisposableMixin_delegate",
);

const Disposable_delegatingMixin: Mixin1<DisposableLike, DisposableLike> =
  /*@__PURE__*/ (() => {
    type TProperties = {
      [DelegatingDisposableMixin_delegate]: DisposableLike;
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
        instance[DelegatingDisposableMixin_delegate] = delegate;

        pipe(
          delegate,
          Disposable_onDisposed(_ => {
            instance[DisposableLike_isDisposed] = true;
          }),
        );

        return instance;
      },
      props<TProperties>({
        [DelegatingDisposableMixin_delegate]: none,
        [DisposableLike_isDisposed]: false,
      }),
      {
        get [DisposableLike_error](): Optional<Error> {
          unsafeCast<TProperties>(this);
          return this[DelegatingDisposableMixin_delegate][DisposableLike_error];
        },
        [DisposableLike_add](
          this: TProperties,
          disposable: DisposableLike | SideEffect1<Optional<Error>>,
        ) {
          const delegate = this[DelegatingDisposableMixin_delegate];
          delegate[DisposableLike_add](
            // Cast to make the typechecker happy even though its a lie.
            disposable as DisposableLike,
          );
        },
        [DisposableLike_dispose](this: TProperties, error?: Error) {
          this[DelegatingDisposableMixin_delegate][DisposableLike_dispose](
            error,
          );
        },
      },
    );
  })();

export default Disposable_delegatingMixin;
