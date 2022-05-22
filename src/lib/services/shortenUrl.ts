import ShortUrlError from '$lib/utils/error';

interface ResError {
	ok: false;
	error_code: number;
	error: string;
}

interface ResData {
	ok: true;
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

export type ShortenUrlResponse = ResData | ResError;

export async function shortenUrl(url: string) {
	const res = await fetch('https://api.shrtco.de/v2/shorten?url=' + url).then(
		(r) => r,
		(e) => console.log(e.message)
	);
	const resData = (await res?.json()) as ShortenUrlResponse;

	if ('error_code' in resData) {
		throw new ShortUrlError(resData.error_code, new Error(resData.error));
	}

	return resData;
}
