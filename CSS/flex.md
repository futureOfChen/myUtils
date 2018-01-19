# flex布局



##   一 . 父容器

 1.  主轴方向:  flex-direction: row ( 行:横向 )/ column (列:纵向) / row-reverse(行反) / column-reverse (列反)

 2.  换行方式: flex-wrap: nowrap(不换行) / wrap(换行)/wrap-reverse( 反向换行 )

 3.  子盒子沿主轴排列方式: justify-content: flex-start(起始对齐),center(居中对齐),flex-end(末尾对齐),space-around(第一个盒子和最后一个盒子的与父盒子的间距是子盒子之间间距的一半),space-between(子盒子间距相等)

 4.  子盒子沿交叉轴的排列方式:

     单行 align-items : flex-start / center / flex-end / baseline /stretch

     多行 align-content: 同上





##   二 . 子容器

 1.  伸缩方式: flex-basis(基础尺寸) , flex-grow(伸展方式) , flex-shrink ( 收缩方式 

 2.  缩写 flex :

     a. 单值 : 

      	1. 无单位: flex-grow 
      	2. 有单位: flex-basis

     b. 双值 :

      	1. 无单位 : flex-grow & flex-shrink
      	2. 有单位: flex-grow & flex-basis

     c. 三值: flex-row & flex-shrink & flex-basis

  3.主轴顺序 order : 默认是0 , 可以为负值

 4.交叉轴的对齐方式 align-self: flex-start / flex-end / center / baseline / stretch