import { Factory } from "../../functions.mjs";
import { DisposableLike } from "../../util.mjs";
declare const createDisposable: Factory<DisposableLike>;
declare const disposed: DisposableLike;
export { createDisposable, disposed };
