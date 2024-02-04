export declare const create: {
    (o: object | null): any;
    (o: object | null, properties: PropertyDescriptorMap & ThisType<any>): any;
};
export declare const getOwnPropertyDescriptors: <T>(o: T) => { [P in keyof T]: TypedPropertyDescriptor<T[P]>; } & {
    [x: string]: PropertyDescriptor;
};
export declare const prototype: Object;
export declare const hasOwn: (obj: object, key: PropertyKey) => boolean;
export declare const createObjectMap: <TKey extends string = string, T = unknown>() => {
    [P in TKey]?: T;
};
