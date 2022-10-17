import React, { useContext } from "react";
import { BsGoogle, BsFacebook, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const LogIn = () => {
    const { signIn } = useContext(AuthContext);

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
            })
            .catch((error) => console.error(error));
    };
    return (
        <section onSubmit={handelSubmit} className="section-gap flex justify-center items-center">
            <div className="w-full px-6 xs:w-[448px]">
                <form className="content-gap">
                    <div className="flex flex-row items-center gap-3">
                        <p className="text-lg mb-0 mr-4">Sign In with :</p>
                        <button className="btn btn-circle btn-primary text-2xl">
                            <BsGoogle />
                        </button>
                        <button className="btn btn-circle btn-primary text-2xl">
                            <BsFacebook />
                        </button>
                        <button className="btn btn-circle btn-primary text-2xl">
                            <BsGithub />
                        </button>
                    </div>
                    <div className="flex items-center before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                        <p className="text-center font-semibold mx-4 mb-0">Or</p>
                    </div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="mb-1 input input-primary w-full"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="input input-primary w-full"
                        required
                    />
                    <div className="flex justify-between items-center">
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text mr-2">Remember me</span>
                                <input type="checkbox" className="checkbox checkbox-primary" />
                            </label>
                        </div>
                        <a href="#!" className="text-gray-800">
                            Forgot password?
                        </a>
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
