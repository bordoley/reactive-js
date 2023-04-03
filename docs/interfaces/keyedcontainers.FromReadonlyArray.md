[Reactive-JS](../README.md) / [keyedcontainers](../modules/keyedcontainers.md) / FromReadonlyArray

# Interface: FromReadonlyArray<C, O\>

[keyedcontainers](../modules/keyedcontainers.md).FromReadonlyArray

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyedcontainers.KeyedContainerLike.md) |
| `O` | `unknown` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`FromReadonlyArray`**

## Table of contents

### Constructor Methods

- [fromReadonlyArray](keyedcontainers.FromReadonlyArray.md#fromreadonlyarray)

## Constructor Methods

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`, `TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`KeyedContainerOf`](../modules/keyedcontainers.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` & { `count?`: `number` ; `start?`: `number`  } |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`KeyedContainerOf`](../modules/keyedcontainers.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>
