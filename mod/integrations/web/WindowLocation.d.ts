import { DisposableLike, SchedulerLike } from "../../core.js";
import { WindowLocationLike } from "../web.js";
export declare const subscribe: (scheduler: SchedulerLike) => WindowLocationLike & DisposableLike;
