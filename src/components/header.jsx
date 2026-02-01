import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator } from './ui/dropdown-menu'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { LogOut, LinkIcon } from 'lucide-react'
import { UrlState } from '@/context'

const Header = () => {

    const navigate = useNavigate()
    const { user, isAuthenticated, signOut } = UrlState();

    return (
        <nav className="py-4 flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-32">
            <Link to="/">
                <img src="/Logo.png" className="h-16 pl-4" alt="Cosmodium Logo" />
            </Link>
            <div className="flex gap-4">
                {!isAuthenticated ? (
                    <Button onClick={() => navigate("/auth")}>Login</Button>
                ) : (
                    <DropdownMenu>
                        <DropdownMenuTrigger className="w-8 rounded-full overflow-hidden">
                            <Avatar>
                                <AvatarImage src={user?.user_metadata?.profile_pic || "https://github.com/shadcn.png"} />
                                <AvatarFallback>{(user?.user_metadata?.name || "User").split(" ").map(n => n[0]).slice(0, 2).join("")}</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>
                                {user?.user_metadata?.name || user?.email}
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
                                onClick={async () => {
                                    try {
                                        await signOut();
                                    } finally {
                                        navigate('/');
                                    }
                                }}
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
