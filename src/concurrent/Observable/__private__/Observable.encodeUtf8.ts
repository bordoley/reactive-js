import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
} from "../../../concurrent.js";
import {
  bindMethod,
  invoke,
  newInstance,
  pipe,
  returns,
} from "../../../functions.js";
import type * as Observable from "../../Observable.js";

import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_map from "./Observable.map.js";

const Observable_encodeUtf8: Observable.Signature["encodeUtf8"] =
  /*@__PURE__*/ returns((observable: ObservableLike<string>) =>
    Observable_createWithConfig<Uint8Array>(
      observer => {
        const textEncoder = newInstance(TextEncoder);

        pipe(
          observable,
          Observable_map<string, Uint8Array>(bindMethod(textEncoder, "encode")),
          invoke(ObservableLike_observe, observer),
        );
      },
      {
        [ObservableLike_isDeferred]: true,
        [ObservableLike_isPure]: observable[ObservableLike_isPure],
        [ObservableLike_isRunnable]: observable[ObservableLike_isRunnable],
      },
    ),
  ) as Observable.Signature["encodeUtf8"];

export default Observable_encodeUtf8;
