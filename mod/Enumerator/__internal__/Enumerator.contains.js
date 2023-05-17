/// <reference types="./Enumerator.contains.d.ts" />

import { isEqualTo } from "../../functions.js";
import Enumerator_someSatisfy from "./Enumerator.someSatisfy.js";
const Enumerator_contains = (value, options) => Enumerator_someSatisfy(isEqualTo(value, options));
export default Enumerator_contains;
