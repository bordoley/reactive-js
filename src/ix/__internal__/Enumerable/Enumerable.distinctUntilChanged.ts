import {
  DelegatingLike,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { DistinctUntilChanged } from "../../../containers";
import StatefulContainer_distinctUntilChanged from "../../../containers/__internal__/StatefulContainer/StatefulContainer.distinctUntilChanged";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { Equality, error, none, pipe } from "../../../functions";
import { EnumerableLike, EnumeratorLike, SourceLike_move } from "../../../ix";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import DelegatingEnumerator_mixin from "../DelegatingEnumerator/DelegatingEnumerator.mixin";
import DelegatingEnumerator_move from "../DelegatingEnumerator/DelegatingEnumerator.move";
import Enumerator_getCurrent from "../Enumerator/Enumerator.getCurrent";
import Enumerator_hasCurrent from "../Enumerator/Enumerator.hasCurrent";
import Enumerable_liftT from "./Enumerable.liftT";

const Enumerable_distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin<T>();

    const DistinctUntilChangedEnumerator_equality = Symbol(
      "DistinctUntilChangedEnumerator_equality",
    );

    type TProperties = {
      readonly [DistinctUntilChangedEnumerator_equality]: Equality<T>;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(Disposable_delegatingMixin(), typedDelegatingEnumeratorMixin),
          function DistinctUntilChangedEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
            equality: Equality<T>,
          ): EnumeratorLike<T> {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(typedDelegatingEnumeratorMixin, instance, delegate);

            instance[DistinctUntilChangedEnumerator_equality] = equality;

            return instance;
          },
          props<TProperties>({
            [DistinctUntilChangedEnumerator_equality]: none,
          }),
          {
            [SourceLike_move](
              this: TProperties &
                DelegatingLike<EnumeratorLike<T>> &
                EnumeratorLike<T>,
            ) {
              const hadCurrent = Enumerator_hasCurrent(this);
              const prevCurrent = hadCurrent
                ? Enumerator_getCurrent(this)
                : none;

              try {
                while (DelegatingEnumerator_move(this)) {
                  if (
                    !hadCurrent ||
                    !this[DistinctUntilChangedEnumerator_equality](
                      prevCurrent as T,
                      Enumerator_getCurrent(this),
                    )
                  ) {
                    break;
                  }
                }
              } catch (e) {
                pipe(this, Disposable_dispose(error(e)));
              }
            },
          },
        ),
      ),
      StatefulContainer_distinctUntilChanged<EnumerableLike, T, TInteractive>(
        Enumerable_liftT,
      ),
    );
  })();

export default Enumerable_distinctUntilChanged;
