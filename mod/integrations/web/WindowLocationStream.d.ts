import { Function1, Updater } from "../../functions.js";
import { WindowLocationStreamLike, WindowLocationURI } from "../web.js";
export declare const canGoBack: (stream: WindowLocationStreamLike) => boolean;
export declare const goBack: (stream: WindowLocationStreamLike) => WindowLocationStreamLike;
export declare const replace: (uri: Updater<WindowLocationURI> | WindowLocationURI) => Function1<WindowLocationStreamLike, WindowLocationStreamLike>;
