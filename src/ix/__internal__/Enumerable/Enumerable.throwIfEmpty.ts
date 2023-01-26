import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ThrowIfEmpty } from "../../../containers";
import StatefulContainer$throwIfEmpty from "../../../containers/__internal__/StatefulContainer/StatefulContainer.throwIfEmpty";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { Factory, Optional, error, none, pipe } from "../../../functions";
import { EnumerableLike, EnumeratorLike, SourceLike_move } from "../../../ix";
import Disposable$addIgnoringChildErrors from "../../../util/__internal__/Disposable/Disposable.addIgnoringChildErrors";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable$onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import DelegatingEnumerator$mixin from "../DelegatingEnumerator/DelegatingEnumerator.mixin";
import DelegatingEnumerator$move from "../DelegatingEnumerator/DelegatingEnumerator.move";
import { DelegatingEnumeratorLike } from "../ix.internal";
import Enumerable$liftT from "./Enumerable.liftT";

const Enumerable$throwIfEmpty: ThrowIfEmpty<EnumerableLike>["throwIfEmpty"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator$mixin<T>();

    type TProperties = {
      isEmpty: boolean;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(Disposable$mixin, typedDelegatingEnumeratorMixin),
          function TakeWhileEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              TProperties,
            delegate: EnumeratorLike,
            factory: Factory<unknown>,
          ): EnumeratorLike<T> {
            init(Disposable$mixin, instance);
            init(typedDelegatingEnumeratorMixin, instance, delegate);

            instance.isEmpty = true;

            pipe(instance, Disposable$addIgnoringChildErrors(delegate));
            pipe(
              delegate,
              Disposable$onComplete(() => {
                let err: Optional<Error> = none;

                if (instance.isEmpty) {
                  try {
                    err = error(factory());
                  } catch (e) {
                    err = error(e);
                  }
                }

                pipe(instance, Disposable$dispose(err));
              }),
            );

            return instance;
          },
          props<TProperties>({
            isEmpty: true,
          }),
          {
            [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
              if (DelegatingEnumerator$move(this)) {
                this.isEmpty = false;
              }
            },
          },
        ),
      ),
      StatefulContainer$throwIfEmpty<EnumerableLike, T, TInteractive>(
        Enumerable$liftT,
      ),
    );
  })();

export default Enumerable$throwIfEmpty;
