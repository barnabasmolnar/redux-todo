import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Todos from './todos';

const app = express();
app.use(cors());

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/api/todos", (req, res) => {
    Todos.find({})
        .then(found => res.json({result: found}))
        .catch(() => res.sendStatus(500))
});

app.delete("/api/todos/:id", (req, res) => {
    Todos.remove({_id: req.params.id})
        .then(() => res.sendStatus(204))
        .catch(() => res.sendStatus(404))
});

app.post("/api/todos", (req, res) => {
    const newTodo = new Todos(req.body);
    newTodo.save()
        .then(saved => res.json(saved))
        .catch(() => res.sendStatus(400))
});

app.patch("/api/todos/:id", (req, res) => {
    Todos.update({_id: req.params.id}, req.body)
        .then(() => res.sendStatus(204))
        .catch(() => res.sendStatus(400))
});

app.listen(3001);
