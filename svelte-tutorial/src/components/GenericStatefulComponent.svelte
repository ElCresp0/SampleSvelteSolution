<script lang="ts">
    // change in an object with $state affects the displayed content
    let numbersWithState = $state([1, 2, 3, 4]);
    let numbersWithoutState = [1, 2, 3, 4];

    // $derived object reacts to changes in it's base stateful object and affects the displayed content accordingly
    let total = $derived(
        numbersWithState.reduce(
            (accumulator, currentNb) => accumulator + currentNb,
            0,
        ),
    );

    let totalWithoutState = $derived(
        numbersWithoutState.reduce(
            (accumulator, currentNb) => accumulator + currentNb,
            0,
        ),
    );

    function pushNumber() {
        numbersWithState.push(numbersWithState.length + 1);
        numbersWithoutState.push(numbersWithoutState.length + 1);
        console.log(
            "stateful:",
            $state.snapshot(numbersWithState),
            "unstateful:",
            numbersWithoutState,
        );
    }

    $inspect(numbersWithState); // will print the inspected object on every update
</script>

<p>numbersWithState: {numbersWithState}</p>
<p>numbersWithState: {numbersWithState.join(" + ")} = {total}</p>
<p>numbersWithoutState: {numbersWithoutState}</p>
<p>
    numbersWithoutState: {numbersWithoutState.join(" + ")} = {totalWithoutState}
</p>

<button onclick={pushNumber}>push a number</button>
