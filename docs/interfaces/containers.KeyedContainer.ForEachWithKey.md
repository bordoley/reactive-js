[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [KeyedContainer](../modules/containers.KeyedContainer.md) / ForEachWithKey

# Interface: ForEachWithKey<C\>

[containers](../modules/containers.md).[KeyedContainer](../modules/containers.KeyedContainer.md).ForEachWithKey

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](containers.KeyedContainer-1.md) |

## Table of contents

### Operator Methods

- [forEachWithKey](containers.KeyedContainer.ForEachWithKey.md#foreachwithkey)

## Operator Methods

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](../modules/containers.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

Returns a KeyedContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/containers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](../modules/functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`KeyedContainerOperator`](../modules/containers.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>
