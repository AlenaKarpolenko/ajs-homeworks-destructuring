export default function props (objectSort, arraySort = []) {
	let arrAllKey = [];
	for (const key in objectSort) {
	  if (arraySort.indexOf(key) === -1) {
		arrAllKey.push(key);
	  }
	}
	arrAllKey = [...arraySort, ...arrAllKey.sort()];

	const result = [];
	for (const key of arrAllKey) {
	  result.push({ key, value: objectSort[key] });
	}
	return result;
  }