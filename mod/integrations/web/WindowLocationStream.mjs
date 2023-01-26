/// <reference types="./WindowLocationStream.d.ts" />
import { DispatcherLike_dispatch } from '../../scheduling.mjs';
import { WindowLocationStreamLike_canGoBack, WindowLocationStreamLike_goBack } from '../web.mjs';

const canGoBack = (stream) => stream[WindowLocationStreamLike_canGoBack];
const goBack = (stream) => {
    stream[WindowLocationStreamLike_goBack]();
    return stream;
};
const replace = (uri) => stream => {
    stream[DispatcherLike_dispatch](uri, { replace: true });
    return stream;
};

export { canGoBack, goBack, replace };
