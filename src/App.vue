<template>
    <div class="container">
        <global-header :user="user"></global-header>
        <list :list="list"></list>
        <p style="lineHeight: 36px;">----------------------------------------------</p>
        <div style="width: 300px;">
            <yc-form @form-submit="onFormSubmit">
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
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive } from 'vue'
    import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
    import List, { ColumnProps } from '@/components/List.vue'
    import YcForm from '@/components/YcForm.vue'
    import YcFormItem from '@/components/YcFormItem.vue'
    import YcInput, { RulesProp } from '@/components/form/YcInput.vue'

    interface Rules {
        [propName: string]: RulesProp
    }

    export default defineComponent({
        name: 'App',
        components: {
            GlobalHeader,
            List,
            YcForm,
            YcFormItem,
            YcInput
        },
        setup () {
            const user: UserProps = {
                id: 1000,
                name: '于闯',
                isLogin: false
            }
            const dataList: ColumnProps[] = [
                {
                    id: 1,
                    title: 'test1的专栏',
                    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
                    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
                },
                {
                    id: 2,
                    title: 'test2的专栏',
                    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧'
                    // avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
                },
                {
                    id: 3,
                    title: 'test3的专栏',
                    description: '这是的test3专栏，有一段非常有意思的简介，可以更新一下欧',
                    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
                },
                {
                    id: 4,
                    title: 'test4的专栏',
                    description: '这是的test4专栏，有一段非常有意思的简介，可以更新一下欧'
                    // avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
                }
            ]

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

            const onFormSubmit = (res: boolean) => {
                console.log(res, '123')
            }

            return {
                user,
                list: dataList,

                formData,
                formRules,
                onFormSubmit
            }
        }
    })
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
