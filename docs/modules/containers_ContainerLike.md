[Reactive-JS](../README.md) / containers/ContainerLike

# Module: containers/ContainerLike

## Table of contents

### Functions

- [compute](containers_ContainerLike.md#compute)
- [concatMap](containers_ContainerLike.md#concatmap)
- [concatWith](containers_ContainerLike.md#concatwith)
- [contains](containers_ContainerLike.md#contains)
- [encodeUtf8](containers_ContainerLike.md#encodeutf8)
- [endWith](containers_ContainerLike.md#endwith)
- [fromOption](containers_ContainerLike.md#fromoption)
- [genMap](containers_ContainerLike.md#genmap)
- [ignoreElements](containers_ContainerLike.md#ignoreelements)
- [keepType](containers_ContainerLike.md#keeptype)
- [mapTo](containers_ContainerLike.md#mapto)
- [noneSatisfy](containers_ContainerLike.md#nonesatisfy)
- [startWith](containers_ContainerLike.md#startwith)
- [throws](containers_ContainerLike.md#throws)
- [zipWith](containers_ContainerLike.md#zipwith)

## Functions

### compute

▸ **compute**<`C`, `T`, `O`\>(`m`, `options?`): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `T` | `T` |
| `O` | extends [`FromArrayOptions`](containers.md#fromarrayoptions) = [`FromArrayOptions`](containers.md#fromarrayoptions) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Container`](containers.md#container)<`C`\> & { `map`: <TA, TB\>(`mapper`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>  } & { `fromArray`: <T_1\>(`options?`: `Partial`<`O`\>) => [`Function1`](functions.md#function1)<readonly `T_1`[], [`ContainerOf`](containers.md#containerof)<`C`, `T_1`\>\>  } |
| `options?` | `Omit`<`Partial`<`O`\>, keyof [`FromArrayOptions`](containers.md#fromarrayoptions)\> |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>

___

### concatMap

▸ **concatMap**<`C`, `TA`, `TB`, `O`\>(`__namedParameters`, `mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `O` | `Record`<`string`, `never`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Container`](containers.md#container)<`C`\> & { `map`: <TA_1, TB_1\>(`mapper`: [`Function1`](functions.md#function1)<`TA_1`, `TB_1`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA_1`, `TB_1`\>  } & { `concatAll`: <T\>(`options?`: `Partial`<`O`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>, `T`\>  } |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>\> |
| `options?` | `Partial`<`O`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`C`, `T`\>(`__namedParameters`, `snd`, ...`tail`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Concat`](containers.md#concat)<`C`\> |
| `snd` | [`ContainerOf`](containers.md#containerof)<`C`, `T`\> |
| `...tail` | readonly [`ContainerOf`](containers.md#containerof)<`C`, `T`\>[] |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

___

### contains

▸ **contains**<`C`, `T`\>(`__namedParameters`, `value`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `boolean`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`SomeSatisfy`](containers.md#somesatisfy)<`C`\> |
| `value` | `T` |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `boolean`\>

___

### encodeUtf8

▸ **encodeUtf8**<`C`\>(`m`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `string`, `Uint8Array`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Container`](containers.md#container)<`C`\> & { `defer`: <T\>(`factory`: [`Factory`](functions.md#factory)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>, `options?`: `undefined`) => [`ContainerOf`](containers.md#containerof)<`C`, `T`\>  } & { `map`: <TA, TB\>(`mapper`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>  } |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `string`, `Uint8Array`\>

___

### endWith

▸ **endWith**<`C`, `T`, `O`\>(`m`, `value`, ...`values`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `T` | `T` |
| `O` | extends [`FromArrayOptions`](containers.md#fromarrayoptions) = [`FromArrayOptions`](containers.md#fromarrayoptions) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Container`](containers.md#container)<`C`\> & { `concat`: <T\>(`fst`: [`ContainerOf`](containers.md#containerof)<`C`, `T`\>, `snd`: [`ContainerOf`](containers.md#containerof)<`C`, `T`\>, ...`tail`: readonly [`ContainerOf`](containers.md#containerof)<`C`, `T`\>[]) => [`ContainerOf`](containers.md#containerof)<`C`, `T`\>  } & { `fromArray`: <T\>(`options?`: `undefined`) => [`Function1`](functions.md#function1)<readonly `T`[], [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>  } |
| `value` | `T` |
| `...values` | readonly `T`[] |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

___

### fromOption

▸ **fromOption**<`C`, `T`, `O`\>(`__namedParameters`, `options?`): [`Function1`](functions.md#function1)<[`Option`](functions.md#option)<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `T` | `T` |
| `O` | extends [`FromArrayOptions`](containers.md#fromarrayoptions) = [`FromArrayOptions`](containers.md#fromarrayoptions) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`FromArray`](containers.md#fromarray)<`C`, `O`\> |
| `options?` | `Omit`<`Partial`<`O`\>, keyof [`FromArrayOptions`](containers.md#fromarrayoptions)\> |

#### Returns

[`Function1`](functions.md#function1)<[`Option`](functions.md#option)<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>

___

### genMap

▸ **genMap**<`C`, `TA`, `TB`, `OConcatAll`, `OFromIterator`, `TReturn`, `TNext`\>(`m`, `mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `OConcatAll` | extends `Record`<`string`, `never`\> = `Record`<`string`, `never`\> |
| `OFromIterator` | extends `Record`<`string`, `never`\> = `Record`<`string`, `never`\> |
| `TReturn` | `any` |
| `TNext` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Container`](containers.md#container)<`C`\> & { `map`: <TA_1, TB_1\>(`mapper`: [`Function1`](functions.md#function1)<`TA_1`, `TB_1`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA_1`, `TB_1`\>  } & { `concatAll`: <T\>(`options?`: `Partial`<`OConcatAll`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>, `T`\>  } & { `fromIterator`: <T_1, TReturn_1, TNext_1\>(`options?`: `Partial`<`OFromIterator`\>) => [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`Iterator`<`T_1`, `TReturn_1`, `TNext_1`\>\>, [`ContainerOf`](containers.md#containerof)<`C`, `T_1`\>\>  } |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `Generator`<`TB`, `TReturn`, `TNext`\>\> |
| `options?` | `Partial`<`OConcatAll` & `OFromIterator`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>

___

### ignoreElements

▸ **ignoreElements**<`C`, `T`\>(`__namedParameters`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `unknown`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Keep`](containers.md#keep)<`C`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `unknown`, `T`\>

___

### keepType

▸ **keepType**<`C`, `TA`, `TB`\>(`__namedParameters`, `predicate`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Keep`](containers.md#keep)<`C`\> |
| `predicate` | [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`C`, `TA`, `TB`\>(`__namedParameters`, `value`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Map`](containers.md#map)<`C`\> |
| `value` | `TB` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>

___

### noneSatisfy

▸ **noneSatisfy**<`C`, `T`\>(`__namedParameters`, `predicate`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `boolean`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`EverySatisfy`](containers.md#everysatisfy)<`C`\> |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `boolean`\>

___

### startWith

▸ **startWith**<`C`, `T`, `O`\>(`m`, `value`, ...`values`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `T` | `T` |
| `O` | extends [`FromArrayOptions`](containers.md#fromarrayoptions) = [`FromArrayOptions`](containers.md#fromarrayoptions) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Container`](containers.md#container)<`C`\> & { `concat`: <T\>(`fst`: [`ContainerOf`](containers.md#containerof)<`C`, `T`\>, `snd`: [`ContainerOf`](containers.md#containerof)<`C`, `T`\>, ...`tail`: readonly [`ContainerOf`](containers.md#containerof)<`C`, `T`\>[]) => [`ContainerOf`](containers.md#containerof)<`C`, `T`\>  } & { `fromArray`: <T\>(`options?`: `Partial`<`O`\>) => [`Function1`](functions.md#function1)<readonly `T`[], [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>  } |
| `value` | `T` |
| `...values` | readonly `T`[] |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

___

### throws

▸ **throws**<`C`, `T`, `O`\>(`m`, `options?`): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`unknown`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `T` | `T` |
| `O` | extends [`FromArrayOptions`](containers.md#fromarrayoptions) = [`FromArrayOptions`](containers.md#fromarrayoptions) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Container`](containers.md#container)<`C`\> & { `map`: <TA, TB\>(`mapper`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>  } & { `fromArray`: <T_1\>(`options?`: `Partial`<`O`\>) => [`Function1`](functions.md#function1)<readonly `T_1`[], [`ContainerOf`](containers.md#containerof)<`C`, `T_1`\>\>  } |
| `options?` | `Omit`<`Partial`<`O`\>, keyof [`FromArrayOptions`](containers.md#fromarrayoptions)\> |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`unknown`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>

___

### zipWith

▸ **zipWith**<`C`, `TA`, `TB`\>(`__namedParameters`, `b`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Zip`](containers.md#zip)<`C`\> |
| `b` | [`ContainerOf`](containers.md#containerof)<`C`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`C`, `TA`, `TB`, `TC`\>(`__namedParameters`, `b`, `c`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Zip`](containers.md#zip)<`C`\> |
| `b` | [`ContainerOf`](containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](containers.md#containerof)<`C`, `TC`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`C`, `TA`, `TB`, `TC`, `TD`\>(`__namedParameters`, `b`, `c`, `d`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Zip`](containers.md#zip)<`C`\> |
| `b` | [`ContainerOf`](containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](containers.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](containers.md#containerof)<`C`, `TD`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`C`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`__namedParameters`, `b`, `c`, `d`, `e`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |
| `TE` | `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Zip`](containers.md#zip)<`C`\> |
| `b` | [`ContainerOf`](containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](containers.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](containers.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](containers.md#containerof)<`C`, `TE`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`C`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`__namedParameters`, `b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |
| `TE` | `TE` |
| `TF` | `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Zip`](containers.md#zip)<`C`\> |
| `b` | [`ContainerOf`](containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](containers.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](containers.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](containers.md#containerof)<`C`, `TE`\> |
| `f` | [`ContainerOf`](containers.md#containerof)<`C`, `TF`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`C`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`__namedParameters`, `b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |
| `TE` | `TE` |
| `TF` | `TF` |
| `TG` | `TG` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Zip`](containers.md#zip)<`C`\> |
| `b` | [`ContainerOf`](containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](containers.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](containers.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](containers.md#containerof)<`C`, `TE`\> |
| `f` | [`ContainerOf`](containers.md#containerof)<`C`, `TF`\> |
| `g` | [`ContainerOf`](containers.md#containerof)<`C`, `TG`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`C`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`__namedParameters`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |
| `TE` | `TE` |
| `TF` | `TF` |
| `TG` | `TG` |
| `TH` | `TH` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Zip`](containers.md#zip)<`C`\> |
| `b` | [`ContainerOf`](containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](containers.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](containers.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](containers.md#containerof)<`C`, `TE`\> |
| `f` | [`ContainerOf`](containers.md#containerof)<`C`, `TF`\> |
| `g` | [`ContainerOf`](containers.md#containerof)<`C`, `TG`\> |
| `h` | [`ContainerOf`](containers.md#containerof)<`C`, `TH`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`C`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`__namedParameters`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |
| `TE` | `TE` |
| `TF` | `TF` |
| `TG` | `TG` |
| `TH` | `TH` |
| `TI` | `TI` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Zip`](containers.md#zip)<`C`\> |
| `b` | [`ContainerOf`](containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](containers.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](containers.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](containers.md#containerof)<`C`, `TE`\> |
| `f` | [`ContainerOf`](containers.md#containerof)<`C`, `TF`\> |
| `g` | [`ContainerOf`](containers.md#containerof)<`C`, `TG`\> |
| `h` | [`ContainerOf`](containers.md#containerof)<`C`, `TH`\> |
| `i` | [`ContainerOf`](containers.md#containerof)<`C`, `TI`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>
