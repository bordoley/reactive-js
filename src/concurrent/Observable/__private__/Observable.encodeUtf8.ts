import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { ObservableLike, ObservableLike_observe } from "../../../concurrent.js";
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
        [ComputationLike_isDeferred]: true,
        [ComputationLike_isPure]: observable[ComputationLike_isPure],
        [ComputationLike_isSynchronous]:
          observable[ComputationLike_isSynchronous],
      },
    ),
  ) as Observable.Signature["encodeUtf8"];

export default Observable_encodeUtf8;
