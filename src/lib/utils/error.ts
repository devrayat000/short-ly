class BaseError extends Error {
	constructor(message?: string, options?: ErrorOptions) {
		super(message, options);
	}
}

class NoUrlSpecified extends BaseError {
	constructor(cause?: Error) {
		super('No URL specified!', { cause });
	}
}

class InvalidUrl extends BaseError {
	constructor(cause?: Error) {
		super('Invalid URL!', { cause });
	}
}

class RateError extends BaseError {
	constructor(cause?: Error) {
		super('Rate limit reached!', { cause });
	}
}

class IPBlocked extends BaseError {
	constructor(cause?: Error) {
		super('IP-Address has been blocked!', { cause });
	}
}

class AlreadyTaken extends BaseError {
	constructor(cause?: Error) {
		super('Short url already taken!', { cause });
	}
}

class UnknownError extends BaseError {
	constructor(cause?: Error) {
		super('Unknown error!', { cause });
	}
}

class DisallowedError extends BaseError {
	constructor(cause?: Error) {
		super('Trying to shorten a disallowed Link!', { cause });
	}
}

export default class ShortUrlError extends BaseError {
	code: number;

	constructor(code: number, cause?: Error) {
		let error: BaseError;

		switch (code) {
			case 1:
				error = new NoUrlSpecified(cause);
				break;
			case 2:
				error = new InvalidUrl(cause);
				break;
			case 3:
				error = new RateError(cause);
				break;
			case 4:
				error = new IPBlocked(cause);
				break;
			case 5:
				error = new AlreadyTaken(cause);
				break;
			case 10:
				error = new DisallowedError(cause);
				break;

			default:
				error = new UnknownError(cause);
				break;
		}
		super(error.message, { cause });
		this.code = code;
	}
}
