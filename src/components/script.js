import { GoogleSpreadsheet } from "google-spreadsheet";

function calculateBloodSugar(formValues) {
    let high = false;
    let low = false;
    if (formValues["before"] === false) {
        if (formValues["bloodSugar"] > 180) {
            high = true;
        }
        if (formValues["bloodSugar"] < 80) {
            low = true;
        }
    } else {
        if (formValues["bloodSugar"] > 130) {
            high = true;
        }
        if (formValues["bloodSugar"] < 80) {
            low = true;
        }
    }
    return [high, low]
}

const appendSpreadsheet = async (row) => {
    const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
    const SHEET_ID = process.env.REACT_APP_SHEET_ID;
    const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
    const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
  try {
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });
    // loads document properties and worksheets
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID];
    const result = await sheet.addRow(row);
  } catch (e) {
    console.error('Error: ', e);
  }
};

export {calculateBloodSugar, appendSpreadsheet};