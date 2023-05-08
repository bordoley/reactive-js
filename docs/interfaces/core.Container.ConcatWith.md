[Reactive-JS](../README.md) / [core](../modules/core.md) / [Container](../modules/core.Container.md) / ConcatWith

# Interface: ConcatWith<C\>

[core](../modules/core.md).[Container](../modules/core.Container.md).ConcatWith

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container-1.md) |

## Table of contents

### Operator Properties

- [concatWith](core.Container.ConcatWith.md#concatwith)

## Operator Properties

### concatWith

• **concatWith**: <T\>(`snd`: [`Of`](../modules/core.Container.md#of)<`C`, `T`\>, ...`tail`: readonly [`Of`](../modules/core.Container.md#of)<`C`, `T`\>[]) => [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`Of`](../modules/core.Container.md#of)<`C`, `T`\> |
| `...tail` | readonly [`Of`](../modules/core.Container.md#of)<`C`, `T`\>[] |

##### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>
