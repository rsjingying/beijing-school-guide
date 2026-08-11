# 数据规范

所有事实字段都应附有可公开访问的官方来源；无法核验的信息不要收录。

## schools.json

必填字段：`name`、`district`、`stage`、`type`、`address`、`website`、`x`、`y`。

- `stage`：幼儿园、小学、初中、高中、完全中学等。
- `type`：公办、民办、国际等。
- `x` / `y`：地图示意位置百分比。正式版应升级为经纬度与地理编码来源。

## policies.json

必填字段：`year`、`district`、`stage`、`title`、`date`、`source`。`source` 必须是政府或学校官网的原始页面。
