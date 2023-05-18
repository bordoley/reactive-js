import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import type * as Enumerator from "../../Enumerator.js";
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
import { Function1, none } from "../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../types.js";
import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "./MutableEnumerator.mixin.js";

const Enumerator_map: Enumerator.Signature["map"] = /*@__PURE__*/ (<
  TA,
  TB,
>() => {
  const createMapEnumerator = createInstanceFactory(
    mix(
      include(
        MutableEnumerator_mixin(),
        Delegating_mixin(),
        Disposable_delegatingMixin,
      ),
      function MapEnumerator(
        instance: Pick<EnumeratorLike<TB>, typeof EnumeratorLike_move> &
          MappingLike<TA, TB>,
        delegate: EnumeratorLike<TA>,
        mapper: Function1<TA, TB>,
      ): EnumeratorLike<TB> {
        init(MutableEnumerator_mixin<TB>(), instance);
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_delegatingMixin, instance, delegate);

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

          if (delegateHasCurrent) {
            this[EnumeratorLike_current] = this[MappingLike_selector](
              delegate[EnumeratorLike_current],
            );
          }

          return delegateHasCurrent;
        },
      },
    ),
  );

  return (selector: Function1<TA, TB>) => (delegate: EnumeratorLike<TA>) =>
    createMapEnumerator(delegate, selector);
})();

export default Enumerator_map;
