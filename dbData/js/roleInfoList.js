db.getCollection("roleInfoList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("6145e95f5368494d3486bc2c"),
    describe: "所有权限",
    name: "超级管理员",
    "roleMenu_List": [
        "6145e6e85368494d3486bc28",
        "6145e7935368494d3486bc29",
        "6145e8355368494d3486bc2a",
        "6145e85f5368494d3486bc2b"
    ],
    "roleMenuName_List": [
        "用户中心",
        "用户角色",
        "菜单管理",
        "账号管理"
    ],
    status: NumberInt("1")
} );
db.getCollection("roleInfoList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("6145ee775368494d3486bc32"),
    describe: "商品中心权限",
    name: "商品中心管理员",
    "roleMenu_List": [
        "6145eb8a5368494d3486bc2e",
        "6145ebba5368494d3486bc2f",
        "6145ebd75368494d3486bc30",
        "6145ebfb5368494d3486bc31"
    ],
    "roleMenuName_List": [
        "商品中心",
        "商品品牌",
        "商品分类",
        "商品库"
    ],
    status: NumberInt("1")
} );
