import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { TakeWhile } from "../../../containers";
import StatefulContainerLike__takeWhile from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeWhile";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { Predicate, none, pipe } from "../../../functions";
import { EnumerableLike, EnumeratorLike, SourceLike_move } from "../../../ix";
import { dispose, isDisposed } from "../../../util/DisposableLike";
import DisposableLike__delegatingMixin from "../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin";
import DelegatingEnumeratorLike__mixin from "../DelegatingEnumeratorLike/DelegatingEnumeratorLike.mixin";
import DelegatingEnumeratorLike__move from "../DelegatingEnumeratorLike/DelegatingEnumeratorLike.move";
import getCurrent from "../EnumeratorLike/EnumeratorLike.getCurrent";
import { DelegatingEnumeratorLike } from "../ix.internal";
import liftT from "./EnumerableLike.liftT";

const EnumerableLike__takeWhile: TakeWhile<EnumerableLike>["takeWhile"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin<T>();

    type TProperties = {
      readonly predicate: Predicate<T>;
      readonly inclusive: boolean;
      done: boolean;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(
            DisposableLike__delegatingMixin,
            typedDelegatingEnumeratorMixin,
          ),
          function TakeWhileEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
            predicate: Predicate<T>,
            inclusive: boolean,
          ): EnumeratorLike<T> {
            init(DisposableLike__delegatingMixin, instance, delegate);
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

              if (this.done && !isDisposed(this)) {
                pipe(this, dispose());
              } else if (DelegatingEnumeratorLike__move(this)) {
                const current = getCurrent(this);

                try {
                  const satisfiesPredicate = predicate(current);

                  if (!satisfiesPredicate && inclusive) {
                    this.done = true;
                  } else if (!satisfiesPredicate) {
                    pipe(this, dispose());
                  }
                } catch (cause) {
                  pipe(this, dispose({ cause }));
                }
              }
            },
          },
        ),
      ),
      StatefulContainerLike__takeWhile<EnumerableLike, T, TInteractive>(liftT),
    );
  })();

export default EnumerableLike__takeWhile;
