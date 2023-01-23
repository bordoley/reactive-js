import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ForEach } from "../../../containers";
import StatefulContainerLike__forEach from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.forEach";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { SideEffect1, error, none, pipe } from "../../../functions";
import { EnumerableLike, EnumeratorLike, SourceLike_move } from "../../../ix";
import DisposableLike__delegatingMixin from "../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DelegatingEnumeratorLike__mixin from "../DelegatingEnumeratorLike/DelegatingEnumeratorLike.mixin";
import DelegatingEnumeratorLike__move from "../DelegatingEnumeratorLike/DelegatingEnumeratorLike.move";
import EnumeratorLike__getCurrent from "../EnumeratorLike/EnumeratorLike.getCurrent";
import { DelegatingEnumeratorLike } from "../ix.internal";
import EnumerableLike__liftT from "./EnumerableLike.liftT";

const EnumerableLike__forEach: ForEach<EnumerableLike>["forEach"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin<T>();

    type TProperties = {
      readonly effect: SideEffect1<T>;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(
            DisposableLike__delegatingMixin,
            typedDelegatingEnumeratorMixin,
          ),
          function forEachEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
            effect: SideEffect1<T>,
          ): EnumeratorLike<T> {
            init(DisposableLike__delegatingMixin, instance, delegate);
            init(typedDelegatingEnumeratorMixin, instance, delegate);

            instance.effect = effect;

            return instance;
          },
          props<TProperties>({ effect: none }),
          {
            [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
              if (DelegatingEnumeratorLike__move(this)) {
                try {
                  this.effect(EnumeratorLike__getCurrent(this));
                } catch (e) {
                  pipe(this, DisposableLike__dispose(error(e)));
                }
              }
            },
          },
        ),
      ),
      StatefulContainerLike__forEach<EnumerableLike, T, TInteractive>(
        EnumerableLike__liftT,
      ),
    );
  })();

export default EnumerableLike__forEach;
