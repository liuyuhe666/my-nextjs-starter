'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOut, User } from 'lucide-react'
import { signOut } from 'next-auth/react'

interface UserDropdownMenuProps {
  userInfo: {
    name?: string | null
    email?: string | null
    image?: string | null
  }
}

export function UserDropdownMenu({ userInfo }: UserDropdownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src={userInfo.image ?? ''} alt={userInfo.name ?? 'avatar'} />
          <AvatarFallback>
            <User className="size-4" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="font-bold">{userInfo.name}</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">{userInfo.email}</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>
          <div className="cursor-pointer flex items-center justify-center gap-2" onClick={() => signOut()}>
            <LogOut />
            <span>Sign out</span>
          </div>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
