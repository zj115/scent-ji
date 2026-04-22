# Supabase 配置指南

## 步骤 1: 创建 Supabase 项目

1. 访问 [https://supabase.com](https://supabase.com)
2. 注册/登录账户
3. 点击 "New Project"
4. 填写项目信息：
   - Name: scent-ji
   - Database Password: 设置一个强密码（保存好）
   - Region: 选择离你最近的区域
5. 点击 "Create new project"，等待项目创建完成（约2分钟）

## 步骤 2: 获取 API 密钥

1. 在项目仪表板，点击左侧菜单的 "Settings" (齿轮图标)
2. 点击 "API"
3. 找到以下信息：
   - **Project URL**: 类似 `https://xxxxx.supabase.co`
   - **anon public key**: 一串很长的字符串

## 步骤 3: 创建数据库表

1. 在 Supabase 项目中，点击左侧菜单的 "SQL Editor"
2. 点击 "New query"
3. 复制项目根目录的 `supabase-schema.sql` 文件内容
4. 粘贴到 SQL 编辑器中
5. 点击 "Run" 执行 SQL
6. 确认表创建成功（应该看到 "Success" 消息）

## 步骤 4: 配置本地环境变量

1. 在项目根目录创建 `.env` 文件（已在 .gitignore 中）
2. 复制以下内容并填入你的实际值：

```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=你的_anon_public_key
```

3. 保存文件
4. 重启开发服务器：`npm run dev`

## 步骤 5: 配置 Vercel 环境变量

1. 访问 [https://vercel.com](https://vercel.com)
2. 进入你的项目 (scent-ji)
3. 点击 "Settings" 标签
4. 点击左侧的 "Environment Variables"
5. 添加以下两个环境变量：
   - Name: `VITE_SUPABASE_URL`
     Value: 你的 Supabase Project URL
   - Name: `VITE_SUPABASE_ANON_KEY`
     Value: 你的 Supabase anon public key
6. 点击 "Save"
7. 重新部署项目：`vercel --prod`

## 步骤 6: 配置邮件认证（可选但推荐）

默认情况下，Supabase 会发送确认邮件。你可以自定义邮件模板：

1. 在 Supabase 项目中，点击 "Authentication" > "Email Templates"
2. 自定义以下模板：
   - Confirm signup (确认注册)
   - Reset password (重置密码)
3. 在模板中可以使用变量如 `{{ .ConfirmationURL }}`

## 步骤 7: 测试认证系统

1. 访问你的网站：https://scent-ji.vercel.app
2. 点击右上角 "Login"
3. 切换到 "Create Account" 标签
4. 注册一个新账户
5. 检查邮箱，点击确认链接
6. 返回网站登录
7. 查看 "Account" 页面

## 常见问题

### Q: 注册后没有收到确认邮件？
A: 检查垃圾邮件文件夹，或在 Supabase > Authentication > Settings 中禁用 "Enable email confirmations"（仅用于测试）

### Q: 登录时显示 "Invalid login credentials"？
A: 确保邮箱已验证，或在 Supabase 设置中禁用邮箱确认

### Q: 环境变量不生效？
A: 确保变量名以 `VITE_` 开头，并重启开发服务器

## 安全提示

- ⚠️ 永远不要将 `.env` 文件提交到 Git
- ⚠️ 不要在前端代码中使用 `service_role` key
- ✅ 只使用 `anon` public key（已配置行级安全策略）
- ✅ 定期更新 Supabase 项目的数据库密码
