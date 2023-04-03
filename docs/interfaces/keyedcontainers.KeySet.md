[Reactive-JS](../README.md) / [keyedcontainers](../modules/keyedcontainers.md) / KeySet

# Interface: KeySet<C, O\>

[keyedcontainers](../modules/keyedcontainers.md).KeySet

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyedcontainers.KeyedContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`KeySet`**

## Table of contents

### Transform Methods

- [keySet](keyedcontainers.KeySet.md#keyset)

## Transform Methods

### keySet

▸ **keySet**<`TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/keyedcontainers.md#keyedcontainerof)<`C`, `TKey`, `unknown`\>, [`ReadonlySetLike`](containers.ReadonlySetLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` = [`KeyOf`](../modules/keyedcontainers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/keyedcontainers.md#keyedcontainerof)<`C`, `TKey`, `unknown`\>, [`ReadonlySetLike`](containers.ReadonlySetLike.md)<`TKey`\>\>
