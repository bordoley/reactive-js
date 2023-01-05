import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Scan } from "../../../containers";
import StatefulContainerLike__scan from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.scan";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { Factory, Reducer, isSome, none, pipe } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
} from "../../../ix";
import DisposableLike__delegatingMixin from "../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import EnumeratorLike__getCurrent from "../EnumeratorLike/EnumeratorLike.getCurrent";
import EnumeratorLike__hasCurrent from "../EnumeratorLike/EnumeratorLike.hasCurrent";
import EnumeratorLike__move from "../EnumeratorLike/EnumeratorLike.move";
import MutableEnumeratorLike__mixin from "../MutableEnumeratorLike/MutableEnumeratorLike.mixin";
import { MutableEnumeratorLike } from "../ix.internal";
import EnumerableLike__liftT from "./EnumerableLike.liftT";

const EnumerableLike__scan: Scan<EnumerableLike>["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin<TAcc>();

  type TProperties = {
    readonly reducer: Reducer<T, TAcc>;
    readonly delegate: EnumeratorLike<T>;
  };

  return pipe(
    createInstanceFactory(
      mix(
        include(DisposableLike__delegatingMixin, typedMutableEnumeratorMixin),
        function ScanEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<T>,
          reducer: Reducer<T, TAcc>,
          initialValue: Factory<TAcc>,
        ): MutableEnumeratorLike<TAcc> {
          init(DisposableLike__delegatingMixin, instance, delegate);
          init(typedMutableEnumeratorMixin, instance);

          instance.delegate = delegate;
          instance.reducer = reducer;

          try {
            const acc = initialValue();
            instance[EnumeratorLike_current] = acc;
          } catch (cause) {
            pipe(instance, DisposableLike__dispose({ cause }));
          }

          return instance;
        },
        props<TProperties>({ reducer: none, delegate: none }),
        {
          [SourceLike_move](this: TProperties & MutableEnumeratorLike<TAcc>) {
            const acc = EnumeratorLike__hasCurrent(this)
              ? EnumeratorLike__getCurrent(this)
              : none;

            const { delegate, reducer } = this;
            if (isSome(acc) && EnumeratorLike__move(delegate)) {
              try {
                this[EnumeratorLike_current] = reducer(
                  acc,
                  EnumeratorLike__getCurrent(delegate),
                );
              } catch (cause) {
                pipe(this, DisposableLike__dispose({ cause }));
              }
            }
          },
        },
      ),
    ),
    StatefulContainerLike__scan<EnumerableLike, T, TAcc, TInteractive>(
      EnumerableLike__liftT,
    ),
  );
})();

export default EnumerableLike__scan;
