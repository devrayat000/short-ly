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

export default class ShortUrlError implements BaseError {
	name!: string;
	code: number;
	message!: string;

	constructor(code: number, cause?: Error) {
		this.code = code;

		switch (code) {
			case 1:
				Object.assign(this, new NoUrlSpecified(cause));
				break;
			case 2:
				Object.assign(this, new InvalidUrl(cause));
				break;
			case 3:
				Object.assign(this, new RateError(cause));
				break;
			case 4:
				Object.assign(this, new IPBlocked(cause));
				break;
			case 5:
				Object.assign(this, new AlreadyTaken(cause));
				break;
			case 10:
				Object.assign(this, new DisallowedError(cause));
				break;

			default:
				Object.assign(this, new UnknownError(cause));
				break;
		}
	}
}
