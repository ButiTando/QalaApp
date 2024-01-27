import { Component } from "react"
import NavBar from "../../../components/navBar"
import UserInfo, {UserNameData} from "../../../components/userInfo"
import { randomInt } from "crypto";
import TransactionTableItem from "../../../components/transactionTableItem";
import { TransactionData } from "../../../components/Interfaces/HomePageInferface";

// generating random strings
function generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
}

export default function homePage(){

    const transType: Array<string> = ["Deposit", "Loan", "Loan Repayment"];

    const testTransaction: TransactionData = {
        date: new Date(),
        typeOfTransaction: "Cash deposit",
        sender: "Tando Mahlati",
        amount: 500,
        balance: 600,

    };

    // Trying to create multiple data case
    const testTransactionArray: Array<TransactionData> = [];

    for ( let i: number = 0; i<20; i++ ){

        let transInfo: TransactionData = {
            date: new Date(2024,1,i),
            typeOfTransaction: transType[randomInt(2)],
            sender: generateRandomString(10),
            amount: randomInt(500),
            balance: randomInt(700),
        };

        testTransactionArray.push(transInfo);

    }

    const testUserInfo: UserNameData = {
        name: "Tando Mahlati",
        balance: 100,
        loan: 500,
        excess: 200
    }

    return(
        <>

            {/* This encapsulates the entire home page to make sizing easier. */}

            <div className="h-screen w-full
                            flex flex-col">
                <NavBar />

                {/* This is the user data container */}
                <div className="
                                h-[11.75em]
                                rounded-2xl
                                mt-[.5em] ml-[3px] mr-[3px]
                                p-[5px]
                                border-[1px]">
                    <UserInfo dataBind={testUserInfo}/>
                </div>

                <div className="text-2xl text-center
                            text-white tracking-wider
                            flex flex-col
                            justify-center                            
                            w-full h-[1.75em]
                            border-b-[1px] border-b-white
                            my-1
                            static top-0">Transactions</div>

                <ul className="w-full 
                               flex flex-col flex-1
                               tracking-wide
                               text-white
                               overflow-scroll">

                { (Array.isArray(testTransactionArray)) ? 
                                    (
                                        testTransactionArray.map((data,index) => {
                                            return(
                                                <TransactionTableItem key={index} itemData={data}/>
                                            )                            
                                        })
                                    ): (<TransactionTableItem itemData={testTransaction as TransactionData}/>)
                                }

                </ul>
            </div>
            
        </>
    )
}