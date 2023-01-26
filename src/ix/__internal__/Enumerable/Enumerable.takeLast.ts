import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { TakeLast } from "../../../containers";
import ReadonlyArray$toEnumerable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toEnumerable";
import StatefulContainer$takeLast from "../../../containers/__internal__/StatefulContainer/StatefulContainer.takeLast";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { getLength, pipe } from "../../../functions";
import { EnumerableLike, EnumeratorLike, SourceLike_move } from "../../../ix";
import Disposable$add from "../../../util/__internal__/Disposable/Disposable.add";
import Disposable$bindTo from "../../../util/__internal__/Disposable/Disposable.bindTo";
import Disposable$isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import DelegatingEnumerator$mixin from "../DelegatingEnumerator/DelegatingEnumerator.mixin";
import DelegatingEnumerator$move from "../DelegatingEnumerator/DelegatingEnumerator.move";
import Enumerator$getCurrent from "../Enumerator/Enumerator.getCurrent";
import { DelegatingEnumeratorLike } from "../ix.internal";
import Enumerable$enumerate from "./Enumerable.enumerate";
import Enumerable$liftT from "./Enumerable.liftT";

const Enumerable$takeLast: TakeLast<EnumerableLike>["takeLast"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator$mixin<T>();

    type TProperties = {
      readonly maxCount: number;
      isStarted: boolean;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(Disposable$mixin, typedDelegatingEnumeratorMixin),
          function TakeLastEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
            maxCount: number,
          ): EnumeratorLike<T> {
            init(Disposable$mixin, instance);
            init(typedDelegatingEnumeratorMixin, instance, delegate);

            instance.maxCount = maxCount;
            instance.isStarted = false;

            pipe(instance, Disposable$add(delegate));

            return instance;
          },
          props<TProperties>({
            maxCount: 0,
            isStarted: false,
          }),
          {
            [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
              if (!Disposable$isDisposed(this) && !this.isStarted) {
                this.isStarted = true;

                const last: unknown[] = [];

                while (DelegatingEnumerator$move(this)) {
                  last.push(Enumerator$getCurrent(this));

                  if (getLength(last) > this.maxCount) {
                    last.shift();
                  }
                }

                const enumerator = pipe(
                  last,
                  ReadonlyArray$toEnumerable(),
                  Enumerable$enumerate(),
                  Disposable$bindTo(this),
                );
                init(typedDelegatingEnumeratorMixin, this, enumerator);
              }

              DelegatingEnumerator$move(this);
            },
          },
        ),
      ),
      StatefulContainer$takeLast<EnumerableLike, T, TInteractive>(
        Enumerable$liftT,
      ),
    );
  })();

export default Enumerable$takeLast;
