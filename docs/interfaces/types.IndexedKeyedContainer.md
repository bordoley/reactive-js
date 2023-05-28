[Reactive-JS](../README.md) / [types](../modules/types.md) / IndexedKeyedContainer

# Interface: IndexedKeyedContainer<C\>

[types](../modules/types.md).IndexedKeyedContainer

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](types.KeyedContainer.md)<`number`\> |

## Hierarchy

- [`KeyedContainerModule`](types.KeyedContainerModule.md)<`C`, `number`\>

- `Omit`<[`EnumerableContainerModule`](types.EnumerableContainerModule.md)<`C`\>, keyof [`KeyedContainerModule`](types.KeyedContainerModule.md)<`C`\> \| ``"enumerate"`` \| ``"toEventSource"`` \| ``"toIterable"`` \| ``"toObservable"`` \| ``"toReadonlyArray"``\>

  ↳ **`IndexedKeyedContainer`**

  ↳↳ [`IndexedCollectionModule`](IndexedCollection.IndexedCollectionModule.md)

  ↳↳ [`ReadonlyArrayModule`](ReadonlyArray.ReadonlyArrayModule.md)

## Table of contents

### Operator Methods

- [flatMapIterable](types.IndexedKeyedContainer.md#flatmapiterable)
- [keepType](types.IndexedKeyedContainer.md#keeptype)

### Other Methods

- [fromIterable](types.IndexedKeyedContainer.md#fromiterable)

### Transform Methods

- [enumerate](types.IndexedKeyedContainer.md#enumerate)
- [toEventSource](types.IndexedKeyedContainer.md#toeventsource)
- [toIterable](types.IndexedKeyedContainer.md#toiterable)
- [toObservable](types.IndexedKeyedContainer.md#toobservable)
- [toReadonlyArray](types.IndexedKeyedContainer.md#toreadonlyarray)

## Operator Methods

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `number`, `TA`\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `number`, `TB`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `number`, `TA`\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `number`, `TB`\>\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`\>

#### Overrides

[KeyedContainerModule](types.KeyedContainerModule.md).[keepType](types.KeyedContainerModule.md#keeptype)

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`C`, `TKey`, `TA`, `TB`\>

#### Overrides

KeyedContainerModule.keepType

___

## Other Methods

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `number`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `number`, `T`\>\>

___

## Transform Methods

### enumerate

▸ **enumerate**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `number`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `number`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

___

### toEventSource

▸ **toEventSource**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `number`, `T`\>, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `number`, `T`\>, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\>

___

### toIterable

▸ **toIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `number`, `T`\>, `Iterable`<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `number`, `T`\>, `Iterable`<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `number`, `T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `number`, `T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `number`, `T`\>, readonly `T`[]\>

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

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `number`, `T`\>, readonly `T`[]\>
