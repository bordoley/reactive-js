import { EnumeratorLike, EnumeratorLike_hasCurrent } from "../../../util.js";

const Enumerator_hasCurrent = (enumerator: EnumeratorLike): boolean =>
  enumerator[EnumeratorLike_hasCurrent];

export default Enumerator_hasCurrent;
