const { create, getOwnPropertyDescriptors, prototype } = Object;

export { create, getOwnPropertyDescriptors, prototype };

export const hasOwn = (obj: object, key: PropertyKey): boolean =>
  prototype.hasOwnProperty.call(obj, key);
