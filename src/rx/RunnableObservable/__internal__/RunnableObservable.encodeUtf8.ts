import { EncodeUtf8, Map } from "../../../containers.js";
import Container_encodeUtf8 from "../../../containers/Container/__internal__/Container.encodeUtf8.js";
import { RunnableObservableLike } from "../../../rx.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import RunnableObservable_defer from "./RunnableObservable.defer.js";

const RunnableObservable_encodeUtf8: EncodeUtf8<RunnableObservableLike>["encodeUtf8"] =
  /*@__PURE__*/ Container_encodeUtf8(
    RunnableObservable_defer,
    Observable_map as Map<RunnableObservableLike>["map"],
  );

export default RunnableObservable_encodeUtf8;
