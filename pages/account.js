import Center from "@/components/Center";
import Header from "@/components/Header";
import {useSession} from "next-auth/react"
import Title from "@/components/Title";

export default function AccountPage() {
    const session = useSession()
    return(
        <>
            <Header/>
            <Center>
                <Title>Account</Title>
            </Center>
        </>
    )
}
