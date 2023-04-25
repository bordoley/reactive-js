[Reactive-JS](../README.md) / [rx](../modules/rx.md) / FromReadonlyArray

# Interface: FromReadonlyArray<C\>

[rx](../modules/rx.md).FromReadonlyArray

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |

## Hierarchy

- [`FromReadonlyArray`](containers.FromReadonlyArray.md)<`C`\>

  ↳ **`FromReadonlyArray`**

## Table of contents

### Constructor Methods

- [fromReadonlyArray](rx.FromReadonlyArray.md#fromreadonlyarray)

## Constructor Methods

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>

#### Overrides

[FromReadonlyArray](containers.FromReadonlyArray.md).[fromReadonlyArray](containers.FromReadonlyArray.md#fromreadonlyarray)
