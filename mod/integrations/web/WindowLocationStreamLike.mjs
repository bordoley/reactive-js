/// <reference types="./WindowLocationStreamLike.d.ts" />
import { l as DispatcherLike_dispatch } from '../../DisposableLike-f9476215.mjs';
import { WindowLocationStreamLike_goBack } from '../web.mjs';

const goBack = (stream) => {
    stream[WindowLocationStreamLike_goBack]();
    return stream;
};
const replaceWindowLocation = (uri) => stream => {
    stream[DispatcherLike_dispatch](uri, { replace: true });
    return stream;
};

export { goBack, replaceWindowLocation };
