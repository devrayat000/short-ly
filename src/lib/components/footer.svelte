<script>
	import FooterSection from './footer-section.svelte';
</script>

<footer>
	<div
		class="bg-neutral-dark-violet prose-h4:text-white prose-h4:text-center prose-h4:mt-0 prose-a:text-white prose-a:text-center prose-a:no-underline py-10"
	>
		<h2 class="text-white text-center my-0">Shortly</h2>
		<section class="flex flex-col items-center gap-10 my-8">
			<FooterSection title="Features">
				<span>Link Shortening</span>
				<span>Branded Links</span>
				<span>Analytics</span>
			</FooterSection>
			<FooterSection title="Resources">
				<span>Blog</span>
				<span>Developers</span>
				<span>Support</span>
			</FooterSection>
			<FooterSection title="Company">
				<span>About</span>
				<span>Our Team</span>
				<span>Careers</span>
				<span>Contact</span>
			</FooterSection>

			<div class="flex gap-6 prose-img:my-0">
				<a>
					<img src="/images/icon-facebook.svg" alt="Facebook" />
				</a>
				<a>
					<img src="/images/icon-twitter.svg" alt="Twitter" />
				</a>
				<a>
					<img src="/images/icon-pinterest.svg" alt="Pinterest" />
				</a>
				<a>
					<img src="/images/icon-instagram.svg" alt="Instagram" />
				</a>
			</div>
		</section>
	</div>
</footer>
