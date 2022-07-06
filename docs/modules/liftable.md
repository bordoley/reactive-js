[Reactive-JS](../README.md) / liftable

# Module: liftable

## Table of contents

### Interfaces

- [CatchError](../interfaces/liftable.CatchError.md)
- [DecodeWithCharset](../interfaces/liftable.DecodeWithCharset.md)
- [Defer](../interfaces/liftable.Defer.md)
- [FromIterable](../interfaces/liftable.FromIterable.md)
- [FromIterator](../interfaces/liftable.FromIterator.md)
- [LiftableContainerLike](../interfaces/liftable.LiftableContainerLike.md)
- [LiftableContainerStateLike](../interfaces/liftable.LiftableContainerStateLike.md)
- [ThrowIfEmpty](../interfaces/liftable.ThrowIfEmpty.md)
- [Using](../interfaces/liftable.Using.md)

### Type Aliases

- [LiftableContainerStateOf](liftable.md#liftablecontainerstateof)
- [TInteractive](liftable.md#tinteractive)
- [TReactive](liftable.md#treactive)

### Variables

- [interactive](liftable.md#interactive)
- [reactive](liftable.md#reactive)

### Functions

- [encodeUtf8](liftable.md#encodeutf8)
- [genMap](liftable.md#genmap)

## Type Aliases

### LiftableContainerStateOf

Ƭ **LiftableContainerStateOf**<`C`, `T`\>: `C` extends { `TLiftableContainerState`: `unknown`  } ? `C` & { `T`: `T`  }[``"TLiftableContainerState"``] : { `_C`: `C` ; `_T`: () => `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableContainerLike`](../interfaces/liftable.LiftableContainerLike.md) |
| `T` | `T` |

___

### TInteractive

Ƭ **TInteractive**: ``1``

___

### TReactive

Ƭ **TReactive**: ``0``

## Variables

### interactive

• `Const` **interactive**: [`TInteractive`](liftable.md#tinteractive)

___

### reactive

• `Const` **reactive**: [`TReactive`](liftable.md#treactive)

## Functions

### encodeUtf8

▸ **encodeUtf8**<`C`\>(`m`): [`ContainerOperator`](container.md#containeroperator)<`C`, `string`, `Uint8Array`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableContainerLike`](../interfaces/liftable.LiftableContainerLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Defer`](../interfaces/liftable.Defer.md)<`C`\> & [`Map`](../interfaces/container.Map.md)<`C`\> |

#### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `string`, `Uint8Array`\>

___

### genMap

▸ **genMap**<`C`, `TA`, `TB`, `OConcatAll`, `OFromIterator`, `TReturn`, `TNext`\>(`m`, `mapper`, `options?`): [`ContainerOperator`](container.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableContainerLike`](../interfaces/liftable.LiftableContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `OConcatAll` | extends `Record`<`string`, `never`\> = `Record`<`string`, `never`\> |
| `OFromIterator` | extends `Record`<`string`, `never`\> = `Record`<`string`, `never`\> |
| `TReturn` | `any` |
| `TNext` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Map`](../interfaces/container.Map.md)<`C`\> & [`ConcatAll`](../interfaces/container.ConcatAll.md)<`C`, `OConcatAll`\> & [`FromIterator`](../interfaces/liftable.FromIterator.md)<`C`, `OFromIterator`\> |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `Generator`<`TB`, `TReturn`, `TNext`\>\> |
| `options?` | `Partial`<`OConcatAll` & `OFromIterator`\> |

#### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `TA`, `TB`\>
