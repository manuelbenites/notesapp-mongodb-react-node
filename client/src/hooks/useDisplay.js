import { useState } from "react"

function useDisplay() {
	const [display, setDisplay] = useState("hidden")

	const handleToggleBlock = () => {
		if (display === "hidden") setDisplay("block")
		else if (display === "block") setDisplay("hidden")
	}

	const handleToggleFixed = () => {
		if (display === "hidden") setDisplay("fixed")
		else if (display === "fixed") setDisplay("hidden")
	}

	return {
		display,
		handleToggleBlock,
		handleToggleFixed,
	}
}

export default useDisplay
