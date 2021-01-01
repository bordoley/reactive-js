[Reactive-JS](../README.md) / flowable

# Module: flowable

## Index

### Enumerations

* [FlowMode](../enums/flowable.flowmode.md)

### Interfaces

* [FlowableLike](../interfaces/flowable.flowablelike.md)

### Type aliases

* [FlowableOperator](flowable.md#flowableoperator)

### Functions

* [empty](flowable.md#empty)
* [fromArray](flowable.md#fromarray)
* [fromObservable](flowable.md#fromobservable)
* [fromValue](flowable.md#fromvalue)

## Type aliases

### FlowableOperator

Ƭ **FlowableOperator**<TA, TB\>: [*Function1*](functions.md#function1)<[*FlowableLike*](../interfaces/flowable.flowablelike.md)<TA\>, [*FlowableLike*](../interfaces/flowable.flowablelike.md)<TB\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

## Functions

### empty

▸ `Const`**empty**<T\>(): [*FlowableLike*](../interfaces/flowable.flowablelike.md)<T\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*FlowableLike*](../interfaces/flowable.flowablelike.md)<T\>

___

### fromArray

▸ `Const`**fromArray**<T\>(`options?`: { `delay?`: *undefined* \| *number* ; `endIndex?`: *undefined* \| *number* ; `startIndex?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<readonly T[], [*FlowableLike*](../interfaces/flowable.flowablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `delay?`: *undefined* \| *number* ; `endIndex?`: *undefined* \| *number* ; `startIndex?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<readonly T[], [*FlowableLike*](../interfaces/flowable.flowablelike.md)<T\>\>

___

### fromObservable

▸ `Const`**fromObservable**<T\>(`__namedParameters?`: { `scheduler?`: [*Option*](option.md#option)<[*SchedulerLike*](../interfaces/scheduler.schedulerlike.md)\>  }): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*FlowableLike*](../interfaces/flowable.flowablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters?` | { `scheduler?`: [*Option*](option.md#option)<[*SchedulerLike*](../interfaces/scheduler.schedulerlike.md)\>  } |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*FlowableLike*](../interfaces/flowable.flowablelike.md)<T\>\>

___

### fromValue

▸ `Const`**fromValue**<T\>(`options?`: { `delay?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<T, [*FlowableLike*](../interfaces/flowable.flowablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `delay?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<T, [*FlowableLike*](../interfaces/flowable.flowablelike.md)<T\>\>
