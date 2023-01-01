import { EnumeratorLike_current } from "../../../ix";

const EnumeratorLike__getCurrent = <T>(enumerator: {
  [EnumeratorLike_current]: T;
}): T => enumerator[EnumeratorLike_current];

export default EnumeratorLike__getCurrent;
