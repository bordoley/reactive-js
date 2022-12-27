import { EnumeratorLike_current } from "../../../ix";

const getCurrent = <T>(enumerator: { [EnumeratorLike_current]: T }): T =>
  enumerator[EnumeratorLike_current];

export default getCurrent;
