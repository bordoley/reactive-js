[Reactive-JS](../README.md) / [types](../modules/types.md) / IndexedCollectionContainerModule

# Interface: IndexedCollectionContainerModule<C\>

[types](../modules/types.md).IndexedCollectionContainerModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`IndexedContainer`](types.IndexedContainer.md) |

## Hierarchy

- [`CollectionContainerModule`](types.CollectionContainerModule.md)<`C`\>

  ↳ **`IndexedCollectionContainerModule`**

  ↳↳ [`IndexedCollectionModule`](IndexedCollection.IndexedCollectionModule.md)

  ↳↳ [`ReadonlyArrayModule`](ReadonlyArray.ReadonlyArrayModule.md)

## Table of contents

### Constructor Methods

- [fromEnumerable](types.IndexedCollectionContainerModule.md#fromenumerable)
- [fromFactory](types.IndexedCollectionContainerModule.md#fromfactory)
- [fromIterable](types.IndexedCollectionContainerModule.md#fromiterable)
- [fromOptional](types.IndexedCollectionContainerModule.md#fromoptional)
- [fromReadonlyArray](types.IndexedCollectionContainerModule.md#fromreadonlyarray)
- [fromValue](types.IndexedCollectionContainerModule.md#fromvalue)

### Transform Methods

- [enumerate](types.IndexedCollectionContainerModule.md#enumerate)
- [toEventSource](types.IndexedCollectionContainerModule.md#toeventsource)
- [toIndexedCollection](types.IndexedCollectionContainerModule.md#toindexedcollection)
- [toIterable](types.IndexedCollectionContainerModule.md#toiterable)
- [toObservable](types.IndexedCollectionContainerModule.md#toobservable)
- [toReadonlyArray](types.IndexedCollectionContainerModule.md#toreadonlyarray)

## Constructor Methods

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`T`, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`T`, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

___

## Transform Methods

### enumerate

▸ **enumerate**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

___

### toEventSource

▸ **toEventSource**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\>

___

### toIndexedCollection

▸ **toIndexedCollection**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, [`IndexedCollectionLike`](types.IndexedCollectionLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, [`IndexedCollectionLike`](types.IndexedCollectionLike.md)<`T`\>\>

___

### toIterable

▸ **toIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, `Iterable`<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, `Iterable`<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, readonly `T`[]\>

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

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, readonly `T`[]\>
