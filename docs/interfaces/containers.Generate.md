[Reactive-JS](../README.md) / [containers](../modules/containers.md) / Generate

# Interface: Generate<C\>

[containers](../modules/containers.md).Generate

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |

## Table of contents

### Constructor Methods

- [generate](containers.Generate.md#generate)

## Constructor Methods

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

Generates a ContainerLike from a generator function
that is applied to an accumulator value between emitted items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> | The generator function. |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> | Factory function used to generate the initial accumulator. |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>
