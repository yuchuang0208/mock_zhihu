<template>
    <div class="YcFormItem">
        <p v-if="label" class="YcFormItem-label">{{ label }}</p>
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'YcFormItem',
        props: {
            label: String
        },
        setup () {
            return {}
        }
    })
</script>

<style scoped>
    .YcFormItem {
        margin-bottom: 20px;
    }
    .YcFormItem-label {
        font-size: 14px;
        margin-bottom: 4px;
    }
</style>
<style>
    .YcFormItem {

    }
</style>
