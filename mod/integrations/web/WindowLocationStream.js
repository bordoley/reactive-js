/// <reference types="./WindowLocationStream.d.ts" />

import { DispatcherLike_dispatch } from "../../scheduling.js";
import { WindowLocationStreamLike_canGoBack, WindowLocationStreamLike_goBack, } from "../web.js";
export const canGoBack = (stream) => stream[WindowLocationStreamLike_canGoBack];
export const goBack = (stream) => {
    stream[WindowLocationStreamLike_goBack]();
    return stream;
};
export const replace = (uri) => stream => {
    stream[DispatcherLike_dispatch](uri, { replace: true });
    return stream;
};
