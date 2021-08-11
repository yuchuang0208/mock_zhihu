<template>
    <div class="YcInput">
        <input
            :value="emailData.val"
            class="form-control"
            :class="{'is-invalid': emailData.error}"
            v-bind="$attrs"
            @blur="inputChange"
            @input="updateValue"
        >
        <span v-if="emailData.error" class="invalid-feedback YcInput-valid">{{ emailData.message }}</span>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, PropType, onMounted } from 'vue'
    import { useTrimSpace } from '@/hooks/useCommon'
    import { emitter } from '@/components/YcForm.vue'
    const emailValid = /^[0-9A-Za-z.@-_]{6,30}$/

    interface lenProp {
        length: number,
        message: string
    }

    interface RuleProp {
        type: 'required' | 'email' | 'password',
        message?: string,
        min?: lenProp,
        max?: lenProp
    }

    export type RulesProp = RuleProp[]
    export default defineComponent({
        name: 'YcInput',
        props: {
            rules: {
                type: Array as PropType<RulesProp>,
                default: () => {
                    return []
                }
            },
            modelValue: String
        },
        setup (props, context) {
            const emailData = reactive({
                val: props.modelValue || '',
                error: false,
                message: ''
            })
            const inputChange = () => {
                if (props.rules.length) {
                    let passed = true
                    const allPassed = props.rules.every(ruleItem => {
                        emailData.message = ruleItem.message || ''

                        if (ruleItem.min) {
                            passed = useTrimSpace(emailData.val).length >= ruleItem.min.length
                            if (!passed) {
                                emailData.message = ruleItem.min.message
                                return passed
                            }
                        }
                        if (ruleItem.max) {
                            passed = useTrimSpace(emailData.val).length <= ruleItem.max.length
                            if (!passed) {
                                emailData.message = ruleItem.max.message
                                return passed
                            }
                        }

                        switch (ruleItem.type) {
                        case 'required':
                            passed = (emailData.val.trim() !== '')
                            break
                        case 'email':
                            passed = (emailValid.test(emailData.val))
                            break
                        default:
                            break
                        }

                        return passed
                    })
                    emailData.error = !allPassed
                    return allPassed
                }
                return true
            }

            const updateValue = (e: KeyboardEvent) => {
                const targetValue = (e.target as HTMLInputElement).value
                emailData.val = targetValue
                context.emit('update:modelValue', targetValue)
            }

            const inputReset = () => {
                emailData.val = ''
            }

            onMounted(() => {
                emitter.emit('form-item-create', inputChange)
                emitter.emit('form-item-reset', inputReset)
            })

            return {
                emailData,
                inputChange,
                updateValue
            }
        }
    })
</script>

<style scoped>
    .YcInput {
        position: relative;
    }
    .YcInput-valid {
        position: absolute;
        top: 30px;
        left: 0;
        font-size: 12px;
        margin: 0;
    }
</style>
<style>
    .YcInput {

    }
</style>
