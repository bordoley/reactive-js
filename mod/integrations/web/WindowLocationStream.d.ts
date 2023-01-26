import { Updater, Function1 } from "../../functions.js";
import { WindowLocationStreamLike, WindowLocationURI } from "../web.js";
declare const canGoBack: (stream: WindowLocationStreamLike) => boolean;
declare const goBack: (stream: WindowLocationStreamLike) => WindowLocationStreamLike;
declare const replace: (uri: Updater<WindowLocationURI> | WindowLocationURI) => Function1<WindowLocationStreamLike, WindowLocationStreamLike>;
export { canGoBack, goBack, replace };
