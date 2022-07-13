/// <reference types="./mixins.d.ts" />
const { defineProperty: defineObjectProperty } = Object;
const getPrototype = (constructor) => constructor.prototype;
const decorateGetter = (property, get) => (Constructor) => {
    defineObjectProperty(getPrototype(Constructor), property, {
        get,
    });
    return Constructor;
};
const decorateProperty = (property, description) => (Constructor) => {
    defineObjectProperty(getPrototype(Constructor), property, description);
    return Constructor;
};
const decorateMethod = (property, f) => (Constructor) => {
    Constructor.prototype[property] = f;
    return Constructor;
};

export { decorateGetter, decorateMethod, decorateProperty };
