import React, { useContext } from "react";
import { BsGoogle, BsFacebook, BsGithub } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const LogIn = () => {
    const { signIn, signInByGoogle, signInByFacebook, signInByGithub } = useContext(AuthContext);

    const navigate = useNavigate();
    const loaction = useLocation();
    const from = loaction.state?.from?.pathname || "/";

    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch((error) => console.error(error));
    };

    const handelGoogleSignIn = () => {
        signInByGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => console.error(error));
    };
    const handelFacebookSignIn = () => {
        signInByFacebook()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => console.error(error));
    };
    const handelGithubSignIn = () => {
        signInByGithub()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => console.error(error));
    };

    return (
        <section onSubmit={handelSubmit} className="section-gap flex justify-center">
            <div className="w-full px-6 xs:w-[448px] content-gap">
                <div className="flex items-center gap-3">
                    <p className="text-lg">Sign In with :</p>
                    <button onClick={handelGoogleSignIn} className="btn btn-circle btn-primary text-2xl">
                        <BsGoogle />
                    </button>
                    <button onClick={handelFacebookSignIn} className="btn btn-circle btn-primary text-2xl">
                        <BsFacebook />
                    </button>
                    <button onClick={handelGithubSignIn} className="btn btn-circle btn-primary text-2xl">
                        <BsGithub />
                    </button>
                </div>
                <div className="vertical-line">
                    <p className="text-center font-semibold mx-4 mb-0">Or</p>
                </div>
                <form className="content-gap">
                    <input type="email" name="email" placeholder="Email" className="mb-2 input-field" required />
                    <input type="password" name="password" placeholder="Password" className="input-field" required />
                    <div className="flex justify-between items-center">
                        <label className="label cursor-pointer">
                            <span className="label-text mr-2">Remember me</span>
                            <input type="checkbox" className="checkbox checkbox-primary" />
                        </label>
                        <Link>Forgot password?</Link>
                    </div>
                    <button className="btn btn-primary">LogIn</button>
                    <p className="text-sm font-semibold">
                        Don't have an account?
                        <Link to="/signup" className="ml-2 uppercase underline text-primary">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default LogIn;
