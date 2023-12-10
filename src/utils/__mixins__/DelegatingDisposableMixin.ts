import { Mixin1, mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { Optional, SideEffect1, none, pipe, returns } from "../../functions.js";
import {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
  DisposableLike,
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";

const DelegatingDisposableMixin: <
  TDisposable extends DisposableLike = DisposableLike,
>() => Mixin1<DelegatingDisposableLike<TDisposable>, TDisposable> =
  /*@__PURE__*/ (<TDisposable extends DisposableLike = DisposableLike>() => {
    type TProperties = {
      [DelegatingDisposableLike_delegate]: TDisposable;
      [DisposableLike_isDisposed]: boolean;
    };

    return returns(
      mix(
        function DelegatingDisposableMixin(
          instance: Pick<
            DisposableLike,
            | typeof DisposableLike_error
            | typeof DisposableLike_add
            | typeof DisposableLike_dispose
          > &
            TProperties,
          delegate: TDisposable,
        ): DelegatingDisposableLike<TDisposable> {
          instance[DelegatingDisposableLike_delegate] = delegate;

          pipe(
            delegate,
            Disposable.onDisposed(_ => {
              instance[DisposableLike_isDisposed] = true;
            }),
          );

          return instance;
        },
        props<TProperties>({
          [DelegatingDisposableLike_delegate]: none,
          [DisposableLike_isDisposed]: false,
        }),
        {
          get [DisposableLike_error](): Optional<Error> {
            unsafeCast<TProperties>(this);
            return this[DelegatingDisposableLike_delegate][
              DisposableLike_error
            ];
          },
          [DisposableLike_add](
            this: TProperties,
            disposable: DisposableLike | SideEffect1<Optional<Error>>,
          ) {
            const delegate = this[DelegatingDisposableLike_delegate];
            delegate[DisposableLike_add](
              // Cast to make the typechecker happy even though its a lie.
              disposable as DisposableLike,
            );
          },
          [DisposableLike_dispose](this: TProperties, error?: Error) {
            this[DelegatingDisposableLike_delegate][DisposableLike_dispose](
              error,
            );
          },
        },
      ),
    );
  })();

export default DelegatingDisposableMixin;
