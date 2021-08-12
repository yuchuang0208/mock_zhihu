<template>
    <div class="List">
        <div class="row">
            <div
                v-for="column in columnList"
                :key="column.id"
                class="col-4 mb-4"
            >
                <div class="card h-100 shadow-sm">
                    <div class="card-body text-center">
                        <img :src="column.avatar" :alt="column.title" class="rounded-circle border border-light w-25 my-3">
                        <h5 class="card-title">{{ column.title }}</h5>
                        <p class="card-text text-left">{{ column.description }}</p>
                        <router-link :to="`/columnDetail/${column.id}`" class="btn btn-outline-primary">进入专栏</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, PropType } from 'vue'
    // PropType接收一个泛型，可以将Array的构造函数返回传入的泛型类型
    import defaultImg from '@/assets/logo.png'

    export interface ColumnProps {
        id: number,
        title: string,
        description: string,
        avatar?: string
    }

    export default defineComponent({
        name: 'List',
        props: {
            list: {
                // type: Array as ColumnProps[], // Array是个数组构造函数，不是类型，无法断言
                type: Array as PropType<ColumnProps[]>,
                required: true
            }
        },
        setup (props) {
            const columnList = computed(() => {
                return props.list.map(listItem => {
                    return {
                        ...listItem,
                        avatar: listItem.avatar ? listItem.avatar : defaultImg
                        // avatar: listItem.avatar ? listItem.avatar : defaultImg
                    }
                })
            })
            return {
                columnList
            }
        }
    })
</script>

<style scoped>
    .List {

    }
</style>
<style>
    .List {

    }
</style>
