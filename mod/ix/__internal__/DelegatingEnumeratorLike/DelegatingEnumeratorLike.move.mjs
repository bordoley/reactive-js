/// <reference types="./DelegatingEnumeratorLike.move.d.ts" />
import { DelegatingEnumerator_move_delegate } from '../ix.internal.mjs';

const DelegatingEnumeratorLike__move = (enumerator) => enumerator[DelegatingEnumerator_move_delegate]();

export { DelegatingEnumeratorLike__move as default };
