import { z } from 'zod'

export const loginSchema = z.object({
    email: z
        .string({ required_error: 'Email cannot be empty' })
        .email({ message: 'Email must be a valid email address' }),
    password: z
        .string({ required_error: 'Password cannot be empty' })
})


export const registerSchema = z.object({
    name: z
        .string({ required_error: 'Name cannot be empty' }).regex(/^[a-zA-z\s]*$/, { message: 'Name must be a letters and spaces !' }).min(2, { message: "Name consist of two or more characters" }).max(64, { message: "Name cannot be more than 64 characters" }).trim(),
    email: z
        .string({ required_error: 'Email cannot be empty' })
        .email({ message: 'Email must be a valid email address' }),
    password: z
        .string({ required_error: "Password cannot be empty" }).regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, { message: "Passwords must consist of a mix of letters, numbers, and special characters." }),
    passwordConfirm: z
        .string({ required_error: "Confirm Password cannot be empty" }).regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, { message: "Confirm Password must consist of a mix of letters, numbers, and special characters." }),

}).superRefine(({ passwordConfirm, password }, ctx) => {
    if (passwordConfirm !== password) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Password and Confirm Password must be the same',
            path: ['password']
        })
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Password and Confirm Password must be the same',
            path: ['passwordConfirm']
        })

    }
})

const accImageTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'image/svg+xml',
    'image/gif',
    'image/avif',
]

export const newProjectSchema = z.object({
    name: z
        .string({ required_error: 'Name of project cannot be null' })
        .min(1, { message: 'Name cannot be less than one character' })
        .max(64, { message: 'Name cannt be more than 64 characters' })
        .trim(),
    tagline: z
        .string({ required_error: 'Tagline of project cannot be null' })
        .min(1, { message: 'Tagline cannot be less than one character' })
        .max(64, { message: 'Tagline cannt be more than 64 characters' })
        .trim(),
    url: z
        .string({ required_error: 'URL of project cannot be null' })
        .url({ message: 'URL must be a valid URL' }),
    description: z
        .string({ required_error: 'Description of project cannot be null' })
        .min(1, { message: 'Description cannot be less than one character' })
        .max(512, { message: 'Description cannt be more than 512 characters' })
        .trim(),
    thumbnail: z
        .instanceof(Blob)
        .superRefine((val, ctx) => {
            if (val) {
                if (val.size > 5242880) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'Thumbnail cannot be larger than 5mb'
                    })
                }
                if (!accImageTypes.includes(val.type)) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'A thumbnail must be in one of the following formats: jpeg, jpg, png, gif, webp, or svg.'
                    })
                }
            }
        })
        .optional(),
    owner: z.string({ required_error: "Owner of this project cannot be blank" })
})

export const editProjectSchema = newProjectSchema.omit({ owner: true })

export const updateEmailSchema = z.object({
    email: z
        .string({ required_error: "Email cannot be null" })
        .email({ message: "Please enter a valid email address" })
})

export const updateUsernameSchema = z.object({
    username: z
        .string({ required_error: "Username cannot be null" }).min(3, { message: "Username must be at least 3 characters" }).max(24, { message: "Username cannot be more than 24 characters" }).regex(/^[a-zA-Z0-9]*$/, {
            message: "Username only contains letters and numbers"
        })
})

export const updatePasswordSchema = z.object({
    oldPassword: z
        .string({ required_error: "Old password is required" }),
    password: z
        .string({ required_error: "Password cannot be empty" }).regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, { message: "Passwords must consist of a mix of letters, numbers, and special characters." }),
    passwordConfirm: z
        .string({ required_error: "Confirm Password cannot be empty" }).regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, { message: "Confirm Password must consist of a mix of letters, numbers, and special characters." })
}).superRefine(({ passwordConfirm, password }, ctx) => {
    if (passwordConfirm !== password) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Password and Confirm Password must be the same',
            path: ['password']
        })
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Password and Confirm Password must be the same',
            path: ['passwordConfirm']
        })

    }
})

export const updateProfileSchema = z.object({
    name: z
        .string({ required_error: 'Name of project cannot be null' })
        .min(1, { message: 'Name cannot be less than one character' })
        .max(64, { message: 'Name cannt be more than 64 characters' })
        .trim(),
    avatar: z
        .instanceof(Blob)
        .superRefine((val, ctx) => {
            if (val) {
                if (val.size > 5242880) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'Thumbnail cannot be larger than 5mb'
                    })
                }
                if (!accImageTypes.includes(val.type)) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'A thumbnail must be in one of the following formats: jpeg, jpg, png, gif, webp, or svg.'
                    })
                }
            }
        })
        .optional(),


})