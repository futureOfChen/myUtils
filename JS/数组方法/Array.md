### 数组

	##  1. 检验是否是数组	

​	a. Array.isArray( arr )

​	b. Object.prototype.toString.call( arr )

## 2.创建数组

​	a.	数组直接量  let arr = [1,2,3]

​	b.	构造函数  let arr = new Array(1,2,3) 

​	c.	Array.of( 1 , 2, 3  )		如果传入的参数是一个, 表示的是创建对应长度的数组 , 多个参数表示具有多个元素的数组

​	d.	Array.from (  arg )	arg = new Set() / new  Map()

​	

## 3. 数组增加

​	a.	 arr.push()  在数组的末尾增加 一个或多个元素

​	b.	 arr.unshift() 在数组的起始处增加一个或者多个元素

​	c.	arr.splice(start,0,..rest) 在数组的起始位置,插入 ...rest 个数的参数

## 4. 数组删除

​	a.	delete arr[index]  删除数组中索引对应的值, 不会改变数组的长度

​	b.	arr.splice( start , num) 删除数组中的值, 参数是  起始位置(包含) , 删除的数量

​	c.	arr.pop() 删除数组末尾的最后一个元素

​	d.	arr.shift() 删除数组的第一个元素

## 5. 数组更新的方法

​	a.	arr.splice( start , num , num)  根据起始位置,删除 num 个元素, 然后更新为 num个新的元素

​	b.	arr[index] =  ele  更新数组对应索引的元素

## 6. 数组的查询

​	a.	let res = arr[index]  根据索引值获取对应的元素

​	b.	let res = arr.find( (item) => {  return item > 10  } ) 根据传入的参数, 获取数组中对应的值,返回的是符合条件的第一个值

​	c.	let res = arr.findIndex(  (item) => {  return  item > 11   } ) 返回的是第一个符合条件的元素的索引值

## 7. 数组的排序与翻转

​	a.	arr.sort() 数组的排序 

​		1. 	不传值的话, 是按照 Unicode code的位置进行排序

​		2.	arr.sort( (a,b) => {  return  a-b > 0 } )

​	b.	arr.reverse() 翻转数组, 改变了原来的数组

## 8. 数组的合并

​	let arr =  arr1.concat( arr2 )  将 数组1 和数组2 进行合并

## 9. 数组的截取

​	let arrRes =  arr.slice( start ,end ) 根据起始与结束位置截取, 包含起始位置, 包含结束位置

## 10. 查询对应元素的 索引值

​	a. 	arr.indexOf( ele )  从前往后找, 获取元素对应的索引值

​	b.	arr.lastIndexOf( ele )  从后往前找, 获取元素对应的索引值

## 11. 判断数组中是否包含 某个具体元素

​	arr.includes( ele )  返回值为 true 或者false , 标志存在, 或者不存在

## 12. 数组的迭代方法

​	a.	 for循环

​	b.	forEach :	arr.forEach(  (item, index , old) => {  old[index] = item + 10 ;  } )

​	c.	every :	arr.every( (item) => { return item > 10 } ) ;  判断数组中的每一项是否都满足条件, 都满足条件 返回 true , 否则返回的是false

​	d.	some:	arr.some( (item. index, old) => {  return  item <10 } );  只要数组有一项满足条件, 就返回 true

​	e.	filter:	arr.filter( (item ) => { return  item > 110}  )  返回的是数组, 返回的数组中的元素一定是满足判断条件的

​	f.	map:	arr.map(  (item) => {  return item * 2 } );  返回的是新的数组, 数组中的每一项都经过了运算 	

 





 