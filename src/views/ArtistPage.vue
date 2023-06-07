<template>
    <div>
        <ArtistInfo />
        <ArtistCardsSection />
    </div>
</template>

<script>
import ArtistCardsSection from '@/components/artist/ArtistCardsSection.vue';
import ArtistInfo from '@/components/artist/ArtistInfo.vue';

export default {
    name:"ArtistPage",
    components: { ArtistInfo, ArtistCardsSection }
}

</script>

<style scoped></style>