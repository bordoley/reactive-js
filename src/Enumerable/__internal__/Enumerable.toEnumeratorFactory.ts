import type * as Enumerable from "../../Enumerable.js";
import { composeLazy } from "../../functions.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";

const Enumerable_toEnumeratorFactory: Enumerable.Signature["toEnumeratorFactory"] =
  <T>() => composeLazy(Enumerable_enumerate<T>());

export default Enumerable_toEnumeratorFactory;
