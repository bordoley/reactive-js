[Reactive-JS](../README.md) / containers/Enumerator

# Module: containers/Enumerator

## Table of contents

### Operator Functions

- [keep](containers_Enumerator.md#keep)
- [map](containers_Enumerator.md#map)
- [pick](containers_Enumerator.md#pick)

### Transform Functions

- [toReadonlyArray](containers_Enumerator.md#toreadonlyarray)

## Operator Functions

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`unknown`\>, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`unknown`\>, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`unknown`\>, `TA`, `TB`\>

Returns a ContainerOperator that applies the `selector` function to each
value emitted by the source.

**`Typeparam`**

TA - The inner type of the source container

**`Typeparam`**

TB - The inner type of the mapped container

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`unknown`\>, `TA`, `TB`\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`unknown`\>, `T`, `T`[`TKey`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `TKey` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`unknown`\>, `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`unknown`\>, `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeyA` | extends `string` \| `number` \| `symbol` |
| `TKeyB` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | `TKeyA` |
| `keyB` | `TKeyB` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`unknown`\>, `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`unknown`\>, `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeyA` | extends `string` \| `number` \| `symbol` |
| `TKeyB` | extends `string` \| `number` \| `symbol` |
| `TKeyC` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | `TKeyA` |
| `keyB` | `TKeyB` |
| `keyC` | `TKeyC` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`unknown`\>, `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

## Transform Functions

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

Converts the ContainerLike to a `ReadonlyArrayLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>
