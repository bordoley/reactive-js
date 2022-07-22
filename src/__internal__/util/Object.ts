import { Factory } from "../../util/functions";

export const createObjectFactory = <TPrototype extends object, TProperties>(
  prototype: TPrototype,
  properties: TProperties,
): Factory<TPrototype & TProperties> => {
  const propertyDesccription = Object.getOwnPropertyDescriptors(properties);
  return () => Object.create(prototype, propertyDesccription);
};
