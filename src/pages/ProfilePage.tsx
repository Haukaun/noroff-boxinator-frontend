import CustomDialog from "@/components/customComponents/editUserDialog/CustomDialog"
import { CustomTable } from "@/components/customComponents/table/CustomTable"
import { KeyCloakContext } from "@/context/KeyCloakContext";
import { useContext, useEffect, useState } from "react";
import { KeycloakProfile } from "keycloak-js";




function ProfilePage() {
    const keycloak = useContext(KeyCloakContext);
    const [orders, setOrders] = useState<Order[]>([])
    const [user, setUser] = useState<KeycloakProfile | undefined>(undefined)



    useEffect(() => {
        keycloak.keycloak?.loadUserProfile().then((profile) => {
            setUser(profile)
            console.log(profile)
        })
    }, [keycloak.keycloak?.authenticated])


    return (
        <div>
            {keycloak.keycloak && keycloak.keycloak?.authenticated && (
                <main className='flex flex-col justify-center items-center pt-20 text-background-color bg-primary-color min-h-screen'>
                    <div className="min-w-[10rem] flex flex-col items-center justify-center">
                        <img className='rounded-full' src="./images/freddy.png" alt="" />
                        <h1 className='mt-10 font-bold text-2xl'>{user?.username}</h1>
                        <CustomDialog />
                    </div>

                    <div className="w-[70%] mx-auto">
                        <CustomTable orders={orders} />
                    </div>
                </main>
            )}
        </div>
    )
}

export default ProfilePage