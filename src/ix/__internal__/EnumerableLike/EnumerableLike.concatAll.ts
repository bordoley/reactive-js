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
import DisposableLike__add from "../../../util/__internal__/DisposableLike/DisposableLike.add";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__disposed from "../../../util/__internal__/DisposableLike/DisposableLike.disposed";
import DisposableLike__isDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import DisposableRefLike__mixin from "../../../util/__internal__/DisposableRefLike/DisposableRefLike.mixin";
import MutableRefLike__get from "../../../util/__internal__/MutableRefLike/MutableRefLike.get";
import MutableRefLike__set from "../../../util/__internal__/MutableRefLike/MutableRefLike.set";
import { MutableRefLike } from "../../../util/__internal__/util.internal";
import EnumeratorLike__getCurrent from "../EnumeratorLike/EnumeratorLike.getCurrent";
import EnumeratorLike__move from "../EnumeratorLike/EnumeratorLike.move";
import MutableEnumeratorLike__mixin from "../MutableEnumeratorLike/MutableEnumeratorLike.mixin";
import { MutableEnumeratorLike } from "../ix.internal";
import EnumerableLike__enumerate from "./EnumerableLike.enumerate";
import EnumerableLike__lift from "./EnumerableLike.lift";

const EnumerableLike__concatAll: ConcatAll<EnumerableLike>["concatAll"] =
  /*@__PURE__*/ (<T>() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin<T>();
    const typedDisposableRefMixin =
      DisposableRefLike__mixin<EnumeratorLike<T>>();

    type TProperties = {
      readonly delegate: EnumeratorLike<EnumerableLike<T>>;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(
            DisposableLike__mixin,
            typedDisposableRefMixin,
            typedMutableEnumeratorMixin,
          ),
          function ConcatAllEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<EnumerableLike<T>>,
          ): EnumeratorLike<T> {
            init(DisposableLike__mixin, instance);
            init(typedDisposableRefMixin, instance, DisposableLike__disposed);
            init(typedMutableEnumeratorMixin, instance);

            instance.delegate = delegate;

            pipe(instance, DisposableLike__add(delegate));

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
              const innerEnumerator = MutableRefLike__get(this);

              if (
                DisposableLike__isDisposed(innerEnumerator) &&
                EnumeratorLike__move(delegate)
              ) {
                const next = pipe(
                  delegate,
                  EnumeratorLike__getCurrent,
                  EnumerableLike__enumerate(),
                );
                pipe(this, MutableRefLike__set(next));
              }

              while (
                !pipe(this, MutableRefLike__get, DisposableLike__isDisposed)
              ) {
                const innerEnumerator = MutableRefLike__get(this);
                if (EnumeratorLike__move(innerEnumerator)) {
                  this[EnumeratorLike_current] =
                    EnumeratorLike__getCurrent(innerEnumerator);
                  break;
                } else if (EnumeratorLike__move(delegate)) {
                  const next = pipe(
                    delegate,
                    EnumeratorLike__getCurrent,
                    EnumerableLike__enumerate(),
                  );
                  pipe(this, MutableRefLike__set(next));
                } else {
                  pipe(this, DisposableLike__dispose());
                }
              }
            },
          },
        ),
      ),
      EnumerableLike__lift,
      returns,
    );
  })();

export default EnumerableLike__concatAll;
