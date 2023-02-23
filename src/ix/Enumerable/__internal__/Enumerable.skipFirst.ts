import {
  DelegatingLike,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { SkipFirst } from "../../../containers.js";
import StatefulContainer_skipFirst from "../../../containers/StatefulContainer/__internal__/StatefulContainer.skipFirst.js";
import { pipe } from "../../../functions.js";
import {
  EnumerableLike,
  EnumeratorLike,
  SourceLike_move,
} from "../../../ix.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import DelegatingEnumerator_mixin from "../../Enumerator/__internal__/DelegatingEnumerator.mixin.js";
import DelegatingEnumerator_move from "../../Enumerator/__internal__/DelegatingEnumerator.move.js";
import Enumerable_liftT from "./Enumerable.liftT.js";

const Enumerable_skipFirst: SkipFirst<EnumerableLike>["skipFirst"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin<T>();

    const SkipFirstEnumerator_skipCount = Symbol(
      "SkipFirstEnumerator_skipCount",
    );
    const SkipFirstEnumerator_count = Symbol("SkipFirstEnumerator_count");

    type TProperties = {
      readonly [SkipFirstEnumerator_skipCount]: number;
      [SkipFirstEnumerator_count]: number;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(Disposable_delegatingMixin(), typedDelegatingEnumeratorMixin),
          function SkipFirstEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
            skipCount: number,
          ): EnumeratorLike<T> {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(typedDelegatingEnumeratorMixin, instance, delegate);

            instance[SkipFirstEnumerator_skipCount] = skipCount;
            instance[SkipFirstEnumerator_count] = 0;

            return instance;
          },
          props<TProperties>({
            [SkipFirstEnumerator_skipCount]: 0,
            [SkipFirstEnumerator_count]: 0,
          }),
          {
            [SourceLike_move](
              this: TProperties &
                DelegatingLike<EnumeratorLike<T>> &
                EnumeratorLike<T>,
            ) {
              const { [SkipFirstEnumerator_skipCount]: skipCount } = this;

              for (
                let { [SkipFirstEnumerator_count]: count } = this;
                count < skipCount;
                count++
              ) {
                if (!DelegatingEnumerator_move(this)) {
                  break;
                }
              }

              this[SkipFirstEnumerator_count] = skipCount;
              DelegatingEnumerator_move(this);
            },
          },
        ),
      ),
      StatefulContainer_skipFirst<EnumerableLike, T>(Enumerable_liftT),
    );
  })();

export default Enumerable_skipFirst;
