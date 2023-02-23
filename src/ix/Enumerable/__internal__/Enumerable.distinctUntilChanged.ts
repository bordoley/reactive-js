import {
  DelegatingLike,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { DistinctUntilChanged } from "../../../containers.js";
import StatefulContainer_distinctUntilChanged from "../../../containers/StatefulContainer/__internal__/StatefulContainer.distinctUntilChanged.js";
import { Equality, error, none, pipe } from "../../../functions.js";
import {
  EnumerableLike,
  EnumeratorLike,
  SourceLike_move,
} from "../../../ix.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import DelegatingEnumerator_mixin from "../../Enumerator/__internal__/DelegatingEnumerator.mixin.js";
import DelegatingEnumerator_move from "../../Enumerator/__internal__/DelegatingEnumerator.move.js";
import Enumerator_getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerator_hasCurrent from "../../Enumerator/__internal__/Enumerator.hasCurrent.js";
import Enumerable_lift from "./Enumerable.lift.js";

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
      StatefulContainer_distinctUntilChanged<EnumerableLike, T>(
        Enumerable_lift,
      ),
    );
  })();

export default Enumerable_distinctUntilChanged;
