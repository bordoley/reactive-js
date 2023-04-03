[Reactive-JS](../README.md) / [keyedcontainers](../modules/keyedcontainers.md) / FromEntries

# Interface: FromEntries<C, O\>

[keyedcontainers](../modules/keyedcontainers.md).FromEntries

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyedcontainers.KeyedContainerLike.md) |
| `O` | `unknown` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`FromEntries`**

## Table of contents

### Constructor Methods

- [fromEntries](keyedcontainers.FromEntries.md#fromentries)

## Constructor Methods

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](containers.EnumeratorLike.md)<[`TKey`, `T`]\>, [`KeyedContainerOf`](../modules/keyedcontainers.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/keyedcontainers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](containers.EnumeratorLike.md)<[`TKey`, `T`]\>, [`KeyedContainerOf`](../modules/keyedcontainers.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>
