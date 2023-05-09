[Reactive-JS](../README.md) / [containers](containers.md) / Containers

# Namespace: Containers

[containers](containers.md).Containers

## Table of contents

### Type Aliases

- [Of](containers.Containers.md#of)
- [Operator](containers.Containers.md#operator)

## Type Aliases

### Of

Ƭ **Of**<`C`, `T`\>: `C` extends { `[___Container_type]?`: `unknown`  } ? `NonNullable`<`C` & { `[___Container_T]`: `T`  }[typeof [`Container_type`](containers.md#container_type)]\> : { `_C`: `C` ; `_T`: () => `T`  }

Utility type for higher order programming with Containers.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/containers.Container.md) |
| `T` | `T` |

___

### Operator

Ƭ **Operator**<`C`, `TA`, `TB`\>: [`Function1`](functions.md#function1)<[`Of`](containers.Containers.md#of)<`C`, `TA`\>, [`Of`](containers.Containers.md#of)<`C`, `TB`\>\>

Utility type for a generic operator function that transforms a Container's inner value type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/containers.Container.md) |
| `TA` | `TA` |
| `TB` | `TB` |
