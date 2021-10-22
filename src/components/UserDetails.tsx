import React, { useState, useEffect } from 'react'
import axios from 'axios'

import {
	UserDetailsPropsType,
	UserType,
} from './../../types/types'
import { Timer } from './Timer'

const startTimerValue = 10
export const UserDetails = ({user}: UserDetailsPropsType) => {
	const [userDetails, setUserDetails] = useState<UserType | null>(null)
	const [seconds, setSeconds] = useState(10)

	useEffect(() => {
		if (!!user) {
			axios
			.get<UserType>(`https://api.github.com/users/${user.login}`)
			.then(res => {
				setSeconds(startTimerValue)
				setUserDetails(res.data)
			})
		}
	}, [user])

	useEffect(() => {
     if (seconds < 1) {
			 setUserDetails(null)
		 }
	}, [seconds])

	return <>
				{
					userDetails && <div>
						<Timer seconds={seconds} onChange={setSeconds} timerKey={userDetails.id.toString()}/>
						<h2>Details</h2>
					{userDetails.login}, followers: {userDetails.followers}
					<br/>
					<img src={userDetails.avatar_url} alt="avatar" />
					</div>
				}
				</>
}
