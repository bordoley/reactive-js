import { EnumeratorLike_hasCurrent } from "../../../ix";

const Enumerator$hasCurrent = (enumerator: {
  [EnumeratorLike_hasCurrent]: boolean;
}): boolean => enumerator[EnumeratorLike_hasCurrent];

export default Enumerator$hasCurrent;
