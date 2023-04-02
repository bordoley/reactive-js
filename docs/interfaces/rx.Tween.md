[Reactive-JS](../README.md) / [rx](../modules/rx.md) / Tween

# Interface: Tween<C\>

[rx](../modules/rx.md).Tween

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md) |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Tween`**

## Table of contents

### Constructor Methods

- [tween](rx.Tween.md#tween)

## Constructor Methods

### tween

▸ **tween**(`duration`, `options?`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `number` |
| `options?` | `Object` |
| `options.easing?` | [`Function1`](../modules/functions.md#function1)<`number`, `number`\> |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, `number`\>
