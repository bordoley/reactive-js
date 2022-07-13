[Reactive-JS](../README.md) / containers/SequenceLike

# Module: containers/SequenceLike

## Table of contents

### Interfaces

- [SequenceLike](../interfaces/containers_SequenceLike.SequenceLike.md)

### Type Aliases

- [SequenceResult](containers_SequenceLike.md#sequenceresult)

### Variables

- [concatAllT](containers_SequenceLike.md#concatallt)
- [distinctUntilChangedT](containers_SequenceLike.md#distinctuntilchangedt)
- [generateT](containers_SequenceLike.md#generatet)
- [keepT](containers_SequenceLike.md#keept)
- [mapT](containers_SequenceLike.md#mapt)
- [pairwiseT](containers_SequenceLike.md#pairwiset)
- [repeatT](containers_SequenceLike.md#repeatt)
- [scanT](containers_SequenceLike.md#scant)
- [skipFirstT](containers_SequenceLike.md#skipfirstt)
- [takeFirstT](containers_SequenceLike.md#takefirstt)
- [takeLastT](containers_SequenceLike.md#takelastt)
- [takeWhileT](containers_SequenceLike.md#takewhilet)
- [zipT](containers_SequenceLike.md#zipt)

### Functions

- [concatAll](containers_SequenceLike.md#concatall)
- [distinctUntilChanged](containers_SequenceLike.md#distinctuntilchanged)
- [generate](containers_SequenceLike.md#generate)
- [keep](containers_SequenceLike.md#keep)
- [map](containers_SequenceLike.md#map)
- [pairwise](containers_SequenceLike.md#pairwise)
- [repeat](containers_SequenceLike.md#repeat)
- [scan](containers_SequenceLike.md#scan)
- [seek](containers_SequenceLike.md#seek)
- [skipFirst](containers_SequenceLike.md#skipfirst)
- [takeFirst](containers_SequenceLike.md#takefirst)
- [takeLast](containers_SequenceLike.md#takelast)
- [takeWhile](containers_SequenceLike.md#takewhile)
- [zip](containers_SequenceLike.md#zip)

## Type Aliases

### SequenceResult

Ƭ **SequenceResult**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `T` |
| `next` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`T`\> |

## Variables

### concatAllT

• `Const` **concatAllT**: [`ConcatAll`](containers_ContainerLike.md#concatall)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)\>

___

### distinctUntilChangedT

• `Const` **distinctUntilChangedT**: [`DistinctUntilChanged`](containers_ContainerLike.md#distinctuntilchanged)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)\>

___

### generateT

• `Const` **generateT**: [`Generate`](containers_ContainerLike.md#generate)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)\>

___

### keepT

• `Const` **keepT**: [`Keep`](containers_ContainerLike.md#keep)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)\>

___

### mapT

• `Const` **mapT**: [`Map`](containers_ContainerLike.md#map)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)\>

___

### pairwiseT

• `Const` **pairwiseT**: [`Pairwise`](containers_ContainerLike.md#pairwise)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)\>

___

### repeatT

• `Const` **repeatT**: [`Repeat`](containers_ContainerLike.md#repeat)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)\>

___

### scanT

• `Const` **scanT**: [`Scan`](containers_ContainerLike.md#scan)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)\>

___

### skipFirstT

• `Const` **skipFirstT**: [`SkipFirst`](containers_ContainerLike.md#skipfirst)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)\>

___

### takeFirstT

• `Const` **takeFirstT**: [`TakeFirst`](containers_ContainerLike.md#takefirst)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)\>

___

### takeLastT

• `Const` **takeLastT**: [`TakeLast`](containers_ContainerLike.md#takelast)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)\>

___

### takeWhileT

• `Const` **takeWhileT**: [`TakeWhile`](containers_ContainerLike.md#takewhile)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)\>

___

### zipT

• `Const` **zipT**: [`Zip`](containers_ContainerLike.md#zip)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)\>

## Functions

### concatAll

▸ **concatAll**<`T`\>(`options?`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`Record`<`string`, `never`\>\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`T`\>, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](util_functions.md#equality)<`T`\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](util_functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](util_functions.md#factory)<`T`\> |

#### Returns

[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](util_functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](util_functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `TA`, `TB`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, readonly [[`Option`](util_Option.md#option)<`T`\>, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, readonly [[`Option`](util_Option.md#option)<`T`\>, `T`]\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](util_functions.md#predicate)<`number`\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, `T`\>

▸ **repeat**<`T`\>(): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Reducer`](util_functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](util_functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### seek

▸ **seek**<`T`\>(`count`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](util_functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TB`\> |

#### Returns

[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TC`\> |

#### Returns

[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TD`\> |

#### Returns

[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TD`\> |
| `e` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TE`\> |

#### Returns

[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TD`\> |
| `e` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TE`\> |
| `f` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TF`\> |

#### Returns

[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TD`\> |
| `e` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TE`\> |
| `f` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TF`\> |
| `g` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TG`\> |

#### Returns

[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TD`\> |
| `e` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TE`\> |
| `f` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TF`\> |
| `g` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TG`\> |
| `h` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TH`\> |

#### Returns

[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |
| `TI` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TD`\> |
| `e` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TE`\> |
| `f` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TF`\> |
| `g` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TG`\> |
| `h` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TH`\> |
| `i` | [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`TI`\> |

#### Returns

[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zip**<`T`\>(...`enumerables`): [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...enumerables` | readonly [`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<`T`\>[] |

#### Returns

[`SequenceLike`](../interfaces/containers_SequenceLike.SequenceLike.md)<readonly `T`[]\>
