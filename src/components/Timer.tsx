import React, { useState, useEffect } from 'react'
import { TimerPropsType } from '../../types/types'

import Card from 'react-bootstrap/Card'

export const Timer = (props: TimerPropsType) => {
	const [seconds, setSeconds] = useState(10)
	useEffect(() => {
		setSeconds(props.seconds)
	}, [props.seconds])

	useEffect(() => {
		props.onChange(seconds)
	}, [seconds])

	useEffect(() => {
		const intervalId = setInterval(() => {
			setSeconds(prev => prev - 1)
		}, 1000)

		return () => { clearInterval(intervalId) }
	}, [props.timerKey])

	return <>
	<Card>
  	<Card.Body>
			{seconds}
		</Card.Body>
	</Card></>
}
