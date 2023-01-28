import {
  EnumeratorLike,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../../ix";
import { DelegatingEnumeratorLike_delegate } from "../ix.internal";

const DelegatingEnumerator_move = (enumerator: {
  [DelegatingEnumeratorLike_delegate]: EnumeratorLike;
}): boolean => {
  enumerator[DelegatingEnumeratorLike_delegate][SourceLike_move]();
  return enumerator[DelegatingEnumeratorLike_delegate][
    EnumeratorLike_hasCurrent
  ];
};

export default DelegatingEnumerator_move;
