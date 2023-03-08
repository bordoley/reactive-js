/// <reference types="./Sequence.first.d.ts" />

import { SequenceLike_data } from "../../../containers.js";
const Sequence_first = () => (seq) => { var _a; return (_a = seq()) === null || _a === void 0 ? void 0 : _a[SequenceLike_data]; };
export default Sequence_first;
