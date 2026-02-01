import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/card'
import { Button } from './ui/button'
import { signupWithGoogle } from '@/db/apiAuth'

const Login = () => {
    return (
        <Card>
            <CardHeader className="text-center">
                <CardTitle>Login</CardTitle>
                <CardDescription>Sign in with your Google account</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center">
                <Button variant="outline" onClick={async () => {
                    try {
                        await signupWithGoogle();
                    } catch (e) {
                        // eslint-disable-next-line no-console
                        console.error(e.message || e);
                        alert(e.message || 'Google sign-in failed');
                    }
                }}>
                    Continue with Google
                </Button>
            </CardFooter>
        </Card>
    )
}

export default Login;