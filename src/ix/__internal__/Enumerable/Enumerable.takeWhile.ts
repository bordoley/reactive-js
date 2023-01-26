import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { TakeWhile } from "../../../containers";
import StatefulContainer$takeWhile from "../../../containers/__internal__/StatefulContainer/StatefulContainer.takeWhile";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { Predicate, error, none, pipe } from "../../../functions";
import { EnumerableLike, EnumeratorLike, SourceLike_move } from "../../../ix";
import Disposable$delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import DelegatingEnumerator$mixin from "../DelegatingEnumerator/DelegatingEnumerator.mixin";
import DelegatingEnumerator$move from "../DelegatingEnumerator/DelegatingEnumerator.move";
import getCurrent from "../Enumerator/Enumerator.getCurrent";
import { DelegatingEnumeratorLike } from "../ix.internal";
import Enumerable$liftT from "./Enumerable.liftT";

const Enumerable$takeWhile: TakeWhile<EnumerableLike>["takeWhile"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator$mixin<T>();

    type TProperties = {
      readonly predicate: Predicate<T>;
      readonly inclusive: boolean;
      done: boolean;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(Disposable$delegatingMixin, typedDelegatingEnumeratorMixin),
          function TakeWhileEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
            predicate: Predicate<T>,
            inclusive: boolean,
          ): EnumeratorLike<T> {
            init(Disposable$delegatingMixin, instance, delegate);
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

              if (this.done && !Disposable$isDisposed(this)) {
                pipe(this, Disposable$dispose());
              } else if (DelegatingEnumerator$move(this)) {
                const current = getCurrent(this);

                try {
                  const satisfiesPredicate = predicate(current);

                  if (!satisfiesPredicate && inclusive) {
                    this.done = true;
                  } else if (!satisfiesPredicate) {
                    pipe(this, Disposable$dispose());
                  }
                } catch (e) {
                  pipe(this, Disposable$dispose(error(e)));
                }
              }
            },
          },
        ),
      ),
      StatefulContainer$takeWhile<EnumerableLike, T, TInteractive>(
        Enumerable$liftT,
      ),
    );
  })();

export default Enumerable$takeWhile;
