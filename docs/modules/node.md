[Reactive-JS](../README.md) / node

# Module: node

## Index

### Functions

* [bindNodeCallback](node.md#bindnodecallback)
* [brotliCompress](node.md#brotlicompress)
* [brotliDecompress](node.md#brotlidecompress)
* [createDisposableNodeStream](node.md#createdisposablenodestream)
* [createReadableIOSource](node.md#createreadableiosource)
* [createWritableIOSink](node.md#createwritableiosink)
* [deflate](node.md#deflate)
* [gunzip](node.md#gunzip)
* [gzip](node.md#gzip)
* [inflate](node.md#inflate)
* [readFileIOSource](node.md#readfileiosource)
* [transform](node.md#transform)

## Functions

### bindNodeCallback

▸ **bindNodeCallback**\<T>(`callbackFunc`: [*SideEffect1*](functions.md#sideeffect1)<[*SideEffect2*](functions.md#sideeffect2)<*unknown*, T\>\>): [*Factory*](functions.md#factory)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`callbackFunc` | [*SideEffect1*](functions.md#sideeffect1)<[*SideEffect2*](functions.md#sideeffect2)<*unknown*, T\>\> |

**Returns:** [*Factory*](functions.md#factory)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

▸ **bindNodeCallback**(`callbackFunc`: [*SideEffect1*](functions.md#sideeffect1)<[*SideEffect1*](functions.md#sideeffect1)<*unknown*\>\>): [*Factory*](functions.md#factory)<[*ObservableLike*](../interfaces/observable.observablelike.md)<*void*\>\>

#### Parameters:

Name | Type |
------ | ------ |
`callbackFunc` | [*SideEffect1*](functions.md#sideeffect1)<[*SideEffect1*](functions.md#sideeffect1)<*unknown*\>\> |

**Returns:** [*Factory*](functions.md#factory)<[*ObservableLike*](../interfaces/observable.observablelike.md)<*void*\>\>

▸ **bindNodeCallback**\<A1, T>(`callbackFunc`: [*SideEffect2*](functions.md#sideeffect2)<A1, [*SideEffect2*](functions.md#sideeffect2)<*unknown*, T\>\>): [*Function1*](functions.md#function1)<A1, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`A1` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`callbackFunc` | [*SideEffect2*](functions.md#sideeffect2)<A1, [*SideEffect2*](functions.md#sideeffect2)<*unknown*, T\>\> |

**Returns:** [*Function1*](functions.md#function1)<A1, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

▸ **bindNodeCallback**\<A1>(`callbackFunc`: [*SideEffect2*](functions.md#sideeffect2)<A1, [*SideEffect1*](functions.md#sideeffect1)<*unknown*\>\>): [*Function1*](functions.md#function1)<A1, [*ObservableLike*](../interfaces/observable.observablelike.md)<*void*\>\>

#### Type parameters:

Name |
------ |
`A1` |

#### Parameters:

Name | Type |
------ | ------ |
`callbackFunc` | [*SideEffect2*](functions.md#sideeffect2)<A1, [*SideEffect1*](functions.md#sideeffect1)<*unknown*\>\> |

**Returns:** [*Function1*](functions.md#function1)<A1, [*ObservableLike*](../interfaces/observable.observablelike.md)<*void*\>\>

▸ **bindNodeCallback**\<A1, A2, T>(`callbackFunc`: [*SideEffect3*](functions.md#sideeffect3)<A1, A2, [*SideEffect2*](functions.md#sideeffect2)<*unknown*, T\>\>): [*Function2*](functions.md#function2)<A1, A2, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`A1` |
`A2` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`callbackFunc` | [*SideEffect3*](functions.md#sideeffect3)<A1, A2, [*SideEffect2*](functions.md#sideeffect2)<*unknown*, T\>\> |

**Returns:** [*Function2*](functions.md#function2)<A1, A2, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

▸ **bindNodeCallback**\<A1, A2>(`callbackFunc`: [*SideEffect3*](functions.md#sideeffect3)<A1, A2, [*SideEffect1*](functions.md#sideeffect1)<*unknown*\>\>): [*Function2*](functions.md#function2)<A1, A2, [*ObservableLike*](../interfaces/observable.observablelike.md)<*void*\>\>

#### Type parameters:

Name |
------ |
`A1` |
`A2` |

#### Parameters:

Name | Type |
------ | ------ |
`callbackFunc` | [*SideEffect3*](functions.md#sideeffect3)<A1, A2, [*SideEffect1*](functions.md#sideeffect1)<*unknown*\>\> |

**Returns:** [*Function2*](functions.md#function2)<A1, A2, [*ObservableLike*](../interfaces/observable.observablelike.md)<*void*\>\>

▸ **bindNodeCallback**\<A1, A2, A3, T>(`callbackFunc`: [*SideEffect4*](functions.md#sideeffect4)<A1, A2, A3, [*SideEffect2*](functions.md#sideeffect2)<*unknown*, T\>\>): [*Function3*](functions.md#function3)<A1, A2, A3, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`A1` |
`A2` |
`A3` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`callbackFunc` | [*SideEffect4*](functions.md#sideeffect4)<A1, A2, A3, [*SideEffect2*](functions.md#sideeffect2)<*unknown*, T\>\> |

**Returns:** [*Function3*](functions.md#function3)<A1, A2, A3, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

▸ **bindNodeCallback**\<A1, A2, A3>(`callbackFunc`: [*SideEffect4*](functions.md#sideeffect4)<A1, A2, A3, [*SideEffect1*](functions.md#sideeffect1)<*unknown*\>\>): [*Function3*](functions.md#function3)<A1, A2, A3, [*ObservableLike*](../interfaces/observable.observablelike.md)<*void*\>\>

#### Type parameters:

Name |
------ |
`A1` |
`A2` |
`A3` |

#### Parameters:

Name | Type |
------ | ------ |
`callbackFunc` | [*SideEffect4*](functions.md#sideeffect4)<A1, A2, A3, [*SideEffect1*](functions.md#sideeffect1)<*unknown*\>\> |

**Returns:** [*Function3*](functions.md#function3)<A1, A2, A3, [*ObservableLike*](../interfaces/observable.observablelike.md)<*void*\>\>

▸ **bindNodeCallback**\<A1, A2, A3, A4, T>(`callbackFunc`: [*SideEffect5*](functions.md#sideeffect5)<A1, A2, A3, A4, [*SideEffect2*](functions.md#sideeffect2)<*unknown*, T\>\>): [*Function4*](functions.md#function4)<A1, A2, A3, A4, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`A1` |
`A2` |
`A3` |
`A4` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`callbackFunc` | [*SideEffect5*](functions.md#sideeffect5)<A1, A2, A3, A4, [*SideEffect2*](functions.md#sideeffect2)<*unknown*, T\>\> |

**Returns:** [*Function4*](functions.md#function4)<A1, A2, A3, A4, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

▸ **bindNodeCallback**\<A1, A2, A3, A4>(`callbackFunc`: [*SideEffect5*](functions.md#sideeffect5)<A1, A2, A3, A4, [*SideEffect1*](functions.md#sideeffect1)<*unknown*\>\>): [*Function4*](functions.md#function4)<A1, A2, A3, A4, [*ObservableLike*](../interfaces/observable.observablelike.md)<*void*\>\>

#### Type parameters:

Name |
------ |
`A1` |
`A2` |
`A3` |
`A4` |

#### Parameters:

Name | Type |
------ | ------ |
`callbackFunc` | [*SideEffect5*](functions.md#sideeffect5)<A1, A2, A3, A4, [*SideEffect1*](functions.md#sideeffect1)<*unknown*\>\> |

**Returns:** [*Function4*](functions.md#function4)<A1, A2, A3, A4, [*ObservableLike*](../interfaces/observable.observablelike.md)<*void*\>\>

▸ **bindNodeCallback**\<A1, A2, A3, A4, A5, T>(`callbackFunc`: [*SideEffect6*](functions.md#sideeffect6)<A1, A2, A3, A4, A5, [*SideEffect2*](functions.md#sideeffect2)<*unknown*, T\>\>): [*Function5*](functions.md#function5)<A1, A2, A3, A4, A5, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`A1` |
`A2` |
`A3` |
`A4` |
`A5` |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`callbackFunc` | [*SideEffect6*](functions.md#sideeffect6)<A1, A2, A3, A4, A5, [*SideEffect2*](functions.md#sideeffect2)<*unknown*, T\>\> |

**Returns:** [*Function5*](functions.md#function5)<A1, A2, A3, A4, A5, [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

▸ **bindNodeCallback**\<A1, A2, A3, A4, A5>(`callbackFunc`: [*SideEffect6*](functions.md#sideeffect6)<A1, A2, A3, A4, A5, [*SideEffect1*](functions.md#sideeffect1)<*unknown*\>\>): [*Function5*](functions.md#function5)<A1, A2, A3, A4, A5, [*ObservableLike*](../interfaces/observable.observablelike.md)<*void*\>\>

#### Type parameters:

Name |
------ |
`A1` |
`A2` |
`A3` |
`A4` |
`A5` |

#### Parameters:

Name | Type |
------ | ------ |
`callbackFunc` | [*SideEffect6*](functions.md#sideeffect6)<A1, A2, A3, A4, A5, [*SideEffect1*](functions.md#sideeffect1)<*unknown*\>\> |

**Returns:** [*Function5*](functions.md#function5)<A1, A2, A3, A4, A5, [*ObservableLike*](../interfaces/observable.observablelike.md)<*void*\>\>

___

### brotliCompress

▸ `Const`**brotliCompress**(`options?`: BrotliOptions): [*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>

#### Parameters:

Name | Type |
------ | ------ |
`options?` | BrotliOptions |

**Returns:** [*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>

___

### brotliDecompress

▸ `Const`**brotliDecompress**(`options?`: BrotliOptions): [*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>

#### Parameters:

Name | Type |
------ | ------ |
`options?` | BrotliOptions |

**Returns:** [*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>

___

### createDisposableNodeStream

▸ `Const`**createDisposableNodeStream**\<T>(`stream`: T): [*DisposableValueLike*](../interfaces/disposable.disposablevaluelike.md)<T\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | *Readable* \| *Writable* \| *Transform* |

#### Parameters:

Name | Type |
------ | ------ |
`stream` | T |

**Returns:** [*DisposableValueLike*](../interfaces/disposable.disposablevaluelike.md)<T\>

___

### createReadableIOSource

▸ `Const`**createReadableIOSource**(`factory`: [*Factory*](functions.md#factory)<[*DisposableValueLike*](../interfaces/disposable.disposablevaluelike.md)<*Readable*\>\>): [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>

#### Parameters:

Name | Type |
------ | ------ |
`factory` | [*Factory*](functions.md#factory)<[*DisposableValueLike*](../interfaces/disposable.disposablevaluelike.md)<*Readable*\>\> |

**Returns:** [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>

___

### createWritableIOSink

▸ `Const`**createWritableIOSink**(`factory`: [*Factory*](functions.md#factory)<[*DisposableValueLike*](../interfaces/disposable.disposablevaluelike.md)<*Writable*\>\>): [*IOSinkLike*](../interfaces/io.iosinklike.md)<*Uint8Array*\>

#### Parameters:

Name | Type |
------ | ------ |
`factory` | [*Factory*](functions.md#factory)<[*DisposableValueLike*](../interfaces/disposable.disposablevaluelike.md)<*Writable*\>\> |

**Returns:** [*IOSinkLike*](../interfaces/io.iosinklike.md)<*Uint8Array*\>

___

### deflate

▸ `Const`**deflate**(`options?`: ZlibOptions): [*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>

#### Parameters:

Name | Type |
------ | ------ |
`options?` | ZlibOptions |

**Returns:** [*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>

___

### gunzip

▸ `Const`**gunzip**(`options?`: ZlibOptions): [*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>

#### Parameters:

Name | Type |
------ | ------ |
`options?` | ZlibOptions |

**Returns:** [*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>

___

### gzip

▸ `Const`**gzip**(`options?`: ZlibOptions): [*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>

#### Parameters:

Name | Type |
------ | ------ |
`options?` | ZlibOptions |

**Returns:** [*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>

___

### inflate

▸ `Const`**inflate**(`options?`: ZlibOptions): [*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>

#### Parameters:

Name | Type |
------ | ------ |
`options?` | ZlibOptions |

**Returns:** [*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>

___

### readFileIOSource

▸ `Const`**readFileIOSource**(`path`: PathLike, `options?`: { `end?`: *undefined* \| *number* ; `flags?`: *undefined* \| *string* ; `highWaterMark?`: *undefined* \| *number* ; `mode?`: *undefined* \| *number* ; `start?`: *undefined* \| *number*  }): [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>

#### Parameters:

Name | Type |
------ | ------ |
`path` | PathLike |
`options?` | { `end?`: *undefined* \| *number* ; `flags?`: *undefined* \| *string* ; `highWaterMark?`: *undefined* \| *number* ; `mode?`: *undefined* \| *number* ; `start?`: *undefined* \| *number*  } |

**Returns:** [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>

___

### transform

▸ `Const`**transform**(`factory`: [*Factory*](functions.md#factory)<[*DisposableValueLike*](../interfaces/disposable.disposablevaluelike.md)<*Transform*\>\>): [*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>

#### Parameters:

Name | Type |
------ | ------ |
`factory` | [*Factory*](functions.md#factory)<[*DisposableValueLike*](../interfaces/disposable.disposablevaluelike.md)<*Transform*\>\> |

**Returns:** [*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>
