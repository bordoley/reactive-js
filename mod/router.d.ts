import { Option } from './option';
import { ReadonlyObjectMap } from './readonlyObjectMap';

declare type Router<T> = {
    readonly name: string;
    readonly value?: T;
    readonly children: ReadonlyObjectMap<Router<T>>;
};
declare const find: <T>(router: Router<T>, path: string) => Option<[T, ReadonlyObjectMap<string>]>;
declare const createRouter: <T>(routeMap: ReadonlyObjectMap<T>) => Router<T>;

export { Router, createRouter, find };
