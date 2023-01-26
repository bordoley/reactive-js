import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { SkipFirst } from "../../../containers";
import StatefulContainer_skipFirst from "../../../containers/__internal__/StatefulContainer/StatefulContainer.skipFirst";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { EnumerableLike, EnumeratorLike, SourceLike_move } from "../../../ix";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import DelegatingEnumerator_mixin from "../DelegatingEnumerator/DelegatingEnumerator.mixin";
import DelegatingEnumerator_move from "../DelegatingEnumerator/DelegatingEnumerator.move";
import { DelegatingEnumeratorLike } from "../ix.internal";
import Enumerable_liftT from "./Enumerable.liftT";

const Enumerable_skipFirst: SkipFirst<EnumerableLike>["skipFirst"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin<T>();

    type TProperties = {
      readonly skipCount: number;
      count: number;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(Disposable_delegatingMixin, typedDelegatingEnumeratorMixin),
          function SkipFirstEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
            skipCount: number,
          ): EnumeratorLike<T> {
            init(Disposable_delegatingMixin, instance, delegate);
            init(typedDelegatingEnumeratorMixin, instance, delegate);

            instance.skipCount = skipCount;
            instance.count = 0;

            return instance;
          },
          props<TProperties>({
            skipCount: 0,
            count: 0,
          }),
          {
            [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
              const { skipCount } = this;

              for (let { count } = this; count < skipCount; count++) {
                if (!DelegatingEnumerator_move(this)) {
                  break;
                }
              }

              this.count = skipCount;
              DelegatingEnumerator_move(this);
            },
          },
        ),
      ),
      StatefulContainer_skipFirst<EnumerableLike, T, TInteractive>(
        Enumerable_liftT,
      ),
    );
  })();

export default Enumerable_skipFirst;
