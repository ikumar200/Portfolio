"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { Separator } from "@radix-ui/themes"


const Navbar = () => {
    const { setTheme } = useTheme()

    return (
        <div className="flex justify-center">
            <nav className='flex justify-center space-x-5 m-4 p-2 w-140 sticky  border-2 rounded-2xl z-20  shadow-2xl dark:shadow-gray-600 dark:shadow-xl/20'>
                <Link href="/" className="hover:bg-[#ced4da] cursor-pointer p-1.5 rounded-2xl dark:hover:text-black">Home</Link>
                <Link href="/projects" className="hover:bg-[#ced4da] cursor-pointer p-1.5 rounded-2xl dark:hover:text-black">Projects</Link>
                <Link href="/blogs" className="hover:bg-[#ced4da] cursor-pointer p-1.5 rounded-2xl dark:hover:text-black">Blogs</Link>
                <Separator orientation='vertical' size={{ sm: '1', lg: '2', xl: '2' }} className='bg-black dark:bg-gray-400' />
                <Link 
                    href="https://github.com/ikumar200"
                    className="hover:bg-[#ced4da] cursor-pointer p-1.5 rounded-2xl dark:hover:text-black">
                    Github
                </Link>
                <Link 
                    href="https://x.com/ikumar200"
                    className="hover:bg-[#ced4da] cursor-pointer p-1.5 rounded-2xl dark:hover:text-black">
                    X
                </Link>
                <Link 
                    href="https://www.linkedin.com/in/ikumar200"
                    className="hover:bg-[#ced4da] cursor-pointer p-1.5 rounded-2xl dark:hover:text-black">
                    Linkedin
                </Link>
                <Separator orientation='vertical' size={{ sm: '1', lg: '2', xl: '2' }} className='bg-black dark:bg-gray-400' />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </nav>
        </div>
    )
}

export default Navbar