import { EnumeratorLike_hasCurrent } from "../../../ix.js";

const Enumerator_hasCurrent = (enumerator: {
  [EnumeratorLike_hasCurrent]: boolean;
}): boolean => enumerator[EnumeratorLike_hasCurrent];

export default Enumerator_hasCurrent;
