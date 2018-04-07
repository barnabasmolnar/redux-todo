import mongoose from 'mongoose';

mongoose.Promise = Promise;

mongoose.connect('mongodb://username:password@url', {
    useMongoClient: true,
});

const todoSchema = mongoose.Schema({
    title: String,
    completed: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('ReduxTodos', todoSchema);