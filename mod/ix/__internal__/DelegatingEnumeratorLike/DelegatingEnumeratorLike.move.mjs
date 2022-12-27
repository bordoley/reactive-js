/// <reference types="./DelegatingEnumeratorLike.move.d.ts" />
import { DelegatingEnumerator_move_delegate } from '../ix.internal.mjs';

const move = (enumerator) => enumerator[DelegatingEnumerator_move_delegate]();

export { move as default };
