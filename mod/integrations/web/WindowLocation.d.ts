import { SchedulerLike } from "../../concurrent.js";
import { DisposableLike } from "../../utils.js";
import { WindowLocationLike } from "../web.js";
interface WebWindowLocationModule {
    subscribe(scheduler: SchedulerLike): WindowLocationLike & DisposableLike;
}
type Signature = WebWindowLocationModule;
export declare const subscribe: Signature["subscribe"];
export {};
