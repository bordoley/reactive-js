import HigherOrderObservable_encodeUtf8 from "../../HigherOrderObservable/__internal__/HigherOrderObservable.encodeUtf8.js";
import { ObservableContainer } from "../../containers.js";
import Observable_defer from "./Observable.defer.js";
import Observable_map from "./Observable.map.js";

const Observable_encodeUtf8: ObservableContainer.TypeClass["encodeUtf8"] =
  /*@__PURE__*/ HigherOrderObservable_encodeUtf8<ObservableContainer.Type>(
    Observable_defer,
    Observable_map,
  );

export default Observable_encodeUtf8;
