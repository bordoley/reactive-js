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
import { Factory, Reducer, error, none, pipe } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../../ix";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import MutableEnumerator_mixin from "../MutableEnumerator/MutableEnumerator.mixin";
import { MutableEnumeratorLike } from "../ix.internal";
import Enumerable_liftT from "./Enumerable.liftT";

const Enumerable_scan: Scan<EnumerableLike>["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const typedMutableEnumeratorMixin = MutableEnumerator_mixin<TAcc>();

  const ScanEnumerator_reducer = Symbol("ScanEnumerator_reducer");
  const ScanEnumerator_delegate = Symbol("ScanEnumerator_delegate");

  type TProperties = {
    readonly [ScanEnumerator_reducer]: Reducer<T, TAcc>;
    readonly [ScanEnumerator_delegate]: EnumeratorLike<T>;
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

          instance[ScanEnumerator_delegate] = delegate;
          instance[ScanEnumerator_reducer] = reducer;

          try {
            const acc = initialValue();
            instance[EnumeratorLike_current] = acc;
          } catch (e) {
            pipe(instance, Disposable_dispose(error(e)));
          }

          return instance;
        },
        props<TProperties>({
          [ScanEnumerator_reducer]: none,
          [ScanEnumerator_delegate]: none,
        }),
        {
          [SourceLike_move](this: TProperties & MutableEnumeratorLike<TAcc>) {
            const acc = this[EnumeratorLike_hasCurrent]
              ? this[EnumeratorLike_current]
              : none;

            const {
              [ScanEnumerator_delegate]: delegate,
              [ScanEnumerator_reducer]: reducer,
            } = this;
            if (acc === none) {
              return;
            }

            delegate[SourceLike_move]();

            if (!delegate[EnumeratorLike_hasCurrent]) {
              return;
            }

            try {
              this[EnumeratorLike_current] = reducer(
                acc,
                delegate[EnumeratorLike_current],
              );
            } catch (e) {
              pipe(this, Disposable_dispose(error(e)));
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
