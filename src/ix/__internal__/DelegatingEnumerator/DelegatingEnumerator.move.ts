import { DelegatingEnumerator_move_delegate } from "../ix.internal";

const DelegatingEnumerator_move = (enumerator: {
  [DelegatingEnumerator_move_delegate](): boolean;
}): boolean => enumerator[DelegatingEnumerator_move_delegate]();

export default DelegatingEnumerator_move;
