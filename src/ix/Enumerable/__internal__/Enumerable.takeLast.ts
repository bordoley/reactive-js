import {
  DelegatingLike,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { TakeLast } from "../../../containers";
import ReadonlyArray_toEnumerable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toEnumerable";
import StatefulContainer_takeLast from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeLast";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { getLength, pipe } from "../../../functions";
import { EnumerableLike, EnumeratorLike, SourceLike_move } from "../../../ix";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin";
import Enumerator_getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent";
import DelegatingEnumerator_mixin from "../../__internal__/DelegatingEnumerator/DelegatingEnumerator.mixin";
import DelegatingEnumerator_move from "../../__internal__/DelegatingEnumerator/DelegatingEnumerator.move";
import Enumerable_enumerate from "./Enumerable.enumerate";
import Enumerable_liftT from "./Enumerable.liftT";

const Enumerable_takeLast: TakeLast<EnumerableLike>["takeLast"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin<T>();

    const TakeLastEnumerator_maxCount = Symbol("TakeLastEnumerator_maxCount");
    const TakeLastEnumerator_isStarted = Symbol("TakeLastEnumerator_isStarted");
    type TProperties = {
      readonly [TakeLastEnumerator_maxCount]: number;
      [TakeLastEnumerator_isStarted]: boolean;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(Disposable_mixin, typedDelegatingEnumeratorMixin),
          function TakeLastEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
            maxCount: number,
          ): EnumeratorLike<T> {
            init(Disposable_mixin, instance);
            init(typedDelegatingEnumeratorMixin, instance, delegate);

            instance[TakeLastEnumerator_maxCount] = maxCount;
            instance[TakeLastEnumerator_isStarted] = false;

            pipe(instance, Disposable_add(delegate));

            return instance;
          },
          props<TProperties>({
            [TakeLastEnumerator_maxCount]: 0,
            [TakeLastEnumerator_isStarted]: false,
          }),
          {
            [SourceLike_move](
              this: TProperties &
                DelegatingLike<EnumeratorLike<T>> &
                EnumeratorLike<T>,
            ) {
              if (
                !Disposable_isDisposed(this) &&
                !this[TakeLastEnumerator_isStarted]
              ) {
                this[TakeLastEnumerator_isStarted] = true;

                const last: unknown[] = [];

                while (DelegatingEnumerator_move(this)) {
                  last.push(Enumerator_getCurrent(this));

                  if (getLength(last) > this[TakeLastEnumerator_maxCount]) {
                    last.shift();
                  }
                }

                const enumerator = pipe(
                  last,
                  ReadonlyArray_toEnumerable(),
                  Enumerable_enumerate(),
                  Disposable_bindTo(this),
                );
                init(typedDelegatingEnumeratorMixin, this, enumerator);
              }

              DelegatingEnumerator_move(this);
            },
          },
        ),
      ),
      StatefulContainer_takeLast<EnumerableLike, T, TInteractive>(
        Enumerable_liftT,
      ),
    );
  })();

export default Enumerable_takeLast;
