import { onMount } from 'svelte';
import { writable, type Writable } from 'svelte/store';

export function createLocalStorage<T>(key: string, initial?: T): Writable<T> {
	const store = writable<T>(initial);

	onMount(() => {
		const localItem = localStorage.getItem(key);

		if (!localItem) {
			localStorage.setItem(key, JSON.stringify(initial));
		} else {
			const val = JSON.parse(localItem);
			store.set(val);
		}
	});

	return {
		...store,
		set(value) {
			localStorage.setItem(key, JSON.stringify(value)); // save also to local storage as a string
			return store.set(value);
		},
		update(updater) {
			store.update((prev) => {
				const value = updater(prev);
				localStorage.setItem(key, JSON.stringify(value)); // save also to local storage as a string
				return value;
			});
		}
	};
}
