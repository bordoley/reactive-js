import { Factory, Function1, Function2, Function3, Function4, Function5, Function6, Optional } from "../functions.js";
export declare const Mixin_init: unique symbol;
export declare const Mixin_private_initializedProperties: unique symbol;
export declare const Mixin_properties: unique symbol;
export declare const Mixin_prototype: unique symbol;
type OptionalProperties<T> = T extends object ? {
    [P in keyof T]: Optional<T[P]>;
} : T;
export type Mutable<Type> = {
    -readonly [Key in keyof Type]: Type[Key];
};
export type PartialMixin<TPrototype extends object = object> = {
    [Mixin_properties]: object;
    [Mixin_prototype]: TPrototype;
};
export interface MixinAny<TReturn, TInstance = unknown> extends PartialMixin {
    [Mixin_init]: (instance: TInstance, ...args: readonly any[]) => TReturn;
}
export interface Mixin<TReturn, TInstance = unknown, TPrototype extends object = object> extends PartialMixin<TPrototype> {
    [Mixin_init](instance: TInstance): TReturn;
}
export interface Mixin1<TReturn, TA, TInstance = unknown, TPrototype extends object = object> extends PartialMixin<TPrototype> {
    [Mixin_init](instance: TInstance, a: TA): TReturn;
}
export interface Mixin2<TReturn, TA, TB, TInstance = unknown, TPrototype extends object = object> extends PartialMixin<TPrototype> {
    [Mixin_init](instance: TInstance, a: TA, b: TB): TReturn;
}
export interface Mixin3<TReturn, TA, TB, TC, TInstance = unknown, TPrototype extends object = object> extends PartialMixin<TPrototype> {
    [Mixin_init](instance: TInstance, a: TA, b: TB, c: TC): TReturn;
}
export interface Mixin4<TReturn, TA, TB, TC, TD, TInstance = unknown, TPrototype extends object = object> extends PartialMixin<TPrototype> {
    [Mixin_init](instance: TInstance, a: TA, b: TB, c: TC, d: TD): TReturn;
}
export interface Mixin5<TReturn, TA, TB, TC, TD, TE, TInstance = unknown, TPrototype extends object = object> extends PartialMixin<TPrototype> {
    [Mixin_init](instance: TInstance, a: TA, b: TB, c: TC, d: TD, e: TE): TReturn;
}
export interface Mixin6<TReturn, TA, TB, TC, TD, TE, TF, TInstance = unknown, TPrototype extends object = object> extends PartialMixin<TPrototype> {
    [Mixin_init](instance: TInstance, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): TReturn;
}
interface Init {
    init<TReturn, TInstance>(mixin: Mixin<TReturn, TInstance>, instance: TInstance): asserts instance is TInstance & TReturn;
    init<TReturn, TA, TInstance>(mixin: Mixin1<TReturn, TA, TInstance>, instance: TInstance, a: TA): asserts instance is TInstance & TReturn;
    init<TReturn, TA, TB, TInstance>(mixin: Mixin2<TReturn, TA, TB, TInstance>, instance: TInstance, a: TA, b: TB): asserts instance is TInstance & TReturn;
    init<TReturn, TA, TB, TC, TInstance>(mixin: Mixin3<TReturn, TA, TB, TC, TInstance>, instance: TInstance, a: TA, b: TB, c: TC): asserts instance is TInstance & TReturn;
    init<TReturn, TA, TB, TC, TD, TInstance>(mixin: Mixin4<TReturn, TA, TB, TC, TD, TInstance>, instance: TInstance, a: TA, b: TB, c: TC, d: TD): asserts instance is TInstance & TReturn;
    init<TReturn, TA, TB, TC, TD, TE, TInstance>(mixin: Mixin5<TReturn, TA, TB, TC, TD, TE, TInstance>, instance: TInstance, a: TA, b: TB, c: TC, d: TD, e: TE): asserts instance is TInstance & TReturn;
    init<TReturn, TA, TB, TC, TD, TE, TF, TInstance>(mixin: Mixin6<TReturn, TA, TB, TC, TD, TE, TF, TInstance>, instance: TInstance, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): asserts instance is TInstance & TReturn;
}
export declare const init: Init["init"];
export declare const include: (m0: PartialMixin, ...tail: readonly PartialMixin[]) => PartialMixin;
interface Mix {
    mix<TReturn, TProperties, TPrototype extends object, TInstance>(init: (instance: TPrototype & Mutable<TProperties> & TInstance) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }, prototype: TPrototype): PartialMixin<TPrototype> & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TProperties, TPrototype extends object, TInstance, TA>(init: (instance: TPrototype & Mutable<TProperties> & TInstance, a: TA) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }, prototype: TPrototype): PartialMixin<TPrototype> & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TProperties, TPrototype extends object, TInstance, TA, TB>(init: (instance: TPrototype & Mutable<TProperties> & TInstance, a: TA, b: TB) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }, prototype: TPrototype): PartialMixin<TPrototype> & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TProperties, TPrototype extends object, TInstance, TA, TB, TC>(init: (instance: TPrototype & Mutable<TProperties> & TInstance, a: TA, b: TB, c: TC) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }, prototype: TPrototype): PartialMixin<TPrototype> & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TProperties, TPrototype extends object, TInstance, TA, TB, TC, TD>(init: (instance: TPrototype & Mutable<TProperties> & TInstance, a: TA, b: TB, c: TC, d: TD) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }, prototype: TPrototype): PartialMixin<TPrototype> & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TProperties, TPrototype extends object, TInstance, TA, TB, TC, TD, TE>(init: (instance: TPrototype & Mutable<TProperties> & TInstance, a: TA, b: TB, c: TC, d: TD, e: TE) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }, prototype: TPrototype): PartialMixin<TPrototype> & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TProperties, TInstance>(init: (instance: Mutable<TProperties> & TInstance) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }): PartialMixin & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TProperties, TInstance, TA>(init: (instance: Mutable<TProperties> & TInstance, a: TA) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }): PartialMixin & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TProperties, TInstance, TA, TB>(init: (instance: Mutable<TProperties> & TInstance, a: TA, b: TB) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }): PartialMixin & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TProperties, TInstance, TA, TB, TC>(init: (instance: Mutable<TProperties> & TInstance, a: TA, b: TB, c: TC) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }): PartialMixin & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TProperties, TInstance, TA, TB, TC, TD>(init: (instance: Mutable<TProperties> & TInstance, a: TA, b: TB, c: TC, d: TD) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }): PartialMixin & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TProperties, TInstance, TA, TB, TC, TD, TE>(init: (instance: Mutable<TProperties> & TInstance, a: TA, b: TB, c: TC, d: TD, e: TE) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }): PartialMixin & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TInstance>(init: (instance: TInstance) => TReturn): PartialMixin & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TInstance, TA>(init: (instance: TInstance, a: TA) => TReturn): PartialMixin & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TInstance, TA, TB>(init: (instance: TInstance, a: TA, b: TB) => TReturn): PartialMixin & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TInstance, TA, TB, TC>(init: (instance: TInstance, a: TA, b: TB, c: TC) => TReturn): PartialMixin & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TInstance, TA, TB, TC, TD>(init: (instance: TInstance, a: TA, b: TB, c: TC, d: TD) => TReturn): PartialMixin & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TInstance, TA, TB, TC, TD, TE>(init: (instance: TInstance, a: TA, b: TB, c: TC, d: TD, e: TE) => TReturn): PartialMixin & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TProperties, TPrototype extends object, TInstance>(includes: PartialMixin, init: (instance: TPrototype & Mutable<TProperties> & TInstance) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }, prototype: TPrototype): PartialMixin<TPrototype> & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TProperties, TPrototype extends object, TInstance, TA>(includes: PartialMixin, init: (instance: TPrototype & Mutable<TProperties> & TInstance, a: TA) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }, prototype: TPrototype): PartialMixin<TPrototype> & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TProperties, TPrototype extends object, TInstance, TA, TB>(includes: PartialMixin, init: (instance: TPrototype & Mutable<TProperties> & TInstance, a: TA, b: TB) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }, prototype: TPrototype): PartialMixin<TPrototype> & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TProperties, TPrototype extends object, TInstance, TA, TB, TC>(includes: PartialMixin, init: (instance: TPrototype & Mutable<TProperties> & TInstance, a: TA, b: TB, c: TC) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }, prototype: TPrototype): PartialMixin<TPrototype> & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TProperties, TPrototype extends object, TInstance, TA, TB, TC, TD>(includes: PartialMixin, init: (instance: TPrototype & Mutable<TProperties> & TInstance, a: TA, b: TB, c: TC, d: TD) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }, prototype: TPrototype): PartialMixin<TPrototype> & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TProperties, TPrototype extends object, TInstance, TA, TB, TC, TD, TE>(includes: PartialMixin, init: (instance: TPrototype & Mutable<TProperties> & TInstance, a: TA, b: TB, c: TC, d: TD, e: TE) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }, prototype: TPrototype): PartialMixin<TPrototype> & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TProperties, TInstance>(includes: PartialMixin, init: (instance: Mutable<TProperties> & TInstance) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }): PartialMixin & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TProperties, TInstance, TA>(includes: PartialMixin, init: (instance: Mutable<TProperties> & TInstance, a: TA) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }): PartialMixin & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TProperties, TInstance, TA, TB>(includes: PartialMixin, init: (instance: Mutable<TProperties> & TInstance, a: TA, b: TB) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }): PartialMixin & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TProperties, TInstance, TA, TB, TC>(includes: PartialMixin, init: (instance: Mutable<TProperties> & TInstance, a: TA, b: TB, c: TC) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }): PartialMixin & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TProperties, TInstance, TA, TB, TC, TD>(includes: PartialMixin, init: (instance: Mutable<TProperties> & TInstance, a: TA, b: TB, c: TC, d: TD) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }): PartialMixin & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TProperties, TInstance, TA, TB, TC, TD, TE>(includes: PartialMixin, init: (instance: Mutable<TProperties> & TInstance, a: TA, b: TB, c: TC, d: TD, e: TE) => TReturn, properties: TProperties & {
        [Mixin_private_initializedProperties]?: true;
    }): PartialMixin & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TInstance>(includes: PartialMixin, init: (instance: TInstance) => TReturn): PartialMixin & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TInstance, TA>(includes: PartialMixin, init: (instance: TInstance, a: TA) => TReturn): PartialMixin & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TInstance, TA, TB>(includes: PartialMixin, init: (instance: TInstance, a: TA, b: TB) => TReturn): PartialMixin & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TInstance, TA, TB, TC>(includes: PartialMixin, init: (instance: TInstance, a: TA, b: TB, c: TC) => TReturn): PartialMixin & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TInstance, TA, TB, TC, TD>(includes: PartialMixin, init: (instance: TInstance, a: TA, b: TB, c: TC, d: TD) => TReturn): PartialMixin & {
        [Mixin_init]: typeof init;
    };
    mix<TReturn, TInstance, TA, TB, TC, TD, TE>(includes: PartialMixin, init: (instance: TInstance, a: TA, b: TB, c: TC, d: TD, e: TE) => TReturn): PartialMixin & {
        [Mixin_init]: typeof init;
    };
}
export declare const mix: Mix["mix"];
interface CreateInstanceFactory {
    createInstanceFactory<TReturn>(mixin: Mixin<TReturn>): Factory<TReturn>;
    createInstanceFactory<TReturn, TA>(mixin: Mixin1<TReturn, TA>): Function1<TA, TReturn>;
    createInstanceFactory<TReturn, TA, TB>(mixin: Mixin2<TReturn, TA, TB>): Function2<TA, TB, TReturn>;
    createInstanceFactory<TReturn, TA, TB, TC>(mixin: Mixin3<TReturn, TA, TB, TC>): Function3<TA, TB, TC, TReturn>;
    createInstanceFactory<TReturn, TA, TB, TC, TD>(mixin: Mixin4<TReturn, TA, TB, TC, TD>): Function4<TA, TB, TC, TD, TReturn>;
    createInstanceFactory<TReturn, TA, TB, TC, TD, TE>(mixin: Mixin5<TReturn, TA, TB, TC, TD, TE>): Function5<TA, TB, TC, TD, TE, TReturn>;
    createInstanceFactory<TReturn, TA, TB, TC, TD, TE, TF>(mixin: Mixin6<TReturn, TA, TB, TC, TD, TE, TF>): Function6<TA, TB, TC, TD, TE, TF, TReturn>;
}
export declare const createInstanceFactory: CreateInstanceFactory["createInstanceFactory"];
interface Props {
    props<TProperties>(o: OptionalProperties<TProperties>): TProperties & {
        [Mixin_private_initializedProperties]?: true;
    };
    props(): object;
}
export declare const props: Props["props"];
export declare const getPrototype: <TPrototype extends object>(mixin: PartialMixin<TPrototype>) => TPrototype;
export declare function unsafeCast<T>(_v: unknown): asserts _v is T;
export interface MixinDecorator {
    <TReturn>(mixin: Mixin<TReturn>): Mixin<TReturn>;
    <TReturn, TA>(mixin: Mixin1<TReturn, TA>): Mixin1<TReturn, TA>;
    <TReturn, TA, TB>(mixin: Mixin2<TReturn, TA, TB>): Mixin2<TReturn, TA, TB>;
    <TReturn, TA, TB, TC>(mixin: Mixin3<TReturn, TA, TB, TC>): Mixin3<TReturn, TA, TB, TC>;
    <TReturn, TA, TB, TC, TD>(mixin: Mixin4<TReturn, TA, TB, TC, TD>): Mixin4<TReturn, TA, TB, TC, TD>;
    <TReturn, TA, TB, TC, TD, TE>(mixin: Mixin5<TReturn, TA, TB, TC, TD, TE>): Mixin5<TReturn, TA, TB, TC, TD, TE>;
    <TReturn, TA, TB, TC, TD, TE, TF>(mixin: Mixin6<TReturn, TA, TB, TC, TD, TE, TF>): Mixin6<TReturn, TA, TB, TC, TD, TE, TF>;
}
export {};
