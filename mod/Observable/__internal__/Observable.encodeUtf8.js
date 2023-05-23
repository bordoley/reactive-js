/// <reference types="./Observable.encodeUtf8.d.ts" />

import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import { bindMethod, invoke, newInstance, pipe, returns, } from "../../functions.js";
import { EnumerableLike_enumerate, ObservableLike_observe, } from "../../types.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_map from "./Observable.map.js";
const Observable_encodeUtf8 = 
/*@__PURE__*/ returns(observable => Observable_isEnumerable(observable)
    ? Enumerable_create(() => {
        const textEncoder = newInstance(TextEncoder);
        return pipe(observable, Observable_map(bindMethod(textEncoder, "encode")), invoke(EnumerableLike_enumerate));
    })
    : Observable_createWithConfig(observer => {
        const textEncoder = newInstance(TextEncoder);
        pipe(observable, Observable_map(bindMethod(textEncoder, "encode")), invoke(ObservableLike_observe, observer));
    }, observable));
export default Observable_encodeUtf8;
