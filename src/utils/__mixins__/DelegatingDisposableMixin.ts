import { Mixin1, mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { Optional, SideEffect1, none, pipe, returns } from "../../functions.js";
import {
  DisposableContainerLike_add,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
} from "../../utils.js";
import * as DisposableContainer from "../DisposableContainer.js";

export const DelegatingDisposableLike_delegate = Symbol(
  "DelegatingDisposableLike_delegate",
);

export interface DelegatingDisposableLike<
  TDisposable extends DisposableLike = DisposableLike,
> extends DisposableLike {
  readonly [DelegatingDisposableLike_delegate]: TDisposable;
}

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
            | typeof DisposableContainerLike_add
            | typeof DisposableLike_dispose
          > &
            TProperties,
          delegate: TDisposable,
        ): DelegatingDisposableLike<TDisposable> {
          instance[DelegatingDisposableLike_delegate] = delegate;

          pipe(
            delegate,
            DisposableContainer.onDisposed(_ => {
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
          [DisposableContainerLike_add](
            this: TProperties,
            disposable: DisposableLike | SideEffect1<Optional<Error>>,
          ) {
            const delegate = this[DelegatingDisposableLike_delegate];
            delegate[DisposableContainerLike_add](
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
