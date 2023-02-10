import {
  DelegatingLike,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { TakeWhile } from "../../../containers";
import StatefulContainer_takeWhile from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeWhile";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { Predicate, error, none, pipe } from "../../../functions";
import { EnumerableLike, EnumeratorLike, SourceLike_move } from "../../../ix";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed";
import getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent";
import DelegatingEnumerator_mixin from "../../__internal__/DelegatingEnumerator/DelegatingEnumerator.mixin";
import DelegatingEnumerator_move from "../../__internal__/DelegatingEnumerator/DelegatingEnumerator.move";
import Enumerable_liftT from "./Enumerable.liftT";

const Enumerable_takeWhile: TakeWhile<EnumerableLike>["takeWhile"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin<T>();

    const TakeWhileEnumerator_predicate = Symbol(
      "TakeWhileEnumerator_predicate",
    );
    const TakeWhileEnumerator_inclusive = Symbol(
      "TakeWhileEnumerator_inclusive",
    );
    const TakeWhileEnumerator_done = Symbol("TakeWhileEnumerator_done");

    type TProperties = {
      readonly [TakeWhileEnumerator_predicate]: Predicate<T>;
      readonly [TakeWhileEnumerator_inclusive]: boolean;
      [TakeWhileEnumerator_done]: boolean;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(Disposable_delegatingMixin(), typedDelegatingEnumeratorMixin),
          function TakeWhileEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
            predicate: Predicate<T>,
            inclusive: boolean,
          ): EnumeratorLike<T> {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(typedDelegatingEnumeratorMixin, instance, delegate);

            instance[TakeWhileEnumerator_predicate] = predicate;
            instance[TakeWhileEnumerator_inclusive] = inclusive;

            return instance;
          },
          props<TProperties>({
            [TakeWhileEnumerator_predicate]: none,
            [TakeWhileEnumerator_inclusive]: false,
            [TakeWhileEnumerator_done]: false,
          }),
          {
            [SourceLike_move](
              this: TProperties &
                DelegatingLike<EnumeratorLike<T>> &
                EnumeratorLike<T>,
            ) {
              const {
                [TakeWhileEnumerator_inclusive]: inclusive,
                [TakeWhileEnumerator_predicate]: predicate,
              } = this;

              if (
                this[TakeWhileEnumerator_done] &&
                !Disposable_isDisposed(this)
              ) {
                pipe(this, Disposable_dispose());
              } else if (DelegatingEnumerator_move(this)) {
                const current = getCurrent(this);

                try {
                  const satisfiesPredicate = predicate(current);

                  if (!satisfiesPredicate && inclusive) {
                    this[TakeWhileEnumerator_done] = true;
                  } else if (!satisfiesPredicate) {
                    pipe(this, Disposable_dispose());
                  }
                } catch (e) {
                  pipe(this, Disposable_dispose(error(e)));
                }
              }
            },
          },
        ),
      ),
      StatefulContainer_takeWhile<EnumerableLike, T, TInteractive>(
        Enumerable_liftT,
      ),
    );
  })();

export default Enumerable_takeWhile;
