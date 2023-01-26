import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { DistinctUntilChanged } from "../../../containers";
import StatefulContainer$distinctUntilChanged from "../../../containers/__internal__/StatefulContainer/StatefulContainer.distinctUntilChanged";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { Equality, error, none, pipe } from "../../../functions";
import { EnumerableLike, EnumeratorLike, SourceLike_move } from "../../../ix";
import Disposable$delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import DelegatingEnumerator$mixin from "../DelegatingEnumerator/DelegatingEnumerator.mixin";
import DelegatingEnumerator$move from "../DelegatingEnumerator/DelegatingEnumerator.move";
import Enumerator$getCurrent from "../Enumerator/Enumerator.getCurrent";
import Enumerator$hasCurrent from "../Enumerator/Enumerator.hasCurrent";
import { DelegatingEnumeratorLike } from "../ix.internal";
import Enumerable$liftT from "./Enumerable.liftT";

const Enumerable$distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator$mixin<T>();

    type TProperties = {
      readonly equality: Equality<T>;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(Disposable$delegatingMixin, typedDelegatingEnumeratorMixin),
          function DistinctUntilChanged(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
            equality: Equality<T>,
          ): EnumeratorLike<T> {
            init(Disposable$delegatingMixin, instance, delegate);
            init(typedDelegatingEnumeratorMixin, instance, delegate);

            instance.equality = equality;

            return instance;
          },
          props<TProperties>({ equality: none }),
          {
            [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
              const hadCurrent = Enumerator$hasCurrent(this);
              const prevCurrent = hadCurrent
                ? Enumerator$getCurrent(this)
                : none;

              try {
                while (DelegatingEnumerator$move(this)) {
                  if (
                    !hadCurrent ||
                    !this.equality(
                      prevCurrent as T,
                      Enumerator$getCurrent(this),
                    )
                  ) {
                    break;
                  }
                }
              } catch (e) {
                pipe(this, Disposable$dispose(error(e)));
              }
            },
          },
        ),
      ),
      StatefulContainer$distinctUntilChanged<EnumerableLike, T, TInteractive>(
        Enumerable$liftT,
      ),
    );
  })();

export default Enumerable$distinctUntilChanged;
