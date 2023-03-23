declare const create: {
    (o: object | null): any;
    (o: object | null, properties: PropertyDescriptorMap & ThisType<any>): any;
}, getOwnPropertyDescriptors: <T>(o: T) => { [P in keyof T]: TypedPropertyDescriptor<T[P]>; } & {
    [x: string]: PropertyDescriptor;
}, prototype: Object;
export { create, getOwnPropertyDescriptors, prototype };
