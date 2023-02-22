export default {
    name: 'signUp',
    title: 'Sign Up',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'smallTitle',
            title: 'Small Title',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
        },
    ]
}