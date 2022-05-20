<script>
	import FooterSection from './footer-section.svelte';
	import FooterSocial from './footer-social.svelte';
</script>

<footer>
	<div
		class="bg-neutral-dark-violet md:flex justify-between gap-10 prose-h4:text-white prose-h4:text-center md:prose-h4:text-left prose-h4:mt-0 prose-a:text-white prose-a:text-center prose-a:no-underline py-12 md:px-32"
	>
		<h2 class="text-white text-center my-0">Shortly</h2>
		<section
			class="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 my-8 md:mt-0"
		>
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
		</section>

		<FooterSocial />
	</div>
</footer>
