[Reactive-JS](../README.md) / containers/ContainerLike

# Module: containers/ContainerLike

## Table of contents

### Functions

- [compute](containers_ContainerLike.md#compute)
- [concatMap](containers_ContainerLike.md#concatmap)
- [concatWith](containers_ContainerLike.md#concatwith)
- [contains](containers_ContainerLike.md#contains)
- [endWith](containers_ContainerLike.md#endwith)
- [fromOption](containers_ContainerLike.md#fromoption)
- [ignoreElements](containers_ContainerLike.md#ignoreelements)
- [keepType](containers_ContainerLike.md#keeptype)
- [mapTo](containers_ContainerLike.md#mapto)
- [noneSatisfy](containers_ContainerLike.md#nonesatisfy)
- [startWith](containers_ContainerLike.md#startwith)
- [throws](containers_ContainerLike.md#throws)
- [zipWith](containers_ContainerLike.md#zipwith)

## Functions

### compute

▸ **compute**<`C`, `T`, `TOptions`\>(`m`, `options?`): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `T` | `T` |
| `TOptions` | `TOptions` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Container`](containers.md#container)<`C`\> & { `map`: <TA, TB\>(`mapper`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>  } & { `fromValue`: <T_1\>(`options?`: `TOptions`) => [`Function1`](functions.md#function1)<`T_1`, [`ContainerOf`](containers.md#containerof)<`C`, `T_1`\>\>  } |
| `options?` | `TOptions` |

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

▸ **concatWith**<`C`, `T`\>(`__namedParameters`, `snd`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

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
| `m` | [`Container`](containers.md#container)<`C`\> & { `concat`: <T\>(`fst`: [`ContainerOf`](containers.md#containerof)<`C`, `T`\>, `snd`: [`ContainerOf`](containers.md#containerof)<`C`, `T`\>, ...`tail`: readonly [`ContainerOf`](containers.md#containerof)<`C`, `T`\>[]) => [`ContainerOf`](containers.md#containerof)<`C`, `T`\>  } & { `fromArray`: <T\>(`options?`: `Partial`<`O`\>) => [`Function1`](functions.md#function1)<readonly `T`[], [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>  } |
| `value` | `T` |
| `...values` | readonly `T`[] |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>

___

### fromOption

▸ **fromOption**<`C`, `T`, `TOptions`\>(`__namedParameters`, `options?`): [`Function1`](functions.md#function1)<[`Option`](util.md#option)<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `T` | `T` |
| `TOptions` | `TOptions` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Container`](containers.md#container)<`C`\> & { `fromValue`: <T_1\>(`options?`: `TOptions`) => [`Function1`](functions.md#function1)<`T_1`, [`ContainerOf`](containers.md#containerof)<`C`, `T_1`\>\>  } & { `empty`: <T_2\>(`options?`: `TOptions`) => [`ContainerOf`](containers.md#containerof)<`C`, `T_2`\>  } |
| `options?` | `TOptions` |

#### Returns

[`Function1`](functions.md#function1)<[`Option`](util.md#option)<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>

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

▸ **throws**<`C`, `T`, `TOptions`\>(`m`, `options?`): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`unknown`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `T` | `T` |
| `TOptions` | `TOptions` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Container`](containers.md#container)<`C`\> & { `map`: <TA, TB\>(`mapper`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>  } & { `fromValue`: <T_1\>(`options?`: `TOptions`) => [`Function1`](functions.md#function1)<`T_1`, [`ContainerOf`](containers.md#containerof)<`C`, `T_1`\>\>  } |
| `options?` | `TOptions` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`unknown`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>

___

### zipWith

▸ **zipWith**<`C`, `TA`, `TB`\>(`__namedParameters`, `snd`): [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`]\>

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
| `snd` | [`ContainerOf`](containers.md#containerof)<`C`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`]\>
