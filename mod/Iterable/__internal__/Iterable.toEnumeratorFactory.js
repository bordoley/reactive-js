/// <reference types="./Iterable.toEnumeratorFactory.d.ts" />

import { composeLazy } from "../../functions.js";
import Iterable_enumerate from "./Iterable.enumerate.js";
const Iterable_toEnumeratorFactory = () => composeLazy(Iterable_enumerate());
export default Iterable_toEnumeratorFactory;
