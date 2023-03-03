/// <reference types="./Enumerator.forEach.d.ts" />

import Enumerator_getCurrent from "./Enumerator.getCurrent.js";
import Enumerator_move from "./Enumerator.move.js";
const Enumerator_forEach = (f) => enumerator => {
    while (Enumerator_move(enumerator)) {
        f(Enumerator_getCurrent(enumerator));
    }
    return enumerator;
};
export default Enumerator_forEach;
