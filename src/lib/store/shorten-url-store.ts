import { writable, type Writable } from 'svelte/store';

import type { ShortenUrlResponse } from '$lib/services/shortenUrl';
import { shortenUrl as shorten } from '$lib/services/shortenUrl';
import type ShortUrlError from '$lib/utils/error';

export interface UrlStoreModel {
	loading: boolean;
	error: ShortUrlError | null;
	data: ShortenUrlResponse | null;
}

export interface UrlStore extends Writable<UrlStoreModel> {
	shortenUrl(url: string): Promise<void>;
}

export function createUrlStore() {
	const { set, subscribe, update } = writable<UrlStoreModel>();

	async function shortenUrl(url: string) {
		set({
			loading: true,
			data: null,
			error: null
		});

		try {
			const data = await shorten(url);
			update((prev) => ({ ...prev, data, loading: false }));
		} catch (error) {
			update((prev) => ({ ...prev, error: error as ShortUrlError, loading: false }));
		}
	}

	return { set, subscribe, update, shortenUrl };
}
