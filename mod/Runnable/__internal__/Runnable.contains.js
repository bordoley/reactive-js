/// <reference types="./Runnable.contains.d.ts" />

import { isEqualTo } from "../../functions.js";
import Runnable_someSatisfy from "./Runnable.someSatisfy.js";
const Runnable_contains = (value, options) => Runnable_someSatisfy(isEqualTo(value, options));
export default Runnable_contains;
