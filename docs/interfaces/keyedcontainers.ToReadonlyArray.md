[Reactive-JS](../README.md) / [keyedcontainers](../modules/keyedcontainers.md) / ToReadonlyArray

# Interface: ToReadonlyArray<C, O\>

[keyedcontainers](../modules/keyedcontainers.md).ToReadonlyArray

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](keyedcontainers.KeyedContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ToReadonlyArray`**

## Table of contents

### Transform Methods

- [toReadonlyArray](keyedcontainers.ToReadonlyArray.md#toreadonlyarray)

## Transform Methods

### toReadonlyArray

▸ **toReadonlyArray**<`T`, `TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/keyedcontainers.md#keyedcontainerof)<`C`, `TKey`, `T`\>, [`ReadonlyArrayLike`](keyedcontainers.ReadonlyArrayLike.md)<`T`\>\>

Converts the ContainerLike to a `ReadonlyArrayLike`.

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

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/keyedcontainers.md#keyedcontainerof)<`C`, `TKey`, `T`\>, [`ReadonlyArrayLike`](keyedcontainers.ReadonlyArrayLike.md)<`T`\>\>
