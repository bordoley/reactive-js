[Reactive-JS](../README.md) / [keyedcontainers](../modules/keyedcontainers.md) / ForEach

# Interface: ForEach<C, O\>

[keyedcontainers](../modules/keyedcontainers.md).ForEach

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyedcontainers.KeyedContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ForEach`**

## Table of contents

### Operator Methods

- [forEach](keyedcontainers.ForEach.md#foreach)

## Operator Methods

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`, `options?`): [`KeyedContainerOperator`](../modules/keyedcontainers.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/keyedcontainers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |
| `options?` | `O` |

#### Returns

[`KeyedContainerOperator`](../modules/keyedcontainers.md#keyedcontaineroperator)<`C`, `TKey`, `T`, `T`\>
