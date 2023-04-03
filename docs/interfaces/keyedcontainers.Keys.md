[Reactive-JS](../README.md) / [keyedcontainers](../modules/keyedcontainers.md) / Keys

# Interface: Keys<C, O\>

[keyedcontainers](../modules/keyedcontainers.md).Keys

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyedcontainers.KeyedContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Keys`**

## Table of contents

### Transform Methods

- [keys](keyedcontainers.Keys.md#keys)

## Transform Methods

### keys

▸ **keys**<`TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/keyedcontainers.md#keyedcontainerof)<`C`, `TKey`, `unknown`\>, [`EnumeratorLike`](containers.EnumeratorLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` = [`KeyOf`](../modules/keyedcontainers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/keyedcontainers.md#keyedcontainerof)<`C`, `TKey`, `unknown`\>, [`EnumeratorLike`](containers.EnumeratorLike.md)<`TKey`\>\>
