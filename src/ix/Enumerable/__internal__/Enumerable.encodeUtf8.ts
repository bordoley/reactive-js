import { EncodeUtf8, Map } from "../../../containers.js";
import Container_encodeUtf8 from "../../../containers/Container/__internal__/Container.encodeUtf8.js";
import { EnumerableLike } from "../../../ix.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Enumerable_defer from "./Enumerable.defer.js";

const Enumerable_encodeUtf8: EncodeUtf8<EnumerableLike>["encodeUtf8"] =
  /*@__PURE__*/ Container_encodeUtf8(
    Enumerable_defer,
    Observable_map as Map<EnumerableLike>["map"],
  );

export default Enumerable_encodeUtf8;
