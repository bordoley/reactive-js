/// <reference types="./Enumerator.move.d.ts" />

import { EnumeratorLike_move } from "../../../rx.js";
import Enumerator_hasCurrent from "./Enumerator.hasCurrent.js";
const Enumerator_move = (enumerator) => {
    enumerator[EnumeratorLike_move]();
    return Enumerator_hasCurrent(enumerator);
};
export default Enumerator_move;
