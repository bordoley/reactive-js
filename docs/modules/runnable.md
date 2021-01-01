[Reactive-JS](../README.md) / runnable

# Module: runnable

## Index

### Classes

* [AbstractDelegatingSink](../classes/runnable.abstractdelegatingsink.md)

### Interfaces

* [RunnableLike](../interfaces/runnable.runnablelike.md)
* [SinkLike](../interfaces/runnable.sinklike.md)

### Type aliases

* [RunnableOperator](runnable.md#runnableoperator)
* [SinkOperator](runnable.md#sinkoperator)

### Variables

* [sinkDone](runnable.md#sinkdone)

### Functions

* [compute](runnable.md#compute)
* [concat](runnable.md#concat)
* [concatAll](runnable.md#concatall)
* [concatMap](runnable.md#concatmap)
* [concatWith](runnable.md#concatwith)
* [contains](runnable.md#contains)
* [createRunnable](runnable.md#createrunnable)
* [distinctUntilChanged](runnable.md#distinctuntilchanged)
* [empty](runnable.md#empty)
* [endWith](runnable.md#endwith)
* [everySatisfy](runnable.md#everysatisfy)
* [first](runnable.md#first)
* [forEach](runnable.md#foreach)
* [fromArray](runnable.md#fromarray)
* [fromValue](runnable.md#fromvalue)
* [generate](runnable.md#generate)
* [keep](runnable.md#keep)
* [keepType](runnable.md#keeptype)
* [last](runnable.md#last)
* [lift](runnable.md#lift)
* [map](runnable.md#map)
* [mapTo](runnable.md#mapto)
* [noneSatisfy](runnable.md#nonesatisfy)
* [reduce](runnable.md#reduce)
* [repeat](runnable.md#repeat)
* [scan](runnable.md#scan)
* [skipFirst](runnable.md#skipfirst)
* [someSatisfy](runnable.md#somesatisfy)
* [startWith](runnable.md#startwith)
* [takeFirst](runnable.md#takefirst)
* [takeLast](runnable.md#takelast)
* [takeWhile](runnable.md#takewhile)
* [toArray](runnable.md#toarray)
* [toRunnable](runnable.md#torunnable)

## Type aliases

### RunnableOperator

Ƭ **RunnableOperator**<TA, TB\>: [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<TA\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<TB\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

___

### SinkOperator

Ƭ **SinkOperator**<TA, TB\>: [*Function1*](functions.md#function1)<[*SinkLike*](../interfaces/runnable.sinklike.md)<TB\>, [*SinkLike*](../interfaces/runnable.sinklike.md)<TA\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

## Variables

### sinkDone

• `Const` **sinkDone**: unique *symbol*

## Functions

### compute

▸ `Const`**compute**<T\>(): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

___

### concat

▸ **concat**<T\>(`fst`: [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, `snd`: [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, ...`tail`: readonly [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>[]): [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>

Creates an `RunnableLike` which emits all values from each source sequentially.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fst` | [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\> |
`snd` | [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\> |
`...tail` | readonly [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>[] |

**Returns:** [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>

___

### concatAll

▸ `Const`**concatAll**<T\>(): [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

___

### concatMap

▸ `Const`**concatMap**<TA, TB\>(`mapper`: [*Function1*](functions.md#function1)<TA, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<TB\>\>): [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<TA\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<TB\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`mapper` | [*Function1*](functions.md#function1)<TA, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<TB\>\> |

**Returns:** [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<TA\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<TB\>\>

___

### concatWith

▸ `Const`**concatWith**<T\>(`snd`: [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>): [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`snd` | [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\> |

**Returns:** [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

___

### contains

▸ `Const`**contains**<T\>(`value`: T, `options?`: { `equality?`: *undefined* \| [*Equality*](functions.md#equality)<T\>  }): [*Predicate*](functions.md#predicate)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |
`options?` | { `equality?`: *undefined* \| [*Equality*](functions.md#equality)<T\>  } |

**Returns:** [*Predicate*](functions.md#predicate)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

___

### createRunnable

▸ `Const`**createRunnable**<T\>(`run`: [*SideEffect1*](functions.md#sideeffect1)<[*SinkLike*](../interfaces/runnable.sinklike.md)<T\>\>): [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`run` | [*SideEffect1*](functions.md#sideeffect1)<[*SinkLike*](../interfaces/runnable.sinklike.md)<T\>\> |

**Returns:** [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>

___

### distinctUntilChanged

▸ `Const`**distinctUntilChanged**<T\>(`options?`: { `equality?`: *undefined* \| [*Equality*](functions.md#equality)<T\>  }): [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `equality?`: *undefined* \| [*Equality*](functions.md#equality)<T\>  } |

**Returns:** [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

___

### empty

▸ `Const`**empty**<T\>(): [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>

___

### endWith

▸ **endWith**<T\>(`value`: T, ...`values`: readonly T[]): [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |
`...values` | readonly T[] |

**Returns:** [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

___

### everySatisfy

▸ `Const`**everySatisfy**<T\>(`predicate`: [*Predicate*](functions.md#predicate)<T\>): [*Predicate*](functions.md#predicate)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`predicate` | [*Predicate*](functions.md#predicate)<T\> |

**Returns:** [*Predicate*](functions.md#predicate)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

___

### first

▸ `Const`**first**<T\>(`runnable`: [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>): [*Option*](option.md#option)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`runnable` | [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\> |

**Returns:** [*Option*](option.md#option)<T\>

___

### forEach

▸ `Const`**forEach**<T\>(`f`: [*SideEffect1*](functions.md#sideeffect1)<T\>): [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, *void*\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`f` | [*SideEffect1*](functions.md#sideeffect1)<T\> |

**Returns:** [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, *void*\>

___

### fromArray

▸ `Const`**fromArray**<T\>(`options?`: { `endIndex?`: *undefined* \| *number* ; `startIndex?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<readonly T[], [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `endIndex?`: *undefined* \| *number* ; `startIndex?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<readonly T[], [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

___

### fromValue

▸ `Const`**fromValue**<T\>(): [*Function1*](functions.md#function1)<T, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<T, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

___

### generate

▸ `Const`**generate**<T\>(`generator`: [*Updater*](functions.md#updater)<T\>, `initialValue`: [*Factory*](functions.md#factory)<T\>): [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`generator` | [*Updater*](functions.md#updater)<T\> |
`initialValue` | [*Factory*](functions.md#factory)<T\> |

**Returns:** [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>

___

### keep

▸ `Const`**keep**<T\>(`predicate`: [*Predicate*](functions.md#predicate)<T\>): [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`predicate` | [*Predicate*](functions.md#predicate)<T\> |

**Returns:** [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

___

### keepType

▸ `Const`**keepType**<TA, TB\>(`predicate`: [*TypePredicate*](functions.md#typepredicate)<TA, TB\>): [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<TA\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<TB\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`predicate` | [*TypePredicate*](functions.md#typepredicate)<TA, TB\> |

**Returns:** [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<TA\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<TB\>\>

___

### last

▸ `Const`**last**<T\>(`runnable`: [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>): [*Option*](option.md#option)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`runnable` | [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\> |

**Returns:** [*Option*](option.md#option)<T\>

___

### lift

▸ `Const`**lift**<TA, TB\>(`operator`: [*Function1*](functions.md#function1)<[*SinkLike*](../interfaces/runnable.sinklike.md)<TB\>, [*SinkLike*](../interfaces/runnable.sinklike.md)<TA\>\>): [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<TA\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<TB\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`operator` | [*Function1*](functions.md#function1)<[*SinkLike*](../interfaces/runnable.sinklike.md)<TB\>, [*SinkLike*](../interfaces/runnable.sinklike.md)<TA\>\> |

**Returns:** [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<TA\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<TB\>\>

___

### map

▸ `Const`**map**<TA, TB\>(`mapper`: [*Function1*](functions.md#function1)<TA, TB\>): [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<TA\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<TB\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`mapper` | [*Function1*](functions.md#function1)<TA, TB\> |

**Returns:** [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<TA\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<TB\>\>

___

### mapTo

▸ `Const`**mapTo**<TA, TB\>(`value`: TB): [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<TA\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<TB\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | TB |

**Returns:** [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<TA\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<TB\>\>

___

### noneSatisfy

▸ `Const`**noneSatisfy**<T\>(`predicate`: [*Predicate*](functions.md#predicate)<T\>): [*Predicate*](functions.md#predicate)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`predicate` | [*Predicate*](functions.md#predicate)<T\> |

**Returns:** [*Predicate*](functions.md#predicate)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

___

### reduce

▸ `Const`**reduce**<T, TAcc\>(`reducer`: [*Reducer*](functions.md#reducer)<T, TAcc\>, `initialValue`: [*Factory*](functions.md#factory)<TAcc\>): [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, TAcc\>

#### Type parameters:

Name |
------ |
`T` |
`TAcc` |

#### Parameters:

Name | Type |
------ | ------ |
`reducer` | [*Reducer*](functions.md#reducer)<T, TAcc\> |
`initialValue` | [*Factory*](functions.md#factory)<TAcc\> |

**Returns:** [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, TAcc\>

___

### repeat

▸ **repeat**<T\>(`predicate`: [*Predicate*](functions.md#predicate)<*number*\>): [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

Returns an RunnableLike that applies the predicate function each time the source
completes to determine if the enumerable should be repeated.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [*Predicate*](functions.md#predicate)<*number*\> | The predicate function to apply.    |

**Returns:** [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

▸ **repeat**<T\>(`count`: *number*): [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

Returns an RunnableLike that repeats the source count times.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`count` | *number* |     |

**Returns:** [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

▸ **repeat**<T\>(): [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

Returns an RunnableLike that continually repeats the source.

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

___

### scan

▸ `Const`**scan**<T, TAcc\>(`scanner`: [*Reducer*](functions.md#reducer)<T, TAcc\>, `initialValue`: [*Factory*](functions.md#factory)<TAcc\>): [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<TAcc\>\>

#### Type parameters:

Name |
------ |
`T` |
`TAcc` |

#### Parameters:

Name | Type |
------ | ------ |
`scanner` | [*Reducer*](functions.md#reducer)<T, TAcc\> |
`initialValue` | [*Factory*](functions.md#factory)<TAcc\> |

**Returns:** [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<TAcc\>\>

___

### skipFirst

▸ `Const`**skipFirst**<T\>(`options?`: { `count?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `count?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

___

### someSatisfy

▸ `Const`**someSatisfy**<T\>(`predicate`: [*Predicate*](functions.md#predicate)<T\>): [*Predicate*](functions.md#predicate)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`predicate` | [*Predicate*](functions.md#predicate)<T\> |

**Returns:** [*Predicate*](functions.md#predicate)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

___

### startWith

▸ **startWith**<T\>(`value`: T, ...`values`: readonly T[]): [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |
`...values` | readonly T[] |

**Returns:** [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

___

### takeFirst

▸ `Const`**takeFirst**<T\>(`options?`: { `count?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `count?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

___

### takeLast

▸ `Const`**takeLast**<T\>(`options?`: { `count?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `count?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

___

### takeWhile

▸ `Const`**takeWhile**<T\>(`predicate`: [*Predicate*](functions.md#predicate)<T\>, `options?`: { `inclusive?`: *undefined* \| *boolean*  }): [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`predicate` | [*Predicate*](functions.md#predicate)<T\> |
`options?` | { `inclusive?`: *undefined* \| *boolean*  } |

**Returns:** [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

___

### toArray

▸ `Const`**toArray**<T\>(): [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, readonly T[]\>

Accumulates all values emitted by `runnable` into an array.

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, readonly T[]\>

___

### toRunnable

▸ `Const`**toRunnable**<T\>(): [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>
