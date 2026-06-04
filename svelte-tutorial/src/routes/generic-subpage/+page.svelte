<script lang="ts">
    import GenericStatefulComponent from "../../components/GenericStatefulComponent.svelte";

    let htmlText = `<b>html text</b>`;
</script>

<h1>Welcome to a Generic Subpage</h1>
<p>This paragraph contains {@html htmlText}</p>

<GenericStatefulComponent />