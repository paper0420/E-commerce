import conn from "../../lib/db";

export default async (req, res) => {
  try {
    const input = JSON.parse(req.body);

    const addressData = await conn.query('SELECT * FROM "Address" ');
    console.log("accountData from Address DB: " + addressData);

    const isAccountIDExist = addressData.rows.some(
      (item) => item.Id === input.accountId
    );

    if (!isAccountIDExist) {
      const sqlInsert = `INSERT INTO "Address" ("HouseId", "Street","City","ZipCode","Country","Phonenumber","AccountId") 
      VALUES($1, $2, $3, $4, $5, $6, $7)`;
      const values = [
        input.houseId,
        input.street,
        input.city,
        input.zipCode,
        input.country,
        input.phoneNumber,
        input.accountId,
      ];
      const result = await conn.query(sqlInsert, values);
      console.log("Insert new address: ", result);
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
        input.accountId,
      ];
      const result = await conn.query(sqlInsert, values);
      console.log("Update existing address: ", result);
      res.status(200).json(result.command);
    }
  } catch (error) {
    console.log(error);
  }
};
