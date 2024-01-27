
export interface UserNameData{
    name: string;
    balance: number;
    loan: number;
    excess: number;
}

interface UserNameProps{
    dataBind: UserNameData;
}

const UserInfo: React.FC<UserNameProps> = ({dataBind}) => {
    return(
        <>
            <div className="h-full w-full
                            relative
                            flex flex-row
                            text-white tracking-wide
                            ">
                <img src="qalaLogo2.webp" 
                     alt="User profile image"
                     className="h-full w-2/6
                                rounded-lg" />

                <div className="h-10/12 w-4/6
                                flex flex-col
                                justify-evenly
                                pl-7">

                    <div className="h-1/4 w-full">
                        <div className="h-3/6 w-full 
                                        indent-0 text-start align-text-topx
                                        text-lg">Name</div>
                        <div className="text-xl">{dataBind.name}</div>
                    </div>

                    <div className="h-1/4 w-full
                                    flex flex-row
                                    justify-between
                                    pr-[4em]">
                        <div>
                            <div className="h-3/6 w-full 
                                            indent-0 text-start align-text-top
                                            text-lg">Balance</div>
                            <div className="h-3/6 w-full 
                                            indent-0 text-start align-text-top
                                            text-xl">R{dataBind.balance}</div>
                        </div>
                        <div>
                            <div className="h-3/6 w-full 
                                            indent-0 text-start align-text-top
                                            text-lg">Loan</div>
                            <div className="h-3/6 w-full 
                                            indent-0 text-start align-text-top
                                            text-xl">R{dataBind.loan}</div>
                        </div>
                    </div>

                    <div className="h-1/4 w-full">
                          <div className="h-3/6
                                          indent-0 text-start align-text-top
                                          text-lg">Excess</div>
                          <div className="h-3/6
                                          indent-0 text-start align-text-top
                                          text-lg">R{dataBind.excess}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserInfo;