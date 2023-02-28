/// <reference types="./Enumerator.move.d.ts" />

import Source_move from "../../Source/__internal__/Source.move.js";
import Enumerator_hasCurrent from "./Enumerator.hasCurrent.js";
const Enumerator_move = (enumerator) => {
    Source_move(enumerator);
    return Enumerator_hasCurrent(enumerator);
};
export default Enumerator_move;
