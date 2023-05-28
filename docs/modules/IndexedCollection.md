[Reactive-JS](../README.md) / IndexedCollection

# Module: IndexedCollection

## Table of contents

### Container Interfaces

- [IndexedCollectionContainer](../interfaces/IndexedCollection.IndexedCollectionContainer.md)

### Module Interfaces

- [IndexedCollectionModule](../interfaces/IndexedCollection.IndexedCollectionModule.md)

### Type Aliases

- [Signature](IndexedCollection.md#signature)
- [TKeyBase](IndexedCollection.md#tkeybase)
- [Type](IndexedCollection.md#type)

### Constructor Functions

- [empty](IndexedCollection.md#empty)

### Operator Functions

- [map](IndexedCollection.md#map)

### Transform Functions

- [enumerate](IndexedCollection.md#enumerate)
- [toIterable](IndexedCollection.md#toiterable)
- [toObservable](IndexedCollection.md#toobservable)
- [toReadonlyArray](IndexedCollection.md#toreadonlyarray)

## Type Aliases

### Signature

Ƭ **Signature**: [`IndexedCollectionModule`](../interfaces/IndexedCollection.IndexedCollectionModule.md)

___

### TKeyBase

Ƭ **TKeyBase**: `number`

___

### Type

Ƭ **Type**: [`IndexedCollectionContainer`](../interfaces/IndexedCollection.IndexedCollectionContainer.md)

## Constructor Functions

### empty

▸ **empty**<`T`, `TKey`\>(): [`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>

___

## Operator Functions

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`IndexedCollectionContainer`](../interfaces/IndexedCollection.IndexedCollectionContainer.md), `TA`, `TB`, `TKey`\>

Returns a ContainerOperator that applies the `selector` function to each
value emitted by the source.

**`Typeparam`**

TA - The inner type of the source container

**`Typeparam`**

TB - The inner type of the mapped container

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`IndexedCollectionContainer`](../interfaces/IndexedCollection.IndexedCollectionContainer.md), `TA`, `TB`, `TKey`\>

___

## Transform Functions

### enumerate

▸ **enumerate**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

___

### toIterable

▸ **toIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, `Iterable`<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>, readonly `T`[]\>
