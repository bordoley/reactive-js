import { SubjectLike } from "../concurrent.js";
/**
 * @noInheritDoc
 */
export interface SubjectModule {
    create<T>(options?: {
        readonly replay?: number;
    }): SubjectLike<T>;
    createRefCounted<T>(options?: {
        readonly replay?: number;
    }): SubjectLike<T>;
}
export type Signature = SubjectModule;
export declare const create: Signature["create"];
export declare const createRefCounted: Signature["createRefCounted"];
