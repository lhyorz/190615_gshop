
实现2个列表滑动

当前分类
当滑动右侧列表时，更新当前分类
点击某个分类，右侧列表滑动到对应位置


类名：  current 标识当前分类
设计一个计算属性：  currentIndex
根据哪些数据计算？
        scrollY： 右侧华东的Y轴坐标（滑动过程时实时变化）
        tops:  所有右侧分类li的top组成的数据（列表第一次显示后就不再变化）


1. 在滑动过程中，实时手机scrollY
2. 列表第一次显示后，收集tops
3. 实现currentIndex的计算逻辑




两个引用变量指向同一个对象，通过一个引用变量改变对象内部数据，另一个引用变量能看见

两个引用变量指向同一个对象，让一个引用变量指向另一个对象，而另一个引用变量指向原来的对象，

