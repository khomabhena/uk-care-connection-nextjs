export default {
    name: 'employerSignIn',
    title: 'Employer Sign In',
    type: 'document',
    fields: [
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true
            }
        },
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
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
        },
    ]
}