import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Generate } from "../../../containers";
import { Factory, Updater, error, none, pipe } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
} from "../../../ix";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import MutableEnumerator_mixin from "../MutableEnumerator/MutableEnumerator.mixin";
import { MutableEnumeratorLike } from "../ix.internal";
import Enumerable_create from "./Enumerable.create";

const Enumerable_generate: Generate<EnumerableLike>["generate"] =
  /*@__PURE__*/ (<T>() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin<T>();

    type TProperties = { readonly f: Updater<T> };

    const createGenerateEnumerator = createInstanceFactory(
      mix(
        include(Disposable_mixin, typedMutableEnumeratorMixin),
        function GenerateEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            Mutable<TProperties>,
          f: Updater<T>,
          acc: T,
        ): EnumeratorLike<T> {
          init(Disposable_mixin, instance);
          init(typedMutableEnumeratorMixin, instance);

          instance.f = f;
          instance[EnumeratorLike_current] = acc;

          return instance;
        },
        props<TProperties>({ f: none }),
        {
          [SourceLike_move](this: TProperties & MutableEnumeratorLike<T>) {
            if (!Disposable_isDisposed(this)) {
              try {
                this[EnumeratorLike_current] = this.f(
                  this[EnumeratorLike_current],
                );
              } catch (e) {
                pipe(this, Disposable_dispose(error(e)));
              }
            }
          },
        },
      ),
    );

    return (generator: Updater<T>, initialValue: Factory<T>) =>
      Enumerable_create(() =>
        createGenerateEnumerator(generator, initialValue()),
      );
  })();

export default Enumerable_generate;
