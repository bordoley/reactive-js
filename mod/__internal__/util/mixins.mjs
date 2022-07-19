/// <reference types="./mixins.d.ts" />
const { defineProperty: defineObjectProperty } = Object;
const getPrototype = (constructor) => constructor.prototype;
const addGetter = (property, get) => (Constructor) => {
    defineObjectProperty(getPrototype(Constructor), property, {
        get,
    });
    return Constructor;
};
const addProperty = (property, description) => (Constructor) => {
    defineObjectProperty(getPrototype(Constructor), property, description);
    return Constructor;
};
const addMethod = (property, f) => (Constructor) => {
    getPrototype(Constructor)[property] = f;
    return Constructor;
};

export { addGetter, addMethod, addProperty };
