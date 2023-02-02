export default {
    props: {
        legend: {
            type: String,
            default: ''
        },
        value: {
            type: String | Number,
            required: true,
            default: ''
        }
    },
    methods: {
        setValue(value) {
            this.$emit('setValue', value)
        }
    }
}