import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { TakeWhile } from "../../../containers";
import StatefulContainer_takeWhile from "../../../containers/__internal__/StatefulContainer/StatefulContainer.takeWhile";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { Predicate, error, none, pipe } from "../../../functions";
import { EnumerableLike, EnumeratorLike, SourceLike_move } from "../../../ix";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import DelegatingEnumerator_mixin from "../DelegatingEnumerator/DelegatingEnumerator.mixin";
import DelegatingEnumerator_move from "../DelegatingEnumerator/DelegatingEnumerator.move";
import getCurrent from "../Enumerator/Enumerator.getCurrent";
import { DelegatingEnumeratorLike } from "../ix.internal";
import Enumerable_liftT from "./Enumerable.liftT";

const Enumerable_takeWhile: TakeWhile<EnumerableLike>["takeWhile"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin<T>();

    type TProperties = {
      readonly predicate: Predicate<T>;
      readonly inclusive: boolean;
      done: boolean;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(Disposable_delegatingMixin, typedDelegatingEnumeratorMixin),
          function TakeWhileEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
            predicate: Predicate<T>,
            inclusive: boolean,
          ): EnumeratorLike<T> {
            init(Disposable_delegatingMixin, instance, delegate);
            init(typedDelegatingEnumeratorMixin, instance, delegate);

            instance.predicate = predicate;
            instance.inclusive = inclusive;

            return instance;
          },
          props<TProperties>({
            predicate: none,
            inclusive: false,
            done: false,
          }),
          {
            [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
              const { inclusive, predicate } = this;

              if (this.done && !Disposable_isDisposed(this)) {
                pipe(this, Disposable_dispose());
              } else if (DelegatingEnumerator_move(this)) {
                const current = getCurrent(this);

                try {
                  const satisfiesPredicate = predicate(current);

                  if (!satisfiesPredicate && inclusive) {
                    this.done = true;
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
