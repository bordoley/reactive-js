import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../../collections.js";
import { Function1, none, partial, pipe } from "../../../functions.js";
import type * as Enumerable from "../../Enumerable.js";
import MutableEnumeratorMixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "../../__mixins__/MutableEnumeratorMixin.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_map: Enumerable.Signature["map"] = /*@__PURE__*/ (<
  TA,
  TB,
>() => {
  const MapEnumerator_delegate = Symbol("MapEnumerator_delegate");
  const MapEnumerator_selector = Symbol("MapEnumerator_selector");

  interface TProperties<TA, TB> {
    [MapEnumerator_delegate]: EnumeratorLike<TA>;
    [MapEnumerator_selector]: Function1<TA, TB>;
  }
  const createMapEnumerator = createInstanceFactory(
    mix(
      include(MutableEnumeratorMixin()),
      function MapEnumerator(
        instance: Pick<EnumeratorLike<TB>, typeof EnumeratorLike_move> &
          TProperties<TA, TB>,
        delegate: EnumeratorLike<TA>,
        mapper: Function1<TA, TB>,
      ): EnumeratorLike<TB> {
        init(MutableEnumeratorMixin<TB>(), instance);

        instance[MapEnumerator_delegate] = delegate;
        instance[MapEnumerator_selector] = mapper;

        return instance;
      },
      props<TProperties<TA, TB>>({
        [MapEnumerator_delegate]: none,
        [MapEnumerator_selector]: none,
      }),
      {
        [EnumeratorLike_move](
          this: TProperties<TA, TB> & MutableEnumeratorLike<TB>,
        ): boolean {
          if (this[MutableEnumeratorLike_reset]()) {
            return false;
          }

          const delegate = this[MapEnumerator_delegate];
          const delegateHasCurrent = delegate[EnumeratorLike_move]();

          if (delegateHasCurrent) {
            this[EnumeratorLike_current] = this[MapEnumerator_selector](
              delegate[EnumeratorLike_current],
            );
          }

          this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];

          return this[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );

  return (selector: Function1<TA, TB>) =>
    pipe(createMapEnumerator, partial(selector), Enumerable_lift);
})();

export default Enumerable_map;
