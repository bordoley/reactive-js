[Reactive-JS](../README.md) / containers

# Module: containers

## Table of contents

### Interfaces

- [ContainerLike](../interfaces/containers.ContainerLike.md)
- [IterableLike](../interfaces/containers.IterableLike.md)
- [ReadonlyArrayLike](../interfaces/containers.ReadonlyArrayLike.md)
- [SequenceLike](../interfaces/containers.SequenceLike.md)
- [StatefulContainerLike](../interfaces/containers.StatefulContainerLike.md)

### Type Aliases

- [Buffer](containers.md#buffer)
- [CatchError](containers.md#catcherror)
- [Concat](containers.md#concat)
- [ConcatAll](containers.md#concatall)
- [Container](containers.md#container)
- [ContainerOf](containers.md#containerof)
- [ContainerOperator](containers.md#containeroperator)
- [DecodeWithCharset](containers.md#decodewithcharset)
- [Defer](containers.md#defer)
- [DistinctUntilChanged](containers.md#distinctuntilchanged)
- [Empty](containers.md#empty)
- [EverySatisfy](containers.md#everysatisfy)
- [FromArray](containers.md#fromarray)
- [FromArrayOptions](containers.md#fromarrayoptions)
- [FromIterable](containers.md#fromiterable)
- [FromIterator](containers.md#fromiterator)
- [FromValue](containers.md#fromvalue)
- [Generate](containers.md#generate)
- [Keep](containers.md#keep)
- [Map](containers.md#map)
- [Pairwise](containers.md#pairwise)
- [Reduce](containers.md#reduce)
- [Repeat](containers.md#repeat)
- [Scan](containers.md#scan)
- [SkipFirst](containers.md#skipfirst)
- [SomeSatisfy](containers.md#somesatisfy)
- [StatefulContainerStateOf](containers.md#statefulcontainerstateof)
- [TakeFirst](containers.md#takefirst)
- [TakeLast](containers.md#takelast)
- [TakeWhile](containers.md#takewhile)
- [ThrowIfEmpty](containers.md#throwifempty)
- [ToIterable](containers.md#toiterable)
- [ToReadonlyArray](containers.md#toreadonlyarray)
- [ToSequence](containers.md#tosequence)
- [Using](containers.md#using)
- [Zip](containers.md#zip)

### Variables

- [emptyReadonlyArrayT](containers.md#emptyreadonlyarrayt)
- [fromArrayReadonlyArrayT](containers.md#fromarrayreadonlyarrayt)
- [generateSequenceT](containers.md#generatesequencet)

### Functions

- [emptyReadonlyArray](containers.md#emptyreadonlyarray)
- [fromArrayReadonlyArray](containers.md#fromarrayreadonlyarray)
- [generateSequence](containers.md#generatesequence)

## Type Aliases

### Buffer

Ƭ **Buffer**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `buffer`: <T\>(`options?`: { `maxBufferSize?`: `number`  }) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, readonly `T`[]\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### CatchError

Ƭ **CatchError**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `catchError`: <T\>(`onError`: [`Function1`](functions.md#function1)<`unknown`, `void` \| [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](../interfaces/containers.StatefulContainerLike.md) |

___

### Concat

Ƭ **Concat**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `concat`: <T\>(`fst`: [`ContainerOf`](containers.md#containerof)<`C`, `T`\>, `snd`: [`ContainerOf`](containers.md#containerof)<`C`, `T`\>, ...`tail`: readonly [`ContainerOf`](containers.md#containerof)<`C`, `T`\>[]) => [`ContainerOf`](containers.md#containerof)<`C`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### ConcatAll

Ƭ **ConcatAll**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `concatAll`: <T\>(`options?`: `Partial`<`O`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `Record`<`string`, `never`\> |

___

### Container

Ƭ **Container**<`C`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `TContainerOf?` | `C` |

___

### ContainerOf

Ƭ **ContainerOf**<`C`, `T`\>: `C` extends { `TContainerOf?`: `unknown`  } ? `NonNullable`<`C` & { `T`: `T`  }[``"TContainerOf"``]\> : { `_C`: `C` ; `_T`: () => `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `T` | `T` |

___

### ContainerOperator

Ƭ **ContainerOperator**<`C`, `TA`, `TB`\>: [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `TA`\>, [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `C` |
| `TA` |
| `TB` |

___

### DecodeWithCharset

Ƭ **DecodeWithCharset**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `decodeWithCharset`: (`charset?`: `string`) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `ArrayBuffer`, `string`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](../interfaces/containers.StatefulContainerLike.md) |

___

### Defer

Ƭ **Defer**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `defer`: <T\>(`factory`: [`Factory`](functions.md#factory)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>) => [`ContainerOf`](containers.md#containerof)<`C`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](../interfaces/containers.StatefulContainerLike.md) |

___

### DistinctUntilChanged

Ƭ **DistinctUntilChanged**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `distinctUntilChanged`: <T\>(`options?`: { `equality?`: [`Equality`](functions.md#equality)<`T`\>  }) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### Empty

Ƭ **Empty**<`C`, `TOptions`\>: [`Container`](containers.md#container)<`C`\> & { `empty`: <T\>(`options?`: `TOptions`) => [`ContainerOf`](containers.md#containerof)<`C`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TOptions` | `never` |

___

### EverySatisfy

Ƭ **EverySatisfy**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `everySatisfy`: <T\>(`predicate`: [`Predicate`](functions.md#predicate)<`T`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `boolean`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### FromArray

Ƭ **FromArray**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `fromArray`: <T\>(`options?`: `Partial`<`O`\>) => [`Function1`](functions.md#function1)<readonly `T`[], [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | extends [`FromArrayOptions`](containers.md#fromarrayoptions) = [`FromArrayOptions`](containers.md#fromarrayoptions) |

___

### FromArrayOptions

Ƭ **FromArrayOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `start` | `number` |

___

### FromIterable

Ƭ **FromIterable**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `fromIterable`: <T\>(`options?`: `Partial`<`O`\>) => [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](../interfaces/containers.StatefulContainerLike.md) |
| `O` | extends `Record`<`string`, `never`\> = `Record`<`string`, `never`\> |

___

### FromIterator

Ƭ **FromIterator**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `fromIterator`: <T, TReturn, TNext\>(`options?`: `Partial`<`O`\>) => [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`Iterator`<`T`, `TReturn`, `TNext`\>\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](../interfaces/containers.StatefulContainerLike.md) |
| `O` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `never`\> |

___

### FromValue

Ƭ **FromValue**<`C`, `TOptions`\>: [`Container`](containers.md#container)<`C`\> & { `fromValue`: <T\>(`options?`: `TOptions`) => [`Function1`](functions.md#function1)<`T`, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TOptions` | `never` |

___

### Generate

Ƭ **Generate**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `generate`: <T\>(`generator`: [`Updater`](functions.md#updater)<`T`\>, `initialValue`: [`Factory`](functions.md#factory)<`T`\>) => [`ContainerOf`](containers.md#containerof)<`C`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### Keep

Ƭ **Keep**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `keep`: <T\>(`predicate`: [`Predicate`](functions.md#predicate)<`T`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### Map

Ƭ **Map**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `map`: <TA, TB\>(`mapper`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `TB`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### Pairwise

Ƭ **Pairwise**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `pairwise`: <T\>() => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, readonly [[`Option`](functions.md#option)<`T`\>, `T`]\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### Reduce

Ƭ **Reduce**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `reduce`: <T, TAcc\>(`reducer`: [`Reducer`](functions.md#reducer)<`T`, `TAcc`\>, `initialValue`: [`Factory`](functions.md#factory)<`TAcc`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TAcc`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### Repeat

Ƭ **Repeat**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `repeat`: <T\>(`predicate`: [`Predicate`](functions.md#predicate)<`number`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\><T\>(`count`: `number`) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\><T\>() => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### Scan

Ƭ **Scan**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `scan`: <T, TAcc\>(`scanner`: [`Reducer`](functions.md#reducer)<`T`, `TAcc`\>, `initialValue`: [`Factory`](functions.md#factory)<`TAcc`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TAcc`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### SkipFirst

Ƭ **SkipFirst**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `skipFirst`: <T\>(`options?`: { `count?`: `number`  }) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### SomeSatisfy

Ƭ **SomeSatisfy**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `someSatisfy`: <T\>(`predicate`: [`Predicate`](functions.md#predicate)<`T`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `boolean`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### StatefulContainerStateOf

Ƭ **StatefulContainerStateOf**<`C`, `T`\>: `C` extends { `TStatefulContainerState?`: [`DisposableLike`](../interfaces/util.DisposableLike.md)  } ? `NonNullable`<`C` & { `T`: `T`  }[``"TStatefulContainerState"``]\> : { `_C`: `C` ; `_T`: () => `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](../interfaces/containers.StatefulContainerLike.md) |
| `T` | `T` |

___

### TakeFirst

Ƭ **TakeFirst**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `takeFirst`: <T\>(`options?`: { `count?`: `number`  }) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### TakeLast

Ƭ **TakeLast**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `takeLast`: <T\>(`options?`: { `count?`: `number`  }) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### TakeWhile

Ƭ **TakeWhile**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `takeWhile`: <T\>(`predicate`: [`Predicate`](functions.md#predicate)<`T`\>, `options?`: { `inclusive?`: `boolean`  }) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### ThrowIfEmpty

Ƭ **ThrowIfEmpty**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `throwIfEmpty`: <T\>(`factory`: [`Factory`](functions.md#factory)<`unknown`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](../interfaces/containers.StatefulContainerLike.md) |

___

### ToIterable

Ƭ **ToIterable**<`C`, `TOptions`\>: [`Container`](containers.md#container)<`C`\> & { `toIterable`: <T\>(`options?`: `TOptions`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, `Iterable`<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TOptions` | `never` |

___

### ToReadonlyArray

Ƭ **ToReadonlyArray**<`C`, `TOptions`\>: [`Container`](containers.md#container)<`C`\> & { `toReadonlyArray`: <T\>(`options?`: `TOptions`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TOptions` | `never` |

___

### ToSequence

Ƭ **ToSequence**<`C`, `TOptions`\>: [`Container`](containers.md#container)<`C`\> & { `toSequence`: <T\>(`options?`: `TOptions`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TOptions` | `never` |

___

### Using

Ƭ **Using**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `using`: <TResource, T\>(`resourceFactory`: [`Factory`](functions.md#factory)<`TResource`\>, `containerFactory`: [`Function1`](functions.md#function1)<`TResource`, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>) => [`ContainerOf`](containers.md#containerof)<`C`, `T`\><TResource1, TResource2, T\>(`resourceFactory`: [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`]\>, `containerFactory`: [`Function2`](functions.md#function2)<`TResource1`, `TResource2`, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>) => [`ContainerOf`](containers.md#containerof)<`C`, `T`\><TResource1, TResource2, TResource3, T\>(`resourceFactory`: [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`]\>, `containerFactory`: [`Function3`](functions.md#function3)<`TResource1`, `TResource2`, `TResource3`, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>) => [`ContainerOf`](containers.md#containerof)<`C`, `T`\><TResource1, TResource2, TResource3, TResource4, T\>(`resourceFactory`: [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`, `TResource4`]\>, `containerFactory`: [`Function4`](functions.md#function4)<`TResource1`, `TResource2`, `TResource3`, `TResource4`, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>) => [`ContainerOf`](containers.md#containerof)<`C`, `T`\><TResource1, TResource2, TResource3, TResource4, TResource5, T\>(`resourceFactory`: [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`]\>, `containerFactory`: [`Function5`](functions.md#function5)<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>) => [`ContainerOf`](containers.md#containerof)<`C`, `T`\><TResource, T\>(`resourceFactory`: [`Factory`](functions.md#factory)<`TResource` \| readonly `TResource`[]\>, `runnableFactory`: (...`resources`: readonly `TResource`[]) => [`ContainerOf`](containers.md#containerof)<`C`, `T`\>) => [`ContainerOf`](containers.md#containerof)<`C`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](../interfaces/containers.StatefulContainerLike.md) |

___

### Zip

Ƭ **Zip**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `zip`: <TA, TB\>(`a`: [`ContainerOf`](containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>) => [`ContainerOf`](containers.md#containerof)<`C`, readonly [`TA`, `TB`]\><TA, TB, TC\>(`a`: [`ContainerOf`](containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](containers.md#containerof)<`C`, `TC`\>) => [`ContainerOf`](containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`]\><TA, TB, TC, TD\>(`a`: [`ContainerOf`](containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](containers.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](containers.md#containerof)<`C`, `TD`\>) => [`ContainerOf`](containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\><TA, TB, TC, TD, TE\>(`a`: [`ContainerOf`](containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](containers.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](containers.md#containerof)<`C`, `TD`\>, `e`: [`ContainerOf`](containers.md#containerof)<`C`, `TE`\>) => [`ContainerOf`](containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\><TA, TB, TC, TD, TE, TF\>(`a`: [`ContainerOf`](containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](containers.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](containers.md#containerof)<`C`, `TD`\>, `e`: [`ContainerOf`](containers.md#containerof)<`C`, `TE`\>, `f`: [`ContainerOf`](containers.md#containerof)<`C`, `TF`\>) => [`ContainerOf`](containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\><TA, TB, TC, TD, TE, TF, TG\>(`a`: [`ContainerOf`](containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](containers.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](containers.md#containerof)<`C`, `TD`\>, `e`: [`ContainerOf`](containers.md#containerof)<`C`, `TE`\>, `f`: [`ContainerOf`](containers.md#containerof)<`C`, `TF`\>, `g`: [`ContainerOf`](containers.md#containerof)<`C`, `TG`\>) => [`ContainerOf`](containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\><TA, TB, TC, TD, TE, TF, TG, TH\>(`a`: [`ContainerOf`](containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](containers.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](containers.md#containerof)<`C`, `TD`\>, `e`: [`ContainerOf`](containers.md#containerof)<`C`, `TE`\>, `f`: [`ContainerOf`](containers.md#containerof)<`C`, `TF`\>, `g`: [`ContainerOf`](containers.md#containerof)<`C`, `TG`\>, `h`: [`ContainerOf`](containers.md#containerof)<`C`, `TH`\>) => [`ContainerOf`](containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\><TA, TB, TC, TD, TE, TF, TG, TH, TI\>(`a`: [`ContainerOf`](containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](containers.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](containers.md#containerof)<`C`, `TD`\>, `e`: [`ContainerOf`](containers.md#containerof)<`C`, `TE`\>, `f`: [`ContainerOf`](containers.md#containerof)<`C`, `TF`\>, `g`: [`ContainerOf`](containers.md#containerof)<`C`, `TG`\>, `h`: [`ContainerOf`](containers.md#containerof)<`C`, `TH`\>, `i`: [`ContainerOf`](containers.md#containerof)<`C`, `TI`\>) => [`ContainerOf`](containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

## Variables

### emptyReadonlyArrayT

• `Const` **emptyReadonlyArrayT**: [`Empty`](containers.md#empty)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)\>

___

### fromArrayReadonlyArrayT

• `Const` **fromArrayReadonlyArrayT**: [`FromArray`](containers.md#fromarray)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)\>

___

### generateSequenceT

• `Const` **generateSequenceT**: [`Generate`](containers.md#generate)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)\>

## Functions

### emptyReadonlyArray

▸ **emptyReadonlyArray**<`T`\>(`options?`): [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>

___

### fromArrayReadonlyArray

▸ **fromArrayReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`FromArrayOptions`](containers.md#fromarrayoptions)\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### generateSequence

▸ **generateSequence**<`T`\>(`generator`, `initialValue`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> |

#### Returns

[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>
