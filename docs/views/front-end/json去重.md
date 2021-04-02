 

```
unique(arr, attribute) {

   var new_arr = [];

   var json_arr = [];

   for (var i = 0; i < arr.length; i++) {

​    if (new_arr.indexOf(arr[i][attribute]) == -1) {

​     // -1代表没有找到

​     new_arr.push(arr[i][attribute]); //如果没有找到就把这个name放到arr里面，以便下次循环时用

​     json_arr.push(arr[i]);

​    } else {

​    }

   }

   return json_arr;

  },
```

