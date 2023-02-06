import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { TakeFirst } from "../../../containers";
import StatefulContainer_takeFirst from "../../../containers/__internal__/StatefulContainer/StatefulContainer.takeFirst";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { EnumerableLike, EnumeratorLike, SourceLike_move } from "../../../ix";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import DelegatingEnumerator_mixin from "../DelegatingEnumerator/DelegatingEnumerator.mixin";
import DelegatingEnumerator_move from "../DelegatingEnumerator/DelegatingEnumerator.move";
import { DelegatingEnumeratorLike } from "../ix.internal";
import Enumerable_liftT from "./Enumerable.liftT";

const Enumerable_takeFirst: TakeFirst<EnumerableLike>["takeFirst"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin<T>();

    const TakeFirstEnumerator_maxCount = Symbol("TakeFirstEnumerator_maxCount");
    const TakeFirstEnumerator_count = Symbol("TakeFirstEnumerator_count");
    type TProperties = {
      readonly [TakeFirstEnumerator_maxCount]: number;
      [TakeFirstEnumerator_count]: number;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(Disposable_delegatingMixin, typedDelegatingEnumeratorMixin),
          function TakeFirstEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
            maxCount: number,
          ): EnumeratorLike<T> {
            init(Disposable_delegatingMixin, instance, delegate);
            init(typedDelegatingEnumeratorMixin, instance, delegate);

            instance[TakeFirstEnumerator_maxCount] = maxCount;

            return instance;
          },
          props<TProperties>({
            [TakeFirstEnumerator_maxCount]: 0,
            [TakeFirstEnumerator_count]: 0,
          }),
          {
            [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
              if (
                this[TakeFirstEnumerator_count] <
                this[TakeFirstEnumerator_maxCount]
              ) {
                this[TakeFirstEnumerator_count]++;
                DelegatingEnumerator_move(this);
              } else {
                pipe(this, Disposable_dispose());
              }
            },
          },
        ),
      ),
      StatefulContainer_takeFirst<EnumerableLike, T, TInteractive>(
        Enumerable_liftT,
      ),
    );
  })();

export default Enumerable_takeFirst;
