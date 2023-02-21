import {
  DelegatingLike,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ThrowIfEmpty } from "../../../containers.js";
import StatefulContainer_throwIfEmpty from "../../../containers/StatefulContainer/__internal__/StatefulContainer.throwIfEmpty.js";
import { TInteractive } from "../../../containers/__internal__/containers.internal.js";
import { Factory, Optional, error, none, pipe } from "../../../functions.js";
import {
  EnumerableLike,
  EnumeratorLike,
  SourceLike_move,
} from "../../../ix.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import DelegatingEnumerator_mixin from "../../__internal__/DelegatingEnumerator/DelegatingEnumerator.mixin.js";
import DelegatingEnumerator_move from "../../__internal__/DelegatingEnumerator/DelegatingEnumerator.move.js";
import Enumerable_liftT from "./Enumerable.liftT.js";

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
            [SourceLike_move](
              this: TProperties &
                DelegatingLike<EnumeratorLike<T>> &
                EnumeratorLike<T>,
            ) {
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
