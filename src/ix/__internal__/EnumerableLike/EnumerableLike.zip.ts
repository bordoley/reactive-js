import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Zip } from "../../../containers";
import ReadonlyArrayLike__every from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.every";
import ReadonlyArrayLike__forEach from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.forEach";
import ReadonlyArrayLike__map from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map";
import { none, pipe } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
} from "../../../ix";
import DisposableLike__addTo from "../../../util/__internal__/DisposableLike/DisposableLike.addTo";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__isDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import EnumeratorLike__getCurrent from "../EnumeratorLike/EnumeratorLike.getCurrent";
import EnumeratorLike__hasCurrent from "../EnumeratorLike/EnumeratorLike.hasCurrent";
import MutableEnumeratorLike__mixin from "../MutableEnumeratorLike/MutableEnumeratorLike.mixin";
import SourceLike__move from "../SourceLike/SourceLike.move";
import { MutableEnumeratorLike } from "../ix.internal";
import EnumerableLike__create from "./EnumerableLike.create";
import EnumerableLike__enumerate from "./EnumerableLike.enumerate";

const EnumerableLike__zip: Zip<EnumerableLike>["zip"] = /*@__PURE__*/ (() => {
  const moveAll = (enumerators: readonly EnumeratorLike[]) => {
    for (const enumerator of enumerators) {
      SourceLike__move(enumerator);
    }
  };

  const allHaveCurrent = (enumerators: readonly EnumeratorLike[]) =>
    pipe(enumerators, ReadonlyArrayLike__every(EnumeratorLike__hasCurrent));

  const typedMutableEnumeratorMixin =
    MutableEnumeratorLike__mixin<readonly unknown[]>();

  type TProperties = {
    readonly enumerators: readonly EnumeratorLike[];
  };

  const createZipEnumerator = createInstanceFactory(
    mix(
      include(DisposableLike__mixin, typedMutableEnumeratorMixin),
      function ZipEnumerator(
        instance: Pick<
          EnumeratorLike<readonly unknown[]>,
          typeof SourceLike_move
        > &
          Mutable<TProperties>,
        enumerators: readonly EnumeratorLike[],
      ): EnumeratorLike<readonly unknown[]> {
        init(DisposableLike__mixin, instance);
        init(typedMutableEnumeratorMixin, instance);

        instance.enumerators = enumerators;

        return instance;
      },
      props<TProperties>({
        enumerators: none,
      }),
      {
        [SourceLike_move](
          this: TProperties & MutableEnumeratorLike<readonly unknown[]>,
        ) {
          if (!DisposableLike__isDisposed(this)) {
            const { enumerators } = this;
            moveAll(enumerators);

            if (allHaveCurrent(enumerators)) {
              this[EnumeratorLike_current] = pipe(
                enumerators,
                ReadonlyArrayLike__map(EnumeratorLike__getCurrent),
              );
            } else {
              pipe(this, DisposableLike__dispose());
            }
          }
        },
      },
    ),
  );

  const zipEnumerators = (
    enumerators: readonly EnumeratorLike[],
  ): EnumeratorLike<readonly unknown[]> => {
    const instance = createZipEnumerator(enumerators);
    pipe(
      enumerators,
      ReadonlyArrayLike__forEach(DisposableLike__addTo(instance)),
    );
    return instance;
  };

  return (...enumerables: readonly EnumerableLike[]): EnumerableLike<any> =>
    EnumerableLike__create(() =>
      pipe(
        enumerables,
        ReadonlyArrayLike__map(EnumerableLike__enumerate()),
        zipEnumerators,
      ),
    );
})();

export default EnumerableLike__zip;
