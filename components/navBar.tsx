'use client'

import { useState } from "react"

const  NavBar: React.FC = () => {

    const [isChecked, setIsChecked] = useState(false);
    const [isVisible, setVisibility] = useState({visibility: true});

    const handleMenu = () => {
        console.log("handleMeun function called");
        setVisibility(
            (isVisible.visibility) ? (
                (prevVisibility) => ({ ...prevVisibility, visibility: false})
            ):(
                (prevVisibility) => ({ ...prevVisibility, visibility: true})
            )
        );
    }

    const toggleCheckboxState = () => {
        handleMenu();
        setIsChecked(!isChecked);
    }

    return(
        <>  
            {/* NavBar container */}
            <div className="flex flex-row 
                            items-center relative
                            min-h-[4em] w-full
                            bg-Transparent">

                {/* Logo or app Name */}
                <div className="text-4xl tracking-wide
                                text-white
                                absolute left-5">Qala</div>

                {/* Burger menu */}
                <div className="absolute right-5
                                w-1/12 h-4/6">
                    <input type="checkbox"
                           checked={isChecked}
                           onChange={toggleCheckboxState}
                           className="w-full h-full
                                      z-10
                                      absolute right-0 top-0
                                      opacity-10
                                      "/>
                    <div className="w-full h-full 
                                    flex flex-col 
                                    justify-evenly
                                    absolute left-0 top-0">
                        <span className="w-full h-1/6
                                         rounded-xl
                                         bg-white"></span>
                        <span className="w-full h-1/6
                                         rounded-xl
                                         bg-white"></span>
                        <span className="w-full h-1/6
                                         rounded-xl
                                         bg-white"></span>
                    </div>
                    
                    {/* Burger menu options */}
                    <ul 
                        id="toggleMenu"                        
                        style={{visibility: (isVisible.visibility) ? 'visible' : 'hidden'}}
                        className="text-white
                                   min-w-[200px] max-w-[400px]
                                   bg-black
                                   absolute
                                   top-[100%] right-0
                                   border-[2px] border-white
                                   z-3
                                   ">
                        <li className="h-[2.5em] w-full
                                       bg-black
                                       border-b-[2px]
                                       flex flex-col
                                       justify-center
                                       text-center text-[1.5rem]">Homepage</li>
                        <li className="h-[2.5em] w-full
                                       border-b-[2px]
                                       flex flex-col
                                       justify-center
                                       text-center text-[1.5rem]">Fees</li>
                        <li className="h-[2.5em]
                                       flex flex-col
                                       justify-center
                                       text-center text-[1.5rem]">Account Info</li>
                    </ul>

                </div>
                

                

            </div>
        </>
    )
}

export default NavBar;