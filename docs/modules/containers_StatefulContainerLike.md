[Reactive-JS](../README.md) / containers/StatefulContainerLike

# Module: containers/StatefulContainerLike

## Table of contents

### Interfaces

- [StatefulContainerLike](../interfaces/containers_StatefulContainerLike.StatefulContainerLike.md)

### Type Aliases

- [CatchError](containers_StatefulContainerLike.md#catcherror)
- [DecodeWithCharset](containers_StatefulContainerLike.md#decodewithcharset)
- [Defer](containers_StatefulContainerLike.md#defer)
- [FromIterable](containers_StatefulContainerLike.md#fromiterable)
- [FromIterator](containers_StatefulContainerLike.md#fromiterator)
- [StatefulContainerStateOf](containers_StatefulContainerLike.md#statefulcontainerstateof)
- [ThrowIfEmpty](containers_StatefulContainerLike.md#throwifempty)
- [Using](containers_StatefulContainerLike.md#using)

### Functions

- [encodeUtf8](containers_StatefulContainerLike.md#encodeutf8)
- [genMap](containers_StatefulContainerLike.md#genmap)

## Type Aliases

### CatchError

Ƭ **CatchError**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `catchError`: <T\>(`onError`: [`Function1`](util_functions.md#function1)<`unknown`, `void` \| [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>\>) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](../interfaces/containers_StatefulContainerLike.StatefulContainerLike.md) |

___

### DecodeWithCharset

Ƭ **DecodeWithCharset**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `decodeWithCharset`: (`charset?`: `string`) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `ArrayBuffer`, `string`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](../interfaces/containers_StatefulContainerLike.StatefulContainerLike.md) |

___

### Defer

Ƭ **Defer**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `defer`: <T\>(`factory`: [`Factory`](util_functions.md#factory)<[`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>\>) => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](../interfaces/containers_StatefulContainerLike.StatefulContainerLike.md) |

___

### FromIterable

Ƭ **FromIterable**<`C`, `O`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `fromIterable`: <T\>(`options?`: `Partial`<`O`\>) => [`Function1`](util_functions.md#function1)<`Iterable`<`T`\>, [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](../interfaces/containers_StatefulContainerLike.StatefulContainerLike.md) |
| `O` | extends `Record`<`string`, `never`\> = `Record`<`string`, `never`\> |

___

### FromIterator

Ƭ **FromIterator**<`C`, `O`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `fromIterator`: <T, TReturn, TNext\>(`options?`: `Partial`<`O`\>) => [`Function1`](util_functions.md#function1)<[`Factory`](util_functions.md#factory)<`Iterator`<`T`, `TReturn`, `TNext`\>\>, [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](../interfaces/containers_StatefulContainerLike.StatefulContainerLike.md) |
| `O` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `never`\> |

___

### StatefulContainerStateOf

Ƭ **StatefulContainerStateOf**<`C`, `T`\>: `C` extends { `TStatefulContainerState?`: [`DisposableLike`](../interfaces/util_DisposableLike.DisposableLike.md)  } ? `NonNullable`<`C` & { `T`: `T`  }[``"TStatefulContainerState"``]\> : { `_C`: `C` ; `_T`: () => `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](../interfaces/containers_StatefulContainerLike.StatefulContainerLike.md) |
| `T` | `T` |

___

### ThrowIfEmpty

Ƭ **ThrowIfEmpty**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `throwIfEmpty`: <T\>(`factory`: [`Factory`](util_functions.md#factory)<`unknown`\>) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `T`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](../interfaces/containers_StatefulContainerLike.StatefulContainerLike.md) |

___

### Using

Ƭ **Using**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `using`: <TResource, T\>(`resourceFactory`: [`Factory`](util_functions.md#factory)<`TResource`\>, `containerFactory`: [`Function1`](util_functions.md#function1)<`TResource`, [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>\>) => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\><TResource1, TResource2, T\>(`resourceFactory`: [`Factory`](util_functions.md#factory)<[`TResource1`, `TResource2`]\>, `containerFactory`: [`Function2`](util_functions.md#function2)<`TResource1`, `TResource2`, [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>\>) => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\><TResource1, TResource2, TResource3, T\>(`resourceFactory`: [`Factory`](util_functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`]\>, `containerFactory`: [`Function3`](util_functions.md#function3)<`TResource1`, `TResource2`, `TResource3`, [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>\>) => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\><TResource1, TResource2, TResource3, TResource4, T\>(`resourceFactory`: [`Factory`](util_functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`, `TResource4`]\>, `containerFactory`: [`Function4`](util_functions.md#function4)<`TResource1`, `TResource2`, `TResource3`, `TResource4`, [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>\>) => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\><TResource1, TResource2, TResource3, TResource4, TResource5, T\>(`resourceFactory`: [`Factory`](util_functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`]\>, `containerFactory`: [`Function5`](util_functions.md#function5)<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`, [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>\>) => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\><TResource, T\>(`resourceFactory`: [`Factory`](util_functions.md#factory)<`TResource` \| readonly `TResource`[]\>, `runnableFactory`: (...`resources`: readonly `TResource`[]) => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>) => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](../interfaces/containers_StatefulContainerLike.StatefulContainerLike.md) |

## Functions

### encodeUtf8

▸ **encodeUtf8**<`C`\>(`m`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `string`, `Uint8Array`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](../interfaces/containers_StatefulContainerLike.StatefulContainerLike.md)<`unknown`, `C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Container`](containers_ContainerLike.md#container)<`C`\> & { `defer`: <T\>(`factory`: [`Factory`](util_functions.md#factory)<[`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>\>) => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>  } & { `map`: <TA, TB\>(`mapper`: [`Function1`](util_functions.md#function1)<`TA`, `TB`\>) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `TA`, `TB`\>  } |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `string`, `Uint8Array`\>

___

### genMap

▸ **genMap**<`C`, `TA`, `TB`, `OConcatAll`, `OFromIterator`, `TReturn`, `TNext`\>(`m`, `mapper`, `options?`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](../interfaces/containers_StatefulContainerLike.StatefulContainerLike.md)<`unknown`, `C`\> |
| `TA` | `TA` |
| `TB` | `TB` |
| `OConcatAll` | extends `Record`<`string`, `never`\> = `Record`<`string`, `never`\> |
| `OFromIterator` | extends `Record`<`string`, `never`\> = `Record`<`string`, `never`\> |
| `TReturn` | `any` |
| `TNext` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Container`](containers_ContainerLike.md#container)<`C`\> & { `map`: <TA_1, TB_1\>(`mapper`: [`Function1`](util_functions.md#function1)<`TA_1`, `TB_1`\>) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `TA_1`, `TB_1`\>  } & { `concatAll`: <T\>(`options?`: `Partial`<`OConcatAll`\>) => [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>, `T`\>  } & { `fromIterator`: <T_1, TReturn_1, TNext_1\>(`options?`: `Partial`<`OFromIterator`\>) => [`Function1`](util_functions.md#function1)<[`Factory`](util_functions.md#factory)<`Iterator`<`T_1`, `TReturn_1`, `TNext_1`\>\>, [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T_1`\>\>  } |
| `mapper` | [`Function1`](util_functions.md#function1)<`TA`, `Generator`<`TB`, `TReturn`, `TNext`\>\> |
| `options?` | `Partial`<`OConcatAll` & `OFromIterator`\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<`C`, `TA`, `TB`\>
