import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowRight, Code2 } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">My Next.js Starter</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Next.js + Tailwind CSS + Prisma + Auth.js
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6"> 一个 Next.js (v15) 快速启动模板</h2>
          <p className="text-lg mb-4">
            ⚡️ Next.js (v15) 快速启动模板, 集成 Tailwind CSS (v4) + Prisma + Auth.js
          </p>
          <div className="flex gap-4 mt-2">
            <Button asChild>
              <Link href="/">
                开始使用
                {' '}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://github.com/liuyuhe666/my-nextjs-starter">查看源码</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-[400px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden flex items-center justify-center">
          <div className="relative z-10 p-8 text-center">
            <Code2 className="w-16 h-16 mx-auto mb-4 text-primary" />
            <p className="text-lg font-semibold">My Next.js Starter</p>
          </div>
        </div>
      </div>
      <Separator className="my-16" />
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">核心功能</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-8 shadow-sm border">
            <h3 className="text-xl font-bold mb-2">Tailwind CSS (v4)</h3>
            <p className="text-muted-foreground">
              使用原子化 CSS 框架 Tailwind CSS，快速构建高效设计、响应式界面 UI
            </p>
          </div>
          <div className="bg-card rounded-lg p-8 shadow-sm border">
            <h3 className="text-xl font-bold mb-2">暗黑模式</h3>
            <p className="text-muted-foreground">
              支持暗黑模式，提供更好的夜间使用体验
            </p>
          </div>
          <div className="bg-card rounded-lg p-8 shadow-sm border">
            <h3 className="text-xl font-bold mb-2">代码规范</h3>
            <p className="text-muted-foreground">
              遵循最佳实践的代码规范，结合 ESLint 进行代码质量检查与一致性维护
            </p>
          </div>
        </div>
      </div>
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">技术优势</h2>
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    ✓
                  </div>
                  <p>高效的 React (v19) 框架，使用 Next.js 打造现代化应用</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    ✓
                  </div>
                  <p>使用原子化 CSS 框架 Tailwind CSS，快速构建高效设计、响应式界面 UI</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    ✓
                  </div>
                  <p>全面集成 TypeScript，提供静态类型检查，减少运行时错误，提高代码可靠性和可维护性</p>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    ✓
                  </div>
                  <p>支持暗黑模式，提供更好的夜间使用体验</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    ✓
                  </div>
                  <p>提供丰富的预置组件，并支持灵活的自定义扩展</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    ✓
                  </div>
                  <p>遵循最佳实践的代码规范，结合 ESLint 进行代码质量检查与一致性维护</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-card rounded-lg p-12 border shadow-sm">
        <h2 className="text-3xl font-bold mb-4">My Next.js Starter</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
          ⚡️ 一个 Next.js (v15) 快速启动模板
        </p>
        <Button size="lg" asChild>
          <Link href="/">
            开始使用
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
