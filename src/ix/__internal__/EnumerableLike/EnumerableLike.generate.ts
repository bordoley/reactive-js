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
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__isDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import MutableEnumeratorLike__mixin from "../MutableEnumeratorLike/MutableEnumeratorLike.mixin";
import { MutableEnumeratorLike } from "../ix.internal";
import EnumerableLike__create from "./EnumerableLike.create";

const EnumerableLike__generate: Generate<EnumerableLike>["generate"] =
  /*@__PURE__*/ (<T>() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin<T>();

    type TProperties = { readonly f: Updater<T> };

    const createGenerateEnumerator = createInstanceFactory(
      mix(
        include(DisposableLike__mixin, typedMutableEnumeratorMixin),
        function GenerateEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            Mutable<TProperties>,
          f: Updater<T>,
          acc: T,
        ): EnumeratorLike<T> {
          init(DisposableLike__mixin, instance);
          init(typedMutableEnumeratorMixin, instance);

          instance.f = f;
          instance[EnumeratorLike_current] = acc;

          return instance;
        },
        props<TProperties>({ f: none }),
        {
          [SourceLike_move](this: TProperties & MutableEnumeratorLike<T>) {
            if (!DisposableLike__isDisposed(this)) {
              try {
                this[EnumeratorLike_current] = this.f(
                  this[EnumeratorLike_current],
                );
              } catch (e) {
                pipe(this, DisposableLike__dispose(error(e)));
              }
            }
          },
        },
      ),
    );

    return (generator: Updater<T>, initialValue: Factory<T>) =>
      EnumerableLike__create(() =>
        createGenerateEnumerator(generator, initialValue()),
      );
  })();

export default EnumerableLike__generate;
