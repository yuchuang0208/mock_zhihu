<template>
    <div class="Login">
        <yc-form ref="ycform" @form-submit="onFormSubmit">
            <yc-form-item label="邮箱">
                <yc-input
                    v-model='formData.email'
                    :rules="formRules.email"
                    type="text"
                    placeholder="请输入邮箱"
                ></yc-input>
            </yc-form-item>
            <yc-form-item label="密码">
                <yc-input
                    v-model='formData.password'
                    :rules="formRules.password"
                    type="password"
                    placeholder="请输入密码"
                ></yc-input>
            </yc-form-item>
            <template #submit>
                <yc-form-item>
                    <button type="submit" class="btn btn-primary">submit</button>
                </yc-form-item>
            </template>
        </yc-form>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, ref } from 'vue'
    import YcForm from '@/components/YcForm.vue'
    import YcFormItem from '@/components/YcFormItem.vue'
    import YcInput, { RulesProp } from '@/components/form/YcInput.vue'

    interface Rules {
        [propName: string]: RulesProp
    }

    export default defineComponent({
        name: 'Login',
        components: {
            YcForm, YcFormItem, YcInput
        },
        setup () {
            const formData = reactive({
                email: '',
                password: ''
            })
            const formRules: Rules = {
                email: [
                    { type: 'required', message: '电子邮箱地址不能为空' },
                    { type: 'email', message: '请输入正确的电子邮箱格式' }
                ],
                password: [
                    { type: 'required', message: '密码不能为空' },
                    { type: 'password', min: { length: 6, message: '密码最小长度6位且不能有空格' }, max: { length: 12, message: '密码最大长度12位且不能有空格' } }
                ]
            }

            const ycform = ref()
            const onFormSubmit = (res: boolean) => {
                // console.log(res, '123')
                // console.log(ycform.value)
                if (res) {
                    ycform.value.resetFields()
                }
            }
            return {
                formData,
                formRules,
                onFormSubmit,
                ycform
            }
        }
    })
</script>

<style scoped>
    .Login {

    }
</style>
<style>
    .Login {

    }
</style>
