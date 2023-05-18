import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { returns } from "../../functions.js";
import EnumeratorFactory_map from "./EnumeratorFactory.map.js";

const EnumeratorFactory_mapTo: EnumeratorFactory.Signature["mapTo"] = <T>(
  v: T,
) => EnumeratorFactory_map(returns(v));

export default EnumeratorFactory_mapTo;
