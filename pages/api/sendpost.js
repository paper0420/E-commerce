import conn from "../../lib/db";

export default async (req, res) => {
  try {
    const input = JSON.parse(req.body);
    console.log(input);

    const allMails = await conn.query('SELECT "Email" FROM "Account" ');
    console.log(allMails.rows);

    const isEmailFound = allMails.rows.some(
      (item) => item.Email === input.email
    );
    if (!isEmailFound) {
      const sqlInsert = `INSERT INTO "Account" ("Name", "Email") VALUES($1, $2)`;
      const values = [input.name, input.email];
      const result = await conn.query(sqlInsert, values);
      console.log("ttt", result);
      res.status(200).json(result.command);
    } else {
      res.status(200).json({});
    }
  } catch (error) {
    console.log(error);
  }
};
