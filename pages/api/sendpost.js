import conn from "../../lib/db";

export default async (req, res) => {
  try {
    const input = JSON.parse(req.body);
    const sql = `INSERT INTO login(email , hash) VALUES($1,$2)`;
    const values = [input.email, input.password];
    const result = await conn.query(sql, values);
    console.log("ttt", result);
    res.status(200).json(result.command);
  } catch (error) {
    console.log(error);
  }
};
