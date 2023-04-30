[Reactive-JS](../README.md) / containers/Enumerator

# Module: containers/Enumerator

## Table of contents

### Constructor Functions

- [empty](containers_Enumerator.md#empty)

### Operator Functions

- [keep](containers_Enumerator.md#keep)
- [map](containers_Enumerator.md#map)
- [pick](containers_Enumerator.md#pick)

### Transform Functions

- [toReadonlyArray](containers_Enumerator.md#toreadonlyarray)

## Constructor Functions

### empty

▸ **empty**<`T`\>(): [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`T`\>

___

## Operator Functions

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumeratorContainer`](../interfaces/containers.EnumeratorContainer.md), `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumeratorContainer`](../interfaces/containers.EnumeratorContainer.md), `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumeratorContainer`](../interfaces/containers.EnumeratorContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumeratorContainer`](../interfaces/containers.EnumeratorContainer.md), `TA`, `TB`\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumeratorContainer`](../interfaces/containers.EnumeratorContainer.md), `T`, `T`[`TKey`]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumeratorContainer`](../interfaces/containers.EnumeratorContainer.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumeratorContainer`](../interfaces/containers.EnumeratorContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumeratorContainer`](../interfaces/containers.EnumeratorContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumeratorContainer`](../interfaces/containers.EnumeratorContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EnumeratorContainer`](../interfaces/containers.EnumeratorContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

## Transform Functions

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`T`\>, readonly `T`[]\>
