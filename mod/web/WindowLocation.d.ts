import { DisposableLike } from "../utils.js";
import { WindowLocationLike } from "../web.js";
interface WebWindowLocationModule {
    get(): WindowLocationLike & DisposableLike;
}
type Signature = WebWindowLocationModule;
export declare const get: Signature["get"];
export {};
