

const TransactionPage = () => {
    return (
        <>
            <div className="flex flex-rows
                            justify-left
                            bg-red-600
                            text-white
                            h-[3em] w-full">
                <div className="flex flex-col
                                justify-center
                                w-1/2 h-full
                                bg-purple-700
                                text-[1.25em] text-center">Type of trasaction</div>
                <div className="flex flex-col
                                justify-center
                                w-1/2 h-full
                                bg-purple-700
                                text-[1.25em] text-left
                                pl-[1.5em]">Date</div>
            </div>

            <div className="h-[17em] w-full 
                            flex flex-row                      
                            bg-green-500
                            mt-[2em]">
                <div className="h-full w-2/4">
                    <img src="qalaLogo2.webp"
                         alt="Proof of payment from sender"
                         className="h-full w-full"/>
                </div>
                <ul className="flex flex-col
                               justify-center
                               p-[1em]
                               h-full w-2/4
                               bg-pink-700
                               text-white">
                    <li>
                        <div>Type of transaction</div>
                        <div>EFT</div>
                    </li>
                    <li>
                        <div>Person</div>
                        <div>Tando Mahlati</div>
                    </li>
                    <li>
                        <div>Amount</div>
                        <div>R 200</div>
                    </li>
                </ul>
            </div>

            <div>
                <div>Confirmed</div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}

export default TransactionPage;