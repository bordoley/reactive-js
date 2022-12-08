[Reactive-JS](../README.md) / containers

# Module: containers

## Table of contents

### Interfaces

- [AsyncIterableLike](../interfaces/containers.AsyncIterableLike.md)
- [ContainerLike](../interfaces/containers.ContainerLike.md)
- [IterableLike](../interfaces/containers.IterableLike.md)
- [PromiseableLike](../interfaces/containers.PromiseableLike.md)
- [ReadonlyArrayLike](../interfaces/containers.ReadonlyArrayLike.md)
- [ReadonlySetLike](../interfaces/containers.ReadonlySetLike.md)
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
- [ForEach](containers.md#foreach)
- [ForkConcat](containers.md#forkconcat)
- [ForkZip](containers.md#forkzip)
- [FromArray](containers.md#fromarray)
- [FromArrayOptions](containers.md#fromarrayoptions)
- [FromAsyncIterable](containers.md#fromasynciterable)
- [FromIterable](containers.md#fromiterable)
- [FromPromise](containers.md#frompromise)
- [FromSequence](containers.md#fromsequence)
- [FromSet](containers.md#fromset)
- [Generate](containers.md#generate)
- [Keep](containers.md#keep)
- [Map](containers.md#map)
- [Never](containers.md#never)
- [Pairwise](containers.md#pairwise)
- [Reduce](containers.md#reduce)
- [Repeat](containers.md#repeat)
- [Scan](containers.md#scan)
- [SkipFirst](containers.md#skipfirst)
- [SomeSatisfy](containers.md#somesatisfy)
- [TakeFirst](containers.md#takefirst)
- [TakeLast](containers.md#takelast)
- [TakeWhile](containers.md#takewhile)
- [ThrowIfEmpty](containers.md#throwifempty)
- [ToAsyncIterable](containers.md#toasynciterable)
- [ToIterable](containers.md#toiterable)
- [ToPromiseable](containers.md#topromiseable)
- [ToReadonlyArray](containers.md#toreadonlyarray)
- [ToReadonlySet](containers.md#toreadonlyset)
- [ToSequence](containers.md#tosequence)
- [Zip](containers.md#zip)

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
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

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
| `O` | `never` |

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
| `ContainerLike_type?` | `C` |

___

### ContainerOf

Ƭ **ContainerOf**<`C`, `T`\>: `C` extends { `[ContainerLike_type]?`: `unknown`  } ? `NonNullable`<`C` & { `[ContainerLike_T]`: `T`  }[typeof `ContainerLike_type`]\> : { `_C`: `C` ; `_T`: () => `T`  }

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
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### Defer

Ƭ **Defer**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `defer`: <T\>(`factory`: [`Factory`](functions.md#factory)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>, `options?`: `Partial`<`O`\>) => [`ContainerOf`](containers.md#containerof)<`C`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

___

### DistinctUntilChanged

Ƭ **DistinctUntilChanged**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `distinctUntilChanged`: <T\>(`options?`: { `equality?`: [`Equality`](functions.md#equality)<`T`\>  }) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### Empty

Ƭ **Empty**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `empty`: <T\>(`options?`: `Partial`<`O`\>) => [`ContainerOf`](containers.md#containerof)<`C`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

___

### EverySatisfy

Ƭ **EverySatisfy**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `everySatisfy`: <T\>(`predicate`: [`Predicate`](functions.md#predicate)<`T`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `boolean`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### ForEach

Ƭ **ForEach**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `forEach`: <T\>(`effect`: [`SideEffect1`](functions.md#sideeffect1)<`T`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### ForkConcat

Ƭ **ForkConcat**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `forkConcat`: <TIn, TOut\>(`fst`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `TIn`, `TOut`\>, `snd`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `TIn`, `TOut`\>, ...`tail`: readonly [`ContainerOperator`](containers.md#containeroperator)<`C`, `TIn`, `TOut`\>[]) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `TIn`, `TOut`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### ForkZip

Ƭ **ForkZip**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `forkZip`: <T, TA, TB\>(`a`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TA`\>, `b`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TB`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`]\><T, TA, TB, TC\>(`a`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TA`\>, `b`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TB`\>, `c`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TC`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\><T, TA, TB, TC, TD\>(`a`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TA`\>, `b`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TB`\>, `c`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TC`\>, `d`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TD`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\><T, TA, TB, TC, TD, TE\>(`a`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TA`\>, `b`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TB`\>, `c`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TC`\>, `d`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TD`\>, `e`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TE`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\><T, TA, TB, TC, TD, TE, TF\>(`a`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TA`\>, `b`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TB`\>, `c`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TC`\>, `d`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TD`\>, `e`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TE`\>, `f`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TF`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\><T, TA, TB, TC, TD, TE, TF, TG\>(`a`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TA`\>, `b`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TB`\>, `c`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TC`\>, `d`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TD`\>, `e`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TE`\>, `f`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TF`\>, `g`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TG`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\><T, TA, TB, TC, TD, TE, TF, TG, TH\>(`a`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TA`\>, `b`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TB`\>, `c`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TC`\>, `d`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TD`\>, `e`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TE`\>, `f`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TF`\>, `g`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TG`\>, `h`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TH`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\><T, TA, TB, TC, TD, TE, TF, TG, TH, TI\>(`a`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TA`\>, `b`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TB`\>, `c`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TC`\>, `d`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TD`\>, `e`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TE`\>, `f`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TF`\>, `g`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TG`\>, `h`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TH`\>, `i`: [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TI`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>  }

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
| `count` | [`Option`](functions.md#option)<`number`\> |
| `start` | [`Option`](functions.md#option)<`number`\> |

___

### FromAsyncIterable

Ƭ **FromAsyncIterable**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `fromAsyncIterable`: <T\>(`options?`: `Partial`<`O`\>) => [`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

___

### FromIterable

Ƭ **FromIterable**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `fromIterable`: <T\>(`options?`: `Partial`<`O`\>) => [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

___

### FromPromise

Ƭ **FromPromise**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `fromPromise`: <T\>(`options?`: `Partial`<`O`\>) => [`Function1`](functions.md#function1)<[`PromiseableLike`](../interfaces/containers.PromiseableLike.md)<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

___

### FromSequence

Ƭ **FromSequence**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `fromSequence`: <T\>(`options?`: `Partial`<`O`\>) => [`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

___

### FromSet

Ƭ **FromSet**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `fromSet`: <T\>(`options?`: `Partial`<`O`\>) => [`Function1`](functions.md#function1)<`ReadonlySet`<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | extends [`FromArrayOptions`](containers.md#fromarrayoptions) = [`FromArrayOptions`](containers.md#fromarrayoptions) |

___

### Generate

Ƭ **Generate**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `generate`: <T\>(`generator`: [`Updater`](functions.md#updater)<`T`\>, `initialValue`: [`Factory`](functions.md#factory)<`T`\>, `options?`: `Partial`<`O`\>) => [`ContainerOf`](containers.md#containerof)<`C`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

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

### Never

Ƭ **Never**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `never`: <T\>() => [`ContainerOf`](containers.md#containerof)<`C`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`StatefulContainerLike`](../interfaces/containers.StatefulContainerLike.md) |

___

### Pairwise

Ƭ **Pairwise**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `pairwise`: <T\>() => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, readonly [`T`, `T`]\>  }

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
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |

___

### ToAsyncIterable

Ƭ **ToAsyncIterable**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `toAsyncIterable`: <T\>(`options?`: `Partial`<`O`\>) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`AsyncIterableLike`](../interfaces/containers.AsyncIterableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

___

### ToIterable

Ƭ **ToIterable**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `toIterable`: <T\>(`options?`: `Partial`<`O`\>) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

___

### ToPromiseable

Ƭ **ToPromiseable**<`C`, `Ctx`\>: [`Container`](containers.md#container)<`C`\> & { `toPromise`: <T\>(`ctx`: `Ctx`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`PromiseableLike`](../interfaces/containers.PromiseableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `Ctx` | `void` |

___

### ToReadonlyArray

Ƭ **ToReadonlyArray**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `toReadonlyArray`: <T\>(`options?`: `Partial`<`O`\>) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

___

### ToReadonlySet

Ƭ **ToReadonlySet**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `toReadonlySet`: <T\>(`options?`: `Partial`<`O`\>) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`ReadonlySetLike`](../interfaces/containers.ReadonlySetLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

___

### ToSequence

Ƭ **ToSequence**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `toSequence`: <T\>(`options?`: `Partial`<`O`\>) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

___

### Zip

Ƭ **Zip**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `zip`: <TA, TB\>(`a`: [`ContainerOf`](containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>) => [`ContainerOf`](containers.md#containerof)<`C`, readonly [`TA`, `TB`]\><TA, TB, TC\>(`a`: [`ContainerOf`](containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](containers.md#containerof)<`C`, `TC`\>) => [`ContainerOf`](containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`]\><TA, TB, TC, TD\>(`a`: [`ContainerOf`](containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](containers.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](containers.md#containerof)<`C`, `TD`\>) => [`ContainerOf`](containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\><TA, TB, TC, TD, TE\>(`a`: [`ContainerOf`](containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](containers.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](containers.md#containerof)<`C`, `TD`\>, `e`: [`ContainerOf`](containers.md#containerof)<`C`, `TE`\>) => [`ContainerOf`](containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\><TA, TB, TC, TD, TE, TF\>(`a`: [`ContainerOf`](containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](containers.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](containers.md#containerof)<`C`, `TD`\>, `e`: [`ContainerOf`](containers.md#containerof)<`C`, `TE`\>, `f`: [`ContainerOf`](containers.md#containerof)<`C`, `TF`\>) => [`ContainerOf`](containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\><TA, TB, TC, TD, TE, TF, TG\>(`a`: [`ContainerOf`](containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](containers.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](containers.md#containerof)<`C`, `TD`\>, `e`: [`ContainerOf`](containers.md#containerof)<`C`, `TE`\>, `f`: [`ContainerOf`](containers.md#containerof)<`C`, `TF`\>, `g`: [`ContainerOf`](containers.md#containerof)<`C`, `TG`\>) => [`ContainerOf`](containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\><TA, TB, TC, TD, TE, TF, TG, TH\>(`a`: [`ContainerOf`](containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](containers.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](containers.md#containerof)<`C`, `TD`\>, `e`: [`ContainerOf`](containers.md#containerof)<`C`, `TE`\>, `f`: [`ContainerOf`](containers.md#containerof)<`C`, `TF`\>, `g`: [`ContainerOf`](containers.md#containerof)<`C`, `TG`\>, `h`: [`ContainerOf`](containers.md#containerof)<`C`, `TH`\>) => [`ContainerOf`](containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\><TA, TB, TC, TD, TE, TF, TG, TH, TI\>(`a`: [`ContainerOf`](containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](containers.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](containers.md#containerof)<`C`, `TD`\>, `e`: [`ContainerOf`](containers.md#containerof)<`C`, `TE`\>, `f`: [`ContainerOf`](containers.md#containerof)<`C`, `TF`\>, `g`: [`ContainerOf`](containers.md#containerof)<`C`, `TG`\>, `h`: [`ContainerOf`](containers.md#containerof)<`C`, `TH`\>, `i`: [`ContainerOf`](containers.md#containerof)<`C`, `TI`\>) => [`ContainerOf`](containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
