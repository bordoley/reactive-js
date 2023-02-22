import { EncodeUtf8 } from "../../../containers.js";
import Container_encodeUtf8 from "../../../containers/Container/__internal__/Container.encodeUtf8.js";
import { ObservableLike } from "../../../rx.js";
import Observable_defer from "./Observable.defer.js";
import Observable_map from "./Observable.map.js";

const Observable_encodeUtf8: EncodeUtf8<ObservableLike>["encodeUtf8"] =
  /*@__PURE__*/ Container_encodeUtf8(Observable_defer, Observable_map);

export default Observable_encodeUtf8;
