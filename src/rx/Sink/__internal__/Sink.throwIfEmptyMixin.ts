import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mixin2,
  Mutable,
  delegatingMixin,
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
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete";

const Sink_throwIfEmptyMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  Factory<unknown>
> = /*@__PURE__*/ (<T>() => {
  const ThrowIfEmptySinkMixin_isEmpty = Symbol("ThrowIfEmptySinkMixin_isEmpty");

  type TProperties = {
    [ThrowIfEmptySinkMixin_isEmpty]: boolean;
  };

  return returns(
    mix(
      include(Disposable_mixin, delegatingMixin()),
      function ThrowIfEmptySinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        factory: Factory<unknown>,
      ): SinkLike<T> {
        init(Disposable_mixin, instance);
        init(delegatingMixin(), instance, delegate);

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
        [ThrowIfEmptySinkMixin_isEmpty]: true,
      }),
      {
        [SinkLike_notify](
          this: TProperties & DisposableLike & DelegatingLike<SinkLike<T>>,
          next: T,
        ) {
          this[ThrowIfEmptySinkMixin_isEmpty] = false;
          this[DelegatingLike_delegate][SinkLike_notify](next);
        },
      },
    ),
  );
})();

export default Sink_throwIfEmptyMixin;
