/// <reference types="./Optional.toSequence.d.ts" />

import { compose } from "../../../functions.js";
import ReadonlyArray_toSequence from "../../ReadonlyArray/__internal__/ReadonlyArray.toSequence.js";
import Optional_toReadonlyArray from "./Optional.toReadonlyArray.js";
const Optional_toSequence = () => compose(Optional_toReadonlyArray(), ReadonlyArray_toSequence());
export default Optional_toSequence;
