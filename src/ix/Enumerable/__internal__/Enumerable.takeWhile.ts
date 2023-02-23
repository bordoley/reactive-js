import {
  DelegatingLike,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { TakeWhile } from "../../../containers.js";
import StatefulContainer_takeWhile from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeWhile.js";
import { Predicate, error, none, pipe } from "../../../functions.js";
import {
  EnumerableLike,
  EnumeratorLike,
  SourceLike_move,
} from "../../../ix.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import DelegatingEnumerator_mixin from "../../Enumerator/__internal__/DelegatingEnumerator.mixin.js";
import DelegatingEnumerator_move from "../../Enumerator/__internal__/DelegatingEnumerator.move.js";
import getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerable_lift from "./Enumerable.lift.js";

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
      StatefulContainer_takeWhile<EnumerableLike, T>(Enumerable_lift),
    );
  })();

export default Enumerable_takeWhile;
