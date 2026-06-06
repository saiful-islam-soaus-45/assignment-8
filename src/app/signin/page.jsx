"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {

    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,

} from "@heroui/react";
import { UserPlus } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";


export default function SignInPage() {
    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log({ email, password });
        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/"

        })
        
        console.log({ data, error })
        if (error) {
    toast.error(error.message || "Invalid email or password!", {
        duration: 4000,
        style: {
            border: '1px solid #FCA5A5',
            padding: '12px',
            color: '#991B1B',
        },
    });
} else {
    toast.success("Welcome back! Logging in...");
}


    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google"
        })
    }

    return (
        <Card className="border mx-auto w-125 py-10 mt-5">
            <h1 className="text-center text-2xl font-bold">Login</h1>

            <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>




                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }

                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>
                        Must be at least 8 characters with 1 uppercase and 1 number
                    </Description>
                    <FieldError />
                </TextField>

                <div className="flex flex-col gap-2">
                    <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">
                        <Check />
                        Login
                    </Button>
                    <p className="text-sm text-muted-foreground text-center font-bold">
                        Or
                    </p>
                    <Button className="w-full" onClick={handleGoogleSignIn}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.5 24.5c0-1.57-.15-3.09-.43-4.5H24v9h12.75c-.55 2.87-2.17 5.31-4.6 6.93l7.19 5.57c4.21-3.88 6.66-9.6 6.66-16z"/>
                <path fill="#FBBC05" d="M10.54 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.98-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.19-5.57c-1.99 1.33-4.55 2.13-7.7 2.13-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>  Sign up with Google
                    </Button>

                    <Link href={"/signup"}>
                    <Button className="w-full">
                      <UserPlus></UserPlus>  Register
                    </Button></Link>
                    

                </div>
            </Form>
        </Card>

    );
}