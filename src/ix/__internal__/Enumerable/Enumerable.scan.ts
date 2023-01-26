import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Scan } from "../../../containers";
import StatefulContainer_scan from "../../../containers/__internal__/StatefulContainer/StatefulContainer.scan";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import {
  Factory,
  Reducer,
  error,
  isSome,
  none,
  pipe,
} from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
} from "../../../ix";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Enumerator_getCurrent from "../Enumerator/Enumerator.getCurrent";
import Enumerator_hasCurrent from "../Enumerator/Enumerator.hasCurrent";
import Enumerator_move from "../Enumerator/Enumerator.move";
import MutableEnumerator_mixin from "../MutableEnumerator/MutableEnumerator.mixin";
import { MutableEnumeratorLike } from "../ix.internal";
import Enumerable_liftT from "./Enumerable.liftT";

const Enumerable_scan: Scan<EnumerableLike>["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const typedMutableEnumeratorMixin = MutableEnumerator_mixin<TAcc>();

  type TProperties = {
    readonly reducer: Reducer<T, TAcc>;
    readonly delegate: EnumeratorLike<T>;
  };

  return pipe(
    createInstanceFactory(
      mix(
        include(Disposable_delegatingMixin, typedMutableEnumeratorMixin),
        function ScanEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<T>,
          reducer: Reducer<T, TAcc>,
          initialValue: Factory<TAcc>,
        ): MutableEnumeratorLike<TAcc> {
          init(Disposable_delegatingMixin, instance, delegate);
          init(typedMutableEnumeratorMixin, instance);

          instance.delegate = delegate;
          instance.reducer = reducer;

          try {
            const acc = initialValue();
            instance[EnumeratorLike_current] = acc;
          } catch (e) {
            pipe(instance, Disposable_dispose(error(e)));
          }

          return instance;
        },
        props<TProperties>({ reducer: none, delegate: none }),
        {
          [SourceLike_move](this: TProperties & MutableEnumeratorLike<TAcc>) {
            const acc = Enumerator_hasCurrent(this)
              ? Enumerator_getCurrent(this)
              : none;

            const { delegate, reducer } = this;
            if (isSome(acc) && Enumerator_move(delegate)) {
              try {
                this[EnumeratorLike_current] = reducer(
                  acc,
                  Enumerator_getCurrent(delegate),
                );
              } catch (e) {
                pipe(this, Disposable_dispose(error(e)));
              }
            }
          },
        },
      ),
    ),
    StatefulContainer_scan<EnumerableLike, T, TAcc, TInteractive>(
      Enumerable_liftT,
    ),
  );
})();

export default Enumerable_scan;
