import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { SkipFirst } from "../../../containers";
import StatefulContainer$skipFirst from "../../../containers/__internal__/StatefulContainer/StatefulContainer.skipFirst";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { EnumerableLike, EnumeratorLike, SourceLike_move } from "../../../ix";
import Disposable$delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import DelegatingEnumerator$mixin from "../DelegatingEnumerator/DelegatingEnumerator.mixin";
import DelegatingEnumerator$move from "../DelegatingEnumerator/DelegatingEnumerator.move";
import { DelegatingEnumeratorLike } from "../ix.internal";
import Enumerable$liftT from "./Enumerable.liftT";

const Enumerable$skipFirst: SkipFirst<EnumerableLike>["skipFirst"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator$mixin<T>();

    type TProperties = {
      readonly skipCount: number;
      count: number;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(Disposable$delegatingMixin, typedDelegatingEnumeratorMixin),
          function SkipFirstEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
            skipCount: number,
          ): EnumeratorLike<T> {
            init(Disposable$delegatingMixin, instance, delegate);
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
                if (!DelegatingEnumerator$move(this)) {
                  break;
                }
              }

              this.count = skipCount;
              DelegatingEnumerator$move(this);
            },
          },
        ),
      ),
      StatefulContainer$skipFirst<EnumerableLike, T, TInteractive>(
        Enumerable$liftT,
      ),
    );
  })();

export default Enumerable$skipFirst;
