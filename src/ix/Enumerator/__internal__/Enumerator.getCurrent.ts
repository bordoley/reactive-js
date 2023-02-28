import { EnumeratorLike, EnumeratorLike_current } from "../../../ix.js";

const Enumerator_getCurrent = <T>(enumerator: EnumeratorLike<T>): T =>
  enumerator[EnumeratorLike_current];

export default Enumerator_getCurrent;
