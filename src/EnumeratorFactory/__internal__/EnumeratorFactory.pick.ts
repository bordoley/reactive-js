import Container_pick from "../../Container/__internal__/Container.pick.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import EnumeratorFactory_map from "./EnumeratorFactory.map.js";

const EnumeratorFactory_pick: EnumeratorFactory.Signature["pick"] =
  /*@__PURE__*/ Container_pick(EnumeratorFactory_map);

export default EnumeratorFactory_pick;
