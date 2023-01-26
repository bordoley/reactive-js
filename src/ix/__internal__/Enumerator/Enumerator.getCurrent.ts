import { EnumeratorLike_current } from "../../../ix";

const Enumerator$getCurrent = <T>(enumerator: {
  [EnumeratorLike_current]: T;
}): T => enumerator[EnumeratorLike_current];

export default Enumerator$getCurrent;
