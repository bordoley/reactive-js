[Reactive-JS](../README.md) / [keyedcontainers](../modules/keyedcontainers.md) / Entries

# Interface: Entries<C, O\>

[keyedcontainers](../modules/keyedcontainers.md).Entries

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyedcontainers.KeyedContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Entries`**

## Table of contents

### Transform Methods

- [entries](keyedcontainers.Entries.md#entries)

## Transform Methods

### entries

▸ **entries**<`T`, `TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/keyedcontainers.md#keyedcontainerof)<`C`, `TKey`, `T`\>, [`EnumeratorLike`](containers.EnumeratorLike.md)<[`TKey`, `T`]\>\>

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

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/keyedcontainers.md#keyedcontainerof)<`C`, `TKey`, `T`\>, [`EnumeratorLike`](containers.EnumeratorLike.md)<[`TKey`, `T`]\>\>
