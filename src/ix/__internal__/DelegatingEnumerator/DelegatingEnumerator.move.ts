import { DelegatingEnumerator_move_delegate } from "../ix.internal";

const DelegatingEnumerator$move = (enumerator: {
  [DelegatingEnumerator_move_delegate](): boolean;
}): boolean => enumerator[DelegatingEnumerator_move_delegate]();

export default DelegatingEnumerator$move;
