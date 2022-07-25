[Reactive-JS](../README.md) / containers/ReadonlyArrayLike

# Module: containers/ReadonlyArrayLike

## Table of contents

### Type Aliases

- [FromArrayOptions](containers_ReadonlyArrayLike.md#fromarrayoptions)

### Variables

- [emptyT](containers_ReadonlyArrayLike.md#emptyt)
- [keepT](containers_ReadonlyArrayLike.md#keept)
- [mapT](containers_ReadonlyArrayLike.md#mapt)
- [toEnumerableT](containers_ReadonlyArrayLike.md#toenumerablet)
- [toReadonlyArrayT](containers_ReadonlyArrayLike.md#toreadonlyarrayt)
- [toSequenceT](containers_ReadonlyArrayLike.md#tosequencet)

### Functions

- [empty](containers_ReadonlyArrayLike.md#empty)
- [every](containers_ReadonlyArrayLike.md#every)
- [forEach](containers_ReadonlyArrayLike.md#foreach)
- [keep](containers_ReadonlyArrayLike.md#keep)
- [map](containers_ReadonlyArrayLike.md#map)
- [toEnumerable](containers_ReadonlyArrayLike.md#toenumerable)
- [toReadonlyArray](containers_ReadonlyArrayLike.md#toreadonlyarray)
- [toSequence](containers_ReadonlyArrayLike.md#tosequence)

## Type Aliases

### FromArrayOptions

Ƭ **FromArrayOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `start` | `number` |

## Variables

### emptyT

• `Const` **emptyT**: [`Empty`](containers.md#empty)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)\>

___

### keepT

• `Const` **keepT**: [`Keep`](containers.md#keep)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)\>

___

### mapT

• `Const` **mapT**: [`Map`](containers.md#map)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)\>

___

### toEnumerableT

• `Const` **toEnumerableT**: [`ToEnumerable`](ix.md#toenumerable)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md), { `count`: `number` ; `start`: `number`  }\>

___

### toReadonlyArrayT

• `Const` **toReadonlyArrayT**: [`ToReadonlyArray`](containers.md#toreadonlyarray)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)\>

___

### toSequenceT

• `Const` **toSequenceT**: [`ToSequence`](containers.md#tosequence)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)\>

## Functions

### empty

▸ **empty**<`T`\>(): readonly `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

readonly `T`[]

___

### every

▸ **every**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<readonly `T`[], `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], `boolean`\>

___

### forEach

▸ **forEach**<`T`\>(`f`): [`Function1`](functions.md#function1)<readonly `T`[], readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], readonly `T`[]\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `TA`, `TB`\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count` | `number` |
| `options.start` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### toSequence

▸ **toSequence**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>\>
