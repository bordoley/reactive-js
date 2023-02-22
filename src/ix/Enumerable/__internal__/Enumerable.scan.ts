import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Scan } from "../../../containers.js";
import StatefulContainer_scan from "../../../containers/StatefulContainer/__internal__/StatefulContainer.scan.js";
import { TInteractive } from "../../../containers/__internal__/containers.internal.js";
import { Factory, Reducer, error, none, pipe } from "../../../functions.js";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../../ix.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import MutableEnumerator_mixin from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";
import { MutableEnumeratorLike } from "../../__internal__/ix.internal.js";
import Enumerable_liftT from "./Enumerable.liftT.js";

const Enumerable_scan: Scan<EnumerableLike>["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const typedMutableEnumeratorMixin = MutableEnumerator_mixin<TAcc>();

  const ScanEnumerator_reducer = Symbol("ScanEnumerator_reducer");

  type TProperties = {
    readonly [ScanEnumerator_reducer]: Reducer<T, TAcc>;
  };

  return pipe(
    createInstanceFactory(
      mix(
        include(
          Disposable_delegatingMixin(),
          typedMutableEnumeratorMixin,
          delegatingMixin(),
        ),
        function ScanEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<T>,
          reducer: Reducer<T, TAcc>,
          initialValue: Factory<TAcc>,
        ): MutableEnumeratorLike<TAcc> {
          init(Disposable_delegatingMixin(), instance, delegate);
          init(typedMutableEnumeratorMixin, instance);
          init(delegatingMixin(), instance, delegate);

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
        }),
        {
          [SourceLike_move](
            this: TProperties &
              MutableEnumeratorLike<TAcc> &
              DelegatingLike<EnumeratorLike<T>>,
          ) {
            const acc = this[EnumeratorLike_hasCurrent]
              ? this[EnumeratorLike_current]
              : none;

            const {
              [DelegatingLike_delegate]: delegate,
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
