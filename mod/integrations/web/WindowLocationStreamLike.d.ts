import { Updater, Function1 } from "../../functions.mjs";
import { WindowLocationStreamLike, WindowLocationURI } from "../web.mjs";
declare const goBack: (stream: WindowLocationStreamLike) => WindowLocationStreamLike;
declare const replaceWindowLocation: (uri: Updater<WindowLocationURI> | WindowLocationURI) => Function1<WindowLocationStreamLike, WindowLocationStreamLike>;
export { goBack, replaceWindowLocation };
