"use client"

import { logout } from "@/actions/logout"
import { Navbar } from "@/app/(protected)/profile/_components/navbar/navbar"
import { Button } from "@/components/ui/button"
import { useCurrentUser } from "@/hooks/use-current-user"
import Header from "../_components/header"
import Dates from "../_components/dates"


const SettingsPage = () => {

	const user = useCurrentUser()

	const onClick = () => {
 logout();
}

	return(
		<div className="h-[100%]">
			<div>
				<Header 
					header="Календарь"
				/>
			</div>
			<div className="w-full flex justify-start">
				<Dates/>
			</div>
		</div>
	)
}

export default SettingsPage