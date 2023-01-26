import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Zip } from "../../../containers";
import ReadonlyArray$every from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.every";
import ReadonlyArray$forEach from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.forEach";
import ReadonlyArray$map from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.map";
import { none, pipe } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
} from "../../../ix";
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Enumerator$getCurrent from "../Enumerator/Enumerator.getCurrent";
import Enumerator$hasCurrent from "../Enumerator/Enumerator.hasCurrent";
import MutableEnumerator$mixin from "../MutableEnumerator/MutableEnumerator.mixin";
import Source$move from "../Source/Source.move";
import { MutableEnumeratorLike } from "../ix.internal";
import Enumerable$create from "./Enumerable.create";
import Enumerable$enumerate from "./Enumerable.enumerate";

const Enumerable$zip: Zip<EnumerableLike>["zip"] = /*@__PURE__*/ (() => {
  const moveAll = (enumerators: readonly EnumeratorLike[]) => {
    for (const enumerator of enumerators) {
      Source$move(enumerator);
    }
  };

  const allHaveCurrent = (enumerators: readonly EnumeratorLike[]) =>
    pipe(enumerators, ReadonlyArray$every(Enumerator$hasCurrent));

  const typedMutableEnumeratorMixin =
    MutableEnumerator$mixin<readonly unknown[]>();

  type TProperties = {
    readonly enumerators: readonly EnumeratorLike[];
  };

  const createZipEnumerator = createInstanceFactory(
    mix(
      include(Disposable$mixin, typedMutableEnumeratorMixin),
      function ZipEnumerator(
        instance: Pick<
          EnumeratorLike<readonly unknown[]>,
          typeof SourceLike_move
        > &
          Mutable<TProperties>,
        enumerators: readonly EnumeratorLike[],
      ): EnumeratorLike<readonly unknown[]> {
        init(Disposable$mixin, instance);
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
          if (!Disposable$isDisposed(this)) {
            const { enumerators } = this;
            moveAll(enumerators);

            if (allHaveCurrent(enumerators)) {
              this[EnumeratorLike_current] = pipe(
                enumerators,
                ReadonlyArray$map(Enumerator$getCurrent),
              );
            } else {
              pipe(this, Disposable$dispose());
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
    pipe(enumerators, ReadonlyArray$forEach(Disposable$addTo(instance)));
    return instance;
  };

  return (...enumerables: readonly EnumerableLike[]): EnumerableLike<any> =>
    Enumerable$create(() =>
      pipe(
        enumerables,
        ReadonlyArray$map(Enumerable$enumerate()),
        zipEnumerators,
      ),
    );
})();

export default Enumerable$zip;
