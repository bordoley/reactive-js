import { VirtualTimeSchedulerLike } from "../concurrent.js";
/**
 * @noInheritDoc
 * @category Module
 */
export interface VirtualTimeSchedulerModule {
    create(options?: {
        readonly maxMicroTaskTicks?: number | undefined;
    }): VirtualTimeSchedulerLike;
}
export type Signature = VirtualTimeSchedulerModule;
export declare const create: Signature["create"];
