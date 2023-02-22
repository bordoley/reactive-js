/// <reference types="./Sequence.skipFirst.d.ts" />

import Sequence_seek from "./Sequence.seek.js";
const Sequence_skipFirst = (options = {}) => (seq) => () => {
    const { count = 1 } = options;
    return Sequence_seek(count)(seq)();
};
export default Sequence_skipFirst;
