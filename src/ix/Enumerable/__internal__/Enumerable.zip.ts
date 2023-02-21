import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Zip } from "../../../containers.js";
import ReadonlyArray_every from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.every.js";
import ReadonlyArray_forEach from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.forEach.js";
import ReadonlyArray_map from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { none, pipe } from "../../../functions.js";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
} from "../../../ix.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Enumerator_getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerator_hasCurrent from "../../Enumerator/__internal__/Enumerator.hasCurrent.js";
import Source_move from "../../Source/__internal__/Source.move.js";
import MutableEnumerator_mixin from "../../__internal__/MutableEnumerator/MutableEnumerator.mixin.js";
import { MutableEnumeratorLike } from "../../__internal__/ix.internal.js";
import Enumerable_create from "./Enumerable.create.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";

const Enumerable_zip: Zip<EnumerableLike>["zip"] = /*@__PURE__*/ (() => {
  const moveAll = (enumerators: readonly EnumeratorLike[]) => {
    for (const enumerator of enumerators) {
      Source_move(enumerator);
    }
  };

  const allHaveCurrent = (enumerators: readonly EnumeratorLike[]) =>
    pipe(enumerators, ReadonlyArray_every(Enumerator_hasCurrent));

  const typedMutableEnumeratorMixin =
    MutableEnumerator_mixin<readonly unknown[]>();

  const ZipEnumerator_enumerators = Symbol("ZipEnumerator_enumerators");
  type TProperties = {
    readonly [ZipEnumerator_enumerators]: readonly EnumeratorLike[];
  };

  const createZipEnumerator = createInstanceFactory(
    mix(
      include(Disposable_mixin, typedMutableEnumeratorMixin),
      function ZipEnumerator(
        instance: Pick<
          EnumeratorLike<readonly unknown[]>,
          typeof SourceLike_move
        > &
          Mutable<TProperties>,
        enumerators: readonly EnumeratorLike[],
      ): EnumeratorLike<readonly unknown[]> {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);

        instance[ZipEnumerator_enumerators] = enumerators;

        return instance;
      },
      props<TProperties>({
        [ZipEnumerator_enumerators]: none,
      }),
      {
        [SourceLike_move](
          this: TProperties & MutableEnumeratorLike<readonly unknown[]>,
        ) {
          if (!Disposable_isDisposed(this)) {
            const { [ZipEnumerator_enumerators]: enumerators } = this;
            moveAll(enumerators);

            if (allHaveCurrent(enumerators)) {
              this[EnumeratorLike_current] = pipe(
                enumerators,
                ReadonlyArray_map(Enumerator_getCurrent),
              );
            } else {
              pipe(this, Disposable_dispose());
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
    pipe(enumerators, ReadonlyArray_forEach(Disposable_addTo(instance)));
    return instance;
  };

  return (...enumerables: readonly EnumerableLike[]): EnumerableLike<any> =>
    Enumerable_create(() =>
      pipe(
        enumerables,
        ReadonlyArray_map(Enumerable_enumerate()),
        zipEnumerators,
      ),
    );
})();

export default Enumerable_zip;
