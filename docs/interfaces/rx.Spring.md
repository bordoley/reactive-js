[Reactive-JS](../README.md) / [rx](../modules/rx.md) / Spring

# Interface: Spring<C\>

[rx](../modules/rx.md).Spring

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md) |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Spring`**

## Table of contents

### Constructor Methods

- [spring](rx.Spring.md#spring)

## Constructor Methods

### spring

▸ **spring**(`options?`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.damping?` | `number` |
| `options.precision?` | `number` |
| `options.stiffness?` | `number` |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, `number`\>
