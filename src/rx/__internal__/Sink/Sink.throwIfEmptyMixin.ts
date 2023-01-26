import {
  Mixin2,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import {
  Factory,
  Optional,
  error,
  none,
  pipe,
  returns,
} from "../../../functions";
import { SinkLike, SinkLike_notify } from "../../../rx";
import { DisposableLike } from "../../../util";
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable$onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import { DelegatingSinkLike_delegate } from "../rx.internal";
import Sink$notify from "./Sink.notify";

const Sink$throwIfEmptyMixin: <T>() => Mixin2<
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
      include(Disposable$mixin),
      function ThrowIfEmptySink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        factory: Factory<unknown>,
      ): SinkLike<T> {
        init(Disposable$mixin, instance);

        instance[DelegatingSinkLike_delegate] = delegate;

        pipe(
          instance,
          Disposable$addTo(delegate),
          Disposable$onComplete(() => {
            let err: Optional<Error> = none;

            if (instance[ThrowIfEmptySink_private_isEmpty]) {
              try {
                err = error(factory());
              } catch (e) {
                err = error(e);
              }
            }

            pipe(delegate, Disposable$dispose(err));
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
          pipe(this[DelegatingSinkLike_delegate], Sink$notify(next));
        },
      },
    ),
  );
})();

export default Sink$throwIfEmptyMixin;
