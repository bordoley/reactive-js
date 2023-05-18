import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import EnumeratorFactory_empty from "./EnumeratorFactory.empty.js";

const EnumeratorFactory_ignoreElements: EnumeratorFactory.Signature["ignoreElements"] =
  () => EnumeratorFactory_empty;

export default EnumeratorFactory_ignoreElements;
