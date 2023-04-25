[Reactive-JS](../README.md) / [rx](../modules/rx.md) / FromIterable

# Interface: FromIterable<C\>

[rx](../modules/rx.md).FromIterable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |

## Hierarchy

- [`FromIterable`](containers.FromIterable.md)<`C`\>

  ↳ **`FromIterable`**

## Table of contents

### Constructor Methods

- [fromIterable](rx.FromIterable.md#fromiterable)

## Constructor Methods

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>

#### Overrides

[FromIterable](containers.FromIterable.md).[fromIterable](containers.FromIterable.md#fromiterable)
