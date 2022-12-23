import conn from "../../lib/db";

export default async (req, res) => {
  try {
    const input = JSON.parse(req.body);

    console.log(input);

    const accountData = await conn.query('SELECT * FROM "Account" ');
    const accountId = accountData.rows.filter(
      (item) => item.Email === input.email
    )[0].Id;

    if (accountId == null) {
      const sqlInsert = `INSERT INTO "Address" ("HouseId", "Street","City","ZipCode","Country","Phonenumber") 
      VALUES($1, $2, $3, $4, $5, $6, $7)`;
      const values = [
        input.houseId,
        input.street,
        input.city,
        input.zipCode,
        input.country,
        input.phoneNumber,
      ];
      const result = await conn.query(sqlInsert, values);
      console.log("ttt", result);
      res.status(200).json(result.command);
    } else {
      const sqlInsert = `UPDATE "Address" SET 
      "HouseId" = $1, 
      "Street"= $2,
      "City" = $3,
      "ZipCode" = $4,
      "Country" = $5,
      "Phonenumber" = $6
      WHERE "AccountId" = $7;`;
      const values = [
        input.houseId,
        input.street,
        input.city,
        input.zipCode,
        input.country,
        input.phoneNumber,
        accountId,
      ];
      const result = await conn.query(sqlInsert, values);
      console.log("ttt", result);
      res.status(200).json(result.command);
    }
  } catch (error) {
    console.log(error);
  }
};
