[Reactive-JS](../README.md) / [core](../modules/core.md) / [Container](../modules/core.Container.md) / ConcatAll

# Interface: ConcatAll<C\>

[core](../modules/core.md).[Container](../modules/core.Container.md).ConcatAll

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container-1.md) |

## Table of contents

### Operator Properties

- [concatAll](core.Container.ConcatAll.md#concatall)

## Operator Properties

### concatAll

• **concatAll**: <T\>() => [`Operator`](../modules/core.Container.md#operator)<`C`, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/core.Container.md#operator)<`C`, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `T`\>
