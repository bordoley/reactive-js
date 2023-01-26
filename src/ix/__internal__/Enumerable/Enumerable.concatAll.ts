import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ConcatAll } from "../../../containers";
import { none, pipe, returns } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
} from "../../../ix";
import Disposable$add from "../../../util/__internal__/Disposable/Disposable.add";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$disposed from "../../../util/__internal__/Disposable/Disposable.disposed";
import Disposable$isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import DisposableRef$mixin from "../../../util/__internal__/DisposableRef/DisposableRef.mixin";
import MutableRef$get from "../../../util/__internal__/MutableRef/MutableRef.get";
import MutableRef$set from "../../../util/__internal__/MutableRef/MutableRef.set";
import { MutableRefLike } from "../../../util/__internal__/util.internal";
import Enumerator$getCurrent from "../Enumerator/Enumerator.getCurrent";
import Enumerator$move from "../Enumerator/Enumerator.move";
import MutableEnumerator$mixin from "../MutableEnumerator/MutableEnumerator.mixin";
import { MutableEnumeratorLike } from "../ix.internal";
import Enumerable$enumerate from "./Enumerable.enumerate";
import Enumerable$lift from "./Enumerable.lift";

const Enumerable$concatAll: ConcatAll<EnumerableLike>["concatAll"] =
  /*@__PURE__*/ (<T>() => {
    const typedMutableEnumeratorMixin = MutableEnumerator$mixin<T>();
    const typedDisposableRefMixin = DisposableRef$mixin<EnumeratorLike<T>>();

    type TProperties = {
      readonly delegate: EnumeratorLike<EnumerableLike<T>>;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(
            Disposable$mixin,
            typedDisposableRefMixin,
            typedMutableEnumeratorMixin,
          ),
          function ConcatAllEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<EnumerableLike<T>>,
          ): EnumeratorLike<T> {
            init(Disposable$mixin, instance);
            init(typedDisposableRefMixin, instance, Disposable$disposed);
            init(typedMutableEnumeratorMixin, instance);

            instance.delegate = delegate;

            pipe(instance, Disposable$add(delegate));

            return instance;
          },
          props<TProperties>({
            delegate: none,
          }),
          {
            [SourceLike_move](
              this: TProperties &
                MutableEnumeratorLike<T> &
                MutableRefLike<EnumeratorLike<T>>,
            ) {
              const { delegate } = this;
              const innerEnumerator = MutableRef$get(this);

              if (
                Disposable$isDisposed(innerEnumerator) &&
                Enumerator$move(delegate)
              ) {
                const next = pipe(
                  delegate,
                  Enumerator$getCurrent,
                  Enumerable$enumerate(),
                );
                pipe(this, MutableRef$set(next));
              }

              while (!pipe(this, MutableRef$get, Disposable$isDisposed)) {
                const innerEnumerator = MutableRef$get(this);
                if (Enumerator$move(innerEnumerator)) {
                  this[EnumeratorLike_current] =
                    Enumerator$getCurrent(innerEnumerator);
                  break;
                } else if (Enumerator$move(delegate)) {
                  const next = pipe(
                    delegate,
                    Enumerator$getCurrent,
                    Enumerable$enumerate(),
                  );
                  pipe(this, MutableRef$set(next));
                } else {
                  pipe(this, Disposable$dispose());
                }
              }
            },
          },
        ),
      ),
      Enumerable$lift,
      returns,
    );
  })();

export default Enumerable$concatAll;
