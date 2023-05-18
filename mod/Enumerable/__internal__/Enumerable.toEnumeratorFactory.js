/// <reference types="./Enumerable.toEnumeratorFactory.d.ts" />

import { composeLazy } from "../../functions.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";
const Enumerable_toEnumeratorFactory = () => composeLazy(Enumerable_enumerate());
export default Enumerable_toEnumeratorFactory;
