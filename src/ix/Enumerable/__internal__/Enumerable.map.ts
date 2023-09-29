import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Function1, error, none, partial, pipe } from "../../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../../ix.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Disposable_mixin from "../../../utils/Disposable/__internal__/Disposable.mixin.js";
import type * as Enumerable from "../../Enumerable.js";
import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";
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
      include(MutableEnumerator_mixin(), Disposable_mixin),
      function MapEnumerator(
        instance: Pick<EnumeratorLike<TB>, typeof EnumeratorLike_move> &
          TProperties<TA, TB>,
        delegate: EnumeratorLike<TA>,
        mapper: Function1<TA, TB>,
      ): EnumeratorLike<TB> {
        init(MutableEnumerator_mixin<TB>(), instance);
        init(Disposable_mixin, instance);

        pipe(instance, Disposable.add(delegate));

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

          try {
            if (delegateHasCurrent) {
              this[EnumeratorLike_current] = this[MapEnumerator_selector](
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
