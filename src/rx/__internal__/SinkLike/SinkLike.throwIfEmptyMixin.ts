import { Factory } from "react";
import {
  Mixin2,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Optional, none, pipe, returns } from "../../../functions";
import { SinkLike, SinkLike_notify } from "../../../rx";
import { DisposableLike, Exception } from "../../../util";
import DisposableLike__addTo from "../../../util/__internal__/DisposableLike/DisposableLike.addTo";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import DisposableLike__onComplete from "../../../util/__internal__/DisposableLike/DisposableLike.onComplete";
import { DelegatingSinkLike_delegate } from "../rx.internal";
import SinkLike__notify from "./SinkLike.notify";

const SinkLike__throwIfEmptyMixin: <T>() => Mixin2<
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
    mix(
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
          DisposableLike__addTo(delegate),
          DisposableLike__onComplete(() => {
            let error: Optional<Exception> = none;

            if (instance[ThrowIfEmptySink_private_isEmpty]) {
              let cause: unknown = none;
              try {
                cause = factory();
              } catch (e) {
                cause = e;
              }

              error = { cause };
            }

            pipe(delegate, DisposableLike__dispose(error));
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
          pipe(this[DelegatingSinkLike_delegate], SinkLike__notify(next));
        },
      },
    ),
  );
})();

export default SinkLike__throwIfEmptyMixin;
