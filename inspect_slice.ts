import fs from 'fs';

function main() {
  const html = fs.readFileSync('framer_ezc_onboarding.html', 'utf8');
  const term = "showing video on each onboarding points";
  const index = html.indexOf(term);
  if (index === -1) {
    console.log("Term not found");
    return;
  }
  const slice = html.substring(index - 500, index + 4000);
  console.log("--- RAW HTML SLICE ---");
  console.log(slice);
}

main();
