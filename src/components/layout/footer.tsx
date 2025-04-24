import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

function UnderlineLink({
  link,
  label,
  underlineByDefault = false,
}: {
  label: ReactNode | string
  link: string
  underlineByDefault?: boolean
}) {
  return (
    <Link
      href={link}
      target="_blank"
      className={cn(
        'flex items-center rounded-none border border-transparent',
        'dark:text-zinc-300',
        'duration-200',
        'hover:border-b-zinc-600',
        'dark:hover:border-b-zinc-300',
        underlineByDefault
          ? `border-b border-b-zinc-400/[0.3] dark:border-b-zinc-500`
          : 'hover:border-b',
      )}
    >
      { label }
    </Link>
  )
}

export default function Footer() {
  return (
    <div className="w-full flex items-center justify-center py-8 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <span>
        Copyright ©
        {' '}
        { new Date().getFullYear() }
      </span>
      <span className="mx-2">❤️</span>
      <UnderlineLink
        link="https://github.com/liuyuhe666"
        label={(
          <>
            LiuYuhe
          </>
        )}
      />
    </div>
  )
}
