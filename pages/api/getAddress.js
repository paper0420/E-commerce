import conn from "../../lib/db";

export default async (req, res) => {
  try {
    const input = JSON.parse(req.body);

    const accountData = await conn.query('SELECT * FROM "Account" ');
    const accountId = accountData.rows.filter(
      (item) => item.Email === input.email
    )[0].Id;

    const address = await conn.query(
      'SELECT "HouseId", "Street", "City", "ZipCode", "Country", "Phonenumber" FROM "Address" WHERE "AccountId" = $1 ',
      [accountId]
    );
    //console.log(address.rows);

    res.status(200).json(address.rows[0]);
  } catch (error) {
    console.log(error);
  }
};
