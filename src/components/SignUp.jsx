import React, { useContext } from "react";
import { BsGoogle, BsFacebook, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/UserContext";
import { getThemeValue } from "../Utilities/getThemeValue";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const notify = (error) => {
        toast.error(`OPPS ! ${error}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: getThemeValue(),
        });
    };

    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.fastName.value} ${form.lastName.value}`;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password.length < 6) {
            notify("Password sould be 6 cherecter or more");
            return;
        }
        if (password !== confirmPassword) {
            notify("Your password didn't match");
            return;
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                user.displayName = name;
                form.reset();
            })
            .catch((error) => console.error(error));
    };

    return (
        <section className="section-gap flex justify-center">
            <div className="w-full px-6 xs:w-[448px] content-gap">
                <div className="flex items-center gap-3">
                    <p className="text-lg">Sign Up with :</p>
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
                <div className="vertical-line">
                    <p className="text-center font-semibold mx-4 mb-0">Or</p>
                </div>
                <form onSubmit={handelSubmit} className="content-gap">
                    <div className="flex flex-col xs:flex-row gap-5 mb-2">
                        <input type="text" name="fastName" placeholder="Fast Name" className="input-field" />
                        <input type="text" name="lastName" placeholder="Last Name" className="input-field" />
                    </div>
                    <input type="email" name="email" placeholder="Email" className="mb-2 input-field" required />
                    <input type="password" name="password" placeholder="Password" className="mb-2 input-field" required />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input-field" required />
                    <div className="flex justify-between items-center">
                        <label className="label cursor-pointer">
                            <span className="label-text mr-2">Remember me</span>
                            <input type="checkbox" className="checkbox checkbox-primary" />
                        </label>
                        <Link>Forgot password?</Link>
                    </div>
                    <input type="submit" value="Sign Up" className="btn btn-primary" />
                    <p className="text-sm font-semibold">
                        Don't have an account?
                        <Link to="/login" className="ml-2 uppercase underline text-primary">
                            LogIn
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default SignUp;
