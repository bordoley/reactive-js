import { DisposableLike, SchedulerLike } from "../../types.js";
import { WindowLocationLike } from "../web.js";
interface WebWindowLocationModule {
    subscribe(scheduler: SchedulerLike): WindowLocationLike & DisposableLike;
}
type Signature = WebWindowLocationModule;
export declare const subscribe: Signature["subscribe"];
export {};
