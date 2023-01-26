/// <reference types="./DelegatingEnumerator.move.d.ts" />
import { DelegatingEnumerator_move_delegate } from '../ix.internal.mjs';

const DelegatingEnumerator_move = (enumerator) => enumerator[DelegatingEnumerator_move_delegate]();

export { DelegatingEnumerator_move as default };
