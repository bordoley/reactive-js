import { Function1, Updater } from "../../functions";
import { DispatcherLike_dispatch } from "../../scheduling";
import {
  WindowLocationStreamLike,
  WindowLocationStreamLike_goBack,
  WindowLocationURI,
} from "../web";

export const goBack = (
  stream: WindowLocationStreamLike,
): WindowLocationStreamLike => {
  stream[WindowLocationStreamLike_goBack]();
  return stream;
};

export const replaceWindowLocation =
  (
    uri: Updater<WindowLocationURI> | WindowLocationURI,
  ): Function1<WindowLocationStreamLike, WindowLocationStreamLike> =>
  stream => {
    stream[DispatcherLike_dispatch](uri, { replace: true });
    return stream;
  };
