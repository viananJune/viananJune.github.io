---
title: Java Sort
date: 2020-09-05
tags:
 - java
 - sort
categories:
 - algorithm
sidebar: false
---
最近在看排序算法，冒泡排序、选择排序、插入排序、希尔排序、归并排序、快速排序、堆排序、计数排序、桶排序、基数排序。
[十大经典排序算法（动图演示）](https://www.cnblogs.com/onepixel/p/7674659.html)，挺有意思的。

![十大排序算法分析图.jpg](./../images/ten-algorithm-analysis.png)

我觉得我需要get√到以下几点：
::: tip
1. 插入排序在数量小、基本有序的时候，速度杠杠的
2. 杂乱无章的数据，快排拥有惊人效率
3. 基本有序的情况下，归并比快排快
4. 算法是可以优化的
5. 算法是有局限性的
:::

作为一名目前还是靠Java吃饭的码农，不由自主地将目光瞄进了JDK源码。Java的排序是怎么样的呢？以Java8为例。

# Java的排序
JDK源码中的排序算法主要是在Arrays中入口，Collections的排序其实也是调用的Arrays的，所以我们看Arrays的好了。它有这么多个重载方法，是为了针对不同的传入对象。

![Arrays.sort.jpg](./../images/Arrays.sort.jpg)

点进去仔细看，你会发现：

**①基本数据类型**，都是用**DualPivotQuicksort**.*sort*方法来处理，类似int
``` java
public static void sort(int[] a) {
    DualPivotQuicksort.sort(a, 0, a.length - 1, null, 0, 0);
}
```
这里面的DualPivotQuicksort一看就不是善茬，因为我们只到一般的快排是只有一个pivot(轴)的，这名字指名道姓地说自己是双轴，让我不禁想起一个典故，一字一横，二字两横，三字三横，瞬间天下的字都学会了、、、

难道双轴一定比单轴快，那为什么不用三轴四轴呢？

**②引用类型**都是用**Arrays**.*legacyMergeSort*或者**ComparableTimSort**.*sort*
``` java
public static void sort(Object[] a) {
    if (LegacyMergeSort.userRequested)
        legacyMergeSort(a);
    else
        ComparableTimSort.sort(a, 0, a.length, null, 0, 0);
}
```
这两者有什么区别呢？**Arrays**.*legacyMergeSort*是老的归并算法，很简单粗暴地先划分，然后并。而**ComparableTimSort**.*sort*是新算法，复杂度很高，采用的是多判断逻辑的分段归并算法，现实效率更高。为啥叫ComparableTimSort呢？老铁们注意哈，这里面是Tim而不是Time，是因为和时间没有半毛钱关系，这是因为这个算法是2002年由Tim Peters，一位Python大神写出来的。

好了，作为一个喷子，一定要注意看的是什么人的代码再喷。这是jdk源码，放尊重点！

## 双轴快排
我们进入**DualPivotQuicksort**.*sort*的源码，看到类头部注释的大意是，这个双轴快排是由Vladimir Yaroslavskiy, Jon Bentley, 和Josh Bloch三位大神写出来的，在n多数据集的测试下，都能提供O(nlog(n))的效率，而不会像其他快排一样遇到极端的情况导致性能降级。它的性能明显好于传统的单轴快排。
![really.png](./../images/really.png)

talk is cheap...我们一起来看看新的双轴排序做了什么妖

### 1、数据量<286的时候，用快排

``` java
// Use Quicksort on small arrays
if (right - left < QUICKSORT_THRESHOLD) {
    sort(a, left, right, true);
    return;
}
```
### 2、数据杂乱无章的时候，用快排
``` java 
/*
 * Index run[i] is the start of i-th run
 * (ascending or descending sequence).
 */
int[] run = new int[MAX_RUN_COUNT + 1];
int count = 0; run[0] = left;

// Check if the array is nearly sorted
for (int k = left; k < right; run[count] = k) {
    if (a[k] < a[k + 1]) { // ascending
        while (++k <= right && a[k - 1] <= a[k]);
    } else if (a[k] > a[k + 1]) { // descending
        while (++k <= right && a[k - 1] >= a[k]);
        for (int lo = run[count] - 1, hi = k; ++lo < --hi; ) {
            int t = a[lo]; a[lo] = a[hi]; a[hi] = t;
        }
    } else { // equal
        for (int m = MAX_RUN_LENGTH; ++k <= right && a[k - 1] == a[k]; ) {
            if (--m == 0) {
                sort(a, left, right, true);
                return;
            }
        }
    }

    /*
     * The array is not highly structured,
     * use Quicksort instead of merge sort.
     */
    if (++count == MAX_RUN_COUNT) {
        sort(a, left, right, true);
        return;
    }

    // Check special cases
    // Implementation note: variable "right" is increased by 1.
    if (run[count] == right++) { // The last run contains one element
        run[++count] = right;
    } else if (count == 1) { // The array is already sorted
        return;
    }
}
```
怎么判定数据是不是杂乱无章呢？这里的代码给出的逻辑是查看数据是不是一直递增或者递减的。
* 如果遇到递增的，直接往下走
* 如果遇到递减的，递减到不是递减的地方，给前面的逆序
* 如果是相等的，直接排除掉相等的

其他情况，++count。
如果count达到了67(这里的MAX_RUN_COUNT值就是67)，那么说明这些数够乱的了(至少源代码的作者这么认为)，那么适合杂乱无章数据的快排就要登场了！

### 3、上归并
到了这里了，说明这数据啊，足够有序，并且数据量很大。这种情况下，很明显用归并排序是很合适的。
``` java
// Determine alternation base for merge
byte odd = 0;
for (int n = 1; (n <<= 1) < count; odd ^= 1);

// Use or create temporary array b for merging
int[] b;                 // temp array; alternates with a
int ao, bo;              // array offsets from 'left'
int blen = right - left; // space needed for b
if (work == null || workLen < blen || workBase + blen > work.length) {
    work = new int[blen];
    workBase = 0;
}
if (odd == 0) {
    System.arraycopy(a, left, work, workBase, blen);
    b = a;
    bo = 0;
    a = work;
    ao = workBase - left;
} else {
    b = work;
    ao = 0;
    bo = workBase - left;
}

// Merging
for (int last; count > 1; count = last) {
    for (int k = (last = 0) + 2; k <= count; k += 2) {
        int hi = run[k], mi = run[k - 1];
        for (int i = run[k - 2], p = i, q = mi; i < hi; ++i) {
            if (q >= hi || p < mi && a[p + ao] <= a[q + ao]) {
                b[i + bo] = a[p++ + ao];
            } else {
                b[i + bo] = a[q++ + ao];
            }
        }
        run[++last] = hi;
    }
    if ((count & 1) != 0) {
        for (int i = right, lo = run[count - 1]; --i >= lo;
            b[i + bo] = a[i + ao]
        );
        run[++last] = right;
    }
    int[] t = a; a = b; b = t;
    int o = ao; ao = bo; bo = o;
}
```
诶，不对啊，快排在哪里，双轴体现在哪里了？别急，我们好像还没看真正的双轴快排代码呢。。。
### 4、分解双轴快排
在上面3个小步骤中，前面两步都有可能跳到真正的双轴快排函数，下面我们进入这个函数分析一下
#### ①数量小，直接用插入排序
``` java
/**
 * Sorts the specified range of the array by Dual-Pivot Quicksort.
 *
 * @param a the array to be sorted
 * @param left the index of the first element, inclusive, to be sorted
 * @param right the index of the last element, inclusive, to be sorted
 * @param leftmost indicates if this part is the leftmost in the range
 */
private static void sort(int[] a, int left, int right, boolean leftmost) {
    int length = right - left + 1;

    // Use insertion sort on tiny arrays
    if (length < INSERTION_SORT_THRESHOLD) {...}
```
或许抽取个函数更好。
#### ②取5个参考数
``` java
    // Inexpensive approximation of length / 7
    int seventh = (length >> 3) + (length >> 6) + 1;

    /*
     * Sort five evenly spaced elements around (and including) the
     * center element in the range. These elements will be used for
     * pivot selection as described below. The choice for spacing
     * these elements was empirically determined to work well on
     * a wide variety of inputs.
     */
    int e3 = (left + right) >>> 1; // The midpoint
    int e2 = e3 - seventh;
    int e1 = e2 - seventh;
    int e4 = e3 + seventh;
    int e5 = e4 + seventh;

    // Sort these elements using insertion sort
    if (a[e2] < a[e1]) { int t = a[e2]; a[e2] = a[e1]; a[e1] = t; }

    if (a[e3] < a[e2]) { int t = a[e3]; a[e3] = a[e2]; a[e2] = t;
        if (t < a[e1]) { a[e2] = a[e1]; a[e1] = t; }
    }
    if (a[e4] < a[e3]) { int t = a[e4]; a[e4] = a[e3]; a[e3] = t;
        if (t < a[e2]) { a[e3] = a[e2]; a[e2] = t;
            if (t < a[e1]) { a[e2] = a[e1]; a[e1] = t; }
        }
    }
    if (a[e5] < a[e4]) { int t = a[e5]; a[e5] = a[e4]; a[e4] = t;
        if (t < a[e3]) { a[e4] = a[e3]; a[e3] = t;
            if (t < a[e2]) { a[e3] = a[e2]; a[e2] = t;
                if (t < a[e1]) { a[e2] = a[e1]; a[e1] = t; }
            }
        }
    }
```
这段代码生硬得令我有点难以下咽，从中可以看到jdk源码的原则真的是简单粗暴又高效。
先是用位操作取到长度的七分之一(1/7)，即seventh。
接下来以中点数为展开，向左右获取到两个步长均为seventh的数。

接下来将这5个数用插入排序排好。这种排序方法真是一时间令我陷入了深深的思考。。。

#### ③双轴快排实现
这里有一个大大的if else语句，说的是如果这些参考数有任意两个相等的话，大神们就认为这批数不够杂乱无章，else分支里退化到单轴快排。

代码里注释写得很好，图画得更妙。我就画蛇添足直接在原注释上翻译一下，帮助我自己理解，对于翻译难以把握的，我就不翻译了。
``` java
if (a[e1] != a[e2] && a[e2] != a[e3] && a[e3] != a[e4] && a[e4] != a[e5]) {
    /*
     * 使用排好序的5个参考数中的第2和第4个作为轴点。
     * These values are inexpensive approximations of the first and
     * second terciles of the array. Note that pivot1 <= pivot2.
     */
    int pivot1 = a[e2];
    int pivot2 = a[e4];

    /*
     * 首尾两个元素放到两个轴点。
     * 当快排划分结束的时候，两个轴点元素最终放置到他们应该在的位置，并且在子排序中要被剔除。
     */
    a[e2] = a[left];
    a[e4] = a[right];

    /*
     * 跳过那些原本就应该待在它的位置的元素
     */
    while (a[++less] < pivot1);
    while (a[--great] > pivot2);

    /*
     * 快排划分(三向切分法):
     *
     *   left part           center part                   right part
     * +--------------------------------------------------------------+
     * |  < pivot1  |  pivot1 <= && <= pivot2  |    ?    |  > pivot2  |
     * +--------------------------------------------------------------+
     *               ^                          ^       ^
     *               |                          |       |
     *              less                        k     great
     *
     * 约束:
     *
     *              all in (left, less)   < pivot1
     *    pivot1 <= all in [less, k)     <= pivot2
     *              all in (great, right) > pivot2
     *
     * Pointer k is the first index of ?-part.
     * 下面for循环就是为了维护上面的约束做的
     */
    outer:
    for (int k = less - 1; ++k <= great; ) {
        int ak = a[k];
        if (ak < pivot1) { // Move a[k] to left part
            a[k] = a[less];
            /*
             * 原来"a[i] = b; i++;" 的性能高于 "a[i++] = b;"
             */
            a[less] = ak;
            ++less;
        } else if (ak > pivot2) { // Move a[k] to right part
            while (a[great] > pivot2) {
                if (great-- == k) {
                    break outer;
                }
            }
            if (a[great] < pivot1) { // a[great] <= pivot2
                a[k] = a[less];
                a[less] = a[great];
                ++less;
            } else { // pivot1 <= a[great] <= pivot2
                a[k] = a[great];
            }
            /*
             * 原来 "a[i] = b; i--;" 的性能高于"a[i--] = b;"
             */
            a[great] = ak;
            --great;
        }
    }

    // Swap pivots into their final positions
    a[left]  = a[less  - 1]; a[less  - 1] = pivot1;
    a[right] = a[great + 1]; a[great + 1] = pivot2;

    // 把左右两部分先递归
    sort(a, left, less - 2, leftmost);
    sort(a, great + 2, right, false);

    /*
     * 如果中间部分太大( > 4/7 ),
     * 把里头和轴点相等的值移到两端，不参与下一次的排序
     */
    if (less < e1 && e5 < great) {
        /*
         * 先跳过和轴点值一样的元素
         */
        while (a[less] == pivot1) {
            ++less;
        }

        while (a[great] == pivot2) {
            --great;
        }

        /*
         * 快排划分:
         *
         *   left part         center part                  right part
         * +----------------------------------------------------------+
         * | == pivot1 |  pivot1 < && < pivot2  |    ?    | == pivot2 |
         * +----------------------------------------------------------+
         *              ^                        ^       ^
         *              |                        |       |
         *             less                      k     great
         *
         * 约束:
         *
         *              all in (*,  less) == pivot1
         *     pivot1 < all in [less,  k)  < pivot2
         *              all in (great, *) == pivot2
         *
         * Pointer k is the first index of ?-part.
         */
        outer:
        for (int k = less - 1; ++k <= great; ) {
            int ak = a[k];
            if (ak == pivot1) { // Move a[k] to left part
                a[k] = a[less];
                a[less] = ak;
                ++less;
            } else if (ak == pivot2) { // Move a[k] to right part
                while (a[great] == pivot2) {
                    if (great-- == k) {
                        break outer;
                    }
                }
                if (a[great] == pivot1) { // a[great] < pivot2
                    a[k] = a[less];
                    /*
                     * 这里提醒了我们，浮点数和整型数是不太一样的，具体自己去看代码
                     * 就是说浮点数的==不一定是真的等，赋值的时候不要用中间值，直接用目标值
                     */
                    a[less] = pivot1;
                    ++less;
                } else { // pivot1 < a[great] < pivot2
                    a[k] = a[great];
                }
                a[great] = ak;
                --great;
            }
        }
    }

    // 递归中间部分
    sort(a, less, great, false);

}
```
else分支里的单轴快排直接选择中间那个数来做轴点，划分好后，前后段分别递归调用，此处不表。

## ComparableTimSort.sort


参考：
1. [快速排序算法原理及实现（单轴快速排序、三向切分快速排序、双轴快速排序）](https://blog.csdn.net/hrbeuwhw/article/details/79476890)



