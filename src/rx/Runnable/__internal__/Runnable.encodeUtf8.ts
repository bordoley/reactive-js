import { EncodeUtf8 } from "../../../containers.js";
import Container_encodeUtf8 from "../../../containers/Container/__internal__/Container.encodeUtf8.js";
import { RunnableLike } from "../../../rx.js";
import Runnable_defer from "./Runnable.defer.js";
import Runnable_map from "./Runnable.map.js";

const Runnable_encodeUtf8: EncodeUtf8<RunnableLike>["encodeUtf8"] =
  /*@__PURE__*/ Container_encodeUtf8(Runnable_defer, Runnable_map);

export default Runnable_encodeUtf8;
