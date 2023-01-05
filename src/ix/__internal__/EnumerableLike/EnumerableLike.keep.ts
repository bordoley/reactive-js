import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Keep } from "../../../containers";
import StatefulContainerLike__keep from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.keep";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { Predicate, none, pipe } from "../../../functions";
import { EnumerableLike, EnumeratorLike, SourceLike_move } from "../../../ix";
import DisposableLike__delegatingMixin from "../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DelegatingEnumeratorLike__mixin from "../DelegatingEnumeratorLike/DelegatingEnumeratorLike.mixin";
import DelegatingEnumeratorLike__move from "../DelegatingEnumeratorLike/DelegatingEnumeratorLike.move";
import EnumeratorLike__getCurrent from "../EnumeratorLike/EnumeratorLike.getCurrent";
import { DelegatingEnumeratorLike } from "../ix.internal";
import EnumerableLike__liftT from "./EnumerableLike.liftT";

const EnumerableLike__keep: Keep<EnumerableLike>["keep"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin<T>();

  type TProperties = {
    readonly predicate: Predicate<T>;
  };

  return pipe(
    createInstanceFactory(
      mix(
        include(
          DisposableLike__delegatingMixin,
          typedDelegatingEnumeratorMixin,
        ),
        function KeepEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<T>,
          predicate: Predicate<T>,
        ): EnumeratorLike<T> {
          init(DisposableLike__delegatingMixin, instance, delegate);
          init(typedDelegatingEnumeratorMixin, instance, delegate);

          instance.predicate = predicate;

          return instance;
        },
        props<TProperties>({ predicate: none }),
        {
          [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
            const { predicate } = this;

            try {
              while (
                DelegatingEnumeratorLike__move(this) &&
                !predicate(EnumeratorLike__getCurrent(this))
              ) {}
            } catch (cause) {
              pipe(this, DisposableLike__dispose({ cause }));
            }
          },
        },
      ),
    ),
    StatefulContainerLike__keep<EnumerableLike, T, TInteractive>(
      EnumerableLike__liftT,
    ),
  );
})();

export default EnumerableLike__keep;
