import { Function1, Updater } from "../../functions.js";
import { QueueableLike_push } from "../../util.js";
import {
  WindowLocationStreamLike,
  WindowLocationStreamLike_canGoBack,
  WindowLocationStreamLike_goBack,
  WindowLocationURI,
} from "../web.js";

export const canGoBack = (stream: WindowLocationStreamLike): boolean =>
  stream[WindowLocationStreamLike_canGoBack];

export const goBack = (
  stream: WindowLocationStreamLike,
): WindowLocationStreamLike => {
  stream[WindowLocationStreamLike_goBack]();
  return stream;
};

export const replace =
  (
    uri: Updater<WindowLocationURI> | WindowLocationURI,
  ): Function1<WindowLocationStreamLike, WindowLocationStreamLike> =>
  stream => {
    stream[QueueableLike_push](uri, { replace: true });
    return stream;
  };
