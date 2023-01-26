import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { TakeFirst } from "../../../containers";
import StatefulContainer$takeFirst from "../../../containers/__internal__/StatefulContainer/StatefulContainer.takeFirst";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { EnumerableLike, EnumeratorLike, SourceLike_move } from "../../../ix";
import Disposable$delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import DelegatingEnumerator$mixin from "../DelegatingEnumerator/DelegatingEnumerator.mixin";
import DelegatingEnumerator$move from "../DelegatingEnumerator/DelegatingEnumerator.move";
import { DelegatingEnumeratorLike } from "../ix.internal";
import Enumerable$liftT from "./Enumerable.liftT";

const Enumerable$takeFirst: TakeFirst<EnumerableLike>["takeFirst"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator$mixin<T>();

    type TProperties = {
      readonly maxCount: number;
      count: number;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(Disposable$delegatingMixin, typedDelegatingEnumeratorMixin),
          function TakeFirstEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
            maxCount: number,
          ): EnumeratorLike<T> {
            init(Disposable$delegatingMixin, instance, delegate);
            init(typedDelegatingEnumeratorMixin, instance, delegate);

            instance.maxCount = maxCount;

            return instance;
          },
          props<TProperties>({
            maxCount: 0,
            count: 0,
          }),
          {
            [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
              if (this.count < this.maxCount) {
                this.count++;
                DelegatingEnumerator$move(this);
              } else {
                pipe(this, Disposable$dispose());
              }
            },
          },
        ),
      ),
      StatefulContainer$takeFirst<EnumerableLike, T, TInteractive>(
        Enumerable$liftT,
      ),
    );
  })();

export default Enumerable$takeFirst;
