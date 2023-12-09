import { SubjectLike } from "../concurrent.js";
/**
 * @noInheritDoc
 * @category Module
 */
export interface SubjectrModule {
    create<T>(options?: {
        readonly replay?: number;
    }): SubjectLike<T>;
    createRefCounted<T>(options?: {
        readonly replay?: number;
    }): SubjectLike<T>;
}
export type Signature = SubjectrModule;
export declare const create: Signature["create"];
export declare const createRefCounted: Signature["createRefCounted"];
