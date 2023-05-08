[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / Generate

# Interface: Generate<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).Generate

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Hierarchy

- [`Generate`](core.Container.Generate.md)<`C`\>

  ↳ **`Generate`**

## Table of contents

### Constructor Methods

- [generate](core.ReactiveContainer.Generate.md#generate)

## Constructor Methods

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`Of`](../modules/core.Container.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, `T`\>

#### Overrides

[Generate](core.Container.Generate.md).[generate](core.Container.Generate.md#generate)
