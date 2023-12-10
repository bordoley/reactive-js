import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../../collections.js";
import { none } from "../../../functions.js";
import MutableEnumeratorMixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "../../__mixins__/MutableEnumeratorMixin.js";

const ZipEnumerator_enumerators = Symbol("ZipEnumerator_enumerators");

interface TProperties {
  [ZipEnumerator_enumerators]: readonly EnumeratorLike<unknown>[];
}

const Enumerator_zipMany = /*@__PURE__*/ (() => {
  const Enumerator_getCurrent = <T>(enumerator: EnumeratorLike<T>): T =>
    enumerator[EnumeratorLike_current];

  const Enumerator_hasCurrent = (enumerator: EnumeratorLike): boolean =>
    enumerator[EnumeratorLike_hasCurrent];

  const allHaveCurrent = (enumerators: readonly EnumeratorLike[]) =>
    enumerators.every(Enumerator_hasCurrent);

  const moveAll = (enumerators: readonly EnumeratorLike[]) => {
    for (const enumerator of enumerators) {
      enumerator[EnumeratorLike_move]();
    }

    return allHaveCurrent(enumerators);
  };

  return createInstanceFactory(
    mix(
      include(MutableEnumeratorMixin()),
      function ZipEnumerator(
        instance: TProperties &
          Pick<EnumeratorLike<readonly unknown[]>, typeof EnumeratorLike_move>,
        enumerators: readonly EnumeratorLike<unknown>[],
      ): EnumeratorLike<readonly unknown[]> {
        init(MutableEnumeratorMixin<readonly unknown[]>(), instance);
        instance[ZipEnumerator_enumerators] = enumerators;

        return instance;
      },
      props<TProperties>({
        [ZipEnumerator_enumerators]: none,
      }),
      {
        [EnumeratorLike_move](
          this: MutableEnumeratorLike<readonly unknown[]> & TProperties,
        ): boolean {
          if (this[MutableEnumeratorLike_reset]()) {
            return false;
          }

          const enumerators = this[ZipEnumerator_enumerators];

          if (moveAll(enumerators)) {
            const next = enumerators.map(Enumerator_getCurrent);

            this[EnumeratorLike_current] = next;
          }

          this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];

          return this[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );
})();

export default Enumerator_zipMany;
