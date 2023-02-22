import {
  DelegatingLike_delegate,
  Mixin1,
  Mutable,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Optional, pipe, returns, unsafeCast } from "../../../functions.js";
import {
  DisposableLike,
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  DisposableOrTeardown,
} from "../../../util.js";
import { DelegatingDisposableLike } from "../../__internal__/util.internal.js";
import Disposable_dispose from "./Disposable.dispose.js";
import Disposable_onDisposed from "./Disposable.onDisposed.js";

const Disposable_delegatingMixin: <
  TDisposable extends DisposableLike = DisposableLike,
>() => Mixin1<DelegatingDisposableLike<TDisposable>, TDisposable> =
  /*@__PURE__*/ (<TDisposable extends DisposableLike>() => {
    type TProperties = {
      [DisposableLike_isDisposed]: boolean;
    };

    return pipe(
      mix(
        include(delegatingMixin<TDisposable>()),
        function DelegatingDisposableMixin(
          instance: Pick<
            DisposableLike,
            | typeof DisposableLike_error
            | typeof DisposableLike_add
            | typeof DisposableLike_dispose
          > &
            Mutable<TProperties>,
          delegate: TDisposable,
        ): DelegatingDisposableLike<TDisposable> {
          init(delegatingMixin<TDisposable>(), instance, delegate);

          pipe(
            delegate,
            Disposable_onDisposed(_ => {
              instance[DisposableLike_isDisposed] = true;
            }),
          );

          return instance;
        },
        props<TProperties>({
          [DisposableLike_isDisposed]: false,
        }),
        {
          get [DisposableLike_error](): Optional<Error> {
            unsafeCast<TProperties & DelegatingDisposableLike<TDisposable>>(
              this,
            );

            const delegate = this[DelegatingLike_delegate];
            return delegate[DisposableLike_error];
          },
          [DisposableLike_add](
            this: TProperties & DelegatingDisposableLike<TDisposable>,
            disposable: DisposableOrTeardown,
            ignoreChildErrors: boolean,
          ) {
            const delegate = this[DelegatingLike_delegate];
            delegate[DisposableLike_add](disposable, ignoreChildErrors);
          },
          [DisposableLike_dispose](
            this: TProperties & DelegatingDisposableLike<TDisposable>,
            error?: Error,
          ) {
            pipe(this[DelegatingLike_delegate], Disposable_dispose(error));
          },
        },
      ),
      returns,
    );
  })();

export default Disposable_delegatingMixin;
