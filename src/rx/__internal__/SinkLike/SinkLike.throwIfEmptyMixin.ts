import { Factory } from "react";
import {
  Mixin2,
  Mutable,
  include,
  init,
  mixin,
  props,
} from "../../../__internal__/mixins";
import { Option, none, pipe, returns } from "../../../functions";
import { SinkLike, SinkLike_notify } from "../../../rx";
import { DisposableLike, Exception } from "../../../util";
import { addTo, dispose, onComplete } from "../../../util/DisposableLike";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import { notify } from "../../SinkLike";
import { DelegatingSinkLike_delegate } from "../rx.internal";

const throwIfEmptyMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  Factory<unknown>
> = /*@__PURE__*/ (<T>() => {
  const ThrowIfEmptySink_private_isEmpty = Symbol(
    "ThrowIfEmptySink_private_isEmpty",
  );

  type TProperties = {
    readonly [DelegatingSinkLike_delegate]: SinkLike<T>;
    [ThrowIfEmptySink_private_isEmpty]: boolean;
  };

  return returns(
    mixin(
      include(DisposableLike__mixin),
      function ThrowIfEmptySink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        factory: Factory<unknown>,
      ): SinkLike<T> {
        init(DisposableLike__mixin, instance);

        instance[DelegatingSinkLike_delegate] = delegate;

        pipe(
          instance,
          addTo(delegate),
          onComplete(() => {
            let error: Option<Exception> = none;

            if (instance[ThrowIfEmptySink_private_isEmpty]) {
              let cause: unknown = none;
              try {
                cause = factory();
              } catch (e) {
                cause = e;
              }

              error = { cause };
            }

            pipe(delegate, dispose(error));
          }),
        );

        return instance;
      },
      props<TProperties>({
        [DelegatingSinkLike_delegate]: none,
        [ThrowIfEmptySink_private_isEmpty]: true,
      }),
      {
        [SinkLike_notify](this: TProperties & DisposableLike, next: T) {
          this[ThrowIfEmptySink_private_isEmpty] = false;
          pipe(this[DelegatingSinkLike_delegate], notify(next));
        },
      },
    ),
  );
})();

export default throwIfEmptyMixin;
