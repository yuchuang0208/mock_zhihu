<template>
    <div class="YcForm">
        <form class="YcForm-container">
            <slot name="default"></slot>
            <div class="YcForm-container-action">
                <div class="YcForm-submit" @click.prevent="submitform">
                    <slot name="submit">
                        <button type="submit" class="btn btn-primary">提交</button>
                    </slot>
                </div>
                <div class="YcForm-submit" @click.prevent="resetFields">
                    <slot name="reset">
                        <button type="submit" class="btn">重置</button>
                    </slot>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onUnmounted } from 'vue'
    import mitt from 'mitt'
    type ValidateFunc = () => boolean
    type ResetFunc = () => void
    type Events = {
        'form-item-create': ValidateFunc,
        'form-item-reset': ResetFunc
    }
    export const emitter = mitt<Events>()

    export default defineComponent({
        name: 'YcForm',
        components: {},
        emits: ['form-submit'],
        setup (props, context) {
            let funcArr: ValidateFunc[] = []
            const submitform = () => {
                // 循环遍历执行funcArr里的方法
                const result = funcArr.map(item => item()).every(result => result)
                context.emit('form-submit', result)
            }
            const callback = (func: ValidateFunc) => {
                funcArr.push(func)
            }
            emitter.on('form-item-create', callback)

            let resetArr: ResetFunc[] = []
            const resetFields = () => {
                resetArr.forEach(item => {
                    item()
                })
            }
            const resetCallback = (func: ResetFunc) => {
                resetArr.push(func)
            }
            emitter.on('form-item-reset', resetCallback)

            onUnmounted(() => {
                emitter.off('form-item-create', callback)
                emitter.off('form-item-reset', resetCallback)
                funcArr = []
                resetArr = []
            })

            return {
                submitform,
                resetFields
            }
        }
    })
</script>

<style scoped>
    .YcForm {
        width: 100%;
        height: 100%;
    }
    .YcForm-container-action {
        display: flex;
    }
</style>
<style>
    .YcForm {

    }
</style>
