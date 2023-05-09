[Reactive-JS](../README.md) / Enumerator

# Module: Enumerator

## Table of contents

### Constructor Functions

- [empty](Enumerator.md#empty)

### Operator Functions

- [keep](Enumerator.md#keep)
- [map](Enumerator.md#map)
- [pick](Enumerator.md#pick)

### Transform Functions

- [toReadonlyArray](Enumerator.md#toreadonlyarray)

## Constructor Functions

### empty

▸ **empty**<`T`\>(): [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>

___

## Operator Functions

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.EnumeratorContainer.Type.md), `T`, `T`\>

Returns a Container.Operator that only emits items produced by the
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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.EnumeratorContainer.Type.md), `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.EnumeratorContainer.Type.md), `TA`, `TB`\>

Returns a Container.Operator that applies the `selector` function to each
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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.EnumeratorContainer.Type.md), `TA`, `TB`\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.EnumeratorContainer.Type.md), `T`, `T`[`TKey`]\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.EnumeratorContainer.Type.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.EnumeratorContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.EnumeratorContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.EnumeratorContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.EnumeratorContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

## Transform Functions

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, readonly `T`[]\>
