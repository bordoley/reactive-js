import {
  DelegatingLike,
  DelegatingLike_delegate,
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
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import Enumerator_getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent";
import Enumerator_hasCurrent from "../../Enumerator/__internal__/Enumerator.hasCurrent";
import Enumerator_move from "../../Enumerator/__internal__/Enumerator.move";
import MutableEnumerator_mixin from "../../__internal__/MutableEnumerator/MutableEnumerator.mixin";
import { MutableEnumeratorLike } from "../../__internal__/ix.internal";
import Enumerable_lift from "./Enumerable.lift";

const Enumerable_pairwise: Pairwise<EnumerableLike>["pairwise"] =
  /*@__PURE__*/ (<T>() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin<[T, T]>();

    return pipe(
      createInstanceFactory(
        mix(
          include(Disposable_delegatingMixin(), typedMutableEnumeratorMixin),
          function PairwiseEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move>,
            delegate: EnumeratorLike<T>,
          ): EnumeratorLike<readonly [T, T]> {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(typedMutableEnumeratorMixin, instance);

            return instance;
          },
          props({}),
          {
            [SourceLike_move](
              this: MutableEnumeratorLike<[T, T]> &
                DelegatingLike<EnumeratorLike<T>>,
            ) {
              const { [DelegatingLike_delegate]: delegate } = this;

              const prev = Enumerator_hasCurrent(this)
                ? Enumerator_getCurrent(this)[1]
                : Enumerator_move(delegate)
                ? Enumerator_getCurrent(delegate)
                : none;

              if (isSome(prev) && Enumerator_move(delegate)) {
                const current = Enumerator_getCurrent(delegate);
                this[EnumeratorLike_current] = [prev, current];
              } else {
                pipe(this, Disposable_dispose());
              }
            },
          },
        ),
      ),
      Enumerable_lift,
      returns,
    );
  })();

export default Enumerable_pairwise;
