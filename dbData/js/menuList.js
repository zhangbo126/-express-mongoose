db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("6145e6e85368494d3486bc28"),
    children: [ ],
    component: "RouteView",
    icon: "QqOutlined",
    key: "P_User_Center",
    name: "用户中心",
    parentId: null,
    redirectUrl: "/usercenter/menulist",
    sort: NumberInt("2"),
    status: 1,
    url: "/usercenter/menulist"
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("6145e7935368494d3486bc29"),
    children: [ ],
    component: "userRole",
    icon: null,
    key: "P_User_Role",
    name: "用户角色",
    parentId: "6145e6e85368494d3486bc28",
    redirectUrl: null,
    sort: NumberInt("1"),
    status: NumberInt("1"),
    url: "/usercenter/userrole"
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("6145e8355368494d3486bc2a"),
    children: [ ],
    component: "menuList",
    icon: null,
    key: "P_Menu_List",
    name: "菜单管理",
    parentId: "6145e6e85368494d3486bc28",
    redirectUrl: null,
    sort: NumberInt("2"),
    status: NumberInt("1"),
    url: "/usercenter/menulist"
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("6145e85f5368494d3486bc2b"),
    children: [ ],
    component: "userAccount",
    icon: null,
    key: "P_Account_Manage",
    name: "账号管理",
    parentId: "6145e6e85368494d3486bc28",
    redirectUrl: null,
    sort: NumberInt("3"),
    status: NumberInt("1"),
    url: "/usercenter/accountmanage"
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("6145eb8a5368494d3486bc2e"),
    children: [ ],
    component: "RouteView",
    icon: "AlipayCircleFilled",
    key: "P_Commodity_Center",
    name: "商品中心",
    parentId: null,
    redirectUrl: "/commoditycenter/commodityclass",
    sort: NumberInt("2"),
    status: NumberInt("1"),
    url: "/commoditycenter"
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("6145ebba5368494d3486bc2f"),
    children: [ ],
    component: "commodityBrand",
    icon: null,
    key: "P_Commodity_Brand",
    name: "商品品牌",
    parentId: "6145eb8a5368494d3486bc2e",
    redirectUrl: null,
    sort: NumberInt("2"),
    status: NumberInt("1"),
    url: "/commoditycenter/commoditycenter"
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("6145ebd75368494d3486bc30"),
    children: [ ],
    component: "commodityClass",
    icon: null,
    key: "P_Commodity_class",
    name: "商品分类",
    parentId: "6145eb8a5368494d3486bc2e",
    redirectUrl: null,
    sort: null,
    status: NumberInt("1"),
    url: "/commoditycenter/commodityclass"
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("6145ebfb5368494d3486bc31"),
    children: [ ],
    component: "commodityLibrary",
    icon: null,
    key: "P_Commodity_Libray",
    name: "商品库",
    parentId: "6145eb8a5368494d3486bc2e",
    redirectUrl: null,
    sort: null,
    status: NumberInt("1"),
    url: "/commoditycenter/commoditylibrary"
} );
