import { EnumeratorLike_current } from "../../../ix";

const Enumerator_getCurrent = <T>(enumerator: {
  [EnumeratorLike_current]: T;
}): T => enumerator[EnumeratorLike_current];

export default Enumerator_getCurrent;
