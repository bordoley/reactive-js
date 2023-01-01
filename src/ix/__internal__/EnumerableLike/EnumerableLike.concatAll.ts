import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { disposableRefMixin } from "../../../__internal__/util/DisposableRefLike";
import {
  MutableRefLike,
  getCurrentRef,
  setCurrentRef,
} from "../../../__internal__/util/MutableRefLike";
import { ConcatAll } from "../../../containers";
import { none, pipe, returns } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
} from "../../../ix";
import {
  add,
  dispose,
  disposed,
  isDisposed,
} from "../../../util/DisposableLike";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import { getCurrent, move } from "../../EnumeratorLike";
import MutableEnumeratorLike__mixin from "../MutableEnumeratorLike/MutableEnumeratorLike.mixin";
import { MutableEnumeratorLike } from "../ix.internal";
import EnumerableLike__enumerate from "./EnumerableLike.enumerate";
import EnumerableLike__lift from "./EnumerableLike.lift";

const EnumerableLike__concatAll: ConcatAll<EnumerableLike>["concatAll"] =
  /*@__PURE__*/ (<T>() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin<T>();
    const typedDisposableRefMixin = disposableRefMixin<EnumeratorLike<T>>();

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
            init(typedDisposableRefMixin, instance, disposed);
            init(typedMutableEnumeratorMixin, instance);

            instance.delegate = delegate;

            pipe(instance, add(delegate));

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
              const innerEnumerator = getCurrentRef(this);

              if (isDisposed(innerEnumerator) && move(delegate)) {
                const next = pipe(
                  delegate,
                  getCurrent,
                  EnumerableLike__enumerate(),
                );
                pipe(this, setCurrentRef(next));
              }

              while (!pipe(this, getCurrentRef, isDisposed)) {
                const innerEnumerator = getCurrentRef(this);
                if (move(innerEnumerator)) {
                  this[EnumeratorLike_current] = getCurrent(innerEnumerator);
                  break;
                } else if (move(delegate)) {
                  const next = pipe(
                    delegate,
                    getCurrent,
                    EnumerableLike__enumerate(),
                  );
                  pipe(this, setCurrentRef(next));
                } else {
                  pipe(this, dispose());
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
