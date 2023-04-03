[Reactive-JS](../README.md) / [keyedcontainers](../modules/keyedcontainers.md) / ForEachWithKey

# Interface: ForEachWithKey<C, O\>

[keyedcontainers](../modules/keyedcontainers.md).ForEachWithKey

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyedcontainers.KeyedContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ForEachWithKey`**

## Table of contents

### Operator Methods

- [forEachWithKey](keyedcontainers.ForEachWithKey.md#foreachwithkey)

## Operator Methods

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`, `options?`): [`KeyedContainerOperator`](../modules/keyedcontainers.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

Returns a KeyedContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/keyedcontainers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](../modules/functions.md#sideeffect2)<`T`, `TKey`\> |
| `options?` | `O` |

#### Returns

[`KeyedContainerOperator`](../modules/keyedcontainers.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>
