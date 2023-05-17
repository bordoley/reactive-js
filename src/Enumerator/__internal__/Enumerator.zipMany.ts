import ReadonlyArray_everySatisfy from "../../ReadonlyArray/__internal__/ReadonlyArray.everySatisfy.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { ZipLike, ZipLike_enumerators } from "../../__internal__/types.js";
import { none, pipe } from "../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../types.js";
import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "./MutableEnumerator.mixin.js";

const Enumerator_zipMany = /*@__PURE__*/ (() => {
  const Enumerator_getCurrent = <T>(enumerator: EnumeratorLike<T>): T =>
    enumerator[EnumeratorLike_current];

  const Enumerator_hasCurrent = (enumerator: EnumeratorLike): boolean =>
    enumerator[EnumeratorLike_hasCurrent];

  const allHaveCurrent = (enumerators: readonly EnumeratorLike[]) =>
    pipe(enumerators, ReadonlyArray_everySatisfy(Enumerator_hasCurrent));

  const moveAll = (enumerators: readonly EnumeratorLike[]) => {
    for (const enumerator of enumerators) {
      enumerator[EnumeratorLike_move]();
    }

    return allHaveCurrent(enumerators);
  };

  return createInstanceFactory(
    mix(
      include(MutableEnumerator_mixin()),
      function ZipEnumerator(
        instance: ZipLike &
          Pick<EnumeratorLike<readonly unknown[]>, typeof EnumeratorLike_move>,
        enumerators: readonly EnumeratorLike<unknown>[],
      ): EnumeratorLike<readonly unknown[]> {
        init(MutableEnumerator_mixin<readonly unknown[]>(), instance);
        instance[ZipLike_enumerators] = enumerators;

        return instance;
      },
      props<ZipLike>({
        [ZipLike_enumerators]: none,
      }),
      {
        [EnumeratorLike_move](
          this: MutableEnumeratorLike<readonly unknown[]> & ZipLike,
        ): boolean {
          this[MutableEnumeratorLike_reset]();
          const enumerators = this[ZipLike_enumerators];

          if (moveAll(enumerators)) {
            const next = pipe(
              enumerators,
              ReadonlyArray_map(Enumerator_getCurrent),
            );

            this[EnumeratorLike_current] = next;
          }

          return this[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );
})();

export default Enumerator_zipMany;
