import { writable, type Writable } from 'svelte/store';

import type { ShortenUrlResponse } from '$lib/services/shortenUrl';
import { shortenUrl as shorten } from '$lib/services/shortenUrl';
import type ShortUrlError from '$lib/utils/error';

export interface UrlStoreModel {
	loading: boolean;
	error: ShortUrlError | null;
	data: ShortenUrlResponse | null;
}

export interface UrlStore {
	loading: Writable<boolean>;
	error: Writable<ShortUrlError | null>;
	data: Writable<ShortenUrlResponse | null>;
	shortenUrl(url: string): Promise<void>;
}

export function createUrlStore() {
	const loading = writable(false);
	const error = writable<ShortUrlError | null>(null);
	const data = writable<ShortenUrlResponse | null>(null);

	async function shortenUrl(url: string) {
		loading.set(true);
		error.set(null);
		data.set(null);

		try {
			const resData = await shorten(url);
			data.set(resData);
		} catch (err) {
			error.set(err as ShortUrlError);
		} finally {
			loading.set(false);
		}
	}

	return { shortenUrl, loading, data, error };
}
