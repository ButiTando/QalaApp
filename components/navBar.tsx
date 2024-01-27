import exp from "constants";

export default function NavBar(){
    return(
        <>
            <div className="flex flex-row 
                            items-center relative
                            min-h-[4em] w-full
                            bg-Transparent">
                <div className="text-4xl tracking-wide
                                text-white
                                absolute left-5">Qala</div>
                <div className="absolute right-5
                                w-1/12 h-4/6">
                    <input type="checkbox"
                           className="w-full h-full
                                      z-10
                                      absolute right-0 top-0
                                      opacity-10
                                      " />
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
                </div>
            </div>
        </>
    )
}