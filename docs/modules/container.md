[Reactive-JS](../README.md) / container

# Module: container

## Table of contents

### Interfaces

- [Buffer](../interfaces/container.Buffer.md)
- [Concat](../interfaces/container.Concat.md)
- [ConcatAll](../interfaces/container.ConcatAll.md)
- [Container](../interfaces/container.Container.md)
- [ContainerLike](../interfaces/container.ContainerLike.md)
- [DecodeWithCharset](../interfaces/container.DecodeWithCharset.md)
- [Defer](../interfaces/container.Defer.md)
- [DistinctUntilChanged](../interfaces/container.DistinctUntilChanged.md)
- [EverySatisfy](../interfaces/container.EverySatisfy.md)
- [FromArray](../interfaces/container.FromArray.md)
- [FromArrayOptions](../interfaces/container.FromArrayOptions.md)
- [FromIterable](../interfaces/container.FromIterable.md)
- [FromIterator](../interfaces/container.FromIterator.md)
- [Generate](../interfaces/container.Generate.md)
- [Keep](../interfaces/container.Keep.md)
- [Map](../interfaces/container.Map.md)
- [Pairwise](../interfaces/container.Pairwise.md)
- [Reduce](../interfaces/container.Reduce.md)
- [Repeat](../interfaces/container.Repeat.md)
- [Scan](../interfaces/container.Scan.md)
- [SkipFirst](../interfaces/container.SkipFirst.md)
- [SomeSatisfy](../interfaces/container.SomeSatisfy.md)
- [TakeFirst](../interfaces/container.TakeFirst.md)
- [TakeLast](../interfaces/container.TakeLast.md)
- [TakeWhile](../interfaces/container.TakeWhile.md)
- [ThrowIfEmpty](../interfaces/container.ThrowIfEmpty.md)
- [ToIterable](../interfaces/container.ToIterable.md)
- [Zip](../interfaces/container.Zip.md)

### Type Aliases

