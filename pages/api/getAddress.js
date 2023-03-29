import conn from "../../lib/db";

export default async (req, res) => {
  const input = JSON.parse(req.body);

  const accountData = await conn.query('SELECT * FROM "Account" ');
  const accountId = accountData.rows.filter(
    (item) => item.Email === input.email
  )[0].Id;

  const addressData = await conn.query('SELECT * FROM "Address" ');

  const isAccountIDExist = addressData.rows.some(
    (item) => item.AccountId === accountId
  );

  let data = {
    address: null,
    accountId: accountId,
  };

  if (!isAccountIDExist) {
    console.log("isAccountIDExist" + isAccountIDExist);
    res.status(200).json(data);
  } else {
    console.log("isAccountIDExist" + isAccountIDExist);

    const address = await conn.query(
      'SELECT "HouseId", "Street", "City", "ZipCode", "Country", "Phonenumber" FROM "Address" WHERE "AccountId" = $1 ',
      [accountId]
    );
    data = {
      address: address.rows[0],
      accountId: accountId,
    };
    res.status(200).json(data);
  }
};
