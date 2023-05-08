[Reactive-JS](../README.md) / [core](../modules/core.md) / [Container](../modules/core.Container.md) / TakeWhile

# Interface: TakeWhile<C\>

[core](../modules/core.md).[Container](../modules/core.Container.md).TakeWhile

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container-1.md) |

## Table of contents

### Operator Methods

- [takeWhile](core.Container.TakeWhile.md#takewhile)

## Operator Methods

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

Returns a Container which emits values emitted by the source as long
as each value satisfies the given predicate, and then completes as soon as
this predicate is not satisfied.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> | The predicate function. |
| `options?` | `Object` | - |
| `options.inclusive?` | `boolean` | - |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>
