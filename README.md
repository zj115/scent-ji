# Scent-Ji 香玑

高端香薰电商网站，集成 Supabase 数据库和用户认证系统。

## 技术栈

- React 18
- React Router 6
- Vite
- Supabase (数据库 + 认证)

## 环境配置

1. 复制 `.env.example` 为 `.env`
2. 在 [Supabase](https://supabase.com) 创建项目
3. 在 Supabase SQL Editor 中运行 `supabase-schema.sql` 创建数据库表
4. 将 Supabase 项目的 URL 和 anon key 填入 `.env`:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 本地开发

```bash
npm install
npm run dev
```

## 部署到 Vercel

1. 在 Vercel 导入此仓库
2. 在 Vercel 项目设置中添加环境变量：
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. 部署

## 功能特性

- 用户注册/登录
- 邮箱验证
- 密码重置
- 用户中心
- 订单管理
- 购物车
- 产品浏览
- 响应式设计
