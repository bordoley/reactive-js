import { EnumeratorLike, EnumeratorLike_hasCurrent } from "../../../ix.js";

const Enumerator_hasCurrent = (enumerator: EnumeratorLike): boolean =>
  enumerator[EnumeratorLike_hasCurrent];

export default Enumerator_hasCurrent;
