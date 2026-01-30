import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator } from './ui/dropdown-menu'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { LogOut, LinkIcon } from 'lucide-react'
const Header = () => {

    const navigate = useNavigate()
    const user = true;

    return (
        <nav className="py-4 flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-32">
            <Link to="/">
                <img src="/Logo.png" className="h-16 pl-4" alt="Cosmodium Logo" />
            </Link>
            <div className="flex gap-4">
                {!user ? (
                    <Button onClick={() => navigate("/auth")}>Login</Button>
                ) : (
                    <DropdownMenu>
                        <DropdownMenuTrigger className="w-10 rounded-full overflow-hidden">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>
                                Ankit Shaw
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link to="/dashboard" className="flex">
                                    <LinkIcon className="mr-2 h-4 w-4" />
                                    My Links
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="text-red-400"
                            >
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Logout</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </div>
        </nav>
    )
}

export default Header
