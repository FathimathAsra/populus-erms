import mongoose from 'mongoose';

const fileSchema = mongoose.Schema(
    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        file_path: {
            type: String,

        },
        file_mimetype: {
            type: String,

        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model('File', fileSchema)