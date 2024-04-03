export const getAllProducts = (req, res) => {
    console.log(req.body);
    res.json({ ok: "Todos los productos" });
}