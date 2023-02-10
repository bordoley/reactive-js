import {
  DelegatingLike,
  DelegatingLike_delegate,
  createInstanceFactory,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ConcatAll } from "../../../containers";
import { pipe, returns } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
} from "../../../ix";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin";
import DisposableRef_mixin from "../../../util/__internal__/DisposableRef/__internal__/DisposableRef.mixin";
import MutableRef_get from "../../../util/__internal__/MutableRef/__internal__/MutableRef.get";
import MutableRef_set from "../../../util/__internal__/MutableRef/__internal__/MutableRef.set";
import { MutableRefLike } from "../../../util/__internal__/util.internal";
import Enumerator_getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent";
import Enumerator_move from "../../Enumerator/__internal__/Enumerator.move";
import MutableEnumerator_mixin from "../../__internal__/MutableEnumerator/MutableEnumerator.mixin";
import { MutableEnumeratorLike } from "../../__internal__/ix.internal";
import Enumerable_enumerate from "./Enumerable.enumerate";
import Enumerable_lift from "./Enumerable.lift";

const Enumerable_concatAll: ConcatAll<EnumerableLike>["concatAll"] =
  /*@__PURE__*/ (<T>() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin<T>();
    const typedDisposableRefMixin = DisposableRef_mixin<EnumeratorLike<T>>();

    return pipe(
      createInstanceFactory(
        mix(
          include(
            Disposable_mixin,
            typedDisposableRefMixin,
            typedMutableEnumeratorMixin,
            delegatingMixin(),
          ),
          function ConcatAllEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move>,
            delegate: EnumeratorLike<EnumerableLike<T>>,
          ): EnumeratorLike<T> {
            init(Disposable_mixin, instance);
            init(typedDisposableRefMixin, instance, Disposable_disposed);
            init(typedMutableEnumeratorMixin, instance);
            init(delegatingMixin(), instance, delegate);

            pipe(instance, Disposable_add(delegate));

            return instance;
          },
          props({}),
          {
            [SourceLike_move](
              this: DelegatingLike<EnumeratorLike<EnumerableLike<T>>> &
                MutableEnumeratorLike<T> &
                MutableRefLike<EnumeratorLike<T>>,
            ) {
              const { [DelegatingLike_delegate]: delegate } = this;
              const innerEnumerator = MutableRef_get(this);

              if (
                Disposable_isDisposed(innerEnumerator) &&
                Enumerator_move(delegate)
              ) {
                const next = pipe(
                  delegate,
                  Enumerator_getCurrent,
                  Enumerable_enumerate(),
                );
                pipe(this, MutableRef_set(next));
              }

              while (!pipe(this, MutableRef_get, Disposable_isDisposed)) {
                const innerEnumerator = MutableRef_get(this);
                if (Enumerator_move(innerEnumerator)) {
                  this[EnumeratorLike_current] =
                    Enumerator_getCurrent(innerEnumerator);
                  break;
                } else if (Enumerator_move(delegate)) {
                  const next = pipe(
                    delegate,
                    Enumerator_getCurrent,
                    Enumerable_enumerate(),
                  );
                  pipe(this, MutableRef_set(next));
                } else {
                  pipe(this, Disposable_dispose());
                }
              }
            },
          },
        ),
      ),
      Enumerable_lift,
      returns,
    );
  })();

export default Enumerable_concatAll;
