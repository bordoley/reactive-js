import { Function1, Updater } from "../../functions";
import { DispatcherLike_dispatch } from "../../scheduling";
import {
  WindowLocationStreamLike,
  WindowLocationStreamLike_canGoBack,
  WindowLocationStreamLike_goBack,
  WindowLocationURI,
} from "../web";

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
    stream[DispatcherLike_dispatch](uri, { replace: true });
    return stream;
  };
