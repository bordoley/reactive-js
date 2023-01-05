import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { DistinctUntilChanged } from "../../../containers";
import StatefulContainerLike__distinctUntilChanged from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.distinctUntilChanged";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { Equality, none, pipe } from "../../../functions";
import { EnumerableLike, EnumeratorLike, SourceLike_move } from "../../../ix";
import DisposableLike__delegatingMixin from "../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DelegatingEnumeratorLike__mixin from "../DelegatingEnumeratorLike/DelegatingEnumeratorLike.mixin";
import DelegatingEnumeratorLike__move from "../DelegatingEnumeratorLike/DelegatingEnumeratorLike.move";
import EnumeratorLike__getCurrent from "../EnumeratorLike/EnumeratorLike.getCurrent";
import EnumeratorLike__hasCurrent from "../EnumeratorLike/EnumeratorLike.hasCurrent";
import { DelegatingEnumeratorLike } from "../ix.internal";
import EnumerableLike__liftT from "./EnumerableLike.liftT";

const EnumerableLike__distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin<T>();

    type TProperties = {
      readonly equality: Equality<T>;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(
            DisposableLike__delegatingMixin,
            typedDelegatingEnumeratorMixin,
          ),
          function DistinctUntilChanged(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
            equality: Equality<T>,
          ): EnumeratorLike<T> {
            init(DisposableLike__delegatingMixin, instance, delegate);
            init(typedDelegatingEnumeratorMixin, instance, delegate);

            instance.equality = equality;

            return instance;
          },
          props<TProperties>({ equality: none }),
          {
            [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
              const hadCurrent = EnumeratorLike__hasCurrent(this);
              const prevCurrent = hadCurrent
                ? EnumeratorLike__getCurrent(this)
                : none;

              try {
                while (DelegatingEnumeratorLike__move(this)) {
                  if (
                    !hadCurrent ||
                    !this.equality(
                      prevCurrent as T,
                      EnumeratorLike__getCurrent(this),
                    )
                  ) {
                    break;
                  }
                }
              } catch (cause) {
                pipe(this, DisposableLike__dispose({ cause }));
              }
            },
          },
        ),
      ),
      StatefulContainerLike__distinctUntilChanged<
        EnumerableLike,
        T,
        TInteractive
      >(EnumerableLike__liftT),
    );
  })();

export default EnumerableLike__distinctUntilChanged;
