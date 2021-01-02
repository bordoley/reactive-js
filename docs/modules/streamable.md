[Reactive-JS](../README.md) / streamable

# Module: streamable

## Index

### Interfaces

* [StreamableLike](../interfaces/streamable.streamablelike.md)

### Type aliases

* [StreamableOperator](streamable.md#streamableoperator)

### Functions

* [\_\_stream](streamable.md#__stream)
* [createActionReducer](streamable.md#createactionreducer)
* [createStreamable](streamable.md#createstreamable)
* [empty](streamable.md#empty)
* [identity](streamable.md#identity)
* [lift](streamable.md#lift)
* [map](streamable.md#map)
* [mapReq](streamable.md#mapreq)
* [mapTo](streamable.md#mapto)
* [onNotify](streamable.md#onnotify)
* [scan](streamable.md#scan)
* [sink](streamable.md#sink)
* [stream](streamable.md#stream)
* [withLatestFrom](streamable.md#withlatestfrom)

## Type aliases

### StreamableOperator

Ƭ **StreamableOperator**<TSrcReq, TSrc, TReq, T\>: [*Function1*](functions.md#function1)<[*StreamableLike*](../interfaces/streamable.streamablelike.md)<TSrcReq, TSrc\>, [*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, T\>\>

#### Type parameters:

Name |
------ |
`TSrcReq` |
`TSrc` |
`TReq` |
`T` |

## Functions

### \_\_stream

▸ `Const`**__stream**\<TReq, T>(`streamable`: [*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, T\>, `__namedParameters?`: { `replay?`: *undefined* \| *number* ; `scheduler?`: [*Option*](option.md#option)<[*SchedulerLike*](../interfaces/scheduler.schedulerlike.md)\>  }): [*StreamLike*](../interfaces/observable.streamlike.md)<TReq, T\>

#### Type parameters:

Name |
------ |
`TReq` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`streamable` | [*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, T\> |
`__namedParameters?` | { `replay?`: *undefined* \| *number* ; `scheduler?`: [*Option*](option.md#option)<[*SchedulerLike*](../interfaces/scheduler.schedulerlike.md)\>  } |

**Returns:** [*StreamLike*](../interfaces/observable.streamlike.md)<TReq, T\>

___

### createActionReducer

▸ `Const`**createActionReducer**\<TAction, T>(`reducer`: [*Reducer*](functions.md#reducer)<TAction, T\>, `initialState`: [*Factory*](functions.md#factory)<T\>, `options?`: { `equality?`: *undefined* \| [*Equality*](functions.md#equality)<T\>  }): [*StreamableLike*](../interfaces/streamable.streamablelike.md)<TAction, T\>

Returns a new `StreamableLike` instance that applies an accumulator function
over the notified actions, emitting each intermediate result.

#### Type parameters:

Name |
------ |
`TAction` |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [*Reducer*](functions.md#reducer)<TAction, T\> | The accumulator function called on each notified action.   |
`initialState` | [*Factory*](functions.md#factory)<T\> | The initial accumulation value.   |
`options?` | { `equality?`: *undefined* \| [*Equality*](functions.md#equality)<T\>  } | - |

**Returns:** [*StreamableLike*](../interfaces/streamable.streamablelike.md)<TAction, T\>

___

### createStreamable

▸ `Const`**createStreamable**\<TReq, TData>(`op`: [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TReq\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TData\>\>): [*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, TData\>

#### Type parameters:

Name |
------ |
`TReq` |
`TData` |

#### Parameters:

Name | Type |
------ | ------ |
`op` | [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TReq\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TData\>\> |

**Returns:** [*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, TData\>

___

### empty

▸ `Const`**empty**\<TReq, T>(`options?`: { `delay?`: *undefined* \| *number*  }): [*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, T\>

Returns an empty `StreamableLike` that always returns
a disposed `StreamLike` instance.

#### Type parameters:

Name |
------ |
`TReq` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `delay?`: *undefined* \| *number*  } |

**Returns:** [*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, T\>

___

### identity

▸ `Const`**identity**\<T>(): [*StreamableLike*](../interfaces/streamable.streamablelike.md)<T, T\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*StreamableLike*](../interfaces/streamable.streamablelike.md)<T, T\>

___

### lift

▸ `Const`**lift**\<TReq, TA, TB>(`op`: [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>): *StreamableOperator*<TReq, TA, TReq, TB\>

#### Type parameters:

Name |
------ |
`TReq` |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`op` | [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\> |

**Returns:** *StreamableOperator*<TReq, TA, TReq, TB\>

___

### map

▸ `Const`**map**\<TReq, TA, TB>(`mapper`: [*Function1*](functions.md#function1)<TA, TB\>): [*Function1*](functions.md#function1)<[*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, TA\>, [*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, TB\>\>

#### Type parameters:

Name |
------ |
`TReq` |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`mapper` | [*Function1*](functions.md#function1)<TA, TB\> |

**Returns:** [*Function1*](functions.md#function1)<[*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, TA\>, [*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, TB\>\>

___

### mapReq

▸ `Const`**mapReq**\<TReqA, TReqB, T>(`op`: [*Function1*](functions.md#function1)<TReqB, TReqA\>): *StreamableOperator*<TReqA, T, TReqB, T\>

#### Type parameters:

Name |
------ |
`TReqA` |
`TReqB` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`op` | [*Function1*](functions.md#function1)<TReqB, TReqA\> |

**Returns:** *StreamableOperator*<TReqA, T, TReqB, T\>

___

### mapTo

▸ `Const`**mapTo**\<TReq, TA, TB>(`v`: TB): [*Function1*](functions.md#function1)<[*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, TA\>, [*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, TB\>\>

#### Type parameters:

Name |
------ |
`TReq` |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`v` | TB |

**Returns:** [*Function1*](functions.md#function1)<[*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, TA\>, [*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, TB\>\>

___

### onNotify

▸ `Const`**onNotify**\<TReq, T>(`onNotify`: [*SideEffect1*](functions.md#sideeffect1)<T\>): [*Function1*](functions.md#function1)<[*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, T\>, [*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, T\>\>

#### Type parameters:

Name |
------ |
`TReq` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`onNotify` | [*SideEffect1*](functions.md#sideeffect1)<T\> |

**Returns:** [*Function1*](functions.md#function1)<[*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, T\>, [*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, T\>\>

___

### scan

▸ `Const`**scan**\<TReq, T, TAcc>(`scanner`: [*Reducer*](functions.md#reducer)<T, TAcc\>, `initalValue`: [*Factory*](functions.md#factory)<TAcc\>): [*Function1*](functions.md#function1)<[*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, T\>, [*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, TAcc\>\>

#### Type parameters:

Name |
------ |
`TReq` |
`T` |
`TAcc` |

#### Parameters:

Name | Type |
------ | ------ |
`scanner` | [*Reducer*](functions.md#reducer)<T, TAcc\> |
`initalValue` | [*Factory*](functions.md#factory)<TAcc\> |

**Returns:** [*Function1*](functions.md#function1)<[*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, T\>, [*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, TAcc\>\>

___

### sink

▸ `Const`**sink**\<TReq, T>(`src`: [*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, T\>, `dest`: [*StreamableLike*](../interfaces/streamable.streamablelike.md)<T, TReq\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<*void*\>

#### Type parameters:

Name |
------ |
`TReq` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`src` | [*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, T\> |
`dest` | [*StreamableLike*](../interfaces/streamable.streamablelike.md)<T, TReq\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<*void*\>

___

### stream

▸ `Const`**stream**\<TReq, T>(`scheduler`: [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md), `options?`: { `replay?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, T\>, [*StreamLike*](../interfaces/observable.streamlike.md)<TReq, T\>\>

#### Type parameters:

Name |
------ |
`TReq` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`scheduler` | [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md) |
`options?` | { `replay?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<[*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, T\>, [*StreamLike*](../interfaces/observable.streamlike.md)<TReq, T\>\>

___

### withLatestFrom

▸ `Const`**withLatestFrom**\<TReq, TA, TB, T>(`other`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `selector`: [*Function2*](functions.md#function2)<TA, TB, T\>): [*Function1*](functions.md#function1)<[*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, TA\>, [*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, T\>\>

#### Type parameters:

Name |
------ |
`TReq` |
`TA` |
`TB` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`other` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`selector` | [*Function2*](functions.md#function2)<TA, TB, T\> |

**Returns:** [*Function1*](functions.md#function1)<[*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, TA\>, [*StreamableLike*](../interfaces/streamable.streamablelike.md)<TReq, T\>\>
