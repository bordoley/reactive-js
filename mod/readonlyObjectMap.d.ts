/// <reference types="node" />
declare type ReadonlyObjectMap<T> = {
    readonly [key: string]: T;
};

export { ReadonlyObjectMap };
