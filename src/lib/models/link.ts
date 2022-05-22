interface ILink {
	id: string;
	shortUrl: string;
	longUrl: string;
}
export default class Link implements ILink {
	public id: string;
	public shortUrl: string;
	public longUrl: string;
	constructor({ id, longUrl, shortUrl }: ILink) {
		this.id = id;
		this.longUrl = longUrl;
		this.shortUrl = shortUrl;
	}
}
