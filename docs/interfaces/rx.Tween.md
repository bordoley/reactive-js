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

### Properties

- [ContainerLike\_type](rx.Tween.md#containerlike_type)

### Constructor Methods

- [tween](rx.Tween.md#tween)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Constructor Methods

### tween

▸ **tween**(`start`, `finish`, `options?`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `finish` | `number` |
| `options?` | `Object` |
| `options.duration?` | `number` |
| `options.easing?` | [`Function1`](../modules/functions.md#function1)<`number`, `number`\> |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, `number`\>
