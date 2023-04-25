[Reactive-JS](../README.md) / [rx](../modules/rx.md) / Empty

# Interface: Empty<C\>

[rx](../modules/rx.md).Empty

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |

## Hierarchy

- [`Empty`](containers.Empty.md)<`C`\>

  ↳ **`Empty`**

## Table of contents

### Constructor Methods

- [empty](rx.Empty.md#empty)

## Constructor Methods

### empty

▸ **empty**<`T`\>(`options?`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

Return an ContainerLike that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

#### Overrides

[Empty](containers.Empty.md).[empty](containers.Empty.md#empty)
