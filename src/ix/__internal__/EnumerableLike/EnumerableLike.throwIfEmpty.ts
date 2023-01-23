import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ThrowIfEmpty } from "../../../containers";
import StatefulContainerLike__throwIfEmpty from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.throwIfEmpty";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { Factory, Optional, error, none, pipe } from "../../../functions";
import { EnumerableLike, EnumeratorLike, SourceLike_move } from "../../../ix";
import DisposableLike__addIgnoringChildErrors from "../../../util/__internal__/DisposableLike/DisposableLike.addIgnoringChildErrors";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import DisposableLike__onComplete from "../../../util/__internal__/DisposableLike/DisposableLike.onComplete";
import DelegatingEnumeratorLike__mixin from "../DelegatingEnumeratorLike/DelegatingEnumeratorLike.mixin";
import DelegatingEnumeratorLike__move from "../DelegatingEnumeratorLike/DelegatingEnumeratorLike.move";
import { DelegatingEnumeratorLike } from "../ix.internal";
import EnumerableLike__liftT from "./EnumerableLike.liftT";

const EnumerableLike__throwIfEmpty: ThrowIfEmpty<EnumerableLike>["throwIfEmpty"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin<T>();

    type TProperties = {
      isEmpty: boolean;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(DisposableLike__mixin, typedDelegatingEnumeratorMixin),
          function TakeWhileEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              TProperties,
            delegate: EnumeratorLike,
            factory: Factory<unknown>,
          ): EnumeratorLike<T> {
            init(DisposableLike__mixin, instance);
            init(typedDelegatingEnumeratorMixin, instance, delegate);

            instance.isEmpty = true;

            pipe(instance, DisposableLike__addIgnoringChildErrors(delegate));
            pipe(
              delegate,
              DisposableLike__onComplete(() => {
                let err: Optional<Error> = none;

                if (instance.isEmpty) {
                  try {
                    err = error(factory());
                  } catch (e) {
                    err = error(e);
                  }
                }

                pipe(instance, DisposableLike__dispose(err));
              }),
            );

            return instance;
          },
          props<TProperties>({
            isEmpty: true,
          }),
          {
            [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
              if (DelegatingEnumeratorLike__move(this)) {
                this.isEmpty = false;
              }
            },
          },
        ),
      ),
      StatefulContainerLike__throwIfEmpty<EnumerableLike, T, TInteractive>(
        EnumerableLike__liftT,
      ),
    );
  })();

export default EnumerableLike__throwIfEmpty;
