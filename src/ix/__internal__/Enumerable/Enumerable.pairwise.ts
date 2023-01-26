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
import Disposable$delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Enumerator$getCurrent from "../Enumerator/Enumerator.getCurrent";
import Enumerator$hasCurrent from "../Enumerator/Enumerator.hasCurrent";
import Enumerator$move from "../Enumerator/Enumerator.move";
import MutableEnumerator$mixin from "../MutableEnumerator/MutableEnumerator.mixin";
import { MutableEnumeratorLike } from "../ix.internal";
import Enumerable$lift from "./Enumerable.lift";

const Enumerable$pairwise: Pairwise<EnumerableLike>["pairwise"] =
  /*@__PURE__*/ (<T>() => {
    const typedMutableEnumeratorMixin = MutableEnumerator$mixin<[T, T]>();

    type TProperties = {
      readonly delegate: EnumeratorLike<T>;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(Disposable$delegatingMixin, typedMutableEnumeratorMixin),
          function PairwiseEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
          ): EnumeratorLike<readonly [T, T]> {
            init(Disposable$delegatingMixin, instance, delegate);
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

              const prev = Enumerator$hasCurrent(this)
                ? Enumerator$getCurrent(this)[1]
                : Enumerator$move(delegate)
                ? Enumerator$getCurrent(delegate)
                : none;

              if (isSome(prev) && Enumerator$move(delegate)) {
                const current = Enumerator$getCurrent(delegate);
                this[EnumeratorLike_current] = [prev, current];
              } else {
                pipe(this, Disposable$dispose());
              }
            },
          },
        ),
      ),
      Enumerable$lift,
      returns,
    );
  })();

export default Enumerable$pairwise;
