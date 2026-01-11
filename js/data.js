// Power国际艺术教育 - 网站数据配置

const siteData = {
  // 网站基本信息
  site: {
    name: "Power国际艺术教育",
    tagline: "让艺术梦想照进现实",
    description: "专注艺术作品集培训与艺术留学申请，助力学子圆梦世界顶尖艺术院校"
  },

  // 联系信息
  contact: {
    address: "西安市雁塔区美院楼尚",
    phone: "400-888-6666",
    email: "info@powerart.edu.cn",
    wechat: "PowerArt_Edu"
  },

  // 服务项目
  services: [
    {
      icon: "🎨",
      title: "作品集培训",
      description: "一对一定制化作品集指导，由海归名师亲自授课，助力申请世界顶尖艺术院校"
    },
    {
      icon: "🌍",
      title: "艺术留学",
      description: "全程留学规划服务，从选校定位到签证办理，一站式解决所有留学问题"
    },
    {
      icon: "📚",
      title: "艺术基础课程",
      description: "系统化艺术基础训练，涵盖素描、色彩、设计思维，夯实创作根基"
    }
  ],

  // 学员案例
  cases: [
    {
      id: "case-001",
      name: "张同学",
      school: "皇家艺术学院 RCA",
      major: "服装设计",
      category: "fashion",
      image: "images/case-fashion.jpg"
    },
    {
      id: "case-002",
      name: "李同学",
      school: "中央圣马丁 CSM",
      major: "平面设计",
      category: "graphic",
      image: "images/case-graphic.jpg"
    },
    {
      id: "case-003",
      name: "王同学",
      school: "帕森斯设计学院",
      major: "室内设计",
      category: "interior",
      image: "images/case-interior.jpg"
    },
    {
      id: "case-004",
      name: "陈同学",
      school: "罗德岛设计学院 RISD",
      major: "工业设计",
      category: "industrial",
      image: "images/case-industrial.jpg"
    },
    {
      id: "case-005",
      name: "刘同学",
      school: "伦敦艺术大学 UAL",
      major: "插画设计",
      category: "illustration",
      image: "images/case-illustration.jpg"
    },
    {
      id: "case-006",
      name: "赵同学",
      school: "普瑞特艺术学院",
      major: "建筑设计",
      category: "architecture",
      image: "images/case-architecture.jpg"
    }
  ],

  // 案例筛选分类
  categories: [
    { id: "all", name: "全部" },
    { id: "fashion", name: "服装设计" },
    { id: "graphic", name: "平面设计" },
    { id: "industrial", name: "工业设计" },
    { id: "interior", name: "室内设计" },
    { id: "architecture", name: "建筑设计" },
    { id: "illustration", name: "插画设计" }
  ],

  // 统计数据
  stats: [
    { number: "2000+", label: "成功学员" },
    { number: "98%", label: "录取率" },
    { number: "100+", label: "合作院校" }
  ],

  // 师资团队
  team: [
    {
      name: "David Chen",
      title: "创始人 / 艺术总监",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      desc: "皇家艺术学院硕士，10年艺术教育经验"
    },
    {
      name: "Emily Wang",
      title: "服装设计导师",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      desc: "中央圣马丁毕业，曾任职于Burberry"
    },
    {
      name: "Michael Liu",
      title: "工业设计导师",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      desc: "罗德岛设计学院硕士，前Apple设计师"
    },
    {
      name: "Sarah Zhang",
      title: "留学规划总监",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
      desc: "8年留学行业经验，帮助500+学生圆梦"
    }
  ],

  // 公司优势
  features: [
    "海归名师一对一指导",
    "个性化作品集方案",
    "全程留学申请服务",
    "高录取率保障",
    "丰富院校资源",
    "完善的后续服务"
  ]
};
