import { Updater, Function1 } from "../../functions.js";
import { WindowLocationStreamLike, WindowLocationURI } from "../web.js";
declare const goBack: (stream: WindowLocationStreamLike) => WindowLocationStreamLike;
declare const replaceWindowLocation: (uri: Updater<WindowLocationURI> | WindowLocationURI) => Function1<WindowLocationStreamLike, WindowLocationStreamLike>;
export { goBack, replaceWindowLocation };
