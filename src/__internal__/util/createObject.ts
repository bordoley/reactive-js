export const createObject = <TPrototype extends object, TProperties>(
  prototype: TPrototype,
  properties: TProperties,
): TPrototype & TProperties =>
  Object.create(prototype, Object.getOwnPropertyDescriptors(properties));
