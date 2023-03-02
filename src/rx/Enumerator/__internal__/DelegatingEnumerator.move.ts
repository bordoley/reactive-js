import { DelegatingLike_delegate } from "../../../__internal__/mixins.js";
import {
  EnumeratorLike,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../../rx.js";

const DelegatingEnumerator_move = (enumerator: {
  [DelegatingLike_delegate]: EnumeratorLike;
}): boolean => {
  enumerator[DelegatingLike_delegate][EnumeratorLike_move]();
  return enumerator[DelegatingLike_delegate][EnumeratorLike_hasCurrent];
};

export default DelegatingEnumerator_move;
