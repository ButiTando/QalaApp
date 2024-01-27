import { TransactionData } from "./Interfaces/HomePageInferface";

interface TransactionsItemProps{
    itemData: TransactionData;
}

const TransactionTableItem: React.FC<TransactionsItemProps> = ({itemData}) => {
    return (
        <>
            <li className=" flex
                            min-h-[60px]
                            max-h-[70px]
                            bg-gray-700                                
                            rounded-lg
                            mb-[4px] mx-[5px]
                            pb-[5px]">
                    <div className="w-1/4">
                        <div className="w-full text-center text-2xl
                                        flex flex-col
                                        justify-center">{itemData.date.toLocaleString('en-US',{day: "2-digit"})}</div>
                        <div className="w-full text-center text-lg
                                        flex flex-col
                                        justify-center">{`${itemData.date.toLocaleString('en-US',{month: 'short'})} ${itemData.date.toLocaleString('en-US', {year: '2-digit'})}`}</div>
                    </div>
                    <div className="w-2/4
                                    pl-[.9em]">
                        <div className="w-full h-3/5
                                        flex flex-col
                                        justify-center
                                        truncate text-nowrap
                                        text-xl">{itemData.typeOfTransaction}</div>
                        <div className="w-full h-2/5
                                        flex flex-col
                                        justify-center
                                        truncate text-nowrap
                                        text-lg
                                        ">{itemData.sender}</div>
                    </div>
                    <div className="w-1/4">
                        <div className="text-center text-2xl
                                        flex flex-col
                                        justify-center
                                        h-full w-full">R{itemData.amount}</div>
                        
                    </div>
                </li>
        </>
    )
}

export default TransactionTableItem;