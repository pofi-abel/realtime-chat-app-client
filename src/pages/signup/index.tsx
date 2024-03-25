import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckbox from "../../components/GenderCheckbox";
import useSignup from "../../hooks/useSignup";

type Props = {};

const Index = (props: Props) => {

    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const { signup, loading } = useSignup();

    const handleInputChange = (target: EventTarget & HTMLInputElement) => {
        setInputs(prev => ({ ...prev, [target.name]: target.value }));
    };

    const handleSubmit = async (evt: FormEvent) => {
        evt.preventDefault();
        await signup(inputs);
    };

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign up
                    {" "}
                    <span className="text-blue-500">ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="John Doe" className="w-full input input-bordered h-10" name="fullName" value={inputs.fullName} onChange={({ target }) => handleInputChange(target)} />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" placeholder="johndoe" className="w-full input input-bordered h-10" name="username" value={inputs.username} onChange={({ target }) => handleInputChange(target)} />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" name="password" value={inputs.password} onChange={({ target }) => handleInputChange(target)} />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10" name="confirmPassword" value={inputs.confirmPassword} onChange={({ target }) => handleInputChange(target)} />
                    </div>
                    <GenderCheckbox onCheckboxChange={handleInputChange} selectedGender={inputs.gender} />
                    <Link to={"/login"} className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account?</Link>
                    <div>
                        <button className="btn btn-block btn-sm mt-2" disabled={loading}>{loading ? <span className="loading loading-spinner"></span> : "Sign Up"}</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Index;