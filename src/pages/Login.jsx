import {
    useLoaderData,
    Form,
    redirect,
    useActionData,
    useNavigation
} from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url)
    .searchParams.get("redirectTo") || '/host'

    try{
        const data = await loginUser({ email, password })
        console.log(data)
        localStorage.setItem("loggedin", true)
        return redirect(pathname) 
    }
    catch(err) {
        return err.message
    }
}

export default function Login() {
    const message = useLoaderData()
    const navigation = useNavigation()
     const errMessage = useActionData()


    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {errMessage && <h3 className="red">{errMessage}</h3>}

            <Form 
            method="post" 
            className="login-form"
            replace
            >
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button
                    disabled={navigation.status === "submitting"}
                >
                    {navigation.status === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
            </Form>
        </div>
    )
}
