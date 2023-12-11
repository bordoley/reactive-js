import { VirtualTimeSchedulerLike } from "../concurrent.js";
interface Signature {
    create(options?: {
        readonly maxMicroTaskTicks?: number | undefined;
    }): VirtualTimeSchedulerLike;
}
export declare const create: Signature["create"];
export {};
