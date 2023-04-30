import { EncodeUtf8, ObservableContainerLike } from "../../../rx.js";
import HigherOrderObservable_encodeUtf8 from "../../HigherOrderObservable/__internal__/HigherOrderObservable.encodeUtf8.js";
import Observable_defer from "./Observable.defer.js";
import Observable_map from "./Observable.map.js";

const Observable_encodeUtf8: EncodeUtf8<ObservableContainerLike>["encodeUtf8"] =
  /*@__PURE__*/ HigherOrderObservable_encodeUtf8<ObservableContainerLike>(
    Observable_defer,
    Observable_map,
  );

export default Observable_encodeUtf8;
