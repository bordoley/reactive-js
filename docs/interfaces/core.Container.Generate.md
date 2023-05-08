[Reactive-JS](../README.md) / [core](../modules/core.md) / [Container](../modules/core.Container.md) / Generate

# Interface: Generate<C\>

[core](../modules/core.md).[Container](../modules/core.Container.md).Generate

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container-1.md) |

## Hierarchy

- **`Generate`**

  ↳ [`Generate`](core.ReactiveContainer.Generate.md)

## Table of contents

### Constructor Methods

- [generate](core.Container.Generate.md#generate)

## Constructor Methods

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`Of`](../modules/core.Container.md#of)<`C`, `T`\>

Generates a Container from a generator function
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

[`Of`](../modules/core.Container.md#of)<`C`, `T`\>
