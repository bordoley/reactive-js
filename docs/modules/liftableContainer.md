[Reactive-JS](../README.md) / liftableContainer

# Module: liftableContainer

## Table of contents

### Interfaces

- [CatchError](../interfaces/liftableContainer.CatchError.md)
- [DecodeWithCharset](../interfaces/liftableContainer.DecodeWithCharset.md)
- [Defer](../interfaces/liftableContainer.Defer.md)
- [FromIterable](../interfaces/liftableContainer.FromIterable.md)
- [FromIterator](../interfaces/liftableContainer.FromIterator.md)
- [LiftableContainerLike](../interfaces/liftableContainer.LiftableContainerLike.md)
- [ThrowIfEmpty](../interfaces/liftableContainer.ThrowIfEmpty.md)
- [Using](../interfaces/liftableContainer.Using.md)

### Type Aliases

- [LiftableContainerStateOf](liftableContainer.md#liftablecontainerstateof)

### Functions

- [encodeUtf8](liftableContainer.md#encodeutf8)
- [genMap](liftableContainer.md#genmap)

## Type Aliases

### LiftableContainerStateOf

Ƭ **LiftableContainerStateOf**<`C`, `T`\>: `C` extends { `TLiftableContainerState`: [`DisposableLike`](../interfaces/disposable.DisposableLike.md)  } ? `C` & { `T`: `T`  }[``"TLiftableContainerState"``] : { `_C`: `C` ; `_T`: () => `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableContainerLike`](../interfaces/liftableContainer.LiftableContainerLike.md) |
| `T` | `T` |

## Functions

### encodeUtf8

▸ **encodeUtf8**<`C`\>(`m`): [`ContainerOperator`](container.md#containeroperator)<`C`, `string`, `Uint8Array`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableContainerLike`](../interfaces/liftableContainer.LiftableContainerLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Defer`](../interfaces/liftableContainer.Defer.md)<`C`\> & [`Map`](../interfaces/container.Map.md)<`C`\> |

#### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `string`, `Uint8Array`\>

___

### genMap

▸ **genMap**<`C`, `TA`, `TB`, `OConcatAll`, `OFromIterator`, `TReturn`, `TNext`\>(`m`, `mapper`, `options?`): [`ContainerOperator`](container.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableContainerLike`](../interfaces/liftableContainer.LiftableContainerLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `OConcatAll` | extends `Record`<`string`, `never`\> = `Record`<`string`, `never`\> |
| `OFromIterator` | extends `Record`<`string`, `never`\> = `Record`<`string`, `never`\> |
| `TReturn` | `any` |
| `TNext` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Map`](../interfaces/container.Map.md)<`C`\> & [`ConcatAll`](../interfaces/container.ConcatAll.md)<`C`, `OConcatAll`\> & [`FromIterator`](../interfaces/liftableContainer.FromIterator.md)<`C`, `OFromIterator`\> |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `Generator`<`TB`, `TReturn`, `TNext`\>\> |
| `options?` | `Partial`<`OConcatAll` & `OFromIterator`\> |

#### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `TA`, `TB`\>
