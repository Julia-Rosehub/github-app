import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import { SearchPropsType } from '../../types/types'

export const Search = (props: SearchPropsType) => {
	const [tempSearch, setTempSearch] = useState('')

	useEffect(() => {
		setTempSearch(props.value)
	}, [props.value])

	return <><FormControl style={{ marginBottom: 10 + "px" }} placeholder="search"
				value={tempSearch}
				onChange={(e) => setTempSearch(e.currentTarget.value)}
				onBlur={(e: any) => props.onBlur(tempSearch)} />
				{props.showing &&
				 <Button variant="primary" onClick={() => {
						props.onSubmit(tempSearch)
				} }>find</Button>
			 }
				</>
}
