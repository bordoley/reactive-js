/// <reference types="./Observable.encodeUtf8.d.ts" />

import { bindMethod, invoke, newInstance, pipe, } from "../../functions.js";
import { ObservableLike_observe } from "../../types.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_map from "./Observable.map.js";
const Observable_encodeUtf8 = (observable => Observable_createWithConfig(observer => {
    const textEncoder = newInstance(TextEncoder);
    pipe(observable, Observable_map(bindMethod(textEncoder, "encode")), invoke(ObservableLike_observe, observer));
}, observable));
export default Observable_encodeUtf8;
