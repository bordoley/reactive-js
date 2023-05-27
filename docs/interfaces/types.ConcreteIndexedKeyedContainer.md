[Reactive-JS](../README.md) / [types](../modules/types.md) / ConcreteIndexedKeyedContainer

# Interface: ConcreteIndexedKeyedContainer<C\>

[types](../modules/types.md).ConcreteIndexedKeyedContainer

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](types.KeyedContainer.md)<`number`\> |

## Hierarchy

- [`ConcreteKeyedContainerModule`](types.ConcreteKeyedContainerModule.md)<`C`, `number`\>

- [`IndexedKeyedContainer`](types.IndexedKeyedContainer.md)<`C`\>

- `Omit`<[`EnumerableContainerModule`](types.EnumerableContainerModule.md)<`C`\>, keyof [`ConcreteKeyedContainerModule`](types.ConcreteKeyedContainerModule.md)<`C`\> \| ``"enumerate"`` \| ``"toEventSource"`` \| ``"toIterable"`` \| ``"toObservable"`` \| ``"toReadonlyArray"``\>

  ↳ **`ConcreteIndexedKeyedContainer`**

  ↳↳ [`IndexedCollectionModule`](IndexedCollection.IndexedCollectionModule.md)

  ↳↳ [`ReadonlyArrayModule`](ReadonlyArray.ReadonlyArrayModule.md)

## Table of contents

### Operator Methods

- [flatMapIterable](types.ConcreteIndexedKeyedContainer.md#flatmapiterable)
- [keepType](types.ConcreteIndexedKeyedContainer.md#keeptype)

### Other Methods

- [fromIterable](types.ConcreteIndexedKeyedContainer.md#fromiterable)

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

[ConcreteKeyedContainerModule](types.ConcreteKeyedContainerModule.md).[keepType](types.ConcreteKeyedContainerModule.md#keeptype)

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

ConcreteKeyedContainerModule.keepType

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
