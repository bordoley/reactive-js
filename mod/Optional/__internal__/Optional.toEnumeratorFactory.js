/// <reference types="./Optional.toEnumeratorFactory.d.ts" />

import { composeLazy } from "../../functions.js";
import Optional_enumerate from "./Optional.enumerate.js";
const Optional_toEnumeratorFactory = () => composeLazy(Optional_enumerate());
export default Optional_toEnumeratorFactory;
