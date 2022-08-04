import { writable } from 'svelte/store'

export const userStore = () => {
	const savedName = writable<string>('')

	function setNewName(name: string) {
		savedName.set(name)
	}

	return {
		savedName,
		setNewName,
	}
}
