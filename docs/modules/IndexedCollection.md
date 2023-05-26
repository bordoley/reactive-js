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
