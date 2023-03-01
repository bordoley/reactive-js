import { EncodeUtf8, Map } from "../../../containers.js";
import Container_encodeUtf8 from "../../../containers/Container/__internal__/Container.encodeUtf8.js";
import { RunnableLike } from "../../../rx.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Runnable_defer from "./Runnable.defer.js";

const Runnable_encodeUtf8: EncodeUtf8<RunnableLike>["encodeUtf8"] =
  /*@__PURE__*/ Container_encodeUtf8(
    Runnable_defer,
    Observable_map as Map<RunnableLike>["map"],
  );

export default Runnable_encodeUtf8;
