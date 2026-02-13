// ensure all keys are present and structures match
import fs from "fs";
const en = JSON.parse(fs.readFileSync("src/data/typography/en.json"));
const fr = JSON.parse(fs.readFileSync("src/data/typography/fr.json"));

function isObject(v) {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}

function getKeys(obj, prefix = "") {
  return Object.entries(obj).flatMap(([k, v]) => {
    const key = prefix ? `${prefix}.${k}` : k;
    return isObject(v) ? getKeys(v, key) : key;
  });
}

function getStructureMismatches(a, b, aName, bName, prefix = "") {
  const errors = [];
  for (const [k, v] of Object.entries(a)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (!(k in b)) continue;
    if (isObject(v) && !isObject(b[k])) {
      errors.push(`"${key}" is an object in ${aName} but a leaf in ${bName}`);
    } else if (!isObject(v) && isObject(b[k])) {
      errors.push(`"${key}" is a leaf in ${aName} but an object in ${bName}`);
    } else if (isObject(v) && isObject(b[k])) {
      errors.push(...getStructureMismatches(v, b[k], aName, bName, key));
    }
  }
  return errors;
}

const enKeys = getKeys(en);
const frKeys = getKeys(fr);
const missingInFr = enKeys.filter((k) => !frKeys.includes(k));
const extraInFr = frKeys.filter((k) => !enKeys.includes(k));
const structureErrors = getStructureMismatches(en, fr, "en.json", "fr.json");

if (missingInFr.length || extraInFr.length || structureErrors.length) {
  console.error("❌ i18n key mismatch detected\n");

  if (structureErrors.length)
    console.error("Structure mismatches:", structureErrors);

  if (missingInFr.length) console.error("Missing in fr.json:", missingInFr);

  if (extraInFr.length) console.error("Extra in fr.json:", extraInFr);

  process.exit(1);
}

console.log("✅ i18n files are in sync");
