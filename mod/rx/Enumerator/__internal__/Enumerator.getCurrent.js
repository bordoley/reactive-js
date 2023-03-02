/// <reference types="./Enumerator.getCurrent.d.ts" />

import { EnumeratorLike_current } from "../../../rx.js";
const Enumerator_getCurrent = (enumerator) => enumerator[EnumeratorLike_current];
export default Enumerator_getCurrent;
