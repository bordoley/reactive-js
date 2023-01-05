import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Pairwise } from "../../../containers";
import { isSome, none, pipe, returns } from "../../../functions";
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
import EnumerableLike__lift from "./EnumerableLike.lift";

const EnumerableLike__pairwise: Pairwise<EnumerableLike>["pairwise"] =
  /*@__PURE__*/ (<T>() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin<[T, T]>();

    type TProperties = {
      readonly delegate: EnumeratorLike<T>;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(DisposableLike__delegatingMixin, typedMutableEnumeratorMixin),
          function PairwiseEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
          ): EnumeratorLike<readonly [T, T]> {
            init(DisposableLike__delegatingMixin, instance, delegate);
            init(typedMutableEnumeratorMixin, instance);

            instance.delegate = delegate;

            return instance;
          },
          props<TProperties>({
            delegate: none,
          }),
          {
            [SourceLike_move](
              this: TProperties & MutableEnumeratorLike<[T, T]>,
            ) {
              const { delegate } = this;

              const prev = EnumeratorLike__hasCurrent(this)
                ? EnumeratorLike__getCurrent(this)[1]
                : EnumeratorLike__move(delegate)
                ? EnumeratorLike__getCurrent(delegate)
                : none;

              if (isSome(prev) && EnumeratorLike__move(delegate)) {
                const current = EnumeratorLike__getCurrent(delegate);
                this[EnumeratorLike_current] = [prev, current];
              } else {
                pipe(this, DisposableLike__dispose());
              }
            },
          },
        ),
      ),
      EnumerableLike__lift,
      returns,
    );
  })();

export default EnumerableLike__pairwise;
