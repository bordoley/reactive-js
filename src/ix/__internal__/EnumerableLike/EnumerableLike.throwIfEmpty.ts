import { Factory } from "react";
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
import { Optional, none, pipe } from "../../../functions";
import { EnumerableLike, EnumeratorLike, SourceLike_move } from "../../../ix";
import { Exception } from "../../../util";
import {
  addIgnoringChildErrors,
  dispose,
  onComplete,
} from "../../../util/DisposableLike";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
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

            pipe(instance, addIgnoringChildErrors(delegate));
            pipe(
              delegate,
              onComplete(() => {
                let error: Optional<Exception> = none;

                if (instance.isEmpty) {
                  let cause: unknown = none;
                  try {
                    cause = factory();
                  } catch (e) {
                    cause = e;
                  }

                  error = { cause };
                }

                pipe(instance, dispose(error));
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
