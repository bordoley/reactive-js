/// <reference types="./Observable.encodeUtf8.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../concurrent.js";
import { bindMethod, invoke, newInstance, pipe, returns, } from "../../../functions.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_map from "./Observable.map.js";
const Observable_encodeUtf8 = 
/*@__PURE__*/ returns((observable) => Observable_createWithConfig(observer => {
    const textEncoder = newInstance(TextEncoder);
    pipe(observable, Observable_map(bindMethod(textEncoder, "encode")), invoke(ObservableLike_observe, observer));
}, {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isPure]: observable[ObservableLike_isPure],
    [ObservableLike_isRunnable]: observable[ObservableLike_isRunnable],
}));
export default Observable_encodeUtf8;
