import NavBar from "../../../components/navBar";

const TransactionPage = () => {
    return (
        <>
            <NavBar/>
            
            <div className="flex flex-rows
                            justify-left
                            text-white
                            h-[3em] w-full
                            mt-[1em]">
                <div className="flex flex-col
                                justify-center
                                w-1/2 h-full
                                text-[1.55em] text-center text-nowrap
                                pl-[0.5em]">Type of trasaction</div>
                <div className="flex flex-col
                                justify-center
                                w-1/2 h-full
                                text-[1.25em] text-left
                                pl-[1.5em]">Date</div>
            </div>

            <div className="h-[17em] w-full 
                            flex flex-row
                            mt-[2em]">
                <div className="h-full w-2/4">
                    <img src="qalaLogo2.webp"
                         alt="Proof of payment from sender"
                         className="h-full w-full
                                    rounded-[1em]
                                    ml-[0.5em]"/>
                </div>
                <ul className="flex flex-col
                               justify-center
                               p-[1em]
                               h-full w-2/4
                               text-white">
                    <li className="mb-[0.5em]">
                        <div className="text-[16px]">Transtion done by </div>
                        <div className="text-[25px]">EFT</div>
                    </li>
                    <li className="mb-[0.5em]">
                        <div className="text-[16px]">Person</div>
                        <div className="text-[25px]">Tando Mahlati</div>
                    </li>
                    <li>
                        <div className="text-[16px]">Amount</div>
                        <div className="text-[25px]">R 200</div>
                    </li>
                </ul>
            </div>

            <div className="h-[17em] w-full 
                            flex flex-row
                            mt-[2em] text-white">
                <div className="h-full w-2/4
                                flex flex-col
                                justify-center
                                text-center text-[2em]">Confirmed</div>
                <div className="h-full w-2/4
                                mr-[1em]">
                    <img src="qalaLogo2.webp"
                         alt="Proof of payment from sender"
                         className="h-full w-full
                                    rounded-[1em]"/>
                </div>
            </div>
        </>
    )
}

export default TransactionPage;