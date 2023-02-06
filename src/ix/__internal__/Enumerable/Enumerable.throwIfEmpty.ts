import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ThrowIfEmpty } from "../../../containers";
import StatefulContainer_throwIfEmpty from "../../../containers/__internal__/StatefulContainer/StatefulContainer.throwIfEmpty";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { Factory, Optional, error, none, pipe } from "../../../functions";
import { EnumerableLike, EnumeratorLike, SourceLike_move } from "../../../ix";
import Disposable_addIgnoringChildErrors from "../../../util/__internal__/Disposable/Disposable.addIgnoringChildErrors";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable_onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import DelegatingEnumerator_mixin from "../DelegatingEnumerator/DelegatingEnumerator.mixin";
import DelegatingEnumerator_move from "../DelegatingEnumerator/DelegatingEnumerator.move";
import { DelegatingEnumeratorLike } from "../ix.internal";
import Enumerable_liftT from "./Enumerable.liftT";

const Enumerable_throwIfEmpty: ThrowIfEmpty<EnumerableLike>["throwIfEmpty"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin<T>();

    const ThrowIfEmptyEnumerator_isEmpty = Symbol("");
    type TProperties = {
      [ThrowIfEmptyEnumerator_isEmpty]: boolean;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(Disposable_mixin, typedDelegatingEnumeratorMixin),
          function ThrowIfEmptyEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              TProperties,
            delegate: EnumeratorLike,
            factory: Factory<unknown>,
          ): EnumeratorLike<T> {
            init(Disposable_mixin, instance);
            init(typedDelegatingEnumeratorMixin, instance, delegate);

            instance[ThrowIfEmptyEnumerator_isEmpty] = true;

            pipe(instance, Disposable_addIgnoringChildErrors(delegate));
            pipe(
              delegate,
              Disposable_onComplete(() => {
                let err: Optional<Error> = none;

                if (instance[ThrowIfEmptyEnumerator_isEmpty]) {
                  try {
                    err = error(factory());
                  } catch (e) {
                    err = error(e);
                  }
                }

                pipe(instance, Disposable_dispose(err));
              }),
            );

            return instance;
          },
          props<TProperties>({
            [ThrowIfEmptyEnumerator_isEmpty]: true,
          }),
          {
            [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
              if (DelegatingEnumerator_move(this)) {
                this[ThrowIfEmptyEnumerator_isEmpty] = false;
              }
            },
          },
        ),
      ),
      StatefulContainer_throwIfEmpty<EnumerableLike, T, TInteractive>(
        Enumerable_liftT,
      ),
    );
  })();

export default Enumerable_throwIfEmpty;
