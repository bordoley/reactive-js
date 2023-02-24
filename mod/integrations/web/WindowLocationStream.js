/// <reference types="./WindowLocationStream.d.ts" />

import { QueueableLike_push } from "../../util.js";
import { WindowLocationStreamLike_canGoBack, WindowLocationStreamLike_goBack, } from "../web.js";
export const canGoBack = (stream) => stream[WindowLocationStreamLike_canGoBack];
export const goBack = (stream) => {
    stream[WindowLocationStreamLike_goBack]();
    return stream;
};
export const replace = (uri) => stream => {
    stream[QueueableLike_push](uri, { replace: true });
    return stream;
};
