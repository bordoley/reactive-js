import { Factory } from '../../util/functions.js';
declare const createObjectFactory: <TPrototype extends object, TProperties>(prototype: TPrototype, properties: TProperties) => Factory<TPrototype & TProperties>;
export { createObjectFactory };
