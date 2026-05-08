const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   MongoDB Connection
========================= */
mongoose.connect("mongodb+srv://lifeuser:Ghadeer4545@cluster0.us3m2uh.mongodb.net/lifesaverDB?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

/* =========================
   User Schema & Model
========================= */
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
});

const User = mongoose.model("User", UserSchema);

/* =========================
   Test Route
========================= */
app.get("/", (req, res) => {
    res.send("LifeSaver API Running...");
});

/* 👉 TEST ROUTE (مهم للتأكد إن السيرفر شغال) */
app.get("/test", (req, res) => {
    res.send("SERVER IS WORKING");
});

/* =========================
   CREATE - Add User
========================= */
app.post("/add-user", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.json({ message: "User added successfully", data: newUser });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/* =========================
   READ - Get All Users
========================= */
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/* =========================
   READ - Get Single User by ID
========================= */
app.get("/user/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/* =========================
   UPDATE - Update User by ID
========================= */
app.put("/update-user/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json({ message: "User updated", data: updatedUser });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/* =========================
   DELETE - Delete User by ID
========================= */
app.delete("/delete-user/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.get("/check-users", (req, res) => {
    res.send("USERS ROUTE IS WORKING");
});

/* =========================
   Start Server
========================= */
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});