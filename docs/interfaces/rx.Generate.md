[Reactive-JS](../README.md) / [rx](../modules/rx.md) / Generate

# Interface: Generate<C\>

[rx](../modules/rx.md).Generate

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |

## Hierarchy

- [`Generate`](containers.Generate.md)<`C`\>

  ↳ **`Generate`**

## Table of contents

### Constructor Methods

- [generate](rx.Generate.md#generate)

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
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> | The generator function. |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> | Factory function used to generate the initial accumulator. |
| `options?` | `Object` | - |
| `options.delay?` | `number` | - |
| `options.delayStart?` | `boolean` | - |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

#### Overrides

[Generate](containers.Generate.md).[generate](containers.Generate.md#generate)