- [ContainerOf](container.md#containerof)
- [ContainerOperator](container.md#containeroperator)

### Functions

- [compute](container.md#compute)
- [concatMap](container.md#concatmap)
- [concatWith](container.md#concatwith)
- [contains](container.md#contains)
- [empty](container.md#empty)
- [encodeUtf8](container.md#encodeutf8)
- [endWith](container.md#endwith)
- [fromOption](container.md#fromoption)
- [fromValue](container.md#fromvalue)
- [genMap](container.md#genmap)
- [ignoreElements](container.md#ignoreelements)
- [keepType](container.md#keeptype)
- [mapTo](container.md#mapto)
- [noneSatisfy](container.md#nonesatisfy)
- [startWith](container.md#startwith)
- [throws](container.md#throws)
- [zipWith](container.md#zipwith)

## Type Aliases

### ContainerOf

Ƭ **ContainerOf**<`C`, `T`\>: `C` extends { `TContainerOf`: `unknown`  } ? `C` & { `T`: `T`  }[``"TContainerOf"``] : { `_C`: `C` ; `_T`: () => `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/container.ContainerLike.md) |
| `T` | `T` |

___

### ContainerOperator

Ƭ **ContainerOperator**<`C`, `TA`, `TB`\>: [`Function1`](functions.md#function1)<[`ContainerOf`](container.md#containerof)<`C`, `TA`\>, [`ContainerOf`](container.md#containerof)<`C`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `C` |
| `TA` |
| `TB` |

## Functions

### compute

▸ **compute**<`C`, `T`, `O`\>(`m`, `options?`): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`ContainerOf`](container.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/container.ContainerLike.md) |
| `T` | `T` |
| `O` | extends [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md) = [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Map`](../interfaces/container.Map.md)<`C`\> & [`FromArray`](../interfaces/container.FromArray.md)<`C`, `O`\> |
| `options?` | `Omit`<`Partial`<`O`\>, keyof [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\> |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`ContainerOf`](container.md#containerof)<`C`, `T`\>\>

___

### concatMap

▸ **concatMap**<`C`, `TA`, `TB`, `O`\>(`__namedParameters`, `mapper`, `options?`): [`ContainerOperator`](container.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/container.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `O` | `Record`<`string`, `never`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Map`](../interfaces/container.Map.md)<`C`\> & [`ConcatAll`](../interfaces/container.ConcatAll.md)<`C`, `O`\> |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, [`ContainerOf`](container.md#containerof)<`C`, `TB`\>\> |
| `options?` | `Partial`<`O`\> |

#### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`C`, `T`\>(`__namedParameters`, `snd`): [`ContainerOperator`](container.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/container.ContainerLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Concat`](../interfaces/container.Concat.md)<`C`\> |
| `snd` | [`ContainerOf`](container.md#containerof)<`C`, `T`\> |

#### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `T`, `T`\>

___

### contains

▸ **contains**<`C`, `T`\>(`__namedParameters`, `value`, `options?`): [`ContainerOperator`](container.md#containeroperator)<`C`, `T`, `boolean`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/container.ContainerLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`SomeSatisfy`](../interfaces/container.SomeSatisfy.md)<`C`\> |
| `value` | `T` |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> |

#### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `T`, `boolean`\>

___

### empty

▸ **empty**<`C`, `T`, `O`\>(`__namedParameters`, `options?`): [`ContainerOf`](container.md#containerof)<`C`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/container.ContainerLike.md) |
| `T` | `T` |
| `O` | extends [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md) = [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`FromArray`](../interfaces/container.FromArray.md)<`C`, `O`\> |
| `options?` | `Omit`<`Partial`<`O`\>, keyof [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\> |

#### Returns

[`ContainerOf`](container.md#containerof)<`C`, `T`\>

___

### encodeUtf8

▸ **encodeUtf8**<`C`\>(`m`): [`ContainerOperator`](container.md#containeroperator)<`C`, `string`, `Uint8Array`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/container.ContainerLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Defer`](../interfaces/container.Defer.md)<`C`\> & [`Map`](../interfaces/container.Map.md)<`C`\> |

#### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `string`, `Uint8Array`\>

___

### endWith

▸ **endWith**<`C`, `T`\>(`m`, `value`, ...`values`): [`ContainerOperator`](container.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/container.ContainerLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Concat`](../interfaces/container.Concat.md)<`C`\> & [`FromArray`](../interfaces/container.FromArray.md)<`C`, [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\> |
| `value` | `T` |
| `...values` | readonly `T`[] |

#### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `T`, `T`\>

___

### fromOption

▸ **fromOption**<`C`, `T`, `O`\>(`m`, `options?`): [`Function1`](functions.md#function1)<[`Option`](option.md#option)<`T`\>, [`ContainerOf`](container.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/container.ContainerLike.md) |
| `T` | `T` |
| `O` | extends [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md) = [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`FromArray`](../interfaces/container.FromArray.md)<`C`, `O`\> |
| `options?` | `Omit`<`Partial`<`O`\>, keyof [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\> |

#### Returns

[`Function1`](functions.md#function1)<[`Option`](option.md#option)<`T`\>, [`ContainerOf`](container.md#containerof)<`C`, `T`\>\>

___

### fromValue

▸ **fromValue**<`C`, `T`, `O`\>(`__namedParameters`, `options?`): [`Function1`](functions.md#function1)<`T`, [`ContainerOf`](container.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/container.ContainerLike.md) |
| `T` | `T` |
| `O` | extends [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md) = [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`FromArray`](../interfaces/container.FromArray.md)<`C`, `O`\> |
| `options?` | `Omit`<`Partial`<`O`\>, keyof [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\> |

#### Returns

[`Function1`](functions.md#function1)<`T`, [`ContainerOf`](container.md#containerof)<`C`, `T`\>\>

___

### genMap

▸ **genMap**<`C`, `TA`, `TB`, `OConcatAll`, `OFromIterator`, `TReturn`, `TNext`\>(`m`, `mapper`, `options?`): [`ContainerOperator`](container.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/container.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `OConcatAll` | extends `Record`<`string`, `never`\> = `Record`<`string`, `never`\> |
| `OFromIterator` | extends `Record`<`string`, `never`\> = `Record`<`string`, `never`\> |
| `TReturn` | `any` |
| `TNext` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Map`](../interfaces/container.Map.md)<`C`\> & [`ConcatAll`](../interfaces/container.ConcatAll.md)<`C`, `OConcatAll`\> & [`FromIterator`](../interfaces/container.FromIterator.md)<`C`, `OFromIterator`\> |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `Generator`<`TB`, `TReturn`, `TNext`\>\> |
| `options?` | `Partial`<`OConcatAll` & `OFromIterator`\> |

#### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `TA`, `TB`\>

___

### ignoreElements

▸ **ignoreElements**<`C`, `T`\>(`__namedParameters`): [`ContainerOperator`](container.md#containeroperator)<`C`, `unknown`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/container.ContainerLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Keep`](../interfaces/container.Keep.md)<`C`\> |

#### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `unknown`, `T`\>

___

### keepType

▸ **keepType**<`C`, `TA`, `TB`\>(`__namedParameters`, `predicate`): [`ContainerOperator`](container.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/container.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Keep`](../interfaces/container.Keep.md)<`C`\> |
| `predicate` | [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`C`, `TA`, `TB`\>(`__namedParameters`, `value`): [`ContainerOperator`](container.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/container.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Map`](../interfaces/container.Map.md)<`C`\> |
| `value` | `TB` |

#### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `TA`, `TB`\>

___

### noneSatisfy

▸ **noneSatisfy**<`C`, `T`\>(`__namedParameters`, `predicate`): [`ContainerOperator`](container.md#containeroperator)<`C`, `T`, `boolean`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/container.ContainerLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`EverySatisfy`](../interfaces/container.EverySatisfy.md)<`C`\> |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `T`, `boolean`\>

___

### startWith

▸ **startWith**<`C`, `T`\>(`m`, `value`, ...`values`): [`ContainerOperator`](container.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/container.ContainerLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Concat`](../interfaces/container.Concat.md)<`C`\> & [`FromArray`](../interfaces/container.FromArray.md)<`C`, [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\> |
| `value` | `T` |
| `...values` | readonly `T`[] |

#### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `T`, `T`\>

___

### throws

▸ **throws**<`C`, `T`, `O`\>(`m`, `options?`): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`unknown`\>, [`ContainerOf`](container.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/container.ContainerLike.md) |
| `T` | `T` |
| `O` | extends [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md) = [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Map`](../interfaces/container.Map.md)<`C`\> & [`FromArray`](../interfaces/container.FromArray.md)<`C`, `O`\> |
| `options?` | `Omit`<`Partial`<`O`\>, keyof [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\> |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`unknown`\>, [`ContainerOf`](container.md#containerof)<`C`, `T`\>\>

___

### zipWith

▸ **zipWith**<`C`, `TA`, `TB`\>(`__namedParameters`, `snd`): [`ContainerOperator`](container.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/container.ContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Zip`](../interfaces/container.Zip.md)<`C`\> |
| `snd` | [`ContainerOf`](container.md#containerof)<`C`, `TB`\> |

#### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`]\>
