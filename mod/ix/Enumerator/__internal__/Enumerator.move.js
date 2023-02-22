/// <reference types="./Enumerator.move.d.ts" />

import { EnumeratorLike_current, EnumeratorLike_hasCurrent, SourceLike_move, } from "../../../ix.js";
import Source_move from "../../Source/__internal__/Source.move.js";
import Enumerator_hasCurrent from "./Enumerator.hasCurrent.js";
const Enumerator_move = (enumerator) => {
    Source_move(enumerator);
    return Enumerator_hasCurrent(enumerator);
};
export default Enumerator_move;
