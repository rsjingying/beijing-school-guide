# 北京上学信息库

一个由社区共建、面向北京家庭的入学信息开源库：地图、学校档案与政策索引分开维护，并通过 GitHub 保留更新记录。

## 包含内容

- **学校地图**：按城区、学段、办学性质筛选学校。
- **学校档案**：地址、官网、电话等公开基础资料。
- **政策索引**：按年度、城区和学段整理官方政策链接。

## 东城区资料

- [东城区 8 个学区边界整理](docs/dongcheng-districts.md)
- [东城区 8 个学区所属学校](docs/dongcheng-schools.md)
- [地图导入数据](data/dongcheng-school-data.js)

## 西城区资料

- [西城区 11 个学区边界与坐标](references/xicheng-districts.md)
- [西城区学区机器可读坐标](data/xicheng-district-paths.js)
- [西城区学校资料](docs/xicheng-schools.md)

> 数据仅作信息索引，不构成入学承诺。请以教育主管部门、学校当年发布的正式通知为准。

## 本地预览

在项目目录运行：

```bash
python3 -m http.server 8000
```

然后打开 `http://localhost:8000`。

## 贡献数据

1. 先阅读 [数据规范](docs/DATA_SCHEMA.md)。
2. 通过 Issue 提交新增、修订或失效信息。
3. 有来源链接的修改可直接提交 Pull Request。

## 部署

启用 GitHub Pages，并选择从 `main` 分支根目录部署即可。
