import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { TakeLast } from "../../../containers";
import ReadonlyArrayLike__toEnumerable from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toEnumerable";
import StatefulContainerLike__takeLast from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeLast";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { getLength, pipe } from "../../../functions";
import { EnumerableLike, EnumeratorLike, SourceLike_move } from "../../../ix";
import { add, bindTo, isDisposed } from "../../../util/DisposableLike";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import { getCurrent } from "../../EnumeratorLike";
import DelegatingEnumeratorLike__mixin from "../DelegatingEnumeratorLike/DelegatingEnumeratorLike.mixin";
import DelegatingEnumeratorLike__move from "../DelegatingEnumeratorLike/DelegatingEnumeratorLike.move";
import { DelegatingEnumeratorLike } from "../ix.internal";
import EnumerableLike__enumerate from "./EnumerableLike.enumerate";
import EnumerableLike__liftT from "./EnumerableLike.liftT";

const EnumerableLike__takeLast: TakeLast<EnumerableLike>["takeLast"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin<T>();

    type TProperties = {
      readonly maxCount: number;
      isStarted: boolean;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(DisposableLike__mixin, typedDelegatingEnumeratorMixin),
          function TakeLastEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
            maxCount: number,
          ): EnumeratorLike<T> {
            init(DisposableLike__mixin, instance);
            init(typedDelegatingEnumeratorMixin, instance, delegate);

            instance.maxCount = maxCount;
            instance.isStarted = false;

            pipe(instance, add(delegate));

            return instance;
          },
          props<TProperties>({
            maxCount: 0,
            isStarted: false,
          }),
          {
            [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
              if (!isDisposed(this) && !this.isStarted) {
                this.isStarted = true;

                const last: unknown[] = [];

                while (DelegatingEnumeratorLike__move(this)) {
                  last.push(getCurrent(this));

                  if (getLength(last) > this.maxCount) {
                    last.shift();
                  }
                }

                const enumerator = pipe(
                  last,
                  ReadonlyArrayLike__toEnumerable(),
                  EnumerableLike__enumerate(),
                  bindTo(this),
                );
                init(typedDelegatingEnumeratorMixin, this, enumerator);
              }

              DelegatingEnumeratorLike__move(this);
            },
          },
        ),
      ),
      StatefulContainerLike__takeLast<EnumerableLike, T, TInteractive>(
        EnumerableLike__liftT,
      ),
    );
  })();

export default EnumerableLike__takeLast;
