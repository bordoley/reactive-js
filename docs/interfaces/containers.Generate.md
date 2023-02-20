[Reactive-JS](../README.md) / [containers](../modules/containers.md) / Generate

# Interface: Generate<C, O\>

[containers](../modules/containers.md).Generate

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Generate`**

## Table of contents

### Constructor Methods

- [generate](containers.Generate.md#generate)

## Constructor Methods

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

Generates a ContainerLike from a generator function
that is applied to an accumulator value between emitted items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> | the generator function. |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> | Factory function used to generate the initial accumulator. |
| `options?` | `O` | - |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>
