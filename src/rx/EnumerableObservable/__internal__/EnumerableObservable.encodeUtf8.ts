import { EncodeUtf8, Map } from "../../../containers.js";
import Container_encodeUtf8 from "../../../containers/Container/__internal__/Container.encodeUtf8.js";
import { EnumerableObservableLike } from "../../../rx.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import EnumerableObservable_defer from "./EnumerableObservable.defer.js";

const EnumerableObservable_encodeUtf8: EncodeUtf8<EnumerableObservableLike>["encodeUtf8"] =
  /*@__PURE__*/ Container_encodeUtf8(
    EnumerableObservable_defer,
    Observable_map as Map<EnumerableObservableLike>["map"],
  );

export default EnumerableObservable_encodeUtf8;
