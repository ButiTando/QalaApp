"use client"

import { useRouter } from "next/navigation";

export default function Login(){

    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        router.push('/homepage');

    }

    return (
        <>
            <div className="w-screen h-screen
                            flex flex-col
                            justify-around items-center"> 
                <form className="flex flex-col
                                 justify-center
                                 text-white
                                 w-4/6 h-[20em]
                                 relative
                                 px-3  
                                 border-[2px] border-white
                                 rounded-2xl"
                      onSubmit={handleSubmit}>
                    <label htmlFor="usernameInput"
                           className="text-lg
                                      pl-[5px]
                                      h-7 w-4/5">Username</label>

                    <input type="text" id="usernameInput"
                           className="text-xl
                                      bg-transparent
                                      h-10 w-full 
                                      focus:outline-0
                                      border-[2px] border-white
                                      focus:border-[1px] focus:border-gray-400
                                      rounded-lg
                                      mb-3
                                      mt-[3px]
                                      py-1
                                      px-2" />

                    <label htmlFor="passwordInput"
                           className="text-lg
                                      pl-[5px]
                                      h-7 w-4/5">Password</label>

                    <input type="text" id="passwordInput"
                           className="text-xl
                                      bg-transparent                                      
                                      h-10 w-full
                                      focus:outline-0
                                      border-[2px] border-white
                                      focus:border-[1px] focus:border-gray-400
                                      rounded-lg
                                      mb-3
                                      mt-[3px]
                                      py-1
                                      px-2" />

                    <button type="submit"
                            className="text-xl text-center
                                       justify-around
                                       bg-slate-800
                                       w-3/6 h-[2em]                                      py-1
                                       border-[1px] border-white
                                       rounded-2xl">Login</button>
                    <p className="
                                  text-sm
                                  tracking-wide">If you do not have an account, contact your account manager.</p>
                </form>
            </div>
        </>
    )
}