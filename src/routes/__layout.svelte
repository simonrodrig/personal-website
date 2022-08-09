<script>
    import Footer from "../components/Footer.svelte";
    import NavBar from "../components/NavBar.svelte";
    import Seo from "../components/Seo.svelte";

    import favicon from '../assets/headshot.jpeg';
</script>

<svelte:head>
    <title>Simon Rodriguez</title>
    <Seo />
</svelte:head>

<NavBar />
<slot />
<Footer />