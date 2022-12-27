/// <reference types="./EnumeratorLike.hasCurrent.d.ts" />
import { EnumeratorLike_hasCurrent } from '../../../ix.mjs';

const hasCurrent = (enumerator) => enumerator[EnumeratorLike_hasCurrent];

export { hasCurrent as default };
