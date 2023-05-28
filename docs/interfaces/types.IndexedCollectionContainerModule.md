[Reactive-JS](../README.md) / [types](../modules/types.md) / IndexedCollectionContainerModule

# Interface: IndexedCollectionContainerModule<C\>

[types](../modules/types.md).IndexedCollectionContainerModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`IndexedContainer`](types.IndexedContainer.md) |

## Hierarchy

- [`CollectionContainerModule`](types.CollectionContainerModule.md)<`C`\>

- [`EnumerableContainerModule`](types.EnumerableContainerModule.md)<`C`\>

  ↳ **`IndexedCollectionContainerModule`**

  ↳↳ [`IndexedCollectionModule`](IndexedCollection.IndexedCollectionModule.md)

  ↳↳ [`ReadonlyArrayModule`](ReadonlyArray.ReadonlyArrayModule.md)

## Table of contents

### Operator Methods

- [flatMapIterable](types.IndexedCollectionContainerModule.md#flatmapiterable)

### Other Methods

- [fromIterable](types.IndexedCollectionContainerModule.md#fromiterable)

### Transform Methods

- [enumerate](types.IndexedCollectionContainerModule.md#enumerate)
- [toEventSource](types.IndexedCollectionContainerModule.md#toeventsource)
- [toIterable](types.IndexedCollectionContainerModule.md#toiterable)
- [toObservable](types.IndexedCollectionContainerModule.md#toobservable)
- [toReadonlyArray](types.IndexedCollectionContainerModule.md#toreadonlyarray)

## Operator Methods

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `TA`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `TA`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

___

## Other Methods

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\>

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

#### Overrides

[EnumerableContainerModule](types.EnumerableContainerModule.md).[enumerate](types.EnumerableContainerModule.md#enumerate)

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

#### Overrides

[EnumerableContainerModule](types.EnumerableContainerModule.md).[toIterable](types.EnumerableContainerModule.md#toiterable)

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

#### Overrides

EnumerableContainerModule.toObservable

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

#### Overrides

[EnumerableContainerModule](types.EnumerableContainerModule.md).[toReadonlyArray](types.EnumerableContainerModule.md#toreadonlyarray)
