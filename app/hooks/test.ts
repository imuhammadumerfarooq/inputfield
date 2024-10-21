import Safepay from "@sfpy/node-core";

export async function fetchData({Key}: {Key: string}) {
  const safepay = new Safepay(Key, {
    authType: "secret",
    host: "https://dev.api.getsafepay.com",
  });

  try {
    const data = await safepay.client.passport.create();

    return data;
  } catch (error) {
    console.log(error);
  }
}
