# 指令编写规范

####标准组件：纯交互型，不含业务数据、逻辑。交互过于复杂，复用率高。

| 文件 | 示例 | 命名 |
| ------------- | ------------- | ------------- |
|`folder`| `yourcomponent`| 无驼峰，首字母小写|
|`service`|`$yourComponent` | 驼峰，首字母小写|
|`controller`| `yourComponentController`|驼峰，首字母小写|
|`directive`| `yourComponent`| 驼峰，首字母小写|

####业务组件：最小业务模块，含交互。数据、业务逻辑过于复杂，或模块复用率高。

| 文件 | 示例 | 命名 |
| ------------- | ------------- | ------------- |
|`folder`| `wisyourcomponent`| 无驼峰，首字母小写|
|`service`|`$wisYourComponent` | 驼峰，首字母小写|
|`controller`| `wisYourComponentController`|驼峰，首字母小写|
|`directive`| `wisYourComponent`| 驼峰，首字母小写|
