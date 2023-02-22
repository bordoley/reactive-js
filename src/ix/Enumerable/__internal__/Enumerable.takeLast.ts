import {
  DelegatingLike,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { TakeLast } from "../../../containers.js";
import ReadonlyArray_toEnumerable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toEnumerable.js";
import StatefulContainer_takeLast from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeLast.js";
import { TInteractive } from "../../../containers/__internal__/containers.internal.js";
import { getLength, pipe } from "../../../functions.js";
import {
  EnumerableLike,
  EnumeratorLike,
  SourceLike_move,
} from "../../../ix.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import DelegatingEnumerator_mixin from "../../Enumerator/__internal__/DelegatingEnumerator.mixin.js";
import DelegatingEnumerator_move from "../../Enumerator/__internal__/DelegatingEnumerator.move.js";
import Enumerator_getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";
import Enumerable_liftT from "./Enumerable.liftT.js";

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
