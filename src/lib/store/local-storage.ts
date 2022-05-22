import { browser } from '$app/env';
import { onMount } from 'svelte';
import { writable } from 'svelte/store';

export function createLocalStorage<T>(key: string, initial?: T) {
	onMount(() => {
		const localItem = localStorage.getItem(key);

		if (!localItem) {
			localStorage.setItem(key, JSON.stringify(initial));
		}
		initial = localItem ? JSON.parse(localItem) : initial;
	});

	const store = writable(initial);

	store.subscribe((value) => {
		if (browser) {
			localStorage.setItem(key, JSON.stringify(value));
		}
	});

	return { ...store };
}
