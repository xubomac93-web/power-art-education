# Power国际艺术教育官网

专注艺术作品集培训与艺术留学申请

## 部署方式

### 方式1：Vercel 部署（推荐，最简单）

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 登录 Vercel
vercel login

# 3. 部署（在项目根目录执行）
vercel

# 4. 部署到生产环境
vercel --prod
```

部署完成后，Vercel 会给你一个域名，如 `power-art-education.vercel.app`

**绑定自定义域名：**
1. 登录 Vercel 控制台
2. 进入项目 → Settings → Domains
3. 添加你的二级域名，如 `art.yourdomain.com`
4. 在你的域名DNS添加 CNAME 记录：`art` → `cname.vercel-dns.com`

---

### 方式2：腾讯云 COS 静态网站托管

**步骤1：创建存储桶**
1. 登录 [腾讯云控制台](https://console.cloud.tencent.com/cos)
2. 点击"创建存储桶"
3. 名称：`power-art-website`
4. 地域：选择离用户近的（如上海、广州）
5. 访问权限：公有读私有写

**步骤2：开启静态网站**
1. 进入存储桶 → 基础配置 → 静态网站
2. 开启静态网站功能
3. 索引文档：`index.html`
4. 错误文档：`index.html`

**步骤3：上传文件**
上传以下文件/文件夹：
- index.html
- css/
- js/

**步骤4：绑定域名**
1. 进入存储桶 → 域名与传输管理 → 自定义源站域名
2. 添加域名：`art.yourdomain.com`
3. 在你的域名DNS添加 CNAME 记录指向存储桶域名

---

### 方式3：使用腾讯云 CLI 上传

```bash
# 安装腾讯云 CLI
pip install coscmd

# 配置（需要在腾讯云获取 SecretId 和 SecretKey）
coscmd config -a <SecretId> -s <SecretKey> -b <bucket-name> -r <region>

# 上传所有文件
coscmd upload -r ./ /
```

## 项目结构

```
├── index.html          # 主页面
├── css/
│   ├── style.css       # 主样式
│   ├── variables.css   # CSS变量
│   └── responsive.css  # 响应式样式
├── js/
│   ├── main.js         # 主逻辑
│   └── data.js         # 数据配置
└── vercel.json         # Vercel配置
```

## 本地预览

直接用浏览器打开 `index.html` 即可预览。

或使用本地服务器：
```bash
# 使用 Python
python -m http.server 8080

# 使用 Node.js
npx serve
```

然后访问 http://localhost:8080
