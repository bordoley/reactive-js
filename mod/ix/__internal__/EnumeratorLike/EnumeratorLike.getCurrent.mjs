/// <reference types="./EnumeratorLike.getCurrent.d.ts" />
import { EnumeratorLike_current } from '../../../ix.mjs';

const getCurrent = (enumerator) => enumerator[EnumeratorLike_current];

export { getCurrent as default };
