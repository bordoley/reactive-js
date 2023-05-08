[Reactive-JS](../README.md) / [core](../modules/core.md) / [Container](../modules/core.Container.md) / Buffer

# Interface: Buffer<C\>

[core](../modules/core.md).[Container](../modules/core.Container.md).Buffer

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container-1.md) |

## Table of contents

### Operator Properties

- [buffer](core.Container.Buffer.md#buffer)

## Operator Properties

### buffer

• **buffer**: <T\>(`options?`: { `count?`: `number`  }) => [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly `T`[]\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly `T`[]\>

Returns a Container which buffers items produced by the source until the
number of items reaches the specified maximum buffer size.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

##### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly `T`[]\>
