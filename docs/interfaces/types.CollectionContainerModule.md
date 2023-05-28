[Reactive-JS](../README.md) / [types](../modules/types.md) / CollectionContainerModule

# Interface: CollectionContainerModule<C\>

[types](../modules/types.md).CollectionContainerModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |

## Hierarchy

- [`ConcreteContainerModule`](types.ConcreteContainerModule.md)<`C`\>

- [`ReduceableContainerModule`](types.ReduceableContainerModule.md)<`C`\>

  ↳ **`CollectionContainerModule`**

  ↳↳ [`IndexedCollectionContainerModule`](types.IndexedCollectionContainerModule.md)

  ↳↳ [`AssociativeCollectionContainerModule`](types.AssociativeCollectionContainerModule.md)

## Table of contents

### Operator Methods

- [forEach](types.CollectionContainerModule.md#foreach)
- [forEachWithKey](types.CollectionContainerModule.md#foreachwithkey)

### Transform Methods

- [entries](types.CollectionContainerModule.md#entries)
- [values](types.CollectionContainerModule.md#values)

## Operator Methods

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, `TKey`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, `TKey`\>

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, `TKey`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](../modules/functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, `TKey`\>

___

## Transform Methods

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>, [`EnumerableLike`](types.EnumerableLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>, [`EnumerableLike`](types.EnumerableLike.md)<[`TKey`, `T`]\>\>

___

### values

▸ **values**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>
