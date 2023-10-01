import { ReplayPublisherLike } from "../concurrent.js";
/**
 * @noInheritDoc
 * @category Module
 */
export interface ReplayPublisherrModule {
    create<T>(options?: {
        readonly replay?: number;
    }): ReplayPublisherLike<T>;
}
export type Signature = ReplayPublisherrModule;
export declare const create: Signature["create"];
