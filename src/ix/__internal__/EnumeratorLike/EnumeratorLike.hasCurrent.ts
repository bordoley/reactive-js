import { EnumeratorLike_hasCurrent } from "../../../ix";

const hasCurrent = (enumerator: {
  [EnumeratorLike_hasCurrent]: boolean;
}): boolean => enumerator[EnumeratorLike_hasCurrent];

export default hasCurrent;
