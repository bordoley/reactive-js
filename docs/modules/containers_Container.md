[Reactive-JS](../README.md) / containers/Container

# Module: containers/Container

## Table of contents

### Functions

- [compute](containers_Container.md#compute)
- [concatMap](containers_Container.md#concatmap)
- [concatWith](containers_Container.md#concatwith)
- [contains](containers_Container.md#contains)
- [encodeUtf8](containers_Container.md#encodeutf8)
- [endWith](containers_Container.md#endwith)
- [fromOption](containers_Container.md#fromoption)
- [genMap](containers_Container.md#genmap)
- [ignoreElements](containers_Container.md#ignoreelements)
- [keepType](containers_Container.md#keeptype)
- [mapTo](containers_Container.md#mapto)
- [noneSatisfy](containers_Container.md#nonesatisfy)
- [startWith](containers_Container.md#startwith)
- [throws](containers_Container.md#throws)
- [zipWith](containers_Container.md#zipwith)

## Functions

### compute

▸ **compute**<`C`, `T`, `O`\>(`m`, `options?`): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `T` | `T` |
| `O` | extends `Object` = { `count?`: `number` ; `start?`: `number`  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Container`](containers.md#container)<`C`\> & { `map`: <TA, TB\>(`mapper`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>  } & { `fromArray`: <T_1\>(`options?`: `O`) => [`Function1`](functions.md#function1)<readonly `T_1`[], [`ContainerOf`](containers.md#containerof)<`C`, `T_1`\>\>  } |
| `options?` | `O` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>

___

### concatMap

▸ **concatMap**<`C`, `TA`, `TB`, `O`\>(`«destructured»`, `mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `O` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Container`](containers.md#container)<`C`\> & { `map`: <TA_1, TB_1\>(`mapper`: [`Function1`](functions.md#function1)<`TA_1`, `TB_1`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA_1`, `TB_1`\>  } & { `concatAll`: <T\>(`options?`: `O`) => [`ContainerOperator`](containers.md#containeroperator)<`C`, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>, `T`\>  } |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>\> |
| `options?` | `O` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`C`, `T`\>(`«destructured»`, `snd`, `...tail`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Concat`](containers.md#concat)<`C`\> |
| `snd` | [`ContainerOf`](containers.md#containerof)<`C`, `T`\> |
| `...tail` | readonly [`ContainerOf`](containers.md#containerof)<`C`, `T`\>[] |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

___

### contains

▸ **contains**<`C`, `T`\>(`«destructured»`, `value`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `boolean`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`SomeSatisfy`](containers.md#somesatisfy)<`C`\> |
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
| `m` | [`Container`](containers.md#container)<`C`\> & { `defer`: <T\>(`factory`: [`Factory`](functions.md#factory)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>) => [`ContainerOf`](containers.md#containerof)<`C`, `T`\>  } & { `map`: <TA, TB\>(`mapper`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>  } |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `string`, `Uint8Array`\>

___

### endWith

▸ **endWith**<`C`, `T`\>(`m`, `value`, `...values`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `T` | `T` |

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

▸ **fromOption**<`C`, `T`, `O`\>(`«destructured»`, `options?`): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `T` | `T` |
| `O` | extends `Object` = { `count?`: `number` ; `start?`: `number`  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`FromArray`](containers.md#fromarray)<`C`, `O`\> |
| `options?` | `O` |

#### Returns

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>

___

### genMap

▸ **genMap**<`C`, `TA`, `TB`, `OConcatAll`, `OFromIterable`\>(`m`, `mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `OConcatAll` | `never` |
| `OFromIterable` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Container`](containers.md#container)<`C`\> & { `map`: <TA_1, TB_1\>(`mapper`: [`Function1`](functions.md#function1)<`TA_1`, `TB_1`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA_1`, `TB_1`\>  } & { `concatAll`: <T\>(`options?`: `OConcatAll`) => [`ContainerOperator`](containers.md#containeroperator)<`C`, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>, `T`\>  } & { `fromIterable`: <T_1\>(`options?`: `OFromIterable`) => [`Function1`](functions.md#function1)<`Iterable`<`T_1`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T_1`\>\>  } |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `Generator`<`TB`, `any`, `any`\>\> |
| `options?` | `OConcatAll` & `OFromIterable` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>

___

### ignoreElements

▸ **ignoreElements**<`C`, `T`\>(`«destructured»`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `unknown`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Keep`](containers.md#keep)<`C`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `unknown`, `T`\>

___

### keepType

▸ **keepType**<`C`, `TA`, `TB`\>(`«destructured»`, `predicate`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Keep`](containers.md#keep)<`C`\> |
| `predicate` | [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`C`, `TA`, `TB`\>(`«destructured»`, `value`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Map`](containers.md#map)<`C`\> |
| `value` | `TB` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>

___

### noneSatisfy

▸ **noneSatisfy**<`C`, `T`\>(`«destructured»`, `predicate`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `boolean`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`EverySatisfy`](containers.md#everysatisfy)<`C`\> |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `boolean`\>

___

### startWith

▸ **startWith**<`C`, `T`\>(`m`, `value`, `...values`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Container`](containers.md#container)<`C`\> & { `concat`: <T\>(`fst`: [`ContainerOf`](containers.md#containerof)<`C`, `T`\>, `snd`: [`ContainerOf`](containers.md#containerof)<`C`, `T`\>, ...`tail`: readonly [`ContainerOf`](containers.md#containerof)<`C`, `T`\>[]) => [`ContainerOf`](containers.md#containerof)<`C`, `T`\>  } & { `fromArray`: <T\>(`options?`: `undefined`) => [`Function1`](functions.md#function1)<readonly `T`[], [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>  } |
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
| `O` | extends `Object` = { `count?`: `number` ; `start?`: `number`  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Container`](containers.md#container)<`C`\> & { `map`: <TA, TB\>(`mapper`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>  } & { `fromArray`: <T_1\>(`options?`: `O`) => [`Function1`](functions.md#function1)<readonly `T_1`[], [`ContainerOf`](containers.md#containerof)<`C`, `T_1`\>\>  } |
| `options?` | `Omit`<`O`, ``"start"`` \| ``"count"``\> |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`unknown`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>

___

### zipWith

▸ **zipWith**<`C`, `TA`, `TB`\>(`«destructured»`, `b`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Zip`](containers.md#zip)<`C`\> |
| `b` | [`ContainerOf`](containers.md#containerof)<`C`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`C`, `TA`, `TB`, `TC`\>(`«destructured»`, `b`, `c`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`]\>

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
| `«destructured»` | [`Zip`](containers.md#zip)<`C`\> |
| `b` | [`ContainerOf`](containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](containers.md#containerof)<`C`, `TC`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`C`, `TA`, `TB`, `TC`, `TD`\>(`«destructured»`, `b`, `c`, `d`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `«destructured»` | [`Zip`](containers.md#zip)<`C`\> |
| `b` | [`ContainerOf`](containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](containers.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](containers.md#containerof)<`C`, `TD`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`C`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`«destructured»`, `b`, `c`, `d`, `e`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `«destructured»` | [`Zip`](containers.md#zip)<`C`\> |
| `b` | [`ContainerOf`](containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](containers.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](containers.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](containers.md#containerof)<`C`, `TE`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`C`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`«destructured»`, `b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `«destructured»` | [`Zip`](containers.md#zip)<`C`\> |
| `b` | [`ContainerOf`](containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](containers.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](containers.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](containers.md#containerof)<`C`, `TE`\> |
| `f` | [`ContainerOf`](containers.md#containerof)<`C`, `TF`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`C`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`«destructured»`, `b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `«destructured»` | [`Zip`](containers.md#zip)<`C`\> |
| `b` | [`ContainerOf`](containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](containers.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](containers.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](containers.md#containerof)<`C`, `TE`\> |
| `f` | [`ContainerOf`](containers.md#containerof)<`C`, `TF`\> |
| `g` | [`ContainerOf`](containers.md#containerof)<`C`, `TG`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`C`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`«destructured»`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `«destructured»` | [`Zip`](containers.md#zip)<`C`\> |
| `b` | [`ContainerOf`](containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](containers.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](containers.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](containers.md#containerof)<`C`, `TE`\> |
| `f` | [`ContainerOf`](containers.md#containerof)<`C`, `TF`\> |
| `g` | [`ContainerOf`](containers.md#containerof)<`C`, `TG`\> |
| `h` | [`ContainerOf`](containers.md#containerof)<`C`, `TH`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`C`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`«destructured»`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `«destructured»` | [`Zip`](containers.md#zip)<`C`\> |
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
