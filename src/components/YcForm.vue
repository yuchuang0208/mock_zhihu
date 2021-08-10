<template>
    <div class="YcForm">
        <form class="YcForm-container">
            <slot name="default"></slot>
            <div class="YcForm-container-submit" @click.prevent="submitform">
                <slot name="submit">
                    <button type="submit" class="btn btn-primary">提交</button>
                </slot>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'YcForm',
        components: {},
        emits: ['form-submit'],
        setup (props, context) {
            const submitform = () => {
                context.emit('form-submit', true)
            }
            return {
                submitform
            }
        }
    })
</script>

<style scoped>
    .YcForm {
        width: 100%;
        height: 100%;
    }
</style>
<style>
    .YcForm {

    }
</style>
