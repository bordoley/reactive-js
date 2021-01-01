[Reactive-JS](../README.md) / observable

# Module: observable

## Index

### Enumerations

* [ObservableEffectMode](../enums/observable.observableeffectmode.md)
* [ThrottleMode](../enums/observable.throttlemode.md)

### Interfaces

* [DispatcherLike](../interfaces/observable.dispatcherlike.md)
* [MulticastObservableLike](../interfaces/observable.multicastobservablelike.md)
* [ObservableLike](../interfaces/observable.observablelike.md)
* [ObserverLike](../interfaces/observable.observerlike.md)
* [StreamLike](../interfaces/observable.streamlike.md)
* [SubjectLike](../interfaces/observable.subjectlike.md)

### Type aliases

* [AsyncReducer](observable.md#asyncreducer)
* [ObservableOperator](observable.md#observableoperator)
* [ObserverOperator](observable.md#observeroperator)

### Variables

* [timeoutError](observable.md#timeouterror)

### Functions

* [\_\_await](observable.md#__await)
* [\_\_concurrent](observable.md#__concurrent)
* [\_\_currentScheduler](observable.md#__currentscheduler)
* [\_\_do](observable.md#__do)
* [\_\_memo](observable.md#__memo)
* [\_\_observe](observable.md#__observe)
* [\_\_using](observable.md#__using)
* [async](observable.md#async)
* [buffer](observable.md#buffer)
* [catchError](observable.md#catcherror)
* [combineLatest](observable.md#combinelatest)
* [combineLatestWith](observable.md#combinelatestwith)
* [compute](observable.md#compute)
* [concat](observable.md#concat)
* [concatAll](observable.md#concatall)
* [concatMap](observable.md#concatmap)
* [concatWith](observable.md#concatwith)
* [createObservable](observable.md#createobservable)
* [createSubject](observable.md#createsubject)
* [defer](observable.md#defer)
* [dispatchTo](observable.md#dispatchto)
* [distinctUntilChanged](observable.md#distinctuntilchanged)
* [empty](observable.md#empty)
* [endWith](observable.md#endwith)
* [exhaust](observable.md#exhaust)
* [exhaustMap](observable.md#exhaustmap)
* [fromArray](observable.md#fromarray)
* [fromDisposable](observable.md#fromdisposable)
* [fromEnumerable](observable.md#fromenumerable)
* [fromIterable](observable.md#fromiterable)
* [fromIterator](observable.md#fromiterator)
* [fromPromise](observable.md#frompromise)
* [fromValue](observable.md#fromvalue)
* [genMap](observable.md#genmap)
* [generate](observable.md#generate)
* [ignoreElements](observable.md#ignoreelements)
* [keep](observable.md#keep)
* [keepType](observable.md#keeptype)
* [lift](observable.md#lift)
* [map](observable.md#map)
* [mapAsync](observable.md#mapasync)
* [mapTo](observable.md#mapto)
* [merge](observable.md#merge)
* [mergeAll](observable.md#mergeall)
* [mergeMap](observable.md#mergemap)
* [mergeWith](observable.md#mergewith)
* [never](observable.md#never)
* [observable](observable.md#observable)
* [observe](observable.md#observe)
* [onNotify](observable.md#onnotify)
* [onSubscribe](observable.md#onsubscribe)
* [pairwise](observable.md#pairwise)
* [publish](observable.md#publish)
* [reduce](observable.md#reduce)
* [repeat](observable.md#repeat)
* [retry](observable.md#retry)
* [scan](observable.md#scan)
* [scanAsync](observable.md#scanasync)
* [share](observable.md#share)
* [skipFirst](observable.md#skipfirst)
* [startWith](observable.md#startwith)
* [subscribe](observable.md#subscribe)
* [subscribeOn](observable.md#subscribeon)
* [switchAll](observable.md#switchall)
* [switchMap](observable.md#switchmap)
* [takeFirst](observable.md#takefirst)
* [takeLast](observable.md#takelast)
* [takeUntil](observable.md#takeuntil)
* [takeWhile](observable.md#takewhile)
* [throttle](observable.md#throttle)
* [throwIfEmpty](observable.md#throwifempty)
* [throws](observable.md#throws)
* [timeout](observable.md#timeout)
* [toPromise](observable.md#topromise)
* [toRunnable](observable.md#torunnable)
* [using](observable.md#using)
* [withLatestFrom](observable.md#withlatestfrom)
* [zip](observable.md#zip)
* [zipLatest](observable.md#ziplatest)
* [zipLatestWith](observable.md#ziplatestwith)
* [zipWith](observable.md#zipwith)
* [zipWithLatestFrom](observable.md#zipwithlatestfrom)

## Type aliases

### AsyncReducer

Ƭ **AsyncReducer**<TAcc, T\>: [*Function2*](functions.md#function2)<TAcc, T, [*ObservableLike*](../interfaces/observable.observablelike.md)<TAcc\>\>

#### Type parameters:

Name |
------ |
`TAcc` |
`T` |

___

### ObservableOperator

Ƭ **ObservableOperator**<A, B\>: [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<A\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<B\>\>

A function which converts an ObservableLike<A> to an ObservableLike<B>.

#### Type parameters:

Name |
------ |
`A` |
`B` |

___

### ObserverOperator

Ƭ **ObserverOperator**<A, B\>: (`observer`: [*ObserverLike*](../interfaces/observable.observerlike.md)<B\>) => [*ObserverLike*](../interfaces/observable.observerlike.md)<A\>

A function which transforms a `ObserverLike<B>` to a `ObserverLike<A>`.

#### Type parameters:

Name |
------ |
`A` |
`B` |

#### Type declaration:

Name | Type |
------ | ------ |
`isSynchronous` | *boolean* |

## Variables

### timeoutError

• `Const` **timeoutError**: *symbol*

Symbol thrown when the timeout operator times out

## Functions

### \_\_await

▸ **__await**<T\>(`fn`: [*Factory*](functions.md#factory)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>): T

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*Factory*](functions.md#factory)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\> |

**Returns:** T

▸ **__await**<TA, T\>(`fn`: [*Function1*](functions.md#function1)<TA, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>, `a`: TA): T

#### Type parameters:

Name |
------ |
`TA` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*Function1*](functions.md#function1)<TA, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\> |
`a` | TA |

**Returns:** T

▸ **__await**<TA, TB, T\>(`fn`: [*Function2*](functions.md#function2)<TA, TB, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>, `a`: TA, `b`: TB): T

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*Function2*](functions.md#function2)<TA, TB, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\> |
`a` | TA |
`b` | TB |

**Returns:** T

▸ **__await**<TA, TB, TC, T\>(`fn`: [*Function3*](functions.md#function3)<TA, TB, TC, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>, `a`: TA, `b`: TB, `c`: TC): T

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*Function3*](functions.md#function3)<TA, TB, TC, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\> |
`a` | TA |
`b` | TB |
`c` | TC |

**Returns:** T

▸ **__await**<TA, TB, TC, TD, T\>(`fn`: [*Function4*](functions.md#function4)<TA, TB, TC, TD, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>, `a`: TA, `b`: TB, `c`: TC, `d`: TD): T

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*Function4*](functions.md#function4)<TA, TB, TC, TD, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\> |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |

**Returns:** T

▸ **__await**<TA, TB, TC, TD, TE, T\>(`fn`: [*Function5*](functions.md#function5)<TA, TB, TC, TD, TE, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>, `a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE): T

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*Function5*](functions.md#function5)<TA, TB, TC, TD, TE, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\> |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |

**Returns:** T

▸ **__await**<TA, TB, TC, TD, TE, TF, T\>(`fn`: [*Function6*](functions.md#function6)<TA, TB, TC, TD, TE, TF, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>, `a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF): T

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*Function6*](functions.md#function6)<TA, TB, TC, TD, TE, TF, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\> |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |

**Returns:** T

▸ **__await**<T\>(`observable`: [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>): T

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`observable` | [*ObservableLike*](../interfaces/observable.observablelike.md)<T\> |

**Returns:** T

___

### \_\_concurrent

▸ **__concurrent**<TA, TB\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>): [TA, TB]

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |

**Returns:** [TA, TB]

▸ **__concurrent**<TA, TB, TC, T\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>): [TA, TB, TC]

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |

**Returns:** [TA, TB, TC]

▸ **__concurrent**<TA, TB, TC, TD\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>): [TA, TB, TC, TD]

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |

**Returns:** [TA, TB, TC, TD]

▸ **__concurrent**<TA, TB, TC, TD, TE\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>, `e`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\>): [TA, TB, TC, TD, TE]

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |
`e` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\> |

**Returns:** [TA, TB, TC, TD, TE]

▸ **__concurrent**<TA, TB, TC, TD, TE, TF\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>, `e`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\>, `f`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\>): [TA, TB, TC, TD, TE, TF]

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |
`e` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\> |
`f` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\> |

**Returns:** [TA, TB, TC, TD, TE, TF]

▸ **__concurrent**<TA, TB, TC, TD, TE, TF, TG\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>, `e`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\>, `f`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\>, `g`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\>): [TA, TB, TC, TD, TE, TF, TG]

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |
`TG` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |
`e` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\> |
`f` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\> |
`g` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\> |

**Returns:** [TA, TB, TC, TD, TE, TF, TG]

▸ **__concurrent**<TA, TB, TC, TD, TE, TF, TG, TH\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>, `e`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\>, `f`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\>, `g`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\>, `h`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TH\>): [TA, TB, TC, TD, TE, TF, TG, TH]

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |
`TG` |
`TH` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |
`e` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\> |
`f` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\> |
`g` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\> |
`h` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TH\> |

**Returns:** [TA, TB, TC, TD, TE, TF, TG, TH]

▸ **__concurrent**<TA, TB, TC, TD, TE, TF, TG, TH, TI\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>, `e`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\>, `f`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\>, `g`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\>, `h`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TH\>, `i`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TI\>): [TA, TB, TC, TD, TE, TF, TG, TH, TI]

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |
`TG` |
`TH` |
`TI` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |
`e` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\> |
`f` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\> |
`g` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\> |
`h` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TH\> |
`i` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TI\> |

**Returns:** [TA, TB, TC, TD, TE, TF, TG, TH, TI]

___

### \_\_currentScheduler

▸ **__currentScheduler**(): [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md)

**Returns:** [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md)

___

### \_\_do

▸ **__do**(`fn`: [*SideEffect*](functions.md#sideeffect)): *void*

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*SideEffect*](functions.md#sideeffect) |

**Returns:** *void*

▸ **__do**<TA\>(`fn`: [*SideEffect1*](functions.md#sideeffect1)<TA\>, `a`: TA): *void*

#### Type parameters:

Name |
------ |
`TA` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*SideEffect1*](functions.md#sideeffect1)<TA\> |
`a` | TA |

**Returns:** *void*

▸ **__do**<TA, TB\>(`fn`: [*SideEffect2*](functions.md#sideeffect2)<TA, TB\>, `a`: TA, `b`: TB): *void*

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*SideEffect2*](functions.md#sideeffect2)<TA, TB\> |
`a` | TA |
`b` | TB |

**Returns:** *void*

▸ **__do**<TA, TB, TC\>(`fn`: [*SideEffect3*](functions.md#sideeffect3)<TA, TB, TC\>, `a`: TA, `b`: TB, `c`: TC): *void*

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*SideEffect3*](functions.md#sideeffect3)<TA, TB, TC\> |
`a` | TA |
`b` | TB |
`c` | TC |

**Returns:** *void*

▸ **__do**<TA, TB, TC, TD\>(`fn`: [*SideEffect4*](functions.md#sideeffect4)<TA, TB, TC, TD\>, `a`: TA, `b`: TB, `c`: TC, `d`: TD): *void*

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*SideEffect4*](functions.md#sideeffect4)<TA, TB, TC, TD\> |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |

**Returns:** *void*

▸ **__do**<TA, TB, TC, TD, TE\>(`fn`: [*SideEffect5*](functions.md#sideeffect5)<TA, TB, TC, TD, TE\>, `a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE): *void*

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*SideEffect5*](functions.md#sideeffect5)<TA, TB, TC, TD, TE\> |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |

**Returns:** *void*

▸ **__do**<TA, TB, TC, TD, TE, TF\>(`fn`: [*SideEffect6*](functions.md#sideeffect6)<TA, TB, TC, TD, TE, TF\>, `a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF): *void*

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*SideEffect6*](functions.md#sideeffect6)<TA, TB, TC, TD, TE, TF\> |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |

**Returns:** *void*

___

### \_\_memo

▸ **__memo**<T\>(`fn`: [*Factory*](functions.md#factory)<T\>): T

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*Factory*](functions.md#factory)<T\> |

**Returns:** T

▸ **__memo**<TA, T\>(`fn`: [*Function1*](functions.md#function1)<TA, T\>, `a`: TA): T

#### Type parameters:

Name |
------ |
`TA` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*Function1*](functions.md#function1)<TA, T\> |
`a` | TA |

**Returns:** T

▸ **__memo**<TA, TB, T\>(`fn`: [*Function2*](functions.md#function2)<TA, TB, T\>, `a`: TA, `b`: TB): T

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*Function2*](functions.md#function2)<TA, TB, T\> |
`a` | TA |
`b` | TB |

**Returns:** T

▸ **__memo**<TA, TB, TC, T\>(`fn`: [*Function3*](functions.md#function3)<TA, TB, TC, T\>, `a`: TA, `b`: TB, `c`: TC): T

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*Function3*](functions.md#function3)<TA, TB, TC, T\> |
`a` | TA |
`b` | TB |
`c` | TC |

**Returns:** T

▸ **__memo**<TA, TB, TC, TD, T\>(`fn`: [*Function4*](functions.md#function4)<TA, TB, TC, TD, T\>, `a`: TA, `b`: TB, `c`: TC, `d`: TD): T

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*Function4*](functions.md#function4)<TA, TB, TC, TD, T\> |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |

**Returns:** T

▸ **__memo**<TA, TB, TC, TD, TE, T\>(`fn`: [*Function5*](functions.md#function5)<TA, TB, TC, TD, TE, T\>, `a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE): T

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*Function5*](functions.md#function5)<TA, TB, TC, TD, TE, T\> |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |

**Returns:** T

▸ **__memo**<TA, TB, TC, TD, TE, TF, T\>(`fn`: [*Function6*](functions.md#function6)<TA, TB, TC, TD, TE, TF, T\>, `a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF): T

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*Function6*](functions.md#function6)<TA, TB, TC, TD, TE, TF, T\> |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |

**Returns:** T

___

### \_\_observe

▸ `Const`**__observe**<T\>(`observable`: [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>): [*Option*](option.md#option)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`observable` | [*ObservableLike*](../interfaces/observable.observablelike.md)<T\> |

**Returns:** [*Option*](option.md#option)<T\>

___

### \_\_using

▸ **__using**<T\>(`fn`: [*Factory*](functions.md#factory)<T\>): T

#### Type parameters:

Name | Type |
------ | ------ |
`T` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*Factory*](functions.md#factory)<T\> |

**Returns:** T

▸ **__using**<TA, T\>(`fn`: [*Function1*](functions.md#function1)<TA, T\>, `a`: TA): T

#### Type parameters:

Name | Type |
------ | ------ |
`TA` | - |
`T` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*Function1*](functions.md#function1)<TA, T\> |
`a` | TA |

**Returns:** T

▸ **__using**<TA, TB, T\>(`fn`: [*Function2*](functions.md#function2)<TA, TB, T\>, `a`: TA, `b`: TB): T

#### Type parameters:

Name | Type |
------ | ------ |
`TA` | - |
`TB` | - |
`T` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*Function2*](functions.md#function2)<TA, TB, T\> |
`a` | TA |
`b` | TB |

**Returns:** T

▸ **__using**<TA, TB, TC, T\>(`fn`: [*Function3*](functions.md#function3)<TA, TB, TC, T\>, `a`: TA, `b`: TB, `c`: TC): T

#### Type parameters:

Name | Type |
------ | ------ |
`TA` | - |
`TB` | - |
`TC` | - |
`T` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*Function3*](functions.md#function3)<TA, TB, TC, T\> |
`a` | TA |
`b` | TB |
`c` | TC |

**Returns:** T

▸ **__using**<TA, TB, TC, TD, T\>(`fn`: [*Function4*](functions.md#function4)<TA, TB, TC, TD, T\>, `a`: TA, `b`: TB, `c`: TC, `d`: TD): T

#### Type parameters:

Name | Type |
------ | ------ |
`TA` | - |
`TB` | - |
`TC` | - |
`TD` | - |
`T` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*Function4*](functions.md#function4)<TA, TB, TC, TD, T\> |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |

**Returns:** T

▸ **__using**<TA, TB, TC, TD, TE, T\>(`fn`: [*Function5*](functions.md#function5)<TA, TB, TC, TD, TE, T\>, `a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE): T

#### Type parameters:

Name | Type |
------ | ------ |
`TA` | - |
`TB` | - |
`TC` | - |
`TD` | - |
`TE` | - |
`T` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*Function5*](functions.md#function5)<TA, TB, TC, TD, TE, T\> |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |

**Returns:** T

▸ **__using**<TA, TB, TC, TD, TE, TF, T\>(`fn`: [*Function6*](functions.md#function6)<TA, TB, TC, TD, TE, TF, T\>, `a`: TA, `b`: TB, `c`: TC, `d`: TD, `e`: TE, `f`: TF): T

#### Type parameters:

Name | Type |
------ | ------ |
`TA` | - |
`TB` | - |
`TC` | - |
`TD` | - |
`TE` | - |
`TF` | - |
`T` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*Function6*](functions.md#function6)<TA, TB, TC, TD, TE, TF, T\> |
`a` | TA |
`b` | TB |
`c` | TC |
`d` | TD |
`e` | TE |
`f` | TF |

**Returns:** T

___

### async

▸ `Const`**async**<T\>(`computation`: [*Factory*](functions.md#factory)<T\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`computation` | [*Factory*](functions.md#factory)<T\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

___

### buffer

▸ **buffer**<T\>(`options?`: { `duration?`: *undefined* \| *number* \| [*Function1*](functions.md#function1)<T, [*ObservableLike*](../interfaces/observable.observablelike.md)<*unknown*\>\> ; `maxBufferSize?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<readonly T[]\>\>

Returns an `ObservableLike` which buffers items produced by the source until either the
number of items reaches the specified maximum buffer size or the duration time expires.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options?` | { `duration?`: *undefined* \| *number* \| [*Function1*](functions.md#function1)<T, [*ObservableLike*](../interfaces/observable.observablelike.md)<*unknown*\>\> ; `maxBufferSize?`: *undefined* \| *number*  } | A configuration object that specifies an optional `duration` function or time in ms, and an optional `maxBufferSize`.    |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<readonly T[]\>\>

___

### catchError

▸ `Const`**catchError**<T\>(`onError`: [*Function1*](functions.md#function1)<*unknown*, *void* \| [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Returns an `ObservableLike` which catches errors produced by the source and either continues with
the `ObservableLike` returned from the `onError` callback or swallows the error if
void is returned.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`onError` | [*Function1*](functions.md#function1)<*unknown*, *void* \| [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\> | a function that takes source error and either returns an `ObservableLike` to continue with or void if the error should be propagated.    |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### combineLatest

▸ **combineLatest**<TA, TB\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB]\>

▸ **combineLatest**<TA, TB, TC, T\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC]\>

▸ **combineLatest**<TA, TB, TC, TD\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD]\>

▸ **combineLatest**<TA, TB, TC, TD, TE\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>, `e`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |
`e` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE]\>

▸ **combineLatest**<TA, TB, TC, TD, TE, TF\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>, `e`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\>, `f`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |
`e` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\> |
`f` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF]\>

▸ **combineLatest**<TA, TB, TC, TD, TE, TF, TG\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>, `e`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\>, `f`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\>, `g`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF, TG]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |
`TG` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |
`e` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\> |
`f` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\> |
`g` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF, TG]\>

▸ **combineLatest**<TA, TB, TC, TD, TE, TF, TG, TH\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>, `e`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\>, `f`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\>, `g`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\>, `h`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TH\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF, TG, TH]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |
`TG` |
`TH` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |
`e` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\> |
`f` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\> |
`g` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\> |
`h` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TH\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF, TG, TH]\>

▸ **combineLatest**<TA, TB, TC, TD, TE, TF, TG, TH, TI\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>, `e`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\>, `f`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\>, `g`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\>, `h`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TH\>, `i`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TI\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF, TG, TH, TI]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |
`TG` |
`TH` |
`TI` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |
`e` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\> |
`f` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\> |
`g` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\> |
`h` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TH\> |
`i` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TI\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF, TG, TH, TI]\>

___

### combineLatestWith

▸ `Const`**combineLatestWith**<TA, TB\>(`snd`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB]\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`snd` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB]\>\>

___

### compute

▸ `Const`**compute**<T\>(`options?`: { `delay?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

 Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the observer.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `delay?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### concat

▸ **concat**<T\>(`fst`: [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, `snd`: [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, ...`tail`: readonly [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>[]): [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

Creates an `ObservableLike` which emits all values from each source sequentially.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fst` | [*ObservableLike*](../interfaces/observable.observablelike.md)<T\> |
`snd` | [*ObservableLike*](../interfaces/observable.observablelike.md)<T\> |
`...tail` | readonly [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>[] |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

___

### concatAll

▸ `Const`**concatAll**<T\>(`options?`: { `maxBufferSize?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Converts a higher-order `ObservableLike` into a first-order
`ObservableLike` by concatenating the inner sources in order.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `maxBufferSize?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### concatMap

▸ `Const`**concatMap**<TA, TB\>(`mapper`: [*Function1*](functions.md#function1)<TA, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>, `options?`: { `maxBufferSize?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`mapper` | [*Function1*](functions.md#function1)<TA, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\> |
`options?` | { `maxBufferSize?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>

___

### concatWith

▸ `Const`**concatWith**<T\>(`snd`: [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`snd` | [*ObservableLike*](../interfaces/observable.observablelike.md)<T\> |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### createObservable

▸ `Const`**createObservable**<T\>(`onSubscribe`: [*SideEffect1*](functions.md#sideeffect1)<[*DispatcherLike*](../interfaces/observable.dispatcherlike.md)<T\>\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

Factory for safely creating new `ObservableLike` instances. The onSubscribe function
is called with a `SafeObserverLike` that may be notified from any context.

Note, implementations should not do significant blocking work in
the onSubscribe function.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`onSubscribe` | [*SideEffect1*](functions.md#sideeffect1)<[*DispatcherLike*](../interfaces/observable.dispatcherlike.md)<T\>\> |     |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

___

### createSubject

▸ `Const`**createSubject**<T\>(`options?`: { `replay?`: *undefined* \| *number*  }): [*SubjectLike*](../interfaces/observable.subjectlike.md)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `replay?`: *undefined* \| *number*  } |

**Returns:** [*SubjectLike*](../interfaces/observable.subjectlike.md)<T\>

___

### defer

▸ `Const`**defer**<T\>(`factory`: [*Function1*](functions.md#function1)<[*ObserverLike*](../interfaces/observable.observerlike.md)<T\>, [*SideEffect*](functions.md#sideeffect)\>, `options?`: { `delay?`: *undefined* \| *number*  }): [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`factory` | [*Function1*](functions.md#function1)<[*ObserverLike*](../interfaces/observable.observerlike.md)<T\>, [*SideEffect*](functions.md#sideeffect)\> |
`options?` | { `delay?`: *undefined* \| *number*  } |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

___

### dispatchTo

▸ `Const`**dispatchTo**<T\>(`dispatcher`: [*DispatcherLike*](../interfaces/observable.dispatcherlike.md)<T\>): [*SideEffect1*](functions.md#sideeffect1)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`dispatcher` | [*DispatcherLike*](../interfaces/observable.dispatcherlike.md)<T\> |

**Returns:** [*SideEffect1*](functions.md#sideeffect1)<T\>

___

### distinctUntilChanged

▸ `Const`**distinctUntilChanged**<T\>(`options?`: { `equality?`: *undefined* \| [*Equality*](functions.md#equality)<T\>  }): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Returns an `ObservableLike` that emits all items emitted by the source that
are distinct by comparison from the previous item.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `equality?`: *undefined* \| [*Equality*](functions.md#equality)<T\>  } |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### empty

▸ `Const`**empty**<T\>(`options?`: { `delay?`: *undefined* \| *number*  }): [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

Return an `ObservableLike` that emits no items and disposes the subscription after a specified delay.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `delay?`: *undefined* \| *number*  } |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

___

### endWith

▸ **endWith**<T\>(`value`: T, ...`values`: readonly T[]): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Returns an `ObservableLike` that emits items from the source,
concatenated with the values specified as arguments.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |
`...values` | readonly T[] |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### exhaust

▸ `Const`**exhaust**<T\>(): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
by dropping inner sources while the previous inner source
has not yet been disposed.

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### exhaustMap

▸ `Const`**exhaustMap**<TA, TB\>(`mapper`: [*Function1*](functions.md#function1)<TA, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`mapper` | [*Function1*](functions.md#function1)<TA, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\> |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>

___

### fromArray

▸ `Const`**fromArray**<T\>(`options?`: { `delay?`: *undefined* \| *number* ; `endIndex?`: *undefined* \| *number* ; `startIndex?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<readonly T[], [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Creates an `ObservableLike` from the given array with a specified `delay` between emitted items.
An optional `startIndex` in the array maybe specified,

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options?` | { `delay?`: *undefined* \| *number* ; `endIndex?`: *undefined* \| *number* ; `startIndex?`: *undefined* \| *number*  } | Config object that specifies an optional `delay` between emitted items and an optional `startIndex` into the array.    |

**Returns:** [*Function1*](functions.md#function1)<readonly T[], [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### fromDisposable

▸ `Const`**fromDisposable**(`disposable`: [*DisposableLike*](../interfaces/disposable.disposablelike.md)): [*ObservableLike*](../interfaces/observable.observablelike.md)<*unknown*\>

#### Parameters:

Name | Type |
------ | ------ |
`disposable` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<*unknown*\>

___

### fromEnumerable

▸ `Const`**fromEnumerable**<T\>(`options?`: { `delay?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Creates an `ObservableLike` which enumerates through the values
produced by the provided `Enumerable` with a specified `delay` between emitted items.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `delay?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### fromIterable

▸ `Const`**fromIterable**<T\>(`options?`: { `delay?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<*Iterable*<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Creates an `ObservableLike` which iterates through the values
produced by the provided `Iterable` with a specified `delay` between emitted items.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `delay?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<*Iterable*<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### fromIterator

▸ `Const`**fromIterator**<T, TReturn, TNext\>(`options?`: { `delay?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<*Iterator*<T, TReturn, TNext\>\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Creates an `ObservableLike` which iterates through the values
produced by the provided `Iterator` with a specified `delay` between emitted items.

#### Type parameters:

Name | Default |
------ | ------ |
`T` | - |
`TReturn` | *any* |
`TNext` | *unknown* |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `delay?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<*Iterator*<T, TReturn, TNext\>\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### fromPromise

▸ `Const`**fromPromise**<T\>(`factory`: [*Factory*](functions.md#factory)<*Promise*<T\>\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

Converts a `Promise` to an `ObservableLike`. The provided promise factory
is invoked for each observer to the observable.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`factory` | [*Factory*](functions.md#factory)<*Promise*<T\>\> | Factory function to create a new `Promise` instance.    |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

___

### fromValue

▸ `Const`**fromValue**<T\>(`options?`: { `delay?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<T, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

 Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the observer.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `delay?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<T, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### genMap

▸ `Const`**genMap**<TA, TB, TReturn, TNext\>(`mapper`: [*Function1*](functions.md#function1)<TA, *Generator*<TB, TReturn, TNext\>\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>

#### Type parameters:

Name | Default |
------ | ------ |
`TA` | - |
`TB` | - |
`TReturn` | *any* |
`TNext` | *unknown* |

#### Parameters:

Name | Type |
------ | ------ |
`mapper` | [*Function1*](functions.md#function1)<TA, *Generator*<TB, TReturn, TNext\>\> |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>

___

### generate

▸ `Const`**generate**<T\>(`generator`: [*Updater*](functions.md#updater)<T\>, `initialValue`: [*Factory*](functions.md#factory)<T\>, `options?`: { `delay?`: *undefined* \| *number*  }): [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

Generates an `ObservableLike` sequence from a generator function
that is applied to an accumulator value with a specified `delay`
between emitted items.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`generator` | [*Updater*](functions.md#updater)<T\> | the generator function.   |
`initialValue` | [*Factory*](functions.md#factory)<T\> | Factory function used to generate the initial accumulator.   |
`options?` | { `delay?`: *undefined* \| *number*  } | - |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

___

### ignoreElements

▸ `Const`**ignoreElements**<TA, TB\>(): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>

Returns an `ObservableLike` that ignores all items emitted by the source.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>

___

### keep

▸ `Const`**keep**<T\>(`predicate`: [*Predicate*](functions.md#predicate)<T\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Returns an `ObservableLike` that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [*Predicate*](functions.md#predicate)<T\> | The predicate function.    |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### keepType

▸ `Const`**keepType**<TA, TB\>(`predicate`: [*TypePredicate*](functions.md#typepredicate)<TA, TB\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>

Returns an `ObservableLike` that only emits items from the
source that satisfy the specified type predicate.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [*TypePredicate*](functions.md#typepredicate)<TA, TB\> | The predicate function.    |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>

___

### lift

▸ `Const`**lift**<TA, TB\>(`operator`: [*ObserverOperator*](observable.md#observeroperator)<TA, TB\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>

Creates a new `ObservableLike` which applies the provided the operator function to
observer when the source is subscribed to.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`operator` | [*ObserverOperator*](observable.md#observeroperator)<TA, TB\> | The operator function to apply.    |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>

___

### map

▸ `Const`**map**<TA, TB\>(`mapper`: [*Function1*](functions.md#function1)<TA, TB\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>

Returns an `ObservableLike` that applies the `mapper` function to each
value emitted by the source.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [*Function1*](functions.md#function1)<TA, TB\> | The map function to apply each value. Must be a pure function.    |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>

___

### mapAsync

▸ `Const`**mapAsync**<TA, TB\>(`f`: [*Function1*](functions.md#function1)<TA, *Promise*<TB\>\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`f` | [*Function1*](functions.md#function1)<TA, *Promise*<TB\>\> |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>

___

### mapTo

▸ `Const`**mapTo**<TA, TB\>(`value`: TB): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | TB |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>

___

### merge

▸ **merge**<T\>(`fst`: [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, `snd`: [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, ...`tail`: readonly [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>[]): [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

 Creates an `ObservableLike` which concurrently emits values from the sources.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fst` | [*ObservableLike*](../interfaces/observable.observablelike.md)<T\> |
`snd` | [*ObservableLike*](../interfaces/observable.observablelike.md)<T\> |
`...tail` | readonly [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>[] |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

___

### mergeAll

▸ `Const`**mergeAll**<T\>(`options?`: { `maxBufferSize?`: *undefined* \| *number* ; `maxConcurrency?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
which concurrently delivers values emitted by the inner sources.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options?` | { `maxBufferSize?`: *undefined* \| *number* ; `maxConcurrency?`: *undefined* \| *number*  } | Optional configuration object. The `maxBufferSize` property specifies how many source observables may be queued before dropping previous observables. The `maxConcurrency` property specifies the maximum number of inner observables that may be subscribed to concurrently.    |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### mergeMap

▸ `Const`**mergeMap**<TA, TB\>(`mapper`: [*Function1*](functions.md#function1)<TA, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>, `options?`: { `maxBufferSize?`: *undefined* \| *number* ; `maxConcurrency?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`mapper` | [*Function1*](functions.md#function1)<TA, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\> |
`options?` | { `maxBufferSize?`: *undefined* \| *number* ; `maxConcurrency?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>

___

### mergeWith

▸ `Const`**mergeWith**<T\>(`snd`: [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`snd` | [*ObservableLike*](../interfaces/observable.observablelike.md)<T\> |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### never

▸ `Const`**never**<T\>(): [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

Returna an `ObservableLike` instance that emits no items and never disposes its observer.

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

___

### observable

▸ `Const`**observable**<T\>(`computation`: [*Factory*](functions.md#factory)<T\>, `__namedParameters?`: { `mode?`: *undefined* \| [*Batched*](../enums/observable.observableeffectmode.md#batched) \| [*CombineLatest*](../enums/observable.observableeffectmode.md#combinelatest)  }): [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`computation` | [*Factory*](functions.md#factory)<T\> |
`__namedParameters?` | { `mode?`: *undefined* \| [*Batched*](../enums/observable.observableeffectmode.md#batched) \| [*CombineLatest*](../enums/observable.observableeffectmode.md#combinelatest)  } |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

___

### observe

▸ `Const`**observe**<T\>(`observer`: [*ObserverLike*](../interfaces/observable.observerlike.md)<T\>): [*SideEffect1*](functions.md#sideeffect1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`observer` | [*ObserverLike*](../interfaces/observable.observerlike.md)<T\> |

**Returns:** [*SideEffect1*](functions.md#sideeffect1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### onNotify

▸ **onNotify**<T\>(`onNotify`: [*SideEffect1*](functions.md#sideeffect1)<T\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`onNotify` | [*SideEffect1*](functions.md#sideeffect1)<T\> | The function that is invoked when the observable source produces values.    |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### onSubscribe

▸ `Const`**onSubscribe**<T\>(`f`: [*Factory*](functions.md#factory)<*void* \| [*DisposableLike*](../interfaces/disposable.disposablelike.md) \| [*SideEffect1*](functions.md#sideeffect1)<[*Option*](option.md#option)<[*Error*](disposable.md#error)\>\>\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Executes a side-effect when the observable is subscribed.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`f` | [*Factory*](functions.md#factory)<*void* \| [*DisposableLike*](../interfaces/disposable.disposablelike.md) \| [*SideEffect1*](functions.md#sideeffect1)<[*Option*](option.md#option)<[*Error*](disposable.md#error)\>\>\> |     |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### pairwise

▸ `Const`**pairwise**<T\>(): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<[[*Option*](option.md#option)<T\>, T]\>\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<[[*Option*](option.md#option)<T\>, T]\>\>

___

### publish

▸ `Const`**publish**<T\>(`scheduler`: [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md), `options?`: { `replay?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*MulticastObservableLike*](../interfaces/observable.multicastobservablelike.md)<T\>\>

Returns a `MulticastObservableLike` backed by a single subscription to the source.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`scheduler` | [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md) | A `SchedulerLike` that is used to subscribe to the source observable.   |
`options?` | { `replay?`: *undefined* \| *number*  } | - |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*MulticastObservableLike*](../interfaces/observable.multicastobservablelike.md)<T\>\>

___

### reduce

▸ `Const`**reduce**<T, TAcc\>(`reducer`: [*Reducer*](functions.md#reducer)<T, TAcc\>, `initialValue`: [*Factory*](functions.md#factory)<TAcc\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TAcc\>\>

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

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TAcc\>\>

___

### repeat

▸ **repeat**<T\>(`predicate`: [*Predicate*](functions.md#predicate)<*number*\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Returns an `ObservableLike` that applies the predicate function each time the source
completes to determine if the subscription should be renewed.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [*Predicate*](functions.md#predicate)<*number*\> | The predicate function to apply.    |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

▸ **repeat**<T\>(`count`: *number*): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Returns an `ObservableLike` that repeats the source count times.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`count` | *number* |     |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

▸ **repeat**<T\>(): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Returns an `ObservableLike` that continually repeats the source.

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### retry

▸ **retry**<T\>(): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

▸ **retry**<T\>(`predicate`: [*Function2*](functions.md#function2)<*number*, *unknown*, *boolean*\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Returns an `ObservableLike` that mirrors the source, resubscrbing
if the source completes with an error which satisfies the predicate function.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [*Function2*](functions.md#function2)<*number*, *unknown*, *boolean*\> |     |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### scan

▸ `Const`**scan**<T, TAcc\>(`scanner`: [*Reducer*](functions.md#reducer)<T, TAcc\>, `initialValue`: [*Factory*](functions.md#factory)<TAcc\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TAcc\>\>

Returns an `ObservableLike` that applies an accumulator function over the source,
and emits each intermediate result.

#### Type parameters:

Name |
------ |
`T` |
`TAcc` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`scanner` | [*Reducer*](functions.md#reducer)<T, TAcc\> | The accumulator function called on each source value.   |
`initialValue` | [*Factory*](functions.md#factory)<TAcc\> | The initial accumulation value.    |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TAcc\>\>

___

### scanAsync

▸ `Const`**scanAsync**<T, TAcc\>(`scanner`: [*Function2*](functions.md#function2)<TAcc, T, [*ObservableLike*](../interfaces/observable.observablelike.md)<TAcc\>\>, `initialValue`: [*Factory*](functions.md#factory)<TAcc\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TAcc\>\>

Returns the `ObservableLike` that applies an asynchronous accumulator function
over the source, and emits each intermediate result.

#### Type parameters:

Name |
------ |
`T` |
`TAcc` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`scanner` | [*Function2*](functions.md#function2)<TAcc, T, [*ObservableLike*](../interfaces/observable.observablelike.md)<TAcc\>\> | The accumulator function called on each source value.   |
`initialValue` | [*Factory*](functions.md#factory)<TAcc\> | The initial accumulation value.    |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TAcc\>\>

___

### share

▸ `Const`**share**<T\>(`scheduler`: [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md), `options?`: { `replay?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Returns an `ObservableLike` backed by a shared refcounted subscription to the
source. When the refcount goes to 0, the underlying subscription
to the source is disposed.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`scheduler` | [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md) | A `SchedulerLike` that is used to subscribe to the source.   |
`options?` | { `replay?`: *undefined* \| *number*  } | - |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### skipFirst

▸ `Const`**skipFirst**<T\>(`options?`: { `count?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Returns an `ObservableLike` that skips the first count items emitted by the source.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `count?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### startWith

▸ **startWith**<T\>(`value`: T, ...`values`: readonly T[]): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Returns an `ObservableLike` that emits the values specified as arguments,
concatenated with items from the source.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |
`...values` | readonly T[] |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### subscribe

▸ `Const`**subscribe**<T\>(`scheduler`: [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md), `onNotify?`: [*SideEffect1*](functions.md#sideeffect1)<T\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*DisposableLike*](../interfaces/disposable.disposablelike.md)\>

Safely subscribes to an `ObservableLike` with a `ObserverLike` instance
using the provided scheduler. The returned `DisposableLike`
may used to cancel the subscription.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`scheduler` | [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md) | The SchedulerLike instance that should be used by the source to notify it's observer.    |
`onNotify?` | [*SideEffect1*](functions.md#sideeffect1)<T\> | - |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*DisposableLike*](../interfaces/disposable.disposablelike.md)\>

___

### subscribeOn

▸ `Const`**subscribeOn**<T\>(`scheduler`: [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md)): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Returns an `ObservableLike` instance that subscribes to the source on the specified `SchedulerLike`.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`scheduler` | [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md) | `SchedulerLike` instance to use when subscribing to the source.    |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### switchAll

▸ `Const`**switchAll**<T\>(): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Converts a higher-order `ObservableLike` into a first-order `ObservableLike` producing
values only from the most recent source.

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### switchMap

▸ `Const`**switchMap**<TA, TB\>(`mapper`: [*Function1*](functions.md#function1)<TA, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`mapper` | [*Function1*](functions.md#function1)<TA, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\> |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>\>

___

### takeFirst

▸ `Const`**takeFirst**<T\>(`options?`: { `count?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Returns an `ObservableLike` that only emits the first `count` values emitted by the source.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `count?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### takeLast

▸ `Const`**takeLast**<T\>(`options?`: { `count?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Returns an `ObservableLike` that only emits the last `count` items emitted by the source.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `count?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### takeUntil

▸ `Const`**takeUntil**<T\>(`notifier`: [*ObservableLike*](../interfaces/observable.observablelike.md)<*unknown*\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`notifier` | [*ObservableLike*](../interfaces/observable.observablelike.md)<*unknown*\> |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### takeWhile

▸ `Const`**takeWhile**<T\>(`predicate`: [*Predicate*](functions.md#predicate)<T\>, `options?`: { `inclusive?`: *undefined* \| *boolean*  }): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Returns an `ObservableLike` which emits values emitted by the source as long
as each value satisfies the given predicate, and then completes as soon as
this predicate is not satisfied.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [*Predicate*](functions.md#predicate)<T\> | The predicate function.    |
`options?` | { `inclusive?`: *undefined* \| *boolean*  } | - |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### throttle

▸ **throttle**<T\>(`duration`: [*Function1*](functions.md#function1)<T, [*ObservableLike*](../interfaces/observable.observablelike.md)<*unknown*\>\>, `options?`: { `mode?`: *undefined* \| [*First*](../enums/observable.throttlemode.md#first) \| [*Last*](../enums/observable.throttlemode.md#last) \| [*Interval*](../enums/observable.throttlemode.md#interval)  }): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`duration` | [*Function1*](functions.md#function1)<T, [*ObservableLike*](../interfaces/observable.observablelike.md)<*unknown*\>\> | Function function that is used to determine the silence duration in between emitted values.   |
`options?` | { `mode?`: *undefined* \| [*First*](../enums/observable.throttlemode.md#first) \| [*Last*](../enums/observable.throttlemode.md#last) \| [*Interval*](../enums/observable.throttlemode.md#interval)  } | - |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

▸ **throttle**<T\>(`duration`: *number*, `options?`: { `mode?`: *undefined* \| [*First*](../enums/observable.throttlemode.md#first) \| [*Last*](../enums/observable.throttlemode.md#last) \| [*Interval*](../enums/observable.throttlemode.md#interval)  }): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Returns an `ObservableLike` which emits a value from the source,
then ignores subsequent source values for `duration` milliseconds.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`duration` | *number* | Time to wait before emitting another value after emitting the last value, measured in milliseconds.   |
`options?` | { `mode?`: *undefined* \| [*First*](../enums/observable.throttlemode.md#first) \| [*Last*](../enums/observable.throttlemode.md#last) \| [*Interval*](../enums/observable.throttlemode.md#interval)  } | - |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### throwIfEmpty

▸ `Const`**throwIfEmpty**<T\>(`factory`: [*Factory*](functions.md#factory)<*unknown*\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Returns an `ObservableLike` that emits an error if the source completes without emitting a value.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`factory` | [*Factory*](functions.md#factory)<*unknown*\> | A factory function invoked to produce the error to be thrown.    |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### throws

▸ `Const`**throws**<T\>(`options?`: { `delay?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<*unknown*\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Creates an `ObservableLike` that emits no items and immediately disposes its subscription with an error.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `delay?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<[*Factory*](functions.md#factory)<*unknown*\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### timeout

▸ **timeout**<T\>(`duration`: *number*): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Returns an `ObservableLike` that completes with an error if the source
does not emit a value in given time span.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`duration` | *number* | Time in ms within which the source must emit values.    |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

▸ **timeout**<T\>(`duration`: [*ObservableLike*](../interfaces/observable.observablelike.md)<*unknown*\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`duration` | [*ObservableLike*](../interfaces/observable.observablelike.md)<*unknown*\> |     |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### toPromise

▸ `Const`**toPromise**<T\>(`scheduler`: [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md)): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, *Promise*<T\>\>

Returns a Promise that completes with the last value produced by
the source.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`scheduler` | [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md) | The scheduler upon which to subscribe to the source.    |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, *Promise*<T\>\>

___

### toRunnable

▸ `Const`**toRunnable**<T\>(`options?`: { `schedulerFactory?`: *undefined* \| [*Factory*](functions.md#factory)<[*VirtualTimeSchedulerLike*](../interfaces/scheduler.virtualtimeschedulerlike.md)\>  }): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `schedulerFactory?`: *undefined* \| [*Factory*](functions.md#factory)<[*VirtualTimeSchedulerLike*](../interfaces/scheduler.virtualtimeschedulerlike.md)\>  } |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*RunnableLike*](../interfaces/runnable.runnablelike.md)<T\>\>

___

### using

▸ **using**<TResource, T\>(`resourceFactory`: [*Function1*](functions.md#function1)<[*SchedulerLike*](../interfaces/scheduler.schedulerlike.md), TResource\>, `observableFactory`: [*Function1*](functions.md#function1)<TResource, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

#### Type parameters:

Name | Type |
------ | ------ |
`TResource` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`T` | - |

#### Parameters:

Name | Type |
------ | ------ |
`resourceFactory` | [*Function1*](functions.md#function1)<[*SchedulerLike*](../interfaces/scheduler.schedulerlike.md), TResource\> |
`observableFactory` | [*Function1*](functions.md#function1)<TResource, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

▸ **using**<TResource1, TResource2, T\>(`resourceFactory`: [*Function1*](functions.md#function1)<[*SchedulerLike*](../interfaces/scheduler.schedulerlike.md), [TResource1, TResource2]\>, `observableFactory`: [*Function2*](functions.md#function2)<TResource1, TResource2, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

#### Type parameters:

Name | Type |
------ | ------ |
`TResource1` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`TResource2` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`T` | - |

#### Parameters:

Name | Type |
------ | ------ |
`resourceFactory` | [*Function1*](functions.md#function1)<[*SchedulerLike*](../interfaces/scheduler.schedulerlike.md), [TResource1, TResource2]\> |
`observableFactory` | [*Function2*](functions.md#function2)<TResource1, TResource2, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

▸ **using**<TResource1, TResource2, TResource3, T\>(`resourceFactory`: [*Function1*](functions.md#function1)<[*SchedulerLike*](../interfaces/scheduler.schedulerlike.md), [TResource1, TResource2, TResource3]\>, `observableFactory`: [*Function3*](functions.md#function3)<TResource1, TResource2, TResource3, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

#### Type parameters:

Name | Type |
------ | ------ |
`TResource1` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`TResource2` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`TResource3` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`T` | - |

#### Parameters:

Name | Type |
------ | ------ |
`resourceFactory` | [*Function1*](functions.md#function1)<[*SchedulerLike*](../interfaces/scheduler.schedulerlike.md), [TResource1, TResource2, TResource3]\> |
`observableFactory` | [*Function3*](functions.md#function3)<TResource1, TResource2, TResource3, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

▸ **using**<TResource1, TResource2, TResource3, TResource4, T\>(`resourceFactory`: [*Function1*](functions.md#function1)<[*SchedulerLike*](../interfaces/scheduler.schedulerlike.md), [TResource1, TResource2, TResource3, TResource4]\>, `observableFactory`: [*Function4*](functions.md#function4)<TResource1, TResource2, TResource3, TResource4, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

#### Type parameters:

Name | Type |
------ | ------ |
`TResource1` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`TResource2` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`TResource3` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`TResource4` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`T` | - |

#### Parameters:

Name | Type |
------ | ------ |
`resourceFactory` | [*Function1*](functions.md#function1)<[*SchedulerLike*](../interfaces/scheduler.schedulerlike.md), [TResource1, TResource2, TResource3, TResource4]\> |
`observableFactory` | [*Function4*](functions.md#function4)<TResource1, TResource2, TResource3, TResource4, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

▸ **using**<TResource1, TResource2, TResource3, TResource4, TResource5, T\>(`resourceFactory`: [*Function1*](functions.md#function1)<[*SchedulerLike*](../interfaces/scheduler.schedulerlike.md), [TResource1, TResource2, TResource3, TResource4, TResource5]\>, `observableFactory`: [*Function5*](functions.md#function5)<TResource1, TResource2, TResource3, TResource4, TResource5, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

#### Type parameters:

Name | Type |
------ | ------ |
`TResource1` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`TResource2` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`TResource3` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`TResource4` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`TResource5` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`T` | - |

#### Parameters:

Name | Type |
------ | ------ |
`resourceFactory` | [*Function1*](functions.md#function1)<[*SchedulerLike*](../interfaces/scheduler.schedulerlike.md), [TResource1, TResource2, TResource3, TResource4, TResource5]\> |
`observableFactory` | [*Function5*](functions.md#function5)<TResource1, TResource2, TResource3, TResource4, TResource5, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

▸ **using**<TResource, T\>(`resourceFactory`: [*Function1*](functions.md#function1)<[*SchedulerLike*](../interfaces/scheduler.schedulerlike.md), TResource \| readonly TResource[]\>, `observableFactory`: (...`resources`: readonly TResource[]) => [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

#### Type parameters:

Name | Type |
------ | ------ |
`TResource` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`T` | - |

#### Parameters:

Name | Type |
------ | ------ |
`resourceFactory` | [*Function1*](functions.md#function1)<[*SchedulerLike*](../interfaces/scheduler.schedulerlike.md), TResource \| readonly TResource[]\> |
`observableFactory` | (...`resources`: readonly TResource[]) => [*ObservableLike*](../interfaces/observable.observablelike.md)<T\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

___

### withLatestFrom

▸ `Const`**withLatestFrom**<TA, TB, T\>(`other`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `selector`: [*Function2*](functions.md#function2)<TA, TB, T\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Returns an `ObservableLike` which combines the source with
the latest value from another `ObservableLike`.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`other` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |  |
`selector` | [*Function2*](functions.md#function2)<TA, TB, T\> |     |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### zip

▸ **zip**<TA, TB\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB]\>

▸ **zip**<TA, TB, TC\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC]\>

▸ **zip**<TA, TB, TC, TD\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD]\>

▸ **zip**<TA, TB, TC, TD, TE\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>, `e`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |
`e` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE]\>

▸ **zip**<TA, TB, TC, TD, TE, TF\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>, `e`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\>, `f`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |
`e` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\> |
`f` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF]\>

▸ **zip**<TA, TB, TC, TD, TE, TF, TG\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>, `e`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\>, `f`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\>, `g`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF, TG]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |
`TG` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |
`e` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\> |
`f` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\> |
`g` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF, TG]\>

▸ **zip**<TA, TB, TC, TD, TE, TF, TG, TH\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>, `e`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\>, `f`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\>, `g`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\>, `h`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TH\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF, TG, TH]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |
`TG` |
`TH` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |
`e` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\> |
`f` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\> |
`g` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\> |
`h` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TH\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF, TG, TH]\>

▸ **zip**<TA, TB, TC, TD, TE, TF, TG, TH, TI\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>, `e`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\>, `f`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\>, `g`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\>, `h`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TH\>, `i`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TI\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF, TG, TH, TI]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |
`TG` |
`TH` |
`TI` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |
`e` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\> |
`f` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\> |
`g` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\> |
`h` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TH\> |
`i` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TI\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF, TG, TH, TI]\>

___

### zipLatest

▸ **zipLatest**<TA, TB\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB]\>

▸ **zipLatest**<TA, TB, TC, T\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC]\>

▸ **zipLatest**<TA, TB, TC, TD\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD]\>

▸ **zipLatest**<TA, TB, TC, TD, TE\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>, `e`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |
`e` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE]\>

▸ **zipLatest**<TA, TB, TC, TD, TE, TF\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>, `e`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\>, `f`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |
`e` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\> |
`f` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF]\>

▸ **zipLatest**<TA, TB, TC, TD, TE, TF, TG\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>, `e`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\>, `f`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\>, `g`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF, TG]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |
`TG` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |
`e` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\> |
`f` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\> |
`g` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF, TG]\>

▸ **zipLatest**<TA, TB, TC, TD, TE, TF, TG, TH\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>, `e`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\>, `f`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\>, `g`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\>, `h`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TH\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF, TG, TH]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |
`TG` |
`TH` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |
`e` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\> |
`f` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\> |
`g` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\> |
`h` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TH\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF, TG, TH]\>

▸ **zipLatest**<TA, TB, TC, TD, TE, TF, TG, TH, TI\>(`a`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, `b`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `c`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\>, `d`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\>, `e`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\>, `f`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\>, `g`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\>, `h`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TH\>, `i`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TI\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF, TG, TH, TI]\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`TC` |
`TD` |
`TE` |
`TF` |
`TG` |
`TH` |
`TI` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TA\> |
`b` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |
`c` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TC\> |
`d` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TD\> |
`e` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TE\> |
`f` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TF\> |
`g` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TG\> |
`h` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TH\> |
`i` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TI\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB, TC, TD, TE, TF, TG, TH, TI]\>

___

### zipLatestWith

▸ `Const`**zipLatestWith**<TA, TB\>(`snd`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB]\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`snd` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB]\>\>

___

### zipWith

▸ `Const`**zipWith**<TA, TB\>(`snd`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB]\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`snd` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<[TA, TB]\>\>

___

### zipWithLatestFrom

▸ `Const`**zipWithLatestFrom**<TA, TB, T\>(`other`: [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\>, `selector`: [*Function2*](functions.md#function2)<TA, TB, T\>): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

Returns an `ObservableLike` which combines the source with
the latest value from another `ObservableLike`.

#### Type parameters:

Name |
------ |
`TA` |
`TB` |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`other` | [*ObservableLike*](../interfaces/observable.observablelike.md)<TB\> |  |
`selector` | [*Function2*](functions.md#function2)<TA, TB, T\> |     |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<TA\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>
