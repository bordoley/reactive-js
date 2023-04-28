import { SchedulerLike } from "../../scheduling.js";
import { DisposableLike } from "../../util.js";
import { WindowLocationLike } from "../web.js";
export declare const subscribe: (scheduler: SchedulerLike) => WindowLocationLike & DisposableLike;
