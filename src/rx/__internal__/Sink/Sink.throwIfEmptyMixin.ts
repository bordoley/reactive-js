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
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable_onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import { DelegatingSinkLike_delegate } from "../rx.internal";

const Sink_throwIfEmptyMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  Factory<unknown>
> = /*@__PURE__*/ (<T>() => {
  const ThrowIfEmptySinkMixin_isEmpty = Symbol("ThrowIfEmptySinkMixin_isEmpty");

  type TProperties = {
    readonly [DelegatingSinkLike_delegate]: SinkLike<T>;
    [ThrowIfEmptySinkMixin_isEmpty]: boolean;
  };

  return returns(
    mix(
      include(Disposable_mixin),
      function ThrowIfEmptySinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        factory: Factory<unknown>,
      ): SinkLike<T> {
        init(Disposable_mixin, instance);

        instance[DelegatingSinkLike_delegate] = delegate;

        pipe(
          instance,
          Disposable_addTo(delegate),
          Disposable_onComplete(() => {
            let err: Optional<Error> = none;

            if (instance[ThrowIfEmptySinkMixin_isEmpty]) {
              try {
                err = error(factory());
              } catch (e) {
                err = error(e);
              }
            }

            pipe(delegate, Disposable_dispose(err));
          }),
        );

        return instance;
      },
      props<TProperties>({
        [DelegatingSinkLike_delegate]: none,
        [ThrowIfEmptySinkMixin_isEmpty]: true,
      }),
      {
        [SinkLike_notify](this: TProperties & DisposableLike, next: T) {
          this[ThrowIfEmptySinkMixin_isEmpty] = false;
          this[DelegatingSinkLike_delegate][SinkLike_notify](next);
        },
      },
    ),
  );
})();

export default Sink_throwIfEmptyMixin;
