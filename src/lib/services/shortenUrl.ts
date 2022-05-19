import ShortUrlError from '$lib/utils/error';

interface ShortenUrlResponse {
	ok: boolean;
	error_code?: number;
	result: {
		code: string;
		short_link: string;
		full_short_link: string;
		short_link2: string;
		full_short_link2: string;
		share_link: string;
		full_share_link: string;
		original_link: string;
	};
}

export async function shortenUrl(url: string) {
	const res = await fetch('https://api.shrtco.de/v2/shorten?url=' + url);
	const resData = (await res.json()) as ShortenUrlResponse;

	if (resData.error_code) {
		throw new ShortUrlError(resData.error_code);
	}

	return resData;
}
