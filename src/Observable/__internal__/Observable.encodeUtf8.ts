import type * as Observable from "../../Observable.js";
import {
  Function1,
  bindMethod,
  invoke,
  newInstance,
  pipe,
  returns,
} from "../../functions.js";
import { ObservableLike, ObservableLike_observe } from "../../types.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_map from "./Observable.map.js";

const Observable_encodeUtf8: Observable.Signature["encodeUtf8"] =
  /*@__PURE__*/ returns(observable =>
    Observable_createWithConfig(observer => {
      const textEncoder = newInstance(TextEncoder);

      pipe(
        observable,
        Observable_map<string, Uint8Array>(
          bindMethod(textEncoder, "encode"),
        ) as Function1<ObservableLike<string>, ObservableLike<Uint8Array>>,
        invoke(ObservableLike_observe, observer),
      );
    }, observable),
  ) as Observable.Signature["encodeUtf8"];

export default Observable_encodeUtf8;
