import {
  DelegatingLike,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { TakeFirst } from "../../../containers.js";
import StatefulContainer_takeFirst from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeFirst.js";
import { pipe } from "../../../functions.js";
import {
  EnumerableLike,
  EnumeratorLike,
  SourceLike_move,
} from "../../../ix.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import DelegatingEnumerator_mixin from "../../Enumerator/__internal__/DelegatingEnumerator.mixin.js";
import DelegatingEnumerator_move from "../../Enumerator/__internal__/DelegatingEnumerator.move.js";
import Enumerable_liftT from "./Enumerable.liftT.js";

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
          include(Disposable_delegatingMixin(), typedDelegatingEnumeratorMixin),
          function TakeFirstEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
            maxCount: number,
          ): EnumeratorLike<T> {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(typedDelegatingEnumeratorMixin, instance, delegate);

            instance[TakeFirstEnumerator_maxCount] = maxCount;

            return instance;
          },
          props<TProperties>({
            [TakeFirstEnumerator_maxCount]: 0,
            [TakeFirstEnumerator_count]: 0,
          }),
          {
            [SourceLike_move](
              this: TProperties &
                DelegatingLike<EnumeratorLike<T>> &
                EnumeratorLike<T>,
            ) {
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
      StatefulContainer_takeFirst<EnumerableLike, T>(Enumerable_liftT),
    );
  })();

export default Enumerable_takeFirst;
