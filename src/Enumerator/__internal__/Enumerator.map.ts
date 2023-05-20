import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  MappingLike,
  MappingLike_selector,
} from "../../__internal__/types.js";
import { Function1, error, none, pipe } from "../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../types.js";
import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "./MutableEnumerator.mixin.js";

const Enumerator_map: <TA, TB>(
  selector: Function1<TA, TB>,
) => (delegate: EnumeratorLike<TA>) => EnumeratorLike<TB> = /*@__PURE__*/ (<
  TA,
  TB,
>() => {
  const createMapEnumerator = createInstanceFactory(
    mix(
      include(MutableEnumerator_mixin(), Delegating_mixin(), Disposable_mixin),
      function MapEnumerator(
        instance: Pick<EnumeratorLike<TB>, typeof EnumeratorLike_move> &
          MappingLike<TA, TB>,
        delegate: EnumeratorLike<TA>,
        mapper: Function1<TA, TB>,
      ): EnumeratorLike<TB> {
        init(MutableEnumerator_mixin<TB>(), instance);
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_mixin, instance);

        pipe(instance, Disposable_add(delegate));

        instance[MappingLike_selector] = mapper;

        return instance;
      },
      props<MappingLike<TA, TB>>({
        [MappingLike_selector]: none,
      }),
      {
        [EnumeratorLike_move](
          this: MappingLike<TA, TB> &
            MutableEnumeratorLike<TB> &
            DelegatingLike<EnumeratorLike<TA>>,
        ): boolean {
          this[MutableEnumeratorLike_reset]();

          const delegate = this[DelegatingLike_delegate];
          const delegateHasCurrent = delegate[EnumeratorLike_move]();

          try {
            if (delegateHasCurrent) {
              this[EnumeratorLike_current] = this[MappingLike_selector](
                delegate[EnumeratorLike_current],
              );
            }
          } catch (e) {
            // Catch errors thrown by the selector
            this[DisposableLike_dispose](error(e));
            this[MutableEnumeratorLike_reset]();
          }

          if (delegate[DisposableLike_isDisposed]) {
            this[DisposableLike_dispose]();
          }

          return this[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );

  return (selector: Function1<TA, TB>) => (delegate: EnumeratorLike<TA>) =>
    createMapEnumerator(delegate, selector);
})();

export default Enumerator_map;
